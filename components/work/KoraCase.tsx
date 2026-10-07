"use client";

import { MotionConfig, motion } from "motion/react";
import {
  KORA_CASE,
  PROJECTS,
  getAdjacentProjects,
  type CaseMedia,
} from "@/data/projects";
import Star from "../stars/Star";
import ProjectVisual from "./ProjectVisual";
import { EASE } from "@/lib/motion";
import { CaseNav, CaseVideo, useCaseOverlay, type CaseNavigate } from "./caseParts";

const { media } = KORA_CASE;

// same placeholder as the hero's telegram link — swap both once the handle is final
const CONTACT_URL = "https://t.me/nastya_grosheva";

const label = "text-sm text-ink-soft";
const index = "font-mono text-xs tracking-[0.12em] text-ink-soft";
const statement =
  "text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.12] tracking-[-0.015em]";
const sectionTitle =
  "text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1] tracking-[-0.025em]";
const gap = "mt-32 md:mt-48";

function Reveal({
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

function Caption({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <figcaption className="mt-4 flex items-baseline gap-3">
      <span className={index}>{n}</span>
      <span className="text-sm text-ink-soft">{children}</span>
    </figcaption>
  );
}

/**
 * Real screenshot with a quiet scroll reveal: the frame fades up, the image
 * settles from a slight zoom. `crop` is the share of the source width kept
 * (anchored top-left) — Kora screens leave an empty dark strip on the right.
 */
function Figure({
  item,
  n,
  aspect,
  crop = 1,
  className,
  delay = 0,
}: {
  item: CaseMedia;
  n: string;
  aspect: string;
  crop?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={delay}>
      <figure>
        <div className={`${aspect} overflow-hidden bg-ink`}>
          <motion.img
            src={item.src}
            alt={item.caption}
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
            style={{ width: `${100 / crop}%`, transformOrigin: "0 0" }}
            className="h-auto max-w-none"
          />
        </div>
        <Caption n={n}>{item.caption}</Caption>
      </figure>
    </Reveal>
  );
}

export default function KoraCase({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate: CaseNavigate;
}) {
  const { prev, next } = getAdjacentProjects("kora");
  const kora = PROJECTS[0];

  useCaseOverlay(onClose);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-bg"
      >
        <div className="mx-auto max-w-frame px-8 pb-24 pt-8 md:px-16">
          <div className="mb-20 flex items-start justify-between">
            <span className={`${index} uppercase`}>
              01 <span className="text-ink-soft/50">/ 04</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              закрыть
              <span className="transition-transform duration-200 group-hover:rotate-90">
                ✕
              </span>
            </button>
          </div>

          {/* 1 — title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mb-14 grid grid-cols-12 items-end gap-x-6 gap-y-6"
          >
            <h2 className="col-span-12 text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.85] tracking-[-0.04em] md:col-span-6">
              kora
            </h2>
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:pb-3">
              <p className={`${label} mb-3`}>{KORA_CASE.subtitle}</p>
              <p className="text-lg leading-snug text-ink md:text-xl">
                {KORA_CASE.intro}
              </p>
            </div>
          </motion.div>

          {/* 2 — primary, shared element from the grid card */}
          <figure>
            <motion.div
              layoutId="visual-kora"
              className="aspect-[1280/644] w-full overflow-hidden bg-ink"
            >
              <ProjectVisual src={kora.primaryImage} label={media.primary.caption} />
            </motion.div>
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-4">
                <Caption n="01">{media.primary.caption}</Caption>
              </div>
              <Reveal className="col-span-12 mt-8 md:col-span-5 md:col-start-8 md:mt-4">
                <p className="leading-relaxed text-ink-soft">{KORA_CASE.about}</p>
              </Reveal>
            </div>
          </figure>

          {/* 3 — problem / solution / principle */}
          <div className={`${gap} grid grid-cols-12 gap-x-6`}>
            <Reveal className="col-span-12 md:col-span-6">
              <p className={`${label} mb-5`}>проблема</p>
              <p className={`${statement} text-ink-soft`}>{KORA_CASE.problem}</p>
            </Reveal>
            <Reveal className="col-span-12 mt-16 md:col-span-6 md:col-start-7 md:mt-40">
              <p className={`${label} mb-5`}>решение</p>
              <p className={`${statement} text-ink`}>{KORA_CASE.solution}</p>
            </Reveal>
            <Reveal className="col-span-12 mt-24 md:col-span-10 md:mt-40">
              <p className="text-[clamp(2rem,4.2vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
                <motion.span
                  initial={{ rotate: -24, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                  className="mr-4 inline-block align-[0.05em]"
                >
                  <Star className="h-[0.6em] w-[0.6em] text-lime" />
                </motion.span>
                {KORA_CASE.principle}
              </p>
            </Reveal>
          </div>

          {/* 4 — how it works */}
          <section className={gap}>
            <Reveal>
              <p className={`${label} mb-6`}>как это работает</p>
            </Reveal>
            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(1.75rem,4.4vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              {KORA_CASE.flow.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                  className="flex items-baseline gap-x-4"
                >
                  {word}
                  {i < KORA_CASE.flow.length - 1 && (
                    <span className="font-normal text-ink-soft/35">→</span>
                  )}
                </motion.span>
              ))}
            </p>
          </section>

          {/* 5 — asymmetric pair */}
          <div className={`${gap} grid grid-cols-12 gap-x-6 gap-y-16`}>
            <Figure
              item={media.finance}
              n="02"
              aspect="aspect-[1020/450]"
              crop={1020 / 1280}
              className="col-span-12 md:col-span-7"
            />
            <Figure
              item={media.missing}
              n="03"
              aspect="aspect-[1020/640]"
              crop={1020 / 1280}
              delay={0.08}
              className="col-span-12 md:col-span-5 md:mt-40"
            />
          </div>

          {/* 6 — trust */}
          <section className={gap}>
            <Reveal className="grid grid-cols-12 gap-x-6">
              <h3 className={`${sectionTitle} col-span-12 md:col-span-7`}>
                почему результату можно доверять
              </h3>
            </Reveal>
            <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-24">
              {KORA_CASE.trust.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.06}
                  className={
                    [
                      "col-span-12 md:col-span-5",
                      "col-span-12 md:col-span-4 md:col-start-8 md:mt-32",
                      "col-span-12 md:col-span-5 md:col-start-3 md:mt-8",
                    ][i]
                  }
                >
                  <p className={`${index} mb-4`}>{String(i + 1).padStart(2, "0")}</p>
                  <p
                    className={`mb-4 font-medium leading-[1.1] tracking-[-0.015em] ${
                      i === 0
                        ? "text-[clamp(1.75rem,3vw,2.5rem)]"
                        : "text-[clamp(1.375rem,2vw,1.75rem)]"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="max-w-md leading-relaxed text-ink-soft">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 7 — demo video */}
          <Reveal className={`${gap} grid grid-cols-12 gap-x-6`}>
            <figure className="col-span-12 md:col-span-11 md:col-start-2">
              <div className="aspect-[1920/860] overflow-hidden bg-ink">
                <CaseVideo
                  src={media.demo.src}
                  label={media.demo.caption}
                  className="h-full w-full object-cover"
                />
              </div>
              <Caption n="04">{media.demo.caption}</Caption>
            </figure>
          </Reveal>

          {/* 8 — capabilities */}
          <section className={`${gap} grid grid-cols-12 gap-x-6 gap-y-8`}>
            <Reveal className="col-span-12 md:col-span-4">
              <h3 className={sectionTitle}>что умеет Kora</h3>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-6 md:col-start-7 md:pt-2" delay={0.06}>
              <ul className="flex flex-col gap-2.5 text-lg leading-snug text-ink">
                {KORA_CASE.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* 9 — workspace context */}
          <div className="mt-24 grid grid-cols-12 gap-x-6 md:mt-32">
            <Figure
              item={media.workspace}
              n="05"
              aspect="aspect-[1020/395]"
              crop={1020 / 1280}
              className="col-span-12 md:col-span-6"
            />
          </div>

          {/* 10 — business adaptation */}
          <section className={`${gap} border-t border-line pt-16 md:pt-20`}>
            <Reveal className="grid grid-cols-12 gap-x-6">
              <h3 className="col-span-12 text-[clamp(2.25rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em] md:col-span-10">
                как это можно использовать в&nbsp;бизнесе
              </h3>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-6 md:mt-20">
              <Reveal className="col-span-12 md:col-span-8 md:col-start-5" delay={0.06}>
                <ul className="gap-x-10 text-[clamp(1.25rem,1.9vw,1.625rem)] leading-snug text-ink md:columns-2">
                  {KORA_CASE.useCases.map((u) => (
                    <li key={u} className="mb-3 break-inside-avoid">
                      {u}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="col-span-12 mt-10 md:col-span-6 md:col-start-5 md:mt-16" delay={0.1}>
                <p className="text-lg leading-snug text-ink-soft">{KORA_CASE.closing}</p>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-base transition-colors duration-200 hover:border-lime"
                >
                  <span>обсудить задачу</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </Reveal>
            </div>
          </section>

          {/* 11 — tech, deliberately quiet */}
          <div className="mt-24 flex flex-col gap-2 md:mt-32 md:flex-row md:items-baseline md:gap-8">
            <p className="font-mono text-[0.7rem] text-ink-soft/70">
              {KORA_CASE.tech.join(" · ")}
            </p>
            <p className="text-xs text-ink-soft">{KORA_CASE.quality}</p>
          </div>

          {/* 12 — prev / next */}
          <CaseNav prev={prev} next={next} onNavigate={onNavigate} />
        </div>
      </motion.div>
    </MotionConfig>
  );
}
