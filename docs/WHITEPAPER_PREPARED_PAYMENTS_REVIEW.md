# Prepared-payment research revision

Owner scope: revise the whitepaper and official English website following the
architecture critique, retaining the sole native currency runlai (RLD) and the
21,000,000 lifetime cap. This publication changes neither protocol source nor
runtime. Existing no-value work, obligations and failures retain their own scope.
There is no monetary genesis, generated key, value migration or mainnet launch.

## Mechanism reconciliation

| Earlier issue | Revised mechanism | Remaining boundary |
| --- | --- | --- |
| Signed roots could stand in for valid money | Cold full causal execution, exact verified-prefix reuse, independent owner/work/value/interval checks | Accepted PBFT ordering can still equivocate above its fault bound; no unknown-source trust or succinct-proof claim |
| Merging spread all input risks | Explicit component allocations preserve origin and exact lineage for principal, change and fees | Real dependencies, metadata growth and acceptance discounts remain; no complete fungibility guarantee |
| Export preceded destination acceptance | Funded one-use ReceivePermit binds draft, fees, acceptance and expanded proof bounds | Preparation may need round-trip communication; quorum or evidence loss can strand value |
| Expiring unused reservations could race exports | Source S[p] atomically becomes Exported or Closed; only certified closure releases unused destination capacity | Lost source can strand resource reservations; outstanding capacity must be bounded and funded |
| D_0 chose issuance destinations | Public ClaimRange work and destination reservation; no administrative award path | D_0 availability, censorship, faster hardware and bootstrap trust remain |
| Whole strands limited future homes | Disjoint intervals retain root/slot identity; detach next min(256,remaining) prefix and consume parent | All remaining budget is finite; no merge, duplication, reset or guaranteed allocation to every community |
| No explicit ongoing archival funding | Positive fees, existing-RLD reserve accounting, liability-preserving custody handoff and sponsored admission | No finite reserve proves perpetual solvency or objective storage service |
| Old signing-key compromise | Finite per-height public-key tree, forward-evolving secret, exact retained responses, erasure and timely authenticated succession | Proposed operational construction, not independently analyzed erasure or post-quantum security |
| Broad impact claims | Separate physical carriage, monetary execution, exclusive ordering and adoption | No achieved latency/volume, world-impact guarantee or physical stellar route |

The work target remains fixed and unbenchmarked. There is deliberately no invented
calendar emission promise. Public placement is computation-weighted, not a
Sybil-free allocation per human. Claim work scales linearly in detached slots to avoid a constant-cost budget grab;
this imposes real preparation cost and cannot prove benign placement. Claims earn
no supply; each Mint event alone
pays its work author. Genesis spendable supply and all allocations remain zero.

## Conservation review

- Each root initially owns slots [0,1000000). Mint consumes one next slot.
- ClaimRange consumes the current parent and exports a selected next prefix [k,q), of 1 through min(256,h-k) slots,
  retaining only a nonoverlapping remainder. New IDs/anchors exclude their own
  resulting fields from the hashed transition body.
- Typed installation/rejection/recovery retains exact boundaries and lineage.
  Source permit use and destination terminal decisions prevent repeated moves.
- An unused permit's certified closure permanently forbids later source export.
- Payment principal, explicit fees, reserves and retirement use actual signed
  component allocations; no insurance/reserve amount is counted twice.
- Exact atomic arithmetic gives 4096 * 1000000 * 5126953125000000000000
  = 21000000 * 10^24. Full execution can reject invalid amounts even when signed;
  the global invariant still requires exclusive accepted histories.

## Publication verification scope

Source review, document extraction/rendering, arithmetic reconciliation,
production compilation and desktop/mobile navigation checks are proportional to
this document/website change. They are not protocol fault campaigns, runtime
payment tests, cryptographic proofs or independent review. Do not run protocol
fixture suites or generate monetary material to publish these documents.

The public revision receipt binds the final Markdown, PDF and shared figures.
Prior receipts remain historical. The paper stays standalone mechanism exposition;
source status and this implementation reconciliation remain outside its body.

## Completed local publication checks

The final canonical Markdown is SHA256
`2b9ea85b7bcbca9290dfc7551ceb60cdcbbeec986b19af5bb54e30308582b589`.
The 14-page PDF is SHA256
`d82eddf269e3262852ca7a0d5de7ac137cd66f75a87bdd9f75e6d293108e58b5`.
All 147 canonical body blocks matched PDF extraction. All pages were rendered
and inspected; detailed review included the title, work rules, both figures,
key succession and final references. Supply arithmetic matched in integer units.

Production build and TypeScript compilation passed. The rendered site audit
covered 12 pages, 50 local links, 32 anchors and 20 fetched resources, with zero
failures. Desktop and 390x844 mobile rendering, mobile contents/navigation,
transfer-tab keyboard selection, figure opening, reduced-motion behavior and
browser errors were inspected. Observed page widths remained within the viewport;
no browser errors were reported. The initially lazy first figure loaded when opened.
The reader no longer repeats its email/date block inside the body.

React review: changes preserve the existing server/client boundaries, hook order,
unique IDs, tab focus behavior, semantic controls and bundled dependencies. No
new request waterfall, mutable shared request state or additional library was
introduced. No protocol/local fixture suite or runtime payment campaign ran.
These checks establish document and website consistency only; they are not an
independent security review of PBFT composition, secret erasure or monetary code.
