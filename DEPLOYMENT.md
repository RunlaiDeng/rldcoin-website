# Website deployment

Published September 22, 2026.

- Official site: https://rldcoin.com
- Alternate production address: https://rldcoin-website.vercel.app
- Repository: https://github.com/RunlaiDeng/rldcoin-website
- Vercel project: https://vercel.com/tradergalaxs-projects/rldcoin-website
- Production branch: `main`, connected through Vercel's GitHub integration.
- Framework: Next.js 16.3.5, Node.js 24.
- `www.rldcoin.com` redirects permanently (308) to `rldcoin.com`.

## DNS

The owner manages DNS at the external provider. Website work added project
domain bindings and a redirect, and did not edit DNS records.

The verified working records at delivery are:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 216.198.79.1 |
| CNAME | www | 98d8678424a66f2e.vercel-dns-017.com |

Vercel reported both domains correctly configured, with anonymous HTTPS access
to the official website and a working www redirect. Its configuration API also
lists `64.29.17.1` as an additional rank-one IPv4 target; the single A record
above was already accepted and serving the site. Recheck the project's Domains
settings before any future DNS migration.

The existing `forum.rldcoin.com` service is separate and remains the source for
the public genesis and network status feed.

## Verification

- Production build and TypeScript check passed locally and on Vercel.
- Five focused tests cover network identity validation, malformed metrics,
  stopped responses with missing ledger data, freshness, and key expiry.
- All 12 public pages returned HTTP 200 with a single main heading and a
  canonical URL on rldcoin.com; the custom missing-page route returned 404.
- The overview download, sitemap, robots file, SVG icon, and social image
  returned successfully. The social image was visually inspected.
- All 14 external destinations linked by the static pages responded successfully,
  including the exact source and binary release assets.
- Browser checks covered the desktop layout, dropdown navigation, cross-Zone
  explainer clicks and keyboard control, and 390-pixel mobile navigation without
  horizontal overflow.
- Initial dependency audit reported no known vulnerabilities.

## Status display

The public node can report `STOPPED` without a height, state root, or full
verification time. Those missing fields remain `null` in the website API and
are shown as unavailable; they are never converted to a zero balance or height.
The last reported operator state and observation time are always retained.
An old observation is labeled out of date even if it previously reported running.

The website does not restart the node, change genesis, activate rewards, or
enable payments. A website deployment is separate from node operation.
