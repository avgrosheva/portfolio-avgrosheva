"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { GITHUB_URL, TELEGRAM_HANDLE, TELEGRAM_URL } from "@/lib/contacts";
import Star from "./stars/Star";
import SectionHead from "./SectionHead";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function Contact() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-frame border-t border-line px-8 pb-10 pt-16 md:px-16"
    >
      <SectionHead n="04" title="contact" />

      <motion.p
        {...reveal()}
        className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink-soft"
      >
        есть задача?
      </motion.p>

      {/* the handle is the call to action — the largest link on the page */}
      <motion.a
        {...reveal(0.08)}
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-2 inline-flex max-w-full items-center gap-[0.25em] text-[clamp(2.25rem,7.4vw,7rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink"
      >
        <span className="border-b-[0.06em] border-ink pb-[0.04em] transition-colors duration-300 group-hover:border-lime [overflow-wrap:anywhere]">
          обсудить в telegram
        </span>
        <span className="text-[0.6em] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </motion.a>

      <motion.div
        {...reveal(0.16)}
        className="mt-16 grid grid-cols-12 gap-x-6 gap-y-6 md:mt-24"
      >
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group col-span-12 flex items-baseline justify-between border-t border-line py-4 transition-colors duration-200 hover:text-ink sm:col-span-6 md:col-span-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
            telegram
          </span>
          <span className="text-lg">
            {TELEGRAM_HANDLE}{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group col-span-12 flex items-baseline justify-between border-t border-line py-4 sm:col-span-6 md:col-span-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
            github
          </span>
          <span className="text-lg">
            avgrosheva{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </a>
      </motion.div>

      <div className="mt-32 flex items-center justify-between font-mono text-xs uppercase tracking-[0.1em] text-ink-soft md:mt-40">
        <a href="#top" className="flex items-center gap-2 normal-case tracking-normal">
          <span className="font-display text-[1.05rem] font-medium text-ink">avgrosheva</span>
          <Star className="h-4 w-4 text-ink" />
        </a>
        <span>( 2026 )</span>
      </div>
    </footer>
  );
}
