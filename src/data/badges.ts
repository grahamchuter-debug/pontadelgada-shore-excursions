/**
 * Editorial badge hierarchy for Ponta Delgada World 2.0.
 *
 * Hierarchy rules:
 * - signature-tour is the highest tier — never combine with editors-choice.
 * - signature-tour is included in the type for future use but will not be
 *   displayed on the site while a signature experience is disabled.
 */
export type EditorialBadge =
  | "signature-tour"
  | "editors-choice"
  | "best-first-time"
  | "best-full-day"
  | "best-short-call"
  | "best-wildlife"
  | "best-active"
  | "best-food"
  | "best-private"
  | "best-coastal"
  | "best-repeat"
  | "best-value"
  | "most-complete"
  | "nature-walk"
  | "atlantic-adventure"
  | "unique-experience"
  | "local-flavours";

export const editorialBadgeLabels: Record<EditorialBadge, string> = {
  "signature-tour": "Signature Tour",
  "editors-choice": "Editor's Choice",
  "best-first-time": "Best for First-Time Visitors",
  "best-full-day": "Most Complete Island Day",
  "best-short-call": "Best Short Port Call",
  "best-wildlife": "Wildlife Favourite",
  "best-active": "Active Adventure",
  "best-food": "Local Flavours",
  "best-private": "Private Tour",
  "best-coastal": "Coastal Escape",
  "best-repeat": "Best for Repeat Visitors",
  "best-value": "Best Value",
  "most-complete": "Most Complete Island Day",
  "nature-walk": "Nature Walk",
  "atlantic-adventure": "Atlantic Adventure",
  "unique-experience": "Unique Experience",
  "local-flavours": "Local Flavours",
};
