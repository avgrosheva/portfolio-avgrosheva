import Image from "next/image";
import Star from "../stars/Star";

export default function ProjectVisual({
  src,
  label,
  position,
  sizes = "(min-width: 768px) 50vw, 100vw",
  eager,
  className,
}: {
  src?: string;
  position?: string;
  sizes?: string;
  eager?: boolean;
  label: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={label}
        width={1448}
        height={1086}
        sizes={sizes}
        quality={85}
        loading={eager ? "eager" : undefined}
        style={position ? { objectPosition: position } : undefined}
        className={`h-full w-full object-cover object-left-top ${className ?? ""}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-bg-raised ${className ?? ""}`}
    >
      <Star className="absolute h-2/3 w-2/3 text-ink/[0.06] transition-transform duration-700 ease-out group-hover:rotate-6" />
      <span className="relative px-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}
