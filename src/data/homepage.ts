import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export const homepageTagline = "Ponta Delgada Shore Excursions";

/** Hero supporting line — Wild Atlantic Nature positioning. */
export const homepageSubtitle =
  "Wild Atlantic Nature: crater lakes, deep-water whales and dolphins, and a walkable Azorean capital — matched honestly to your time in port.";

/** The site's core decision idea, used across hero and navigation copy. */
export const homepageDecisionPrompt = "Which side of volcanic São Miguel would you most like to experience?";

/** Network philosophy line, reusable across hero/footer copy. */
export const homepageNetworkPhilosophy = "Find the best version of your day ashore.";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Ponta Delgada for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a realistic Sete Cidades, Lagoa do Fogo or Ponta Delgada day with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in the Azores",
    shortLabel: "First visit",
    description:
      "Compare Sete Cidades, Lagoa do Fogo and Ponta Delgada before choosing the experience that best fits your first visit.",
    href: "/compare/best-azores-tour-first-time",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Walk into Ponta Delgada's historic centre for the Portas da Cidade, churches, fort and waterfront at your own pace.",
    href: "/guides/independent-ponta-delgada-guide",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and budget for a tailored São Miguel plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "sete-cidades-and-the-west",
    title: "Sete Cidades and the West",
    description: "Twin crater lakes, Vista do Rei and the caldera village — São Miguel's most photographed view.",
    href: "/shore-excursions/sete-cidades-island-tour",
    cta: "Explore Sete Cidades",
    imageKey: "sete-cidades",
  },
  {
    slug: "lagoa-do-fogo-and-central-sao-miguel",
    title: "Lagoa do Fogo and Central São Miguel",
    description: "The island's highest, wildest crater lake — a real trail for those who want to walk rather than just look.",
    href: "/shore-excursions/lagoa-do-fogo-hike",
    cta: "Discover Lagoa do Fogo",
    imageKey: "lagoa-do-fogo",
  },
  {
    slug: "whales-and-dolphins",
    title: "Whales and Dolphins",
    description: "Deep Atlantic water close to shore — one of the Azores' best-placed departure points for cetacean watching.",
    href: "/shore-excursions/whale-watching-catamaran",
    cta: "See the catamaran trip",
    imageKey: "whale",
  },
  {
    slug: "active-azores",
    title: "Active Azores",
    description: "Crater hikes and e-bike routes for passengers who want to do more than look from a car park.",
    href: "/shore-excursions/sete-cidades-e-bike",
    cta: "Get active",
    imageKey: "hiking",
  },
  {
    slug: "ponta-delgada-and-azorean-flavours",
    title: "Ponta Delgada and Azorean Flavours",
    description: "Portas da Cidade, historic churches and a taste of island cheese, bolo lêvedo and Azorean tea.",
    href: "/guides/best-food-in-ponta-delgada",
    cta: "Taste Ponta Delgada",
    imageKey: "food",
  },
  {
    slug: "private-sao-miguel",
    title: "Private São Miguel",
    description: "A dedicated vehicle, flexible stops and routing shaped around your party, your ship and the weather.",
    href: "/compare/private-tour-vs-group-tour-sao-miguel",
    cta: "Compare private tours",
    imageKey: "private",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "shore-excursions",
    number: "01",
    title: "Shore Excursions",
    description: "Sete Cidades, Lagoa do Fogo, whale watching, Furnas and Ponta Delgada — matched to cruise-port timings.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Ponta Delgada Cruise Port Guide",
    description: "The Portas do Mar terminal, walking routes, taxis, city access and practical return-to-ship planning.",
    href: "/ponta-delgada-cruise-port",
    cta: "Read the port guide",
  },
  {
    slug: "compare",
    number: "03",
    title: "Compare Your Options",
    description: "Sete Cidades or Lagoa do Fogo? Private or group? Clear comparisons without overselling.",
    href: "/compare",
    cta: "Compare day trips",
  },
  {
    slug: "independent",
    number: "04",
    title: "Explore Independently",
    description: "A walkable Ponta Delgada itinerary with transport, food and return-buffer advice.",
    href: "/guides/independent-ponta-delgada-guide",
    cta: "Plan a DIY day",
  },
  {
    slug: "ship-schedules",
    number: "05",
    title: "Ship Schedules",
    description: "Check published Ponta Delgada arrivals and departures before committing to a long landscape excursion.",
    href: "/ponta-delgada-cruise-ship-schedule",
    cta: "View schedules",
  },
  {
    slug: "faq",
    number: "06",
    title: "Ponta Delgada FAQs",
    description: "Honest answers on port access, crater weather, whale watching and timing.",
    href: "/faq",
    cta: "Read the FAQs",
  },
  {
    slug: "signature",
    number: "07",
    title: "Signature São Miguel Experience",
    description: "A future Sete Cidades-focused small-group flagship, currently in preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
  },
  {
    slug: "wow-collection",
    number: "08",
    title: "The Wow Collection",
    description: "Future exclusive small-group São Miguel experiences designed around cruise passengers.",
    href: "/wow-collection",
    cta: "Discover the collection",
  },
];

