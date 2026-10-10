"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Star from "./stars/Star";
import { EASE } from "@/lib/motion";
import { TELEGRAM_HANDLE, TELEGRAM_URL } from "@/lib/contacts";

const LINKS = [
  { index: "01", label: "work", href: "#work" },
  { index: "02", label: "about", href: "#about" },
  { index: "03", label: "contact", href: "#contact" },
];

const mono = "font-mono text-xs uppercase tracking-[0.1em] text-ink-soft";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* sticky bar; the full-screen menu sits outside it, because backdrop-filter would turn the bar into the menu's containing block */}
      <header className="sticky top-0 z-30 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-frame items-center justify-between px-8 py-5 md:px-16 md:py-6">
          <a href="#top" className="group flex items-center gap-2">
            <span className="text-[1.05rem] font-medium tracking-tight">
              avgrosheva
            </span>
            <Star className="h-3 w-3 text-ink transition-all duration-300 group-hover:rotate-12 group-hover:text-lime" />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                <span className="text-ink-soft/60">[{link.index}]</span>
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          {/* phone: one quiet trigger, the links open as a full-screen index */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${mono} md:hidden`}
          >
            menu
          </button>
        </div>
      </header>

      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="меню"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 flex flex-col bg-bg px-8 pb-10 pt-8 md:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2">
                  <span className="text-[1.05rem] font-medium tracking-tight">avgrosheva</span>
                  <Star className="h-3 w-3 text-lime" />
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`${mono} flex items-center gap-2`}
                >
                  закрыть <span>✕</span>
                </button>
              </div>

              <nav className="mt-auto">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: EASE }}
                    className="flex items-baseline gap-4 border-t border-line py-4 last:border-b"
                  >
                    <span className="font-mono text-xs tracking-[0.12em] text-ink-soft">
                      [{link.index}]
                    </span>
                    <span className="text-[clamp(2.5rem,13vw,4rem)] font-medium leading-none tracking-[-0.035em]">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mt-10 flex items-baseline justify-between"
              >
                <span className={mono}>telegram</span>
                <span className="text-lg">{TELEGRAM_HANDLE} ↗</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}
