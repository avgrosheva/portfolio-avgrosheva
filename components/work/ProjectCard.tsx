"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import type { ProjectSummary } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({
  project,
  isOpen,
  onOpen,
  className,
}: {
  project: ProjectSummary;
  isOpen: boolean;
  onOpen?: () => void;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      className={className}
    >
      <button
        type="button"
        onClick={onOpen ?? (() => {})}
        className="group block w-full cursor-pointer text-left"
      >
        <div className="mb-4 flex items-baseline justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-ink-soft">
              {project.index}
            </span>
            <h3 className="text-xl font-medium md:text-2xl">
              {project.title}
            </h3>
          </div>
          <span className="font-mono text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>
        <p className="mb-4 text-sm text-ink-soft">{project.tag}</p>

        <motion.div
          layoutId={isOpen ? undefined : `visual-${project.id}`}
          style={{ visibility: isOpen ? "hidden" : "visible" }}
          className={`relative overflow-hidden border border-line ${project.aspect}`}
        >
          <div className="group h-full w-full overflow-hidden">
            <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.025]">
              <ProjectVisual
                src={project.primaryImage}
                label={`${project.title} — primary visual`}
              />
            </div>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}
