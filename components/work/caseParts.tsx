"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { CaseMedia, ProjectId, ProjectSummary } from "@/data/projects";
import { EASE } from "@/lib/motion";

/** next/image with the scroll-reveal motion props the cases use on their screenshots. */
export const MotionImage = motion.create(Image);

// Shared building blocks for project cases (same type scale and motion as the Kora case).

export const label = "text-sm text-ink-soft";
export const index = "font-mono text-xs tracking-[0.12em] text-ink-soft";
export const statement =
  "text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.12] tracking-[-0.015em]";
export const sectionTitle =
  "text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1] tracking-[-0.025em]";
export const gap = "mt-32 md:mt-48";

// telegram — the one contact channel used across the site
export const CONTACT_URL = "https://t.me/nastya_grosheva";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Caption({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <figcaption className="mt-4 flex items-baseline gap-3">
      <span className={index}>{n}</span>
      <span className="text-sm text-ink-soft">{children}</span>
    </figcaption>
  );
}

/** Real screenshot with a quiet scroll reveal; `frame` styles the box behind it. */
export function Figure({
  item,
  n,
  aspect,
  frame = "border border-line bg-bg-raised",
  className,
  delay = 0,
}: {
  item: CaseMedia;
  n: string;
  aspect: string;
  frame?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={delay}>
      <figure>
        <div className={`${aspect} overflow-hidden ${frame}`}>
          <MotionImage
            src={item.src}
            alt={item.caption}
            width={1448}
            height={1086}
            sizes="(min-width: 768px) 60vw, 100vw"
            quality={85}
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
            style={{ transformOrigin: "0 0" }}
            className="h-full w-full object-cover object-left-top"
          />
        </div>
        <Caption n={n}>{item.caption}</Caption>
      </figure>
    </Reveal>
  );
}

// Counted, because moving between cases briefly mounts two overlays: the outgoing one
// unmounts after the incoming one has locked the page, and must not unlock it.
let scrollLocks = 0;

/**
 * Muted demo loop that downloads and plays only near the viewport and pauses once
 * scrolled away, so opening a case doesn't pull a video the visitor may never reach.
 * With reduced motion it never autoplays and shows controls instead.
 */
export function CaseVideo({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const [zoomed, setZoomed] = useState(false);

  // the inline loop rests while the full-screen player is open
  useEffect(() => {
    if (zoomed) ref.current?.pause();
  }, [zoomed]);

  return (
    <>
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        controls={!!reduceMotion}
        preload={reduceMotion ? "metadata" : "none"}
        aria-label={label}
        className={`${className ?? ""} ${reduceMotion ? "" : "cursor-zoom-in"}`}
        onClick={reduceMotion ? undefined : () => setZoomed(true)}
      />
      {zoomed && <VideoLightbox src={src} label={label} onClose={() => setZoomed(false)} />}
    </>
  );
}

/** Full-screen player; Escape closes only this, not the case underneath. */
function VideoLightbox({
  src,
  label,
  onClose,
}: {
  src: string;
  label: string;
  onClose: () => void;
}) {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopImmediatePropagation();
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 md:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 font-mono text-xs uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-70 md:right-10 md:top-8"
      >
        закрыть ×
      </button>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => e.stopPropagation()}
        onLoadedMetadata={(e) => setWide(e.currentTarget.videoWidth > e.currentTarget.videoHeight)}
        className="max-h-full max-w-full object-contain"
      />
      {wide && (
        <p className="pointer-events-none absolute inset-x-0 bottom-6 hidden text-center font-mono text-xs uppercase tracking-[0.1em] text-bg/70 portrait:max-md:block">
          поверните телефон, чтобы смотреть крупнее
        </p>
      )}
    </div>,
    document.body,
  );
}

export function useCaseOverlay(onClose: () => void) {
  useEffect(() => {
    if (scrollLocks++ === 0) document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      if (--scrollLocks === 0) document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);
}

export type CaseNavigate = (id: ProjectId) => void;

/** Bottom of every case: previous / next project, opened in place of the current one. */
export function CaseNav({
  prev,
  next,
  onNavigate,
}: {
  prev: ProjectSummary;
  next: ProjectSummary;
  onNavigate: CaseNavigate;
}) {
  const item =
    "group flex min-w-0 flex-col gap-3 text-left transition-colors duration-200";
  const title =
    "text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1] tracking-[-0.025em] text-ink-soft transition-colors duration-200 group-hover:text-ink";
  return (
    <nav
      aria-label="другие проекты"
      className="mt-10 flex items-start justify-between gap-6 border-t border-line pt-8"
    >
      <button type="button" onClick={() => onNavigate(prev.id)} className={item}>
        <span className={`${index} whitespace-nowrap uppercase`}>
          <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>{" "}
          назад
        </span>
        <span className={title}>{prev.title}</span>
      </button>
      <button
        type="button"
        onClick={() => onNavigate(next.id)}
        className={`${item} items-end text-right`}
      >
        <span className={`${index} whitespace-nowrap uppercase`}>
          дальше{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
        <span className={title}>{next.title}</span>
      </button>
    </nav>
  );
}

export function ContactLink() {
  return (
    <a
      href={CONTACT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-base transition-colors duration-200 hover:border-lime"
    >
      <span>обсудить задачу</span>
      <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}
