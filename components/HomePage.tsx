import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/work/SelectedWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import type { ProjectId } from "@/data/projects";

/** The whole site; a case address renders the same page with that case already open. */
export default function HomePage({ initialCase }: { initialCase?: ProjectId }) {
  return (
    <main>
      <Nav />
      <Hero />
      <SelectedWork initialCase={initialCase} />
      <About />
      <Contact />
    </main>
  );
}
