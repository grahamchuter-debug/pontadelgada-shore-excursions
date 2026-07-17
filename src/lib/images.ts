export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Sete Cidades crater lakes on São Miguel"),
  ogDefault: img(
    "og-default",
    "Sete Cidades crater lakes and volcanic landscape of São Miguel in the Azores",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Ponta Delgada Shore Excursions",
  },
  port: img("cruise-port", "Ponta Delgada waterfront on São Miguel"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "sete-cidades": img("sete-cidades", "Sete Cidades crater lakes on São Miguel"),
  "lagoa-do-fogo": img("lagoa-do-fogo", "Lagoa do Fogo volcanic lake in the Azores"),
  "ponta-delgada": img("ponta-delgada", "Ponta Delgada historic centre on São Miguel"),
  waterfront: img("waterfront", "Ponta Delgada waterfront on São Miguel"),
  hydrangea: img("hydrangea", "Hydrangea-lined road on São Miguel"),
  coastline: img("coastline", "Atlantic coastline of São Miguel"),
  whale: img("whale", "Whale-watching boat off the coast of São Miguel"),
  food: img("food", "Azorean food in Ponta Delgada"),
  hiking: img("hiking", "Nature hiking near Lagoa do Fogo on São Miguel"),
  "e-bike": img("e-bike", "E-bike exploration near Sete Cidades"),
  basalt: img("basalt", "Black basalt architecture in Ponta Delgada"),
  boat: img("boat", "Atlantic boat experience off São Miguel"),
  private: img("private", "Private São Miguel island tour"),
  compare: img("compare", "Comparing Ponta Delgada shore excursion options"),
  walking: img("walking", "Walking in Ponta Delgada historic centre"),
  photography: img("photography", "Volcanic viewpoint photography on São Miguel"),
  family: img("family", "Cruise passengers exploring São Miguel"),
  coast: img("coastline", "Southern coast scenery near Ponta Delgada"),
  port: img("cruise-port", "Ponta Delgada cruise port waterfront"),
  historic: img("ponta-delgada", "Ponta Delgada historic gateway and streets"),
  city: img("ponta-delgada", "Ponta Delgada city centre"),
  highlights: img("sete-cidades", "São Miguel volcanic highlights from Ponta Delgada"),
  "hero-home": img("hero-home", "Sete Cidades crater lakes on São Miguel"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "sete-cidades-island-tour": "sete-cidades",
  "sete-cidades-lagoa-do-fogo": "lagoa-do-fogo",
  "azorean-flavours-food-walk": "food",
  "sete-cidades-nature-walk": "hiking",
  "whale-watching-catamaran": "whale",
  "southern-coast-boat-trip": "boat",
  "lagoa-do-fogo-hike": "lagoa-do-fogo",
  "whale-watching-speedboat": "whale",
  "sete-cidades-e-bike": "e-bike",
  "azorean-cooking-experience": "food",
  "private-sete-cidades": "private",
  "private-whale-watching": "whale",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("sete-cidades");
export const guidesHubImage = pick("historic");

const highlightImageKeys: Record<string, string> = {
  "sete-cidades": "sete-cidades",
  "lagoa-do-fogo": "lagoa-do-fogo",
  "ponta-delgada-city": "ponta-delgada",
  "whale-watching": "whale",
};

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getGuideImage(imageKey: string): SiteImage {
  return pick(imageKey);
}

export function getComparisonImage(_slug: string): SiteImage {
  return pick("compare");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("ponta-delgada");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("port");
}
