import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import {
  AI_PRODUCT_INTELLIGENCE_CASE,
  HASKY_CASE,
  KORA_CASE,
  PROJECTS,
  SERVICE_CENTER_CASE,
  type ProjectId,
} from "@/data/projects";

// One-line pitch of each case, shown in link previews and search results.
const DESCRIPTIONS: Record<ProjectId, string> = {
  kora: KORA_CASE.intro,
  "service-center": SERVICE_CENTER_CASE.intro,
  hasky: HASKY_CASE.intro,
  "ai-product-intelligence": AI_PRODUCT_INTELLIGENCE_CASE.intro,
};

// Only the four cases exist; anything else under /work is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id)!;
  const title = `${project.title} — avgrosheva`;
  const description = DESCRIPTIONS[project.id];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/work/${project.id}`,
      images: [{ url: project.cover, width: 1448, height: 1086, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [project.cover] },
  };
}

export default async function CasePage({ params }: PageProps<"/work/[id]">) {
  const { id } = await params;
  return <HomePage initialCase={id as ProjectId} />;
}
