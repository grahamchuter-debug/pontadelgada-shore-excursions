import {
  destinationIdentity,
  type LogoConcept,
  type LogoTone,
  type LogoVariant,
} from "@/data/destination-identity";

type DestinationLogoProps = {
  variant?: LogoVariant;
  /** Override active concept for local review — defaults to config. */
  concept?: LogoConcept;
  tone?: LogoTone;
  className?: string;
  /** When true, omit the outer accessible name (parent Link provides it). */
  decorative?: boolean;
};

function MarkSvg({
  concept,
  tone,
  size,
}: {
  concept: LogoConcept;
  tone: LogoTone;
  size: number;
}) {
  const onDark = tone === "on-dark";
  // Deep Atlantic ink, volcanic-green accent, soft mist border.
  const ink = onDark ? "#eef5f2" : "#0f2a2e";
  const accent = onDark ? "#7eb89a" : "#2f6b55";
  const soft = onDark ? "rgba(238, 245, 242, 0.28)" : "#d5e4dc";

  if (concept === "atlantic-ridge") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
        <path
          d="M7 26l6.5-11 4 6 4.5-8 9 13"
          stroke={ink}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 31c2.8-1.8 4.8-1.8 6.6 0 1.8 1.8 3.8 1.8 6.6 0 2.8-1.8 4.8-1.8 6.3 0"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Active concept: crater lake — twin-lake contour inside a caldera rim.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
      {/* Caldera rim */}
      <path
        d="M8 24c2-7 7.5-11 12-11s10 4 12 11"
        stroke={ink}
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* Twin lake ovals */}
      <ellipse cx="15.5" cy="25.5" rx="4.2" ry="2.4" stroke={accent} strokeWidth="1.5" />
      <ellipse cx="24.5" cy="25.5" rx="4.2" ry="2.4" stroke={accent} strokeWidth="1.5" />
      {/* Soft Atlantic wave */}
      <path
        d="M9 32c2.6-1.6 4.6-1.6 6.4 0 1.8 1.6 3.8 1.6 6.4 0 2.6-1.6 4.6-1.6 6.2 0"
        stroke={soft}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * World 2.0 destination wordmark for Ponta Delgada Shore Excursions.
 * HTML text for accessibility + inline SVG mark (no raster assets).
 */
export function DestinationLogo({
  variant = "full",
  concept = destinationIdentity.logoConcept,
  tone = "default",
  className = "",
  decorative = false,
}: DestinationLogoProps) {
  const { destination, descriptor, strapline, accessibleName } = destinationIdentity;
  const onDark = tone === "on-dark";
  const markSize = variant === "mark" ? 32 : variant === "compact" ? 32 : 34;

  if (variant === "mark") {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        {...(decorative
          ? { "aria-hidden": true }
          : { role: "img", "aria-label": accessibleName })}
      >
        <MarkSvg concept={concept} tone={tone} size={markSize} />
      </span>
    );
  }

  const titleClass = onDark ? "text-white" : "text-coastal-900";
  const descriptorClass = onDark ? "text-white/75" : "text-coastal-700";
  const straplineClass = onDark ? "text-forest-100" : "text-forest-600";

  return (
    <span
      className={`inline-flex items-center gap-1.5 min-w-0 sm:gap-2 ${className}`}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <MarkSvg concept={concept} tone={tone} size={markSize} />
      <span className="min-w-0 leading-none">
        <span
          className={`block font-display text-[1.05rem] font-semibold tracking-[0.04em] uppercase sm:text-[1.125rem] ${titleClass}`}
        >
          {destination}
        </span>
        <span
          className={`mt-0.5 block text-[0.68rem] font-semibold tracking-[0.12em] uppercase sm:text-[0.72rem] ${descriptorClass}`}
        >
          {descriptor}
        </span>
        {variant === "full" ? (
          <span
            className={`mt-1 hidden text-[0.7rem] font-medium tracking-[0.06em] lg:block ${straplineClass}`}
          >
            {strapline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
