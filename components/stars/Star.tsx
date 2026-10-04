const SKEWED_PATH =
  "M34.04,8.00 L54.47,37.09 L85.01,37.02 L67.05,54.93 L87.60,83.98 L56.06,65.96 L38.22,83.98 L36.70,54.93 L5.12,37.02 L35.71,37.09 Z";

export default function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-20 -20 140 140"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={SKEWED_PATH} />
    </svg>
  );
}
