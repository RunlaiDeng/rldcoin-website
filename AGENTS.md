# Rldcoin public website

- This is the independent English website for rldcoin.com, not the protocol/node repository or the wallet application.
- Use the published genesis records and versioned protocol release as sources. Never copy private keys, local evidence, backups, operator files, or node data into this repository.
- The permanent Earth genesis is established (2026-09-22). The explicit regional PoW adoption enables mining and signed local transfers; one owner currently operates the deployment. Published pow-v1 records contain the retained legacy history, adoption and qualification evidence. Cross-region transfers and a consumer wallet remain unfinished. Update claims only from verified release evidence.
- Keep the network status feed read-only, bounded, pinned to the expected network, timestamped, and explicit about stale/unavailable data. It is operator telemetry, not independent verification.
- All navigation and calls to action must lead to real content. Do not add token-sale, wallet-connect, consumer-wallet-download, or price features without an authorized implementation.
- Verify the production build, status freshness/error paths, desktop/mobile navigation, and changed page rendering. Use the existing focused network tests when modifying status handling.
- Vercel project: rldcoin-website. GitHub repository: RunlaiDeng/rldcoin-website. DNS is managed by the owner; do not change it without an explicit request.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
