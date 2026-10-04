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
```

## Structure

- `src/app/page.tsx`: home page.
- `src/app/[slug]/page.tsx`: statically generated introductions, network,
  resources, roadmap, FAQ, and privacy pages.
- `src/lib/network.ts`: exact amount formatting.
- `src/lib/site.ts`: current links, metadata, and FAQ content.
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
- https://github.com/RunlaiDeng/rldcoin-genesis/blob/main/MASTER_PLAN.md
- https://github.com/RunlaiDeng/rldcoin-genesis/tree/main/earth/testnet-20260930
- https://github.com/RunlaiDeng/rldcoin-genesis/tree/main/research/2026-09-30

The public v26 reproduction entry is pinned to publication commit
`40d5e7a216b2f89033bcfb11671ff311a3b8ab75` and links the 254-file segmented checkpoint and
paged-event candidate. Its 139 distinct native tests comprise 138 frozen tests
and one long-store test against byte-identical native workspace source; 60 frozen
process tests pass. Ordinary native storage reaches 1,029 blocks / 1,025 signed
payments and exact cold/private fresh-target ledger recovery. The real CLI test
reaches 361 blocks with cross-region return and permanent duplicate-import refusal.
A separate twelve-node bounded BFT cycle and 762.388-second fresh fault profile
pass; stopped cold audits and private recovery reports accompany the publication.
The unanimous segmented and original BFT profiles retain distinct authority and
history bounds. Prior transport checks use identical source and were not rerun.
`/developers#reproduce-v26` links commit-pinned source, manifests and checksums;
old anchors and v21/20/19/18/17 historical evidence links are retained.
Generated private images and signer/wallet/caller state are excluded. Archive,
complete-evidence and permanent-index capacities remain bounded. BFT long history,
independent latest anchors, power loss and cross-device signing custody remain
open. Test balances never migrate. The historical autonomous-cycle link stays v16.

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

Revision 16 separately reproduces V3/TCP-V4 bounded archives, 78 transport and 36 process/HTTP checks, 24 native replays and complete cold archive authentication. Three real SIGKILL boundaries preserve exact evidence. Power loss, sustained load/faults, cross-host operation and independent custody remain unqualified. Prior guide anchors remain available.
