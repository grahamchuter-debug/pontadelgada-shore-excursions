/**
 * Central cruise-positioning copy for homepage A/B readiness.
 * Swap `message` (or toggle flags) here — do not scatter strings across components.
 *
 * Future Variant B (inactive): "Everything here is built around your time in port."
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers find the best version of their day ashore in the Azores.",
  /** Reserved for a future split test — do not activate. */
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

/** Three-part trust line used in compact hero and footer placements. */
export const cruiseTrustLine = "Cruise-focused experiences • Clear durations • Easy comparison";

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "The essential things cruise passengers should know before exploring São Miguel from Ponta Delgada.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Most cruise calls allow around 8–10 hours ashore, although passengers should always check their own ship schedule.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "A 4–6 hour excursion usually leaves enough time to see Sete Cidades or the historic centre without making the day feel rushed.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Moderate. Ponta Delgada's centre is compact and walkable, but crater viewpoints and the Lagoa do Fogo trail involve slopes, steps and uneven volcanic ground.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early stop",
    body: "Book Sete Cidades or Lagoa do Fogo for the earliest realistic morning departure — crater-rim cloud tends to build later in the day.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "Vista do Rei's view over Sete Cidades' twin lakes, weather permitting — and the deep Atlantic waters just offshore for whales and dolphins.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Make time for island cheese, bolo lêvedo or a cup of Azorean tea in the old town before returning to the ship.",
    icon: "food",
  },
];
