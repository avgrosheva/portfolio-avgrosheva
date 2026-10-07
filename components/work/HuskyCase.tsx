"use client";

import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { HUSKY_CASE as H, getAdjacentProjects, type CaseMedia } from "@/data/projects";
import Star from "../stars/Star";
import { EASE } from "@/lib/motion";
import {
  Caption,
  CaseNav,
  ContactLink,
  Reveal,
  gap,
  index,
  label,
  sectionTitle,
  statement,
  useCaseOverlay,
  type CaseNavigate,
} from "./caseParts";

const { media } = H;

// The screenshots are full phone captures with black outside the rounded screen corners;
// clipping with a matching radius turns them into phone-shaped objects on the page.
const PHONE = "aspect-[1170/2532] overflow-hidden border border-line bg-bg-raised";
const PHONE_RADIUS = "14% / 6.5%";
const VIDEO_RADIUS = "15% / 6.8%";

/** Portrait phone screenshot with the shared scroll reveal. */
function Phone({
  item,
  n,
  className,
  delay = 0,
}: {
  item: CaseMedia;
  n: string;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={delay}>
      <figure>
        <div className={PHONE} style={{ borderRadius: PHONE_RADIUS }}>
          <motion.img
            src={item.src}
            alt={item.caption}
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
            className="h-full w-full object-cover"
          />
        </div>
        <Caption n={n}>{item.caption}</Caption>
      </figure>
    </Reveal>
  );
}

