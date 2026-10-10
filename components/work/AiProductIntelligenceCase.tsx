"use client";

import Image from "next/image";
import { MotionConfig, motion } from "motion/react";
import {
  AI_PRODUCT_INTELLIGENCE_CASE as A,
  getAdjacentProjects,
  type CaseCrop,
  type CaseMedia,
} from "@/data/projects";
import Star from "../stars/Star";
import { EASE } from "@/lib/motion";
import {
  Caption,
  CaseNav,
  CaseVideo,
  ContactLink,
  Reveal,
  gap,
  index,
  label,
  sectionTitle,
  statement,
  useCaseOverlay,
  type CaseNavigate,
  MotionImage
} from "./caseParts";

const { media } = A;

const pct = (n: number) => `${n * 100}%`;

/** Dark screenshot cropped to its content column — the empty side margins and top bar are trimmed. */
function Cropped({
  item,
  n,
  className,
  delay = 0,
}: {
  item: CaseMedia & { crop: CaseCrop };
  n: string;
  className?: string;
  delay?: number;
}) {
  const c = item.crop;
  return (
    <Reveal className={className} delay={delay}>
      <figure>
        <div
          className="relative overflow-hidden bg-ink"
          style={{ aspectRatio: `${c.w} / ${c.h}` }}
        >
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
            style={{
              transformOrigin: "0 0",
              width: pct(c.width / c.w),
              height: pct(c.height / c.h),
              left: pct(-c.x / c.w),
              top: pct(-c.y / c.h),
            }}
            className="absolute max-w-none"
          />
        </div>
        <Caption n={n}>{item.caption}</Caption>
      </figure>
    </Reveal>
  );
}

