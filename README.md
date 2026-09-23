# Rldcoin website

The independent English website for **rldcoin.com**.

Rldcoin is a peer-to-peer transfer system for humanity's interstellar future.
This site introduces the architecture, explains the permanent Earth launch,
links to published evidence, and provides a read-only network status display.

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
```

## Structure

- `src/app/page.tsx`: home page.
- `src/app/[slug]/page.tsx`: statically generated introductions, network,
  resources, roadmap, FAQ, and privacy pages.
- `src/app/api/network/route.ts`: bounded read-only server-side status fetch.
- `src/lib/network.ts`: public response validation and freshness rules.
- `src/lib/site.ts`: official links, identity pins, metadata, and FAQ content.
- `src/components`: navigation, original orbital artwork, transfer explainer,
  and status display.
- `public/documents/rldcoin-overview.md`: downloadable English overview.

## Network telemetry

The server fetches only `https://api.rldcoin.com/v1/pow/status`, with a
five-second timeout, no redirects, and a 16 KiB response limit. The expected
Zone, original manifest, explicit adoption, and regional chain identity must match. Only explicitly recognized fields are
returned. Successful responses may be cached for 30 seconds at the edge.

The browser refreshes every 30 seconds while visible. An observation older than
two minutes, stale hashing progress, unavailable storage, exhausted block capacity,
or a failed refresh cannot be presented as active mining. Random block discovery
is not a fixed heartbeat deadline. Exact decimal strings retain full integer
precision, including amounts below one RLD. Retained observations keep their
timestamps. This is operator telemetry, not an independent cryptographic verifier.

No wallet connectivity, transactions, registration, analytics, tracking cookies,
or secrets are used by the site. Fonts are bundled locally.

## Content authority

The permanent Earth genesis was established on September 22, 2026. The regional
PoW adoption explicitly replaces the original heartbeat-only rules, retaining
its complete authenticated predecessor history. The current release enables
mining and signed local transfers without personal allocation. One owner operates
the launch deployment. Cross-region settlement and a consumer wallet remain work
in progress; no deployed interstellar route is claimed.

Authoritative public records:

- https://forum.rldcoin.com/genesis/
- https://github.com/RunlaiDeng/rldcoin-genesis/releases/tag/earth-pow-v0.3.0

The protocol source lives in the **named runtime source release asset**. This
website is a separate repository and does not include node/private operator data.

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
