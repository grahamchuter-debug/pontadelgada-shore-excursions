import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-sao-miguel-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureSaoMiguelExperience = {
  slug: "signature-sao-miguel-experience",
  title: "Signature São Miguel Discovery",
  seoTitle: "Signature São Miguel Discovery — Future Sete Cidades Experience",
  metaDescription:
    "Preview a future small-group Sete Cidades shore experience from Ponta Delgada — maximum eight guests, flexible timing and honest weather planning. Not currently bookable.",
  tagline:
    "A future small-group journey to Sete Cidades and São Miguel's volcanic west — designed around your ship and the weather on the day, not a generic day tour.",
  overview:
    "Signature São Miguel Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Ponta Delgada to Sete Cidades in a comfortable vehicle, with flexible viewpoint timing, a local lunch and enough room to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🚐",
      title: "Comfortable vehicle",
      description: "Suitable transport planned for the crater roads between Ponta Delgada and Sete Cidades.",
    },
    {
      emoji: "🌋",
      title: "Sete Cidades at its heart",
      description: "Vista do Rei, the twin lakes and the caldera village would form the core of the future itinerary.",
    },
    {
      emoji: "🌦️",
      title: "Weather-aware timing",
      description: "A proposed early departure and flexible stop order designed around the best realistic chance of clear views.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for crater, lake and village viewpoints rather than photographs through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Azorean lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Routing designed to adapt to ship times, weather, mobility and the interests of each group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description: "The future operating plan will be built backwards from all-aboard with a conservative return margin.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature São Miguel Discovery now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What would the future experience include?",
      answer:
        "The current concept includes a maximum of eight guests, comfortable transport, Sete Cidades, weather-aware timing, photography stops, a local lunch and flexible cruise-timed routing. Details may change before launch.",
    },
    {
      question: "Why focus on Sete Cidades rather than Furnas?",
      answer:
        "Sete Cidades combines dramatic crater scenery, a manageable road journey and flexible outdoor stops. Furnas involves a longer drive and different logistics, so it remains a separate future consideration.",
    },
    {
      question: "What should I book in the meantime?",
      answer:
        "Use our current shore-excursion guides and Editor's Collection to compare bookable Sete Cidades, Lagoa do Fogo, whale-watching and Ponta Delgada options.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureSaoMiguelExperience.title,
    description:
      "A future maximum-eight-guest Sete Cidades experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}
