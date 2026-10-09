# Rldcoin website

The English public information website for [rldcoin.com](https://rldcoin.com).

## What is this repository?

This repository contains the website, concise design explanations, interactive relay and
transfer illustrations, and the [white paper reader](https://rldcoin.com/whitepaper).
Rldcoin is being developed as a peer-to-peer payment system across delayed
regions. The [protocol and node code](https://github.com/RunlaiDeng/rldcoin)
is maintained in a separate repository.

No mainnet has launched. Current testnets and ground candidates have no monetary
value and do not establish complete protocol qualification or an operational
interstellar route. The website implements no wallet connection or transactions.

## Development

Use **Node.js 24** and npm. The site uses Next.js App Router, React, TypeScript,
and CSS, with locally bundled Manrope and DM Sans fonts and Lucide icons.
Dependency versions are pinned in [package-lock.json](package-lock.json).

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production build

```sh
npm test
npm run build
npm run typecheck
npm run start -- --hostname 127.0.0.1 --port 3100
```

With that production server running, use a second terminal:

```sh
node scripts/check-site.mjs http://127.0.0.1:3100
```

The site has twelve primary content pages. Previous audience, research and
roadmap URLs redirect to the corresponding consolidated pages.

The existing test checks exact RLD amount formatting. The rendered-site audit
checks sitemap pages, headings, titles, canonical URLs, local links, anchors and
a missing-page response. For page changes, also check desktop and mobile
navigation, keyboard operation, reduced motion and browser errors.

## Repository layout

| Path                                             | Purpose                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------ |
| [src/app](src/app)                               | Pages, shared layout, styles, metadata and sitemap                 |
| [src/components](src/components)                 | Navigation, media, educational figures and interactive explorers   |
| [src/lib](src/lib)                               | Shared content, evidence links and amount formatting               |
| [public](public)                                 | Published documents, diagrams, brand assets, photographs and video |
| [tests](tests)                                   | Focused website tests                                              |
| [scripts/check-site.mjs](scripts/check-site.mjs) | Production-site link and metadata audit                            |

## Content maintenance

The [canonical white paper](public/documents/rldcoin-whitepaper.md) and its
[PDF](public/documents/rldcoin-whitepaper.pdf) have a separate
[revision record](public/documents/rldcoin-whitepaper-release-2026-10-09.json).
The production site provides only the current publication. Earlier artifacts and
receipts remain recoverable from Git history; they are not published downloads.
Body revisions require an explicit owner decision; preserve historical audit bindings. Keep implementation and qualification
records separate from the normative design.

Public claims must match published sources and retain their scope and failures.
The network page links to operator testnet telemetry; this is not independent
verification. Test balances and keys never become mainnet assets or authority.
Keep private keys, node data, operator files, backups and local development logs
out of this repository.

See [DEPLOYMENT.md](DEPLOYMENT.md) for release checks and the existing Vercel Git
integration. A push to `main` can trigger a website deployment; DNS is managed
by the owner.

## Contributing

Use [issues](https://github.com/RunlaiDeng/rldcoin-website/issues) for public
website bugs and [pull requests](https://github.com/RunlaiDeng/rldcoin-website/pulls)
for proposed changes. Include the purpose, affected pages and relevant checks.
Protocol implementation work belongs in the
[protocol repository](https://github.com/RunlaiDeng/rldcoin).

## License and media

Website source code is licensed under [Apache-2.0](LICENSE). Bundled fonts use
the SIL Open Font License and Lucide icons use the ISC License; notices are in
[licenses](licenses). Photographs and videos have separate source and usage
details in [MEDIA_SOURCES.md](MEDIA_SOURCES.md). Spacecraft imagery does not
depict a Rldcoin transaction or imply endorsement by the missions involved.
