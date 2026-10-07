import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/work/SelectedWork";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SelectedWork />
      <About />
      <Contact />
    </main>
  );
}
