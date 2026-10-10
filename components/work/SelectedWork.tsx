"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Star from "../stars/Star";
import { PROJECTS, type ProjectId } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import KoraCase from "./KoraCase";
import ServiceCenterCase from "./ServiceCenterCase";
import HaskyCase from "./HaskyCase";
import AiProductIntelligenceCase from "./AiProductIntelligenceCase";

const SITE_TITLE = "avgrosheva — digital product developer";
const caseFromPath = (path: string) =>
  PROJECTS.find((p) => path === `/work/${p.id}`)?.id ?? null;

export default function SelectedWork({ initialCase }: { initialCase?: ProjectId }) {
  const [openId, setOpenId] = useState<ProjectId | null>(initialCase ?? null);
  // "card": opened from the grid, the cover grows out of its card.
  // "nav": moved from another case or arrived by link; cases just fade, nothing flies in.
  const [via, setVia] = useState<"card" | "nav">(initialCase ? "nav" : "card");
  // Whether the open case sits on top of the main page in history, so closing can be "back".
  const pushed = useRef(false);

  // Each case has its own address, but the page never reloads: the URL follows the overlay.
  // Opening adds one history entry; moving between cases replaces it, so a single "back"
  // (or closing) always returns to the main page right where the visitor left it.
  const open = (id: ProjectId) => {
    setVia("card");
    setOpenId(id);
    window.history.pushState(null, "", `/work/${id}`);
    pushed.current = true;
  };
  const navigate = (id: ProjectId) => {
    setVia("nav");
    setOpenId(id);
    window.history.replaceState(null, "", `/work/${id}`);
  };
  const close = () => {
    setOpenId(null);
    if (pushed.current) {
      pushed.current = false;
      window.history.back();
    } else {
      // arrived straight on a case link: turn the address into the main page
      window.history.replaceState(null, "", "/");
    }
  };

  // browser back / forward
  useEffect(() => {
    const onPop = () => {
      const id = caseFromPath(window.location.pathname);
      if (!id) pushed.current = false;
      setVia("nav");
      setOpenId(id);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const project = PROJECTS.find((p) => p.id === openId);
    document.title = project ? `${project.title} — avgrosheva` : SITE_TITLE;
  }, [openId]);

  const [kora, serviceCenter, hasky, aiProductIntelligence] = PROJECTS;

  return (
    <section
      id="work"
      className="mx-auto max-w-frame border-t border-line px-8 pb-32 pt-16 md:px-16"
    >
      <div className="mb-16 flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
            [ 02 ]
          </span>
          <h2 className="flex items-center gap-2 text-2xl font-medium md:text-3xl">
            selected work
            <Star className="h-3 w-3 text-lime" />
          </h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          / 2026
        </span>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-24">
        <ProjectCard
          project={kora}
          isOpen={openId === kora.id}
          onOpen={() => open(kora.id)}
          className="col-span-12 lg:col-span-7"
        />
        <ProjectCard
          project={serviceCenter}
          isOpen={openId === serviceCenter.id}
          onOpen={() => open(serviceCenter.id)}
          className="col-span-12 lg:col-span-5 lg:translate-y-16"
        />
        <ProjectCard
          project={hasky}
          isOpen={openId === hasky.id}
          onOpen={() => open(hasky.id)}
          className="col-span-12 lg:col-span-4 lg:col-start-1 lg:mt-20"
        />
        <ProjectCard
          project={aiProductIntelligence}
          isOpen={openId === aiProductIntelligence.id}
          onOpen={() => open(aiProductIntelligence.id)}
          className="col-span-12 lg:col-span-7 lg:col-start-6 lg:mt-8"
        />
      </div>

      {/* solid ground under the cases, so switching between them never flashes the page */}
      <AnimatePresence>
        {openId && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg"
          />
        )}
      </AnimatePresence>

      <LayoutGroup id={via === "nav" ? "case-nav" : undefined}>
        <AnimatePresence>
          {openId === "kora" && <KoraCase key="kora" onClose={close} onNavigate={navigate} />}
          {openId === "service-center" && (
            <ServiceCenterCase key="service-center" onClose={close} onNavigate={navigate} />
          )}
          {openId === "hasky" && (
            <HaskyCase key="hasky" onClose={close} onNavigate={navigate} />
          )}
          {openId === "ai-product-intelligence" && (
            <AiProductIntelligenceCase
              key="ai-product-intelligence"
              onClose={close}
              onNavigate={navigate}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
