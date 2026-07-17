/**
 * World 2.0 destination identity — Ponta Delgada / São Miguel.
 * Logo concept: restrained crater-lake contour with an Atlantic wave.
 * Volcanic greens and lake blues — Wild Atlantic Nature, not Mediterranean elegance.
 */
export type LogoConcept = "crater-lake" | "atlantic-ridge";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Ponta Delgada",
  descriptor: "Shore Excursions",
  strapline: "Wild Atlantic Nature",
  accessibleName: "Ponta Delgada Shore Excursions",
  accent: "volcanic-green" as const,
  logoConcept: "crater-lake" as LogoConcept,
  iconStyle: "crater-lake" as const,
} as const;
