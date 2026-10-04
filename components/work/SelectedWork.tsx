"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Star from "../stars/Star";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import KoraCase from "./KoraCase";

export default function SelectedWork() {
  const [openId, setOpenId] = useState<string | null>(null);

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
          onOpen={() => setOpenId(kora.id)}
          className="col-span-12 lg:col-span-7"
        />
        <ProjectCard
          project={serviceCenter}
          isOpen={openId === serviceCenter.id}
          className="col-span-12 lg:col-span-5 lg:translate-y-16"
        />
        <ProjectCard
          project={husky}
          isOpen={openId === husky.id}
          className="col-span-12 lg:col-span-4 lg:col-start-1 lg:mt-20"
        />
        <ProjectCard
          project={aiProductIntelligence}
          isOpen={openId === aiProductIntelligence.id}
          className="col-span-12 lg:col-span-7 lg:col-start-6 lg:mt-8"
        />
      </div>

      <AnimatePresence>
        {openId === "kora" && <KoraCase onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  );
}
