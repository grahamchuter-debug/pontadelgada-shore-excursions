# Ponta Delgada Shore Excursions

Cruise-focused shore excursion guide for Ponta Delgada, São Miguel and the Azores.

**Domain:** [pontadelgadashoreexcursions.com](https://pontadelgadashoreexcursions.com)  
**Deploy platform:** Cloudflare Workers Static Assets (network V1.0 — same pattern as Palma)

## Development

```bash
npm install
npm run download:images   # first time / when sources change
npm run dev               # http://localhost:3017
```

## Quality

```bash
npm run lint
npm run typecheck
npm run build
npm run check-links
npm run seo-qa
npm run qa:full
```

## Deploy (Workers Static Assets)

```bash
npm run deploy
# equivalent: npm run deploy:worker
```

After deploy:

1. Smoke-test the printed `*.workers.dev` URL first.
2. Confirm apex Custom Domain `pontadelgadashoreexcursions.com` (declared in `wrangler.jsonc`).
3. Configure www → apex as a **Cloudflare Redirect Rule** (do not put absolute host rules in `_redirects`).
4. Leave existing Pages projects untouched — this site does not use Pages.

## Notes

- Local preview defaults to port **3017** to avoid colliding with parallel destination builds.
- Schedule data is prepared but empty until verified arrivals are supplied — we do not invent cruise calls or emit empty year calendars.
- Tour inventory is sourced from Shore Excursions Group; descriptions are original editorial copy.
- `legacy:pages-deploy` is intentionally disabled.
