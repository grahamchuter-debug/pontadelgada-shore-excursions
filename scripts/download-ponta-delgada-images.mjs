#!/usr/bin/env node
/**
 * Download Ponta Delgada / São Miguel / Azores images from Wikimedia Commons (CC-licensed).
 * Filenames verified via Commons search API — July 2026.
 */
import { writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA =
  "PontaDelgadaShoreExcursions/1.0 (https://pontadelgadashoreexcursions.com; image setup)";

const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Lagoa das Sete Cidades seen from Miradouro da Vista do Rei 2011.jpg",
    "File:View overlooking the Sete Cidades Lagoon, São Miguel island, Azores (Portugal).jpg",
    "File:View of Sete Cidades and Lagoa Azul 2011.jpg",
  ],
  "og-default.jpg": [
    "File:Lagoa das Sete Cidades seen from Miradouro da Vista do Rei 2011.jpg",
    "File:Lagoa das Sete Cidades, São Miguel.jpg",
  ],
  "cruise-port.jpg": [
    "File:20220519.Port of Ponta Delgada.-016.jpg",
    "File:Town and marina Ponta Delgada Azores Portuga (52073468724).jpg",
    "File:Marina at sunset, Ponta Delgada, São Miguel Island, Azores, Portugal (PPL1-Corrected).jpg",
  ],
  "sete-cidades.jpg": [
    "File:View overlooking the Sete Cidades Lagoon, São Miguel island, Azores (Portugal).jpg",
    "File:View of Sete Cidades and Lagoa Azul 2011.jpg",
    "File:Lagoa das Sete Cidades, São Miguel.jpg",
  ],
  "lagoa-do-fogo.jpg": [
    "File:Lagoa do Fogo 2023-02-26.jpg",
    "File:Sao Miguel - Lagoa do Fogo.jpg",
    "File:Lagoa do Fogo São Miguel 01.jpg",
  ],
  "ponta-delgada.jpg": [
    "File:Portas da Cidade, Ponta Delgada, isla de San Miguel, Azores, Portugal, 2020-07-29, DD 123-125 HDR.jpg",
    "File:Portas da Cidade de Ponta Delgada - 1.jpg",
    "File:Plaza de Gonçalo Velho, Ponta Delgada, isla de San Miguel, Azores, Portugal, 2020-07-30, DD 80.jpg",
  ],
  "waterfront.jpg": [
    "File:Ponta Delgada Marina (16656159407).jpg",
    "File:Town and marina Ponta Delgada Azores Portuga (52073468724).jpg",
    "File:20220519.Port of Ponta Delgada.-026.jpg",
  ],
  "hydrangea.jpg": [
    "File:Hortensia flowers on São Miguel 03.jpg",
    "File:Hortensia flowers on São Miguel 01.jpg",
    "File:Pastures with Hydrangea in Remedios kz01.jpg",
  ],
  "coastline.jpg": [
    "File:Mosteiros Islets, São Miguel Island, Azores, Portugal (PPL1-Corrected).jpg",
    "File:Aerial view of Mosteiros, São Miguel Island, Azores, Portugal (PPL1-Corrected).jpg",
    "File:Mosteiros, São Miguel, Açores.jpg",
  ],
  "whale.jpg": [
    "File:Two whale watching boats, São Miguel Island, Azores, Portugal (PPL1-Corrected)-3.jpg",
    "File:Sperm whale (Physeter macrocephalus), São Miguel Island, Azores, Portugal (PPL1-Corrected).jpg",
    "File:Whale watching boat following Sperm whale (Physeter macrocephalus), São Miguel Island, Azores, Portugal (PPL1-Corrected).jpg",
  ],
  "food.jpg": [
    "File:Queijo São Jorge inteiro.jpg",
    "File:Arruda Plantation (14660136540).jpg",
    "File:Pineapple Greenhouses (14844852005).jpg",
  ],
  "hiking.jpg": [
    "File:Lagoa do Fogo 2023-02-26-1.jpg",
    "File:Lagoa do Fogo São Miguel 02.jpg",
    "File:Sao Miguel - Lagoa do Fogo.jpg",
  ],
  "e-bike.jpg": [
    "File:View of Sete Cidades and Lagoa Azul 2011.jpg",
    "File:Lagoa Rasa (Sete Cidades).jpg",
    "File:Azores - Sao Miguel Island (7684737940).jpg",
  ],
  "basalt.jpg": [
    "File:Portas da Cidade de Ponta Delgada - 2.jpg",
    "File:Portas da Cidade, Ponta Delgada (16837579406).jpg",
    "File:Plaza de Gonçalo Velho, Ponta Delgada, isla de San Miguel, Azores, Portugal, 2020-07-30, DD 80.jpg",
  ],
  "boat.jpg": [
    "File:Two whale watching boats, São Miguel Island, Azores, Portugal (PPL1-Corrected).jpg",
    "File:Ponta Delgada Marina (16656159407).jpg",
    "File:Mosteiros Islets, São Miguel Island, Azores, Portugal (PPL1-Corrected)-2.jpg",
  ],
  "private.jpg": [
    "File:View overlooking the Sete Cidades lagoon, São Miguel island, Azores (Portugal).jpg",
    "File:Azores - Sao Miguel Island (7684737940).jpg",
  ],
  "compare.jpg": [
    "File:View overlooking the Sete Cidades Lagoon, São Miguel island, Azores (Portugal).jpg",
    "File:Lagoa do Fogo 2023-02-26.jpg",
  ],
  "family.jpg": [
    "File:Portas da Cidade de Ponta Delgada - 3.jpg",
    "File:Plaza de Gonçalo Velho, Ponta Delgada, isla de San Miguel, Azores, Portugal, 2020-07-30, DD 80.jpg",
  ],
  "walking.jpg": [
    "File:Portas da Cidade, Ponta Delgada, isla de San Miguel, Azores, Portugal, 2020-07-29, DD 123-125 HDR.jpg",
    "File:Portas de Cidade, Ponta Delgada, isla de San Miguel, Azores, Portugal, 2020-07-30, DD 81.jpg",
  ],
  "photography.jpg": [
    "File:View of Sete Cidades and Lagoa Azul 2011.jpg",
    "File:Lagoa do Fogo São Miguel 03.jpg",
  ],
};

async function commonsThumbUrl(title, width = 2400) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  if (page?.missing !== undefined || page?.invalid !== undefined) return null;
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveAndSave(filename, candidates) {
  for (const title of candidates) {
    try {
      const url = await commonsThumbUrl(title);
      if (!url) {
        console.warn(`  no url: ${title}`);
        continue;
      }
      const outPath = join(OUT, filename);
      const srcPath = join(SOURCE, filename);
      const bytes = await download(url, outPath);
      copyFileSync(outPath, srcPath);
      console.log(`✓ ${filename} ← ${title} (${Math.round(bytes / 1024)}KB)`);
      return true;
    } catch (err) {
      console.warn(`  fail ${title}: ${err.message}`);
    }
  }
  console.error(`✗ FAILED ${filename}`);
  return false;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SOURCE, { recursive: true });

let ok = 0;
for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
  if (await resolveAndSave(file, candidates)) ok++;
}
console.log(`\nDownloaded ${ok}/${Object.keys(IMAGE_FILES).length} images`);
if (ok < Object.keys(IMAGE_FILES).length) process.exit(1);
