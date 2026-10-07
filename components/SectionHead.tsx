import Star from "./stars/Star";

/** Section label in the same form as «[ 02 ] selected work» in the work grid. */
export default function SectionHead({
  n,
  title,
  aside,
}: {
  n: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="mb-16 flex items-baseline justify-between md:mb-24">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          [ {n} ]
        </span>
        <h2 className="flex items-center gap-2 text-2xl font-medium md:text-3xl">
          {title}
          <Star className="h-3 w-3 text-lime" />
        </h2>
      </div>
      {aside && (
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          {aside}
        </span>
      )}
    </div>
  );
}