export default function HuskyCase({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate: CaseNavigate;
}) {
  const { prev, next } = getAdjacentProjects("husky");
  const reduceMotion = useReducedMotion();
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
          <div className="mb-16 flex items-start justify-between">
            <span className={`${index} uppercase`}>
              03 <span className="text-ink-soft/50">/ 04</span>
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

          {/* 1–3 — title and problem on the left, the main screen standing tall on the right */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
              className="col-span-12 md:col-span-8"
            >
              <h2 className="text-[clamp(3.25rem,7.4vw,7.25rem)] font-medium leading-[0.88] tracking-[-0.04em]">
                husky
                <br />
                <span className="md:whitespace-nowrap md:pl-[0.9em]">rider academy</span>
              </h2>
              <p className={`${label} mt-10`}>{H.subtitle}</p>
              <p className="mt-6 max-w-xl text-lg leading-snug text-ink md:text-xl">{H.intro}</p>
            </motion.div>

            <figure className="col-span-10 col-start-2 sm:col-span-6 sm:col-start-4 md:col-span-4 md:col-start-9 md:row-span-2">
              <motion.div
                layoutId="visual-husky"
                className={PHONE}
                style={{ borderRadius: PHONE_RADIUS }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={media.main.src}
                  alt={media.main.caption}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <Caption n="01">{media.main.caption}</Caption>
            </figure>

            <Reveal className="col-span-12 self-end md:col-span-6 md:row-start-2 md:pb-12">
              <p className={`${label} mb-5`}>проблема</p>
              <p className={`${statement} text-ink-soft`}>{H.problem}</p>
            </Reveal>
          </div>

          {/* 4 — solution, then the key message as the loudest line */}
          <div className={gap}>
            <Reveal className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-7 md:col-start-5">
                <p className={`${label} mb-5`}>решение</p>
                <p className={`${statement} text-ink`}>{H.solution}</p>
              </div>
            </Reveal>
            <Reveal className="mt-24 md:mt-40">
              <p className="max-w-[16em] text-[clamp(2.25rem,5.6vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.035em] text-ink">
                {H.keyMessage}
              </p>
            </Reveal>
          </div>

          {/* 5 — flow as a rising staircase toward progress */}
          <section className={gap}>
            <Reveal>
              <p className={`${label} mb-8`}>как это работает</p>
            </Reveal>
            <ol className="flex flex-col gap-1 text-[clamp(2rem,4.6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              {H.flow.map((word, i) => {
                const last = i === H.flow.length - 1;
                return (
                  <motion.li
                    key={word}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                    style={{ "--step": i } as React.CSSProperties}
                    className={`flex items-baseline gap-4 pl-[calc(var(--step)*6%)] md:pl-[calc(var(--step)*11%)] ${
                      last ? "text-ink" : "text-ink/80"
                    }`}
                  >
                    <span className={`${index} w-6 shrink-0`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {word}
                    {last ? (
                      <motion.span
                        initial={{ rotate: -24, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
                        className="inline-block self-center"
                      >
                        <Star className="h-[0.6em] w-[0.6em] text-lime" />
                      </motion.span>
                    ) : (
                      <span className="font-normal text-ink-soft/35">↘</span>
                    )}
                  </motion.li>
                );
              })}
            </ol>
          </section>

          {/* 6 — two phones, uneven sizes and heights, with air around them */}
          <div className={`${gap} grid grid-cols-12 gap-x-6 gap-y-16`}>
            <Phone
              item={media.sections}
              n="02"
              className="col-span-10 col-start-1 sm:col-span-6 md:col-span-4 md:col-start-2"
            />
            <Phone
              item={media.section}
              n="03"
              delay={0.08}
              className="col-span-8 col-start-5 sm:col-span-5 sm:col-start-8 md:col-span-3 md:col-start-8 md:mt-72"
            />
          </div>

          {/* 7–8 — principles beside the demo, which stays in view while they scroll */}
          <section className={`${gap} grid grid-cols-12 gap-x-6 gap-y-20`}>
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className={`${label} mb-4`}>принципы</p>
              </Reveal>
              {H.principles.map((item, i) => (
                <Reveal key={item.title} className="border-t border-line py-12 md:py-20">
                  <span className={index}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={`${sectionTitle} mt-5`}>{item.title}</h3>
                  <p className="mt-6 max-w-md text-lg leading-snug text-ink-soft">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <div className="col-span-10 col-start-2 sm:col-span-6 sm:col-start-4 md:col-span-4 md:col-start-9">
              <Reveal className="md:sticky md:top-12">
                <figure>
                  <div
                    className="aspect-[576/1280] overflow-hidden border border-line bg-bg-raised md:mx-auto md:w-[min(100%,35.1vh)]"
                    style={{ borderRadius: VIDEO_RADIUS }}
                  >
                    <video
                      src={media.demo.src}
                      muted
                      loop
                      playsInline
                      autoPlay={!reduceMotion}
                      controls={!!reduceMotion}
                      preload="metadata"
                      aria-label={media.demo.caption}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Caption n="04">{media.demo.caption}</Caption>
                </figure>
              </Reveal>
            </div>
          </section>

          {/* 9 — capabilities as one running line */}
          <section className={gap}>
            <Reveal>
              <p className={`${label} mb-8`}>что умеет Husky</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.15] tracking-[-0.025em] text-ink">
                {H.capabilities.map((c, i) => (
                  <span key={c}>
                    <span className="whitespace-nowrap">{c}</span>
                    {i < H.capabilities.length - 1 && (
                      <span className="px-[0.35em] font-normal text-ink-soft/35">/</span>
                    )}{" "}
                  </span>
                ))}
              </p>
            </Reveal>
          </section>

          {/* 10–11 — business: ruled use-case list, the commercial line held at the side */}
          <section className={`${gap} border-t border-line pt-16 md:pt-20`}>
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <Reveal className="col-span-12 md:col-span-9">
                <h3 className="text-[clamp(2.25rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
                  {H.businessHeading}
                </h3>
              </Reveal>
              <Reveal className="col-span-12 md:col-span-5 md:col-start-8" delay={0.06}>
                <p className="text-lg leading-snug text-ink-soft">{H.businessText}</p>
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-24">
              <Reveal className="col-span-12 md:col-span-6">
                <ul className="text-[clamp(1.25rem,1.9vw,1.625rem)] leading-snug text-ink">
                  {H.useCases.map((u, i) => (
                    <li
                      key={u}
                      className="flex items-baseline gap-5 border-t border-line py-3.5 last:border-b"
                    >
                      <span className={`${index} w-6 shrink-0`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {u}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal
                className="col-span-12 self-end md:col-span-4 md:col-start-9"
                delay={0.1}
              >
                <p className="text-lg leading-snug text-ink-soft">{H.closing}</p>
                <div className="mt-6">
                  <ContactLink />
                </div>
              </Reveal>
            </div>
          </section>

          {/* 12 — tech, deliberately quiet */}
          <div className="mt-24 md:mt-32">
            <p className="font-mono text-[0.7rem] text-ink-soft/70">{H.tech.join(" · ")}</p>
          </div>

          {/* 13 — prev / next */}
          <CaseNav prev={prev} next={next} onNavigate={onNavigate} />
        </div>
      </motion.div>
    </MotionConfig>
  );
}
