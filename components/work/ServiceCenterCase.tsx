"use client";

import { MotionConfig, motion } from "motion/react";
import { SERVICE_CENTER_CASE as SC, getAdjacentProjects } from "@/data/projects";
import Star from "../stars/Star";
import { EASE } from "@/lib/motion";
import {
  Caption,
  CaseNav,
  CaseVideo,
  ContactLink,
  Figure,
  Reveal,
  gap,
  index,
  label,
  sectionTitle,
  statement,
  useCaseOverlay,
  type CaseNavigate,
} from "./caseParts";

const { media } = SC;

export default function ServiceCenterCase({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate: CaseNavigate;
}) {
  const { prev, next } = getAdjacentProjects("service-center");
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
              02 <span className="text-ink-soft/50">/ 04</span>
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

          {/* 1 — title spans the frame; subtitle and intro sit underneath, split */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mb-16"
          >
            <h2 className="text-[clamp(3.5rem,9.5vw,9rem)] font-medium leading-[0.88] tracking-[-0.04em]">
              service center
            </h2>
            <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-4">
              <p className={`${label} col-span-12 md:col-span-4`}>{SC.subtitle}</p>
              <p className="col-span-12 text-lg leading-snug text-ink md:col-span-6 md:col-start-7 md:text-xl">
                {SC.intro}
              </p>
            </div>
          </motion.div>

          {/* 2 — primary, shared element from the grid card */}
          <figure>
            <motion.div
              layoutId="visual-service-center"
              className="aspect-[1242/670] w-full overflow-hidden border border-line bg-bg-raised"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.dashboard.src}
                alt={media.dashboard.caption}
                className="h-full w-full object-cover object-left-top"
              />
            </motion.div>
            <Caption n="01">{media.dashboard.caption}</Caption>
          </figure>

          {/* 3 — problem / solution as a ledger, then the key message */}
          <div className={gap}>
            <Reveal className="grid grid-cols-12 gap-x-6 gap-y-4">
              <p className={`${label} col-span-12 md:col-span-2 md:pt-2`}>проблема</p>
              <p className={`${statement} col-span-12 text-ink-soft md:col-span-8 md:col-start-4`}>
                {SC.problem}
              </p>
            </Reveal>
            <Reveal className="mt-20 grid grid-cols-12 gap-x-6 gap-y-4 md:mt-28">
              <p className={`${label} col-span-12 md:col-span-2 md:pt-2`}>решение</p>
              <p className={`${statement} col-span-12 text-ink md:col-span-8 md:col-start-4`}>
                {SC.solution}
              </p>
            </Reveal>
            <Reveal className="mt-24 grid grid-cols-12 gap-x-6 md:mt-40">
              <p className="col-span-12 text-[clamp(2rem,4.2vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink md:col-span-10 md:col-start-3">
                <motion.span
                  initial={{ rotate: -24, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                  className="mr-4 inline-block align-[0.05em]"
                >
                  <Star className="h-[0.6em] w-[0.6em] text-lime" />
                </motion.span>
                {SC.keyMessage}
              </p>
            </Reveal>
          </div>

          {/* 4 — flow */}
          <section className={gap}>
            <Reveal>
              <p className={`${label} mb-6`}>как это работает</p>
            </Reveal>
            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(1.5rem,3.6vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em]">
              {SC.flow.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                >
                  {/* arrow runs inline, so a wrapped two-word step keeps it after its last word */}
                  {word}
                  {i < SC.flow.length - 1 && (
                    <span className="ml-4 font-normal text-ink-soft/35">→</span>
                  )}
                </motion.span>
              ))}
            </p>
          </section>

          {/* 5 — asymmetric pair: the list is the large piece, the single job sits lower-left */}
          <div className={`${gap} grid grid-cols-12 gap-x-6 gap-y-16`}>
            <Figure
              item={media.jobs}
              n="02"
              aspect="aspect-[1259/738]"
              className="col-span-12 md:col-span-7 md:col-start-6 md:row-start-1"
            />
            <Figure
              item={media.job}
              n="03"
              aspect="aspect-[1202/815]"
              delay={0.08}
              className="col-span-12 md:col-span-5 md:col-start-1 md:row-start-1 md:mt-48"
            />
          </div>

          {/* 6 — principles as ruled rows */}
          <section className={gap}>
            <Reveal>
              <p className={`${label} mb-8`}>принципы</p>
            </Reveal>
            {SC.principles.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-line py-10 md:py-12"
              >
                <span className={`${index} col-span-12 md:col-span-1 md:pt-3`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={`${statement} col-span-12 text-ink md:col-span-5`}>{item.title}</p>
                <p className="col-span-12 max-w-md leading-relaxed text-ink-soft md:col-span-5 md:col-start-8 md:pt-2">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </section>

          {/* 7 — demo video, full frame width */}
          <Reveal className={gap}>
            <figure>
              <div className="aspect-[1280/560] overflow-hidden border border-line bg-bg-raised">
                {/* slightly wider than the frame, left-anchored: trims the recorded scrollbar on the right edge */}
                <CaseVideo
                  src={media.demo.src}
                  label={media.demo.caption}
                  className="h-full w-[101%] max-w-none object-cover object-left"
                />
              </div>
              <Caption n="04">{media.demo.caption}</Caption>
            </figure>
          </Reveal>

          {/* 8–9 — capabilities beside the schedule */}
          <section className={`${gap} grid grid-cols-12 gap-x-6 gap-y-16`}>
            <Reveal className="col-span-12 md:col-span-5">
              <h3 className={`${sectionTitle} mb-10`}>что умеет Service&nbsp;Center</h3>
              <ul className="flex flex-col gap-2.5 text-lg leading-snug text-ink">
                {SC.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
            <Figure
              item={media.schedule}
              n="05"
              aspect="aspect-[1213/802]"
              delay={0.08}
              className="col-span-12 md:col-span-6 md:col-start-7 md:mt-32"
            />
          </section>

          {/* 10–11 — business adaptation + commercial line */}
          <section className={`${gap} border-t border-line pt-16 md:pt-20`}>
            <Reveal className="grid grid-cols-12 gap-x-6">
              <h3 className="col-span-12 text-[clamp(2.25rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em] md:col-span-10">
                как это можно использовать в&nbsp;бизнесе
              </h3>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-20">
              <Reveal className="col-span-12 md:col-span-4">
                <p className="text-lg leading-snug text-ink-soft">{SC.adaptation}</p>
              </Reveal>
              <Reveal className="col-span-12 md:col-span-7 md:col-start-6" delay={0.06}>
                <ul className="gap-x-10 text-[clamp(1.25rem,1.9vw,1.625rem)] leading-snug text-ink md:columns-2">
                  {SC.useCases.map((u) => (
                    <li key={u} className="mb-3 break-inside-avoid">
                      {u}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="col-span-12 md:col-span-6 md:col-start-6 md:mt-6" delay={0.1}>
                <p className="text-lg leading-snug text-ink-soft">{SC.closing}</p>
                <div className="mt-6">
                  <ContactLink />
                </div>
              </Reveal>
            </div>
          </section>

          {/* 12 — tech, deliberately quiet */}
          <div className="mt-24 md:mt-32">
            <p className="font-mono text-[0.7rem] text-ink-soft/70">{SC.tech.join(" · ")}</p>
          </div>

          {/* 13 — prev / next */}
          <CaseNav prev={prev} next={next} onNavigate={onNavigate} />
        </div>
      </motion.div>
    </MotionConfig>
  );
}
