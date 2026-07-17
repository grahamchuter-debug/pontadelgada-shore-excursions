import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs } from "@/lib/guides";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { getAllSchedulePortSlugs, getVerifiedMonthKeys, getScheduleEntriesForYear } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portMonthPath } from "@/lib/schedule-utils";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";

export const dynamic = "force-static";

/** Noindex pages (legal + legacy redirect aliases) — excluded from the sitemap. */
const NOINDEX_PATHS = new Set(["/privacy", "/terms", "/cruise-port-guide", "/ship-schedules"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/guides",
    "/ponta-delgada-cruise-port",
    "/things-to-do-in-ponta-delgada-from-a-cruise-ship",
    "/ponta-delgada-cruise-ship-schedule",
    "/cruise-planner",
    "/faq",
    "/enquire",
    "/about",
    "/methodology",
    "/affiliate-disclosure",
    SIGNATURE_EXPERIENCE_PATH,
    "/wow-collection",
    "/compare",
  ];

  const scheduleYearPages = getAllSchedulePortSlugs().flatMap((s) =>
    SCHEDULE_YEARS.filter((y) => getScheduleEntriesForYear(s, y).length > 0).map((y) =>
      portYearPath(s, y),
    ),
  );

  const dynamicPages = [
    ...getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`),
    ...getAllGuideSlugs().map((s) => `/guides/${s}`),
    ...getAllComparisonSlugs().map((s) => `/compare/${s}`),
    ...scheduleYearPages,
    ...getAllSchedulePortSlugs().flatMap((s) => getVerifiedMonthKeys(s).map((mk) => portMonthPath(s, mk))),
  ];

  const all = [...staticPages, ...dynamicPages].filter((path) => !NOINDEX_PATHS.has(path));

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    };
  });
}
