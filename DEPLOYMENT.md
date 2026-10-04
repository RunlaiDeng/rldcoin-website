# Website deployment

Configuration reviewed 4 October 2026.

- Official site: https://rldcoin.com
- Alternate production address: https://rldcoin-website.vercel.app
- Repository: https://github.com/RunlaiDeng/rldcoin-website
- Vercel project: https://vercel.com/tradergalaxs-projects/rldcoin-website
- Production branch: `main`, connected through Vercel's GitHub integration.
- Framework: Next.js 16.3.5, Node.js 24.
- `www.rldcoin.com` redirects to `rldcoin.com`.

The owner manages external DNS. Website content updates do not require changing
DNS, the separate forum, or any protocol/node service.

## Verify a release

Run the existing amount-format test, TypeScript check and production build.
Start the built site locally, then run:

```sh
node scripts/check-site.mjs http://127.0.0.1:3100
```

This audits every sitemap page, one main heading, distinct titles, canonical
URLs, local navigation targets, exact anchors and a genuine 404. The current
site has 23 content pages. Browser verification additionally checks desktop and
mobile navigation, new guide rendering, table-of-contents anchors, the existing
relay/transfer illustrations, reduced-motion behavior and console errors.

Push only the explicitly reviewed website files. The repository includes private
local scratch output under untracked `tmp/`; it is not publication material.
Prefer the existing Git integration so deployment uses tracked source. Confirm
the production deployment's exact commit and READY state, then repeat the rendered
site audit on `https://rldcoin.com`. Compare the served white paper Markdown and
PDF bytes with the local reviewed documents. A successful build or READY state
alone does not prove that the production alias serves the new content.

## Content and operating status

White paper 1.12, dated 4 October 2026, is the current design source. The reviewed
public evidence snapshot is `74f16276605823e8c84b67a66d5ff23134a86c8a`: v54's
ordinary return passed; v55's subsequent finite fault scope failed. The stopped
audit does not change that outcome. Historical v26 and v16 guides remain scoped
and accessible. Newer private experiments are outside this snapshot.

The website has no mainnet feed or `/api/network` handler. The network page is a
reviewed development summary, with a separate link to operator testnet telemetry.
It is not a live availability monitor or independent verification. No account,
wallet connection, analytics or tracking cookies are implemented; fonts are local.

A website release cannot initialize a ledger, authorize a mainnet, migrate test
balances, change signing custody or qualify a physical interstellar route.
