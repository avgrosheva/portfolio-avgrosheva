import type { Metadata } from "next";
import Link from "next/link";
import Star from "@/components/stars/Star";

export const metadata: Metadata = { title: "404 — avgrosheva" };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-frame flex-col px-8 py-8 md:px-16">
      <header className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-[1.05rem] font-medium tracking-tight">avgrosheva</span>
          <Star className="h-4 w-4 text-ink transition-all duration-300 group-hover:rotate-12 group-hover:text-lime" />
        </Link>
        <span className="font-mono text-xs tracking-[0.1em] text-ink-soft">( 2026 )</span>
      </header>

      <section className="my-auto py-24">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">[ 404 ]</p>
        <h1 className="tracking-[-0.02em]">
          <span className="block text-[clamp(1.25rem,5.4vw,1.75rem)] font-normal leading-[1.05] text-ink-soft md:text-[clamp(1.75rem,3.4vw,2.75rem)]">
            такой страницы
          </span>
          <span className="flex items-center gap-3 text-[2.5rem] font-medium leading-[0.96] text-ink md:gap-4 md:text-[clamp(3rem,9vw,9rem)]">
            нет
            <Star className="h-6 w-6 text-ink md:h-10 md:w-10" />
          </span>
        </h1>
        <Link
          href="/"
          className="group mt-12 inline-flex items-center gap-2 border-b border-ink pb-1 text-base transition-colors duration-200 hover:border-lime"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
          на главную
        </Link>
      </section>
    </main>
  );
}
