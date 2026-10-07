"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { GITHUB_URL } from "@/lib/contacts";
import SectionHead from "./SectionHead";

const STEPS = ["логика", "интерфейс", "код", "работающий результат"];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-frame border-t border-line px-8 pb-32 pt-16 md:px-16 md:pb-48"
    >
      <SectionHead n="03" title="about" />

      <div className="grid grid-cols-12 gap-x-6 gap-y-14">
        {/* the statement, set in two staggered lines like the hero */}
        <motion.p
          {...reveal()}
          className="col-span-12 text-[clamp(2.25rem,5.4vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-ink"
        >
          делаю цифровые продукты
          <br />
          <span className="md:ml-[12%]">под реальные задачи</span>
        </motion.p>

        <motion.p
          {...reveal(0.08)}
          className="col-span-12 text-lg leading-snug text-ink-soft md:col-span-5 md:col-start-2 md:text-xl"
        >
          думаю про логику, собираю интерфейс, пишу код и довожу до работающего результата.
        </motion.p>

        {/* the same sentence as a sequence: one person through every step */}
        <ol className="col-span-12 md:col-span-5 md:col-start-8">
          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              {...reveal(0.12 + i * 0.06)}
              className={`flex items-baseline gap-5 border-t py-4 text-[clamp(1.25rem,1.9vw,1.625rem)] leading-snug ${
                i === STEPS.length - 1 ? "border-b border-ink text-ink" : "border-line text-ink-soft"
              }`}
            >
              <span className="w-6 shrink-0 font-mono text-xs tracking-[0.12em] text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step}
            </motion.li>
          ))}
        </ol>

        <motion.div {...reveal(0.2)} className="col-span-12 md:col-span-5 md:col-start-8">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-base transition-colors duration-200 hover:border-lime"
          >
            <span>все проекты на github</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