/** Homepage trust reassurances — general, honest and independent. */
export const trustMessages: string[] = [
  "Cruise-focused planning",
  "Honest weather expectations",
  "Independent advice",
  "No invented prices or guarantees",
];

export interface ComparisonPrompt {
  label: string;
  href: string;
}

/** Optional homepage decision prompts, built around the West/Central/Coastal framing. */
export const comparisonPrompts: ComparisonPrompt[] = [
  { label: "Sete Cidades or Lagoa do Fogo?", href: "/compare/sete-cidades-or-lagoa-do-fogo" },
  { label: "Private tour or group tour?", href: "/compare/private-tour-vs-group-tour-sao-miguel" },
  { label: "Best Azores tour for first-time visitors?", href: "/compare/best-azores-tour-first-time" },
];

export interface WeatherPlanningNote {
  title: string;
  body: string;
}

/** Weather planning section copy — honest about São Miguel's changeable microclimates. */
export const weatherPlanningNotes: WeatherPlanningNote[] = [
  {
    title: "Crater weather differs from the coast",
    body: "Sete Cidades and Lagoa do Fogo sit at altitude inland, where cloud and wind can be entirely different from a sunny morning in Ponta Delgada. Check a forecast for the specific viewpoint, not just the city.",
  },
  {
    title: "Early departures improve your odds",
    body: "Cloud tends to build over the crater rims later in the day. An early morning excursion gives the best realistic chance of a clear view — but no operator can promise one.",
  },
  {
    title: "Have a backup plan",
    body: "If a viewpoint is in cloud on the day, a good guide will adjust the route rather than force a view that isn't there. Ponta Delgada's historic centre and waterfront work well as a lower-altitude alternative.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "What are the best Ponta Delgada shore excursions?",
      answer:
        "Sete Cidades & the West is our Editor's Choice for a classic Azores landscape day. Whale and dolphin watching, the Lagoa do Fogo hike and Ponta Delgada City Highlights are strong alternatives depending on your interests and port hours.",
    },
    {
      question: "Is Sete Cidades worth visiting from the cruise port?",
      answer:
        "Yes for most first-time visitors. It is one of the more time-efficient landscape excursions from Ponta Delgada, though the crater rim carries a real risk of cloud, so treat a clear view as likely rather than guaranteed.",
    },
    {
      question: "Can I walk from Ponta Delgada cruise port into the city?",
      answer:
        "Usually yes. Most ships berth at the Portas do Mar terminal, around a 10-minute flat walk from the historic centre. On days when a ship uses the commercial pier instead, a shuttle is typically provided.",
    },
    {
      question: "Is Lagoa do Fogo included in a typical shore excursion?",
      answer:
        "Some itineraries include a Lagoa do Fogo viewpoint stop, and a dedicated hiking excursion goes further towards the shore. Check whether your chosen tour reaches the roadside viewpoint only or includes the trail down.",
    },
    {
      question: "Is whale watching suitable for every passenger?",
      answer:
        "Most passengers manage the trip comfortably, but sea conditions can make boats feel exposed to motion. Passengers prone to seasickness should take precautions in advance, and anyone with mobility concerns should ask about boarding arrangements.",
    },
    {
      question: "Are whale and dolphin sightings guaranteed?",
      answer:
        "No. São Miguel's deep coastal waters make it one of the Azores' best-placed departure points for wildlife watching, but sightings depend on the season, the sea and the animals themselves. No responsible operator can promise a specific encounter.",
    },
    {
      question: "Is São Miguel the same place as Ponta Delgada?",
      answer:
        "Not quite. São Miguel is the largest island in the Azores archipelago; Ponta Delgada is its capital city and main cruise port. Sete Cidades, Lagoa do Fogo and Furnas all sit elsewhere on São Miguel, reached by road from Ponta Delgada.",
    },
    {
      question: "Can I visit Furnas on a short port call?",
      answer:
        "Generally, no. Furnas is roughly 45 minutes from Ponta Delgada by road and lies in the opposite direction from Sete Cidades and Lagoa do Fogo, so it rewards a longer, unhurried visit rather than a short call. Choose Sete Cidades or the historic centre instead if your hours ashore are limited.",
    },
    {
      question: "What currency is used in Ponta Delgada?",
      answer:
        "The Azores use the euro (EUR), as part of Portugal. Cards are widely accepted, but carrying some cash is useful for markets and smaller cafés outside the main visitor areas.",
    },
    {
      question: "Is English widely spoken in Ponta Delgada?",
      answer:
        "Yes, particularly in hotels, restaurants and tour operations aimed at cruise passengers. Portuguese is the local language, and a few local phrases are still appreciated, especially away from the main tourist streets.",
    },
    {
      question: "What should I wear on a São Miguel shore excursion?",
      answer:
        "Supportive shoes with grip, a packable waterproof or windproof layer for altitude and boat trips, and sun protection even on a cloudy day. Ponta Delgada's basalt paving can be slippery when wet, and volcanic ground on trails is loose underfoot.",
    },
    {
      question: "What happens if the crater viewpoints are cloudy on the day?",
      answer:
        "It happens, even on an otherwise fine morning at sea level. Sete Cidades and Lagoa do Fogo both carry a genuinely high cloud-risk profile because of their altitude. An early departure improves your odds, but no operator can guarantee a clear view, and a good guide will adjust the plan rather than force one.",
    },
    {
      question: "Are there active or hiking excursions from Ponta Delgada?",
      answer:
        "Yes. The Lagoa do Fogo Hike is our clearest active option, with a real trail descending towards the crater lake, and the Sete Cidades Nature Walk goes further into the crater floor on foot. A São Miguel e-bike tour offers a less strenuous active alternative along the coast and countryside.",
    },
    {
      question: "Are private tours available from Ponta Delgada?",
      answer:
        "Yes, alongside our small-group and standard excursions. A private vehicle and guide offer flexible timing and routing shaped around your party, useful for waiting out passing cloud or adjusting pace on the day.",
    },
    {
      question: "How much time should I allow before returning to the ship?",
      answer:
        "Aim to reach the terminal 60–90 minutes before all-aboard for a city day, with a larger buffer for Sete Cidades, Lagoa do Fogo or Furnas excursions, since road time and changeable crater-rim weather can both add delay.",
    },
    {
      question: "Are Ponta Delgada shore excursions accessible for limited mobility?",
      answer:
        "Central Ponta Delgada and the waterfront have accessible sections, but historic basalt paving can be uneven. Sete Cidades' main viewpoints are reachable by vehicle with short walks; the Lagoa do Fogo trail and Furnas are more demanding. Discuss specific needs with the operator before booking.",
    },
    {
      question: "Can I combine more than one landscape excursion in a single port call?",
      answer:
        "Only on a genuinely long call, and only with a dedicated full-day itinerary such as Sete Cidades combined with Lagoa do Fogo. On a typical or short call, choose one landscape excursion and give it proper time rather than rushing between two.",
    },
  ];
}
