# Website and current-whitepaper consistency review

Reviewed 20 October 2026. Scope: the thirteen website pages, their metadata and
navigation, both interactive diagrams and their state-dependent text, current
public document and figure paths, reader rendering and active figure generator.
This is a website content review, not protocol execution or independent security
qualification. The separate forum and externally linked historical protocol
records are outside the website publication scope.

## Current authority

The 19 October controller-mechanism publication record is unchanged:
`public/documents/rldcoin-whitepaper-release-2026-10-19-controllers.json`.

| Artifact | SHA-256 |
| --- | --- |
| Canonical Markdown | `252a280044856a599c4a7fb1e7913d08776aa79f172db64275339be760662639` |
| Canonical PDF | `2bc2d3158d0ca5fc4ea6ab00c6683b25d79a0b2ca59d1d0babcf33ae6dcaa720` |
| Authority-transfer figure | `e728e296442ae468fb5d3021fd9da1a083a64b07fa449f31add05fef35584bc8` |
| Issuance figure | `4e793fff4ee622282ad0ece014d51dc65831ff616f597d01750c5d990da4ca27` |

All four files remain byte-for-byte unchanged. The PDF has twenty pages; its two
figure pages were rendered and visually reviewed. All 191 rendered reader blocks,
including code and figure captions, match the canonical Markdown after whitespace
and markup normalization. Reader table-of-contents entries come from the current
headings; its mobile count now includes all 25 entries.

## Found and corrected

The prior page-only release left directly reachable public files outside normal
navigation. The old overview still stated a 100-billion cap, historical block
confirmation/maturity rules, channels and cumulative-work-era assumptions. Old SVGs
included the twelve-confirmation, four-signature checkpoint and six-successor
import path, a 2016-block channel challenge window, PoW catch-up and miner-fee
maturity diagrams. The old paper and superseded release receipts were also still
served, despite repository documentation stating otherwise.

- Replaced the two maintained Markdown guides with summaries of the current
  construction and its implementation boundary; added their real links to
  Resources.
- Retained thirteen superseded receipts, the prior Markdown/PDF, the two original
  guides and nine unused/obsolete SVGs byte-for-byte outside `public/`. The
  [historical inventory](../archive/whitepaper-history/inventory.json) records
  their exact prior URLs, retained paths, digests and sizes. The two maintained
  guide URLs now serve current summaries; the other 24 URLs return 404.
- Restricted active figure generation and reader figure registries to the two
  current canonical figures. The historical generator is retained outside the
  active publishing path. Exporting into a temporary directory reproduced both
  canonical SVGs byte-for-byte without changing the published figures or PDF.
- Changed the interactive carriage label to “Capsule” so it does not suggest
  that a proof alone supplies the complete payment material. Certified rejection
  remains distinct from a transport timeout.
- Explicitly labeled the preserved v54/v55 success/failure section as observations
  of an earlier regional prototype, not the current controller construction.
  Neither result nor its failure status was changed.
- Corrected the share image description to describe the actual ISS Earth image.

## Mechanism review mapping

| Current-paper subject | Website coverage | Paper sections |
| --- | --- | --- |
| One RLD identity, 21-million cap, zero allocations, unique slots | Home, About, RLD, FAQ, current overview | 3–3.3 |
| Local PBFT ordering distinct from public-work issuance | How it works, RLD, Safety, FAQ | 2–4 |
| Advance single-source capacity with future inputs unspecified | About, How it works, payment explorer, FAQ | 5, 8 |
| Independent controllers; pre-release cancellation; rejection-only recovery after release | How it works, payment explorer, Safety, current guides | 4–7 |
| Validity receipts distinct from quorum ordering and available data | How it works, Safety, Developers, FAQ | 4.1–4.3, 12 |
| Finite acceptance covers; authorized broadening; evidence for narrowing | RLD, How it works, Safety, FAQ | 9 |
| Durable custody and physical contacts distinct from import | Nodes & relays, relay atlas, payment explorer | 10–10.1 |
| Positive funded service/work-author fees; finite reserves | RLD, FAQ, current overview | 11 |
| Original controller custody across native handoff; finite renewal | Safety, FAQ, current guides | 13–14 |
| Publication distinct from implementation and qualification | Network, Developers, site-wide status, current guides | Publication record |

## Verification

Production compilation and TypeScript checks passed. Rendered navigation audit:
13 pages, 58 local link targets, 38 anchors, no failures. Desktop (1440 px) and
mobile (390 px) browser review covered all thirteen pages without page overflow
or broken loaded images. Figure dialog, zoom/close, payment outcomes and keyboard
selection were exercised; reduced-motion mode was enabled for mobile review.
No protocol runtime, monetary state, keys, network services or canonical manuscript
artifacts were changed. No local protocol test suite or new fixture was run.

Public claims remain conditional construction claims. Historical observations
retain explicit source, no-value and failure boundaries; no achieved latency,
throughput, independent custody or physical-route qualification was inferred.
