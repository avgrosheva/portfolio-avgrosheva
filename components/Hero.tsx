"use client";

import { motion } from "motion/react";
import Star from "./stars/Star";
import { EASE, fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-frame px-8 pb-32 pt-6 md:px-16 md:pb-48"
    >
      <span className="absolute right-8 top-6 font-mono text-xs tracking-[0.1em] text-ink-soft md:right-16">
        ( 2026 )
      </span>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-8 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft"
      >
        [ 01 ]
      </motion.p>

      <h1 className="tracking-[-0.02em]">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.08}
          className="block text-[clamp(1.75rem,3.4vw,2.75rem)] font-normal leading-[1.05] text-ink-soft"
        >
          разрабатываю
        </motion.span>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.18}
          className="block whitespace-nowrap text-[clamp(2.5rem,6.6vw,7rem)] font-medium leading-[0.96] text-ink"
        >
          цифровые продукты
        </motion.span>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.28}
          className="ml-[8%] flex items-center gap-3 text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.98] text-ink md:ml-[12%] md:gap-4"
        >
          для бизнеса
          <motion.span
            initial={{ opacity: 0, rotate: -16, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="inline-block"
          >
            <Star className="h-6 w-6 text-ink md:h-8 md:w-8" />
          </motion.span>
        </motion.span>
      </h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.42}
        className="mt-10 max-w-md text-[0.95rem] text-ink-soft"
      >
        web apps · telegram bots · ai tools · crm · internal systems
      </motion.p>

      <motion.a
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.52}
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-base transition-colors duration-200 hover:border-lime"
      >
        <span>telegram</span>
        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </motion.a>
    </section>
  );
}
