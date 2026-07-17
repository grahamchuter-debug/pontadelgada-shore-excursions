import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import pontaDelgadaSchedule from "./imported-schedules/ponta-delgada.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Ponta Delgada cruise ship schedules?",
    answer:
      "We publish verified calls only once we have a reliable source to confirm them. Times, berths and even calls can change at short notice, so always confirm with your cruise line before booking a shore excursion.",
  },
  {
    question: "Where do cruise ships berth in Ponta Delgada?",
    answer:
      "Most ships use the Portas do Mar terminal on the central waterfront; some calls use the commercial pier roughly 2 km from downtown instead, typically with a shuttle provided. Always check the assigned berth on the day.",
  },
  {
    question: "Is a Ponta Delgada call long enough for Sete Cidades and Lagoa do Fogo?",
    answer:
      "A long call can support a full-day combination excursion. Calls with fewer than about five usable hours are better suited to Sete Cidades alone, whale watching, or Ponta Delgada's historic centre.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Check whether your ship is using Portas do Mar or the commercial pier before estimating walking time",
  "Book whale-watching and any capacity-limited excursion well before sailing",
  "Keep additional weather and road contingency when returning from Lagoa do Fogo or Furnas",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "ponta-delgada",
    name: "Ponta Delgada",
    country: "Portugal (Azores)",
    seoTitle: "Ponta Delgada Cruise Ship Schedule 2026/2027 — São Miguel Port Calls",
    metaDescription:
      "Ponta Delgada cruise ship schedule for 2026 and 2027 planning, with verified arrivals, departures and berths for São Miguel shore excursions.",
    intro:
      "Ponta Delgada is the cruise gateway to São Miguel and the Azores, with a walkable historic centre close to the harbour and road routes to Sete Cidades, Lagoa do Fogo and Furnas.",
    description:
      "Where the Azores begin — walk into historic Ponta Delgada or use your port call to reach São Miguel's crater lakes, whale-watching waters and geothermal valleys.",
    scheduleOverview:
      "We have not yet verified specific 2026 or 2027 Ponta Delgada cruise calls for this page. As soon as we can confirm arrivals and departures from a reliable source, they will appear here — check back closer to your sailing, and always confirm directly with your cruise line in the meantime.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  "ponta-delgada": pontaDelgadaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
