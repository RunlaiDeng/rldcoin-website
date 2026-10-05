# Rldcoin website

The independent English website for **rldcoin.com**.

Rldcoin’s target is locally autonomous peer-to-peer payment between authorized
regions across delayed contacts. Content follows white paper 1.12 and its
mandatory I1–I12 acceptance requirements. Development uses a fresh value-free
testnet; a mainnet has not launched. Test balances and keys never become
mainnet assets or authority.

## Develop

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Before deployment:

```sh
npm test
npm run build
# With a production server running locally:
node scripts/check-site.mjs http://127.0.0.1:3100
```

## Structure

- `src/app/page.tsx`: home page.
- `src/app/[slug]/page.tsx`: statically generated introductions, network,
  resources, roadmap, FAQ, and privacy pages.
- `src/lib/network.ts`: exact amount formatting.
- `src/lib/site.ts`: shared navigation, metadata, reviewed public evidence pins and FAQ content.
- `src/lib/learning.ts` and `src/components/learning-page.tsx`: seven educational guides with contents navigation and source links.
- `src/components/public-evidence.tsx`: reviewed v54 ordinary success and v55 finite fault failure on the exact v53 runtime.
- `scripts/check-site.mjs`: rendered sitemap, metadata, local link and anchor audit.
- `src/app/whitepaper/page.tsx`: online paper from the same Markdown source as the PDF.
- `src/components`: navigation, original orbital artwork, transfer explainer,
  and status display.
- `public/documents/rldcoin-overview.md`: downloadable English overview.
- `public/documents/rldcoin-whitepaper.md` and `.pdf`: full paper and downloadable edition; regenerate the PDF with `scripts/build-whitepaper.py`.

## Network status and content authority

The network page describes testnet qualification and links to public testnet
telemetry. The obsolete mainnet feed, identity pins and status parser have
been removed; `/api/network` has no handler.
Operator telemetry is not independent verification.

Current content sources:

- `public/documents/rldcoin-whitepaper.md`: target architecture, I1–I12 and acceptance stages.
- https://github.com/RunlaiDeng/rldcoin/blob/main/docs/RLDCOIN_MASTER_PLAN.md
- https://github.com/RunlaiDeng/rldcoin/blob/main/docs/operations/EARTH_FRESH_TESTNET.md

Current protocol development is hosted at https://github.com/RunlaiDeng/rldcoin.
Historical archive links, source downloads and reproduction examples have
been removed from the website at the owner's request. Current development
source and the testnet guide remain available through the links above.

None of I1–I12 is fully qualified. Ground candidates, exact release adoption,
independent operations and physical-route evidence have separate scopes.
Resources contains current testnet and separately scoped ground-candidate
material. Obsolete mainnet records and downloads are excluded. Do not include private node, operator or wallet data in this site.

The website provides no wallet connectivity, transactions, registration,
analytics or tracking cookies. Fonts are bundled locally.

## Deploy

Vercel project: `rldcoin-website`, under `tradergalaxs-projects`.

```sh
vercel link --yes --project rldcoin-website --scope tradergalaxs-projects
vercel --prod --scope tradergalaxs-projects
```

Vercel uses the Next.js preset and Node.js 24. The owner configures external DNS
for `rldcoin.com`; `www.rldcoin.com` redirects to the apex domain. See
`DEPLOYMENT.md` for verified delivery details after initial publication.

## Design and licenses

The educational structure takes inspiration from bitcoin.org. All Rldcoin
wording, branding, orbital artwork, and layouts are original; no Bitcoin logos,
site assets, or payment claims are copied. Source code: Apache-2.0.
Manrope and DM Sans fonts: SIL Open Font License (distributed by Fontsource).
Lucide icons: ISC License. Dependency license files remain in their packages.
