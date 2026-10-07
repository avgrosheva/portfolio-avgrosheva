"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Star from "../stars/Star";
import { PROJECTS, type ProjectId } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import KoraCase from "./KoraCase";
import ServiceCenterCase from "./ServiceCenterCase";
import HuskyCase from "./HuskyCase";
import AiProductIntelligenceCase from "./AiProductIntelligenceCase";

export default function SelectedWork() {
  const [openId, setOpenId] = useState<ProjectId | null>(null);
  // "card": opened from the grid, the cover grows out of its card.
  // "nav": moved from another case; cases just cross-fade, nothing flies in from the page.
  const [via, setVia] = useState<"card" | "nav">("card");

  const open = (id: ProjectId) => {
    setVia("card");
    setOpenId(id);
  };
  const navigate = (id: ProjectId) => {
    setVia("nav");
    setOpenId(id);
  };
  const close = () => setOpenId(null);

  const [kora, serviceCenter, husky, aiProductIntelligence] = PROJECTS;

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
          project={husky}
          isOpen={openId === husky.id}
          onOpen={() => open(husky.id)}
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
          {openId === "husky" && (
            <HuskyCase key="husky" onClose={close} onNavigate={navigate} />
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
