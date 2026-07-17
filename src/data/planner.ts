import { SIGNATURE_EXPERIENCE_PATH, signatureSaoMiguelExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Ponta Delgada explorer",
    description: "A low-risk city day using walking, taxis and your own return buffer.",
  },
  {
    id: "sete-cidades",
    label: "First-time Sete Cidades visitor",
    description: "A half-day excursion for passengers who want São Miguel's signature crater-lake view.",
  },
  {
    id: "lagoa-fogo",
    label: "Active hiking traveller",
    description: "A full or half-day trip to Lagoa do Fogo, with an optional trail down towards the crater lake.",
  },
  {
    id: "whales",
    label: "Wildlife-watching traveller",
    description: "A marina departure to São Miguel's deep coastal waters, with honest expectations on sightings.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "ponta-delgada", label: "Historic Ponta Delgada" },
  { id: "sete-cidades", label: "Sete Cidades & the West" },
  { id: "lagoa-fogo", label: "Lagoa do Fogo & Central São Miguel" },
  { id: "whales", label: "Whale & dolphin watching" },
  { id: "furnas", label: "Furnas Valley" },
  { id: "food", label: "Food & flavours" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "sete-cidades" | "lagoa-fogo" | "whales";

export const AZORES_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Historic Ponta Delgada",
    summary:
      "The most flexible choice: walk from the port to the Portas da Cidade, main churches, fort and waterfront.",
    minimumHours: 3,
    links: [
      {
        label: "Independent Ponta Delgada Guide",
        href: "/guides/independent-ponta-delgada-guide",
        why: "Walking route, food stops and return-to-ship timing.",
      },
      {
        label: "Ponta Delgada City Highlights",
        href: "/guides/ponta-delgada-historic-centre-guide",
        why: "Guided context without committing to a long road day.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Walk from Portas do Mar towards Praça Gonçalo Velho Cabral, or take the shuttle if your ship uses the commercial pier." },
      { time: "Morning", text: "Portas da Cidade, Igreja Matriz de São Sebastião and the historic centre before the day gets busy." },
      { time: "Midday", text: "Lunch near the historic centre and a browse of the local market if open." },
      { time: "Afternoon", text: "Forte de São Brás and an easy waterfront walk back towards the terminal." },
    ],
  },
  "sete-cidades": {
    headline: "Sete Cidades & the West",
    summary:
      "The first-time landmark choice: São Miguel's twin crater lakes on a time-efficient half-day excursion.",
    minimumHours: 5,
    links: [
      {
        label: "Sete Cidades & the West",
        href: "/shore-excursions/sete-cidades-island-tour",
        why: "Cruise-timed transport and the Vista do Rei viewpoint.",
      },
      {
        label: "Sete Cidades or Lagoa do Fogo?",
        href: "/compare/sete-cidades-or-lagoa-do-fogo",
        why: "Compare crater access, walking demand and weather risk.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the organised excursion promptly at the confirmed terminal point, ideally on an early departure." },
      { time: "Morning", text: "Drive to Sete Cidades; the crater rim is normally at its clearest before mid-morning cloud builds." },
      { time: "Midday", text: "Vista do Rei, the Boca do Inferno viewpoint and the caldera village, with time for photographs." },
      { time: "Afternoon", text: "Return drive to Ponta Delgada with a conservative margin before all-aboard." },
    ],
  },
  "lagoa-fogo": {
    headline: "Lagoa do Fogo & Central São Miguel",
    summary:
      "Choose Lagoa do Fogo for the island's wildest crater lake and, if you want it, a genuine trail down towards the water.",
    minimumHours: 5,
    links: [
      {
        label: "Lagoa do Fogo Hike",
        href: "/shore-excursions/lagoa-do-fogo-hike",
        why: "Trail access, transfers and weather-aware timing from Ponta Delgada.",
      },
      {
        label: "Lagoa do Fogo Hike or E-Bike Tour?",
        href: "/compare/lagoa-do-fogo-hike-or-e-bike",
        why: "Compare two active alternatives before you commit.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the guide and leave Ponta Delgada before the crater cloud risk increases later in the morning." },
      { time: "Morning", text: "Scenic inland drive and the first Lagoa do Fogo viewpoint." },
      { time: "Midday", text: "Optional descent towards the shore for confident walkers, or an unhurried viewpoint visit." },
      { time: "Afternoon", text: "Return by the operator's timed route, with a conservative buffer before all-aboard." },
    ],
  },
  whales: {
    headline: "Whale & Dolphin Watching Catamaran",
    summary:
      "For passengers who want São Miguel's deep Atlantic waters, with honest expectations that sightings are never guaranteed.",
    minimumHours: 4,
    links: [
      {
        label: "Whale & Dolphin Watching Catamaran",
        href: "/shore-excursions/whale-watching-catamaran",
        why: "Marina departure, guided search and cruise-port return planning.",
      },
      {
        label: "Ponta Delgada Food Walk",
        href: "/shore-excursions/azorean-flavours-food-walk",
        why: "A relaxed pairing back in the historic centre afterwards.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Walk to the marina departure point, close to the cruise terminal." },
      { time: "Morning", text: "Guided search for whales and dolphins in São Miguel's deep coastal waters." },
      { time: "Midday", text: "Return to the marina and a short walk into the historic centre for lunch." },
      { time: "Afternoon", text: "Free time in Ponta Delgada, or an early return to the ship." },
    ],
  },
};

function usableHours(input: PlannerInput): number {
  if (!input.arrivalTime || !input.departureTime) return 7.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("ponta-delgada") ||
    hours < 4
  ) {
    return "independent";
  }
  if (interests.includes("lagoa-fogo") && input.mobility === "full") return "lagoa-fogo";
  if (interests.includes("whales")) return "whales";
  if (interests.includes("sete-cidades") || interests.includes("photography")) return "sete-cidades";
  return hours >= 5 ? "sete-cidades" : "whales";
}

export function generateAzoresPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = AZORES_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureSaoMiguelExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Sete Cidades concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend, so choose independent Ponta Delgada instead.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Ponta Delgada Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Ponta Delgada Ship Schedule",
        href: "/ship-schedules/ponta-delgada",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare São Miguel",
        href: "/compare",
        why: "Review honest trade-offs before booking a long landscape excursion.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Ponta Delgada terminal 60–90 minutes before all-aboard; Lagoa do Fogo and Furnas excursions need additional weather and road contingency.",
      },
    ],
  };
}
