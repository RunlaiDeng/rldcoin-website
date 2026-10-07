# Website deployment and maintenance

The production site is [rldcoin.com](https://rldcoin.com). The
[rldcoin-website Vercel project](https://vercel.com/tradergalaxs-projects/rldcoin-website)
is connected to this repository through Vercel's GitHub integration, with `main`
as its production branch. A push to `main` can trigger an automatic deployment,
including a documentation-only push. Use the existing integration for releases;
do not upload local scratch files through a manual deployment.

The project uses Next.js and Node.js 24. The owner manages external DNS;
`www.rldcoin.com` redirects to the apex domain. Website maintenance does not
require changing DNS, the separate forum, or protocol/node services.

## Verify a release

From a Node.js 24 environment, install dependencies with `npm ci`, then run:

```sh
npm test
npm run build
npm run typecheck
npm run start -- --hostname 127.0.0.1 --port 3100
```

In a second terminal:

```sh
node scripts/check-site.mjs http://127.0.0.1:3100
```

The audit checks every sitemap page, a single main heading, distinct titles,
canonical URLs, local navigation targets, anchors and a genuine 404. For page
changes, also inspect desktop and mobile navigation, changed-page rendering,
table-of-contents anchors, relay/transfer interactions, keyboard operation,
reduced motion and browser errors.

Review the exact files in the commit before pushing. Exclude local instructions,
scratch output, development logs, keys, backups and node/operator data. Preserve
the media sources and bundled license notices.

After a website release, verify the deployment's exact commit and ready state,
then repeat the rendered audit against `https://rldcoin.com`. Compare the served
white paper Markdown and PDF with the approved hashes in the publication receipt.
A build or deployment status alone does not prove that the production alias
serves the intended content.

## Frozen publication

The white paper has no publication version label. Its canonical Markdown, PDF
and [immutable receipt](public/documents/rldcoin-whitepaper-freeze.json) are
frozen. Check their hashes without editing, relabeling or regenerating the files.
The PDF builder is retained tooling, not authorization to regenerate the frozen
publication. Its receipt binds content hashes and audit commits; preserve that
history.

The web reader uses the canonical Markdown. Future progress and defects belong
in separate implementation/risk records. A body correction requires an explicit
owner decision. Neither website maintenance nor an editorial separation may
lower the paper's normative acceptance requirements.

## Public claims

Use published genesis records and versioned protocol releases as sources. Keep
current testnet and separately scoped ground-candidate material distinct. Retain
failed scopes and the limits of custody, independent operation, cryptographic
horizons, real adapters and physical routes. The paper's long-term continuity
objective is not a verified security lifetime.

The node model calls for progressive signed neighbor discovery and durable
multi-hop relay. The published contact-spool ground prototype is a separately
started supplemental process. Transport receipt is distinct from ledger
acceptance; an illustrative Earth–Proxima Centauri–Andromeda topology is not an
operational route.

Diagrams show conceptual local networks joined by adjacent relays, including
stationary habitats and mobile carriers. Circles do not assert radio ranges or
physical overlap, and geometry/animation is not a distance or travel-time scale.
General diagrams use near-white surfaces and muted blue lines; white paper
figures use white backgrounds, black text and lines, and solid/dashed series.

The website has no mainnet feed or `/api/network` handler. The network page links
to operator testnet telemetry, which is not independent verification. English
is the only implemented language. No account, wallet connection, transactions,
analytics or tracking cookies are implemented; fonts are bundled locally.

A website release cannot initialize a ledger, authorize a mainnet, migrate test
balances or keys, change signing custody, or qualify a physical interstellar
route. A future mainnet requires a fresh signed zero-issuance genesis after
qualification.
