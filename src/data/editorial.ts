import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Ponta Delgada cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Ponta Delgada's forts, churches and Azorean-Portuguese heritage." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "A realistic self-guided Ponta Delgada day within easy reach of the ship." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Whales, dolphins and the deep Atlantic waters off São Miguel." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Sete Cidades' twin lakes, Lagoa do Fogo's crater rim and São Miguel's volcanic horizons." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Sete Cidades-focused small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Flexible Ponta Delgada and Sete Cidades options with manageable travel and walking." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Crater lakes, coastal cliffs and São Miguel's changeable Atlantic light." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Island cheese, bolo lêvedo, Azorean tea and volcanic-soil produce." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Vila Franca do Campo and quieter corners beyond the standard crater-lake circuit." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Ponta Delgada highlights for calls without enough usable time to travel inland." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Sete Cidades & the West — São Miguel's defining crater-lake view on a carefully timed cruise excursion.",
    href: "/shore-excursions/sete-cidades-island-tour",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🌋",
    label: "Best First-Time Tour",
    description: "Sete Cidades for first-time visitors — the most efficient way to see the Azores' signature landscape in one call.",
    href: "/shore-excursions/sete-cidades-island-tour",
    cta: "Discover Sete Cidades",
  },
  {
    id: "adventure",
    emoji: "🥾",
    label: "Best Adventure",
    description: "Lagoa do Fogo Hike — a genuine trail down towards São Miguel's highest crater lake for reasonably fit walkers.",
    href: "/shore-excursions/lagoa-do-fogo-hike",
    cta: "Plan the hike",
  },
  {
    id: "whales",
    emoji: "🐬",
    label: "Best Wildlife Experience",
    description: "Whale & Dolphin Watching Catamaran — deep Atlantic water close to shore, with honest expectations on sightings.",
    href: "/shore-excursions/whale-watching-catamaran",
    cta: "See the catamaran trip",
  },
  {
    id: "food-wine",
    emoji: "🧀",
    label: "Best Food & Wine",
    description: "Ponta Delgada Food Walk — island cheese, bolo lêvedo and Azorean tea without leaving the capital behind.",
    href: "/shore-excursions/azorean-flavours-food-walk",
    cta: "Taste Ponta Delgada",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description: "Private Sete Cidades & West Coast — flexible viewpoints, timing and a dedicated vehicle for your party.",
    href: "/shore-excursions/private-sete-cidades",
    cta: "View private tour",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Sete Cidades & Lagoa do Fogo Full Day — two volcanoes and two very different lakes for the strongest photographs.",
    href: "/shore-excursions/sete-cidades-lagoa-do-fogo",
    cta: "Photograph the craters",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Ponta Delgada city or Sete Cidades keeps road time sensible and allows mixed-age families to set an easier pace.",
    href: "/compare/best-azores-tour-first-time",
    cta: "Compare family days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description: "Independent Ponta Delgada — Portas da Cidade, churches, fort and waterfront with a generous ship buffer.",
    href: "/guides/independent-ponta-delgada-guide",
    cta: "Use the DIY guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature São Miguel Experience",
    description: "Signature São Miguel Discovery — a future maximum-eight-guest Sete Cidades day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
