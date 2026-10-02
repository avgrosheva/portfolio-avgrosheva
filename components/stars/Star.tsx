export type StarVariant = "elongated" | "tilted" | "asymmetric" | "sharp";

const PATHS: Record<StarVariant, string> = {
  elongated:
    "M50.00,-3.10 L59.10,32.82 L86.81,33.59 L64.72,56.56 L72.75,92.96 L50.00,71.24 L27.25,92.96 L35.28,56.56 L13.19,33.59 L40.90,32.82 Z",
  tilted:
    "M60.89,6.34 L62.41,39.59 L94.89,46.86 L63.74,58.58 L66.86,91.72 L46.08,65.72 L15.53,78.93 L33.84,51.13 L11.84,26.15 L43.93,34.98 Z",
  asymmetric:
    "M50.00,2.75 L59.74,37.98 L88.52,37.48 L67.97,56.90 L78.57,89.32 L49.15,66.31 L24.61,84.95 L32.07,54.81 L8.06,36.37 L41.39,36.74 Z",
  sharp:
    "M54.70,5.25 L59.03,39.97 L94.02,40.64 L62.33,55.49 L72.50,88.97 L48.59,63.43 L19.89,83.44 L36.80,52.81 L8.89,31.70 L43.25,38.31 Z",
};

export default function Star({
  variant = "asymmetric",
  className,
}: {
  variant?: StarVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox="-10 -10 120 120"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={PATHS[variant]} />
    </svg>
  );
}
