import Star from "./stars/Star";

const LINKS = [
  { index: "01", label: "work", href: "#work" },
  { index: "02", label: "about", href: "#about" },
  { index: "03", label: "contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="relative z-20 mx-auto flex max-w-frame items-center justify-between px-8 py-8 md:px-16">
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
    </header>
  );
}