export default function AiProductIntelligenceCase({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate: CaseNavigate;
}) {
  const { prev, next } = getAdjacentProjects("ai-product-intelligence");
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
        <div className="mx-auto max-w-frame px-8 pb-24 pt-4 md:px-16">
          <div className="sticky top-0 z-30 -mx-8 mb-20 flex items-start justify-between bg-bg/85 px-8 py-4 backdrop-blur-md md:-mx-16 md:px-16">
            <span className={`${index} uppercase`}>
              04 <span className="text-ink-soft/50">/ 04</span>
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

          {/* 1 — subtitle above, title in two lines, intro set into the right half */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mb-16 grid grid-cols-12 gap-x-6 gap-y-8"
          >
            <p className={`${label} col-span-12`}>{A.subtitle}</p>
            <h2 className="col-span-12 text-[clamp(3rem,8.4vw,8rem)] font-medium leading-[0.88] tracking-[-0.04em]">
              ai product
              <br />
              intelligence
            </h2>
            <p className="col-span-12 text-lg leading-snug text-ink md:col-span-5 md:col-start-8 md:-mt-28 md:text-xl">
              {A.intro}
            </p>
          </motion.div>

          {/* 2 — overview, shared element from the grid card */}
          <figure>
            <motion.div
              layoutId="visual-ai-product-intelligence"
              className="aspect-[4/3] w-full overflow-hidden bg-ink"
            >
              <Image
                src={media.overview.src}
                alt={media.overview.caption}
                width={1448}
                height={1086}
                sizes="100vw"
                quality={85}
                loading="eager"
                className="h-full w-full object-cover object-left-top"
              />
            </motion.div>
            <Caption n="01">{media.overview.caption}</Caption>
          </figure>

          {/* 3 — problem on the left, solution answering it lower on the right */}
          <div className={`${gap} grid grid-cols-12 gap-x-6 gap-y-16`}>
            <Reveal className="col-span-12 md:col-span-6">
              <p className={`${label} mb-5`}>проблема</p>
              <p className={`${statement} text-ink-soft`}>{A.problem[0]}</p>
              <p className="mt-8 max-w-lg text-lg leading-snug text-ink-soft">{A.problem[1]}</p>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-5 md:col-start-8 md:mt-56" delay={0.06}>
              <p className={`${label} mb-5`}>решение</p>
              <p className={`${statement} text-ink`}>{A.solution}</p>
            </Reveal>
          </div>

          {/* 4 — key message: the three possible outcomes set as type */}
          <section className={gap}>
            <Reveal>
              <p className="flex items-baseline gap-4 text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.12] tracking-[-0.015em] text-ink">
                <motion.span
                  initial={{ rotate: -24, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                  className="inline-block shrink-0"
                >
                  <Star className="h-[0.7em] w-[0.7em] text-lime" />
                </motion.span>
                {A.keyLead}
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 border-t border-ink md:grid-cols-[1fr_1fr_1.7fr]">
              {A.decisions.map((word, i) => (
                <motion.p
                  key={word}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: EASE }}
                  className={`border-line pt-4 text-[clamp(3rem,7.2vw,6.75rem)] font-medium leading-[0.9] tracking-[-0.04em] text-ink ${
                    i > 0 ? "border-t md:border-l md:border-t-0 md:pl-6" : ""
                  }`}
                >
                  {word}
                </motion.p>
              ))}
            </div>
          </section>

          {/* 5 — flow as an axis: each step is a measured column, the decision closes it */}
          <section className={gap}>
            <Reveal>
              <p className={`${label} mb-8`}>как это работает</p>
            </Reveal>
            <ol className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-6">
              {A.flow.map((step, i) => {
                const last = i === A.flow.length - 1;
                return (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    className={`border-t pr-4 pt-4 ${last ? "border-ink" : "border-line"}`}
                  >
                    <span className={`${index} flex items-center gap-2`}>
                      {String(i + 1).padStart(2, "0")}
                      {!last && <span className="text-ink-soft/40">→</span>}
                    </span>
                    <span
                      className={`mt-6 block text-[clamp(1.25rem,1.9vw,1.75rem)] font-medium leading-[1.1] tracking-[-0.02em] ${
                        last ? "text-ink" : "text-ink-soft"
                      }`}
                    >
                      {step}
                    </span>
                  </motion.li>
                );
              })}
            </ol>
          </section>

          {/* 6 — the release decision, large and offset right */}
          <div className={`${gap} grid grid-cols-12 gap-x-6`}>
            <Cropped
              item={media.decision}
              n="02"
              className="col-span-12 md:col-span-10 md:col-start-3"
            />
          </div>

          {/* 7 — investigation and session: from segment to the real conversation */}
          <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-32">
            <Cropped
              item={media.investigation}
              n="03"
              className="col-span-12 md:col-span-6 md:col-start-1"
            />
            <Cropped
              item={media.session}
              n="04"
              delay={0.08}
              className="col-span-12 md:col-span-5 md:col-start-8 md:mt-40"
            />
          </div>

          {/* 8 — principles, label held at the side while the rows scroll */}
          <section className={`${gap} grid grid-cols-12 gap-x-6 gap-y-8`}>
            <div className="col-span-12 md:col-span-3">
              <Reveal className="md:sticky md:top-12">
                <p className={label}>принципы</p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              {A.principles.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.04}
                  className="border-t border-line py-10 last:border-b md:py-14"
                >
                  <div className="flex items-baseline gap-5">
                    <span className={`${index} shrink-0`}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={sectionTitle}>{item.title}</h3>
                  </div>
                  <p className="mt-5 max-w-lg pl-10 text-lg leading-snug text-ink-soft">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 9 — demo, full frame width at its own proportions */}
          <Reveal className={gap}>
            <figure>
              <div className="aspect-[1280/560] max-md:aspect-[16/10] overflow-hidden bg-ink">
                {/* slightly wider than the frame, left-anchored: trims the recorded scrollbar on the right edge */}
                <CaseVideo
                  src={media.demo.src}
                  label={media.demo.caption}
                  className="h-full w-[101%] max-w-none object-cover object-left-top"
                />
              </div>
              <Caption n="05">{media.demo.caption}</Caption>
            </figure>
          </Reveal>

          {/* 10 — capabilities as a two-column ruled register */}
          <section className={`${gap} grid grid-cols-12 gap-x-6 gap-y-10`}>
            <Reveal className="col-span-12 md:col-span-4">
              <h3 className={sectionTitle}>что умеет AI&nbsp;Product Intelligence</h3>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-8" delay={0.05}>
              <ul className="grid gap-x-10 text-lg leading-snug text-ink md:grid-cols-2">
                {A.capabilities.map((c, i) => (
                  <li key={c} className="flex items-baseline gap-4 border-t border-line py-3.5">
                    <span className={`${index} w-6 shrink-0`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* 10–12 — business section, commercial line + CTA */}
          <section className={`${gap} border-t border-line pt-16 md:pt-20`}>
            <Reveal className="grid grid-cols-12 gap-x-6">
              <h3 className="col-span-12 text-[clamp(2.25rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em] md:col-span-11">
                {A.businessHeading}
              </h3>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20">
              <Reveal className="col-span-12 md:col-span-5">
                <p className="text-lg leading-snug text-ink-soft">{A.businessText}</p>
              </Reveal>
              <Reveal className="col-span-12 md:col-span-6 md:col-start-7" delay={0.06}>
                <ul className="flex flex-col gap-2 text-[clamp(1.25rem,1.9vw,1.625rem)] leading-snug text-ink">
                  {A.useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="col-span-12 md:col-span-6 md:col-start-7 md:mt-8" delay={0.1}>
                <p className="text-lg leading-snug text-ink-soft">{A.closing}</p>
                <div className="mt-6">
                  <ContactLink />
                </div>
              </Reveal>
            </div>
          </section>

          {/* 13 — tech, deliberately quiet */}
          <div className="mt-24 md:mt-32">
            <p className="font-mono text-[0.7rem] text-ink-soft/70">{A.tech.join(" · ")}</p>
          </div>

          {/* 14 — prev / next */}
          <CaseNav prev={prev} next={next} onNavigate={onNavigate} />
        </div>
      </motion.div>
    </MotionConfig>
  );
}
