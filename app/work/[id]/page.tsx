import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { PROJECTS, type ProjectId } from "@/data/projects";

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
  return {
    title,
    description: project.tag,
    openGraph: {
      title,
      description: project.tag,
      url: `/work/${project.id}`,
      images: project.primaryImage ? [project.primaryImage] : undefined,
    },
  };
}

export default async function CasePage({ params }: PageProps<"/work/[id]">) {
  const { id } = await params;
  return <HomePage initialCase={id as ProjectId} />;
}
