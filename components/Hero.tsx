import Star from "./stars/Star";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-frame px-8 pb-24 pt-6 md:px-16 md:pb-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        {/* main content */}
        <div className="col-span-12 lg:col-span-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
            [ 01 ]
          </p>

          <h1 className="max-w-3xl text-[clamp(2.75rem,6.4vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.02em]">
            разрабатываю
            <br />
            цифровые продукты
            <br />
            для бизнеса
          </h1>

          <p className="mt-8 max-w-md font-mono text-[0.8rem] uppercase tracking-[0.06em] text-ink-soft">
            web apps · telegram bots · ai tools · crm · internal systems
          </p>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-base transition-colors duration-200 hover:border-lime"
          >
            <span>telegram</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* graphic composition — desktop only */}
        <div className="relative col-span-4 hidden lg:block">
          <span className="absolute right-0 top-0 font-mono text-xs tracking-[0.1em] text-ink-soft">
            ( 2026 )
          </span>

          <div className="absolute right-[18%] top-[22%] h-[220px] w-px bg-line" />
          <div className="absolute right-0 top-[34%] h-px w-[85%] bg-line" />

          <Star
            variant="sharp"
            className="absolute right-[14%] top-[29%] h-6 w-6 text-ink"
          />
          <span className="absolute right-[32%] top-[48%] h-1.5 w-1.5 rounded-full bg-orange" />

          <p className="absolute right-0 top-[42%] max-w-[9rem] font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.08em] text-ink-soft">
            ideas
            <br />
            systems
            <br />
            products
            <br />
            for a brighter
            <br />
            business reality
          </p>
        </div>
      </div>
    </section>
  );
}
