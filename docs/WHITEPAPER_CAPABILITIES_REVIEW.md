# Source-bound capabilities and compact execution review

19 October 2026. Owner-authorized whitepaper/PDF/website revision. This is a
mechanism and editorial source review, not independent cryptographic review,
proof execution, node verification or monetary activation. Preserve the
prepared-payments predecessor receipt and artifacts in Git history.

## Issuance-permission invalidation

The previous receiving permit selected an exact interval predecessor, cursor and
anchor. Mint advanced that same identity while a distant permit traveled back.
Repeated preparation could therefore become stale before a claimant used it.

The revised receiving coupon binds a source, destination, acceptable roots,
slot-count ceiling, placement policy and finite proof/data limits. It does not
bind a future tile or moving head. Claim work binds stable generation and
placement anchor; Mint advances only its separate cursor and Mint anchor.
A source claim checks that its selected range is still unconsumed, atomically
closes the parent, creates only disjoint residuals and detaches an immutable
export. An unrelated later Mint cannot modify that ticket.

For example, with k=10 and selected range [100,120), Mint through k=11 leaves
both generation and claim placement anchor unchanged. Claim finalization then
retains [11,100) and [120,hi), and exports exactly [100,120). Slot 10 stays
consumed. If Mint reaches a selected slot before claim finalization, the local
claim fails; the coupon is not consumed and does not need stellar reapproval.
Another split can likewise invalidate local work. This is a deliberate local
conflict boundary, not a claim that all prepared work always succeeds.

## Payment-specific preparation

An exact-input draft cannot be finalized in advance of obtaining those inputs.
The prior draft, returning permit and final export could require three one-way
stellar legs for each payment, and changing inputs restarted that preparation.

The new finite coupon family commits recipient/use policy, exactly one source,
fees, amount/object limits, acceptance and funded resources. Inputs, change and
exact amount are selected later at the source. A received coupon is sufficient
to prepare a conforming payment locally and send it forward. Unknown sources,
unknown destinations and exhausted coupon inventories still require setup.

One-source binding is essential: a wildcard leaf accepted at two independent
sources would admit two debits for one reserved receiving position. Multi-source
services must reserve disjoint leaf inventories. Family IDs exclude the later
leaf root; final certificates bind one root and one funded N-leaf obligation.
Coupon-use authorization is separate from all actual monetary input signatures.
Source S[p] and destination R[p]/J[x] serialize one terminal use; authorized
source-certified closure prevents use before capacity can be released. Travel
time never expires a monetary obligation. Lost keys/authorities can strand
unused capacity; finite funding limits exposure, not that failure's possibility.

## Components and historical execution

The previous live component key required each Mint origin. At the unchanged
reward, even 100 RLD can involve portions of 19,505 rewards. Repeated cold causal
replay also grew with the complete execution graph rather than current payment.

The revised key is the exact canonical authority/configuration/epoch/key-policy
exposure set. Equal sets coalesce even across different Mint origins. Different
sets remain distinct. Each input class is separately conserved through exact
signed recipient/change/fee/retirement allocations. Applicable executing tags
are added before equality-based coalescing. Per-height key offsets authenticate
statements under the committed policy; they do not automatically create a new
class for each Mint. Slot uniqueness remains checked in the issuance state.

Recursive receipts prove full reference semantics and discharge every imported
and predecessor proof assumption. Public journals bind the candidate header,
state roots, batch, domain/configuration and current-material commitments. The
current QC is outside its own candidate proof; the next recursive step checks
that QC and the preceding receipt. This avoids proof/QC circularity. Outbound
material manifests exclude their enclosing header, receipt and QC. An export
requires proof-ready material before final debit; head changes cause local
retry under the same unused coupon. Proving can require batching or a local
admission barrier and may be expensive.

The reference adapter selects RISC Zero zkVM 3.0.6 SuccinctReceipt STARK recursion.
It requires exact trusted verifier/control roots, program image identities,
parameters, successful unconditional claim and journal binding. Unknown/fake/
conditional/unsuccessful/pruned-unbound receipts refuse. The RLD guest is not
implemented by this publication and no proof was generated or benchmarked here.
The backend documentation supports its receipt/composition facilities, not the
correctness or practical cost of an RLD program. Argon2 and all monetary/consensus
checks must occur in that authenticated relation, never an unchecked host claim.

Compact validity does not provide data availability. Full current component
tables, canonical exposure sets, appropriate authority/key material and state
access data remain available before onward-spendable credit. Different risk
classes, permanent duplicate-prevention maps, interval partitions and contracted
audit archives retain explicit size/funding obligations. No constant live-state
bound, infinite reserve, automatic cryptographic renewal or missing-data rescue
is claimed. A proof cannot detect an unseen separately valid quorum fork.

## Preserved monetary and safety invariants

- Sole native currency and all native fees: runlai (RLD), 10^24 atoms per RLD.
- Cap: 4096 * 1,000,000 * 5126953125000000000000 atoms = 21,000,000 RLD.
- Zero spendable genesis and zero founder/investor/treasury/validator allocation.
- Public ClaimRange uses proportional work and at most 256 selected slots;
  it pays no RLD. Every Mint slot pays once under unchanged Argon2 parameters.
- No retarget, halving, tail emission, loss/burn reissue or calendar guarantee.
- U+F=I-Z; I+B+Q=C; U+F+B+Q+Z=C on valid exclusive causal histories.
- PBFT fault/custody premises remain. Import and permanent rejection exclude
  each other; only certified rejection permits one source recovery.
- No timeout refund, arbitrary-authority trust or instantaneous stellar finality.

## Publication verification and scope

The canonical body contains mechanisms, assumptions and analysis. Review,
release records and development status are separate. Paper references contain
external primary work, not content from the rldcoin implementation repository.
The reader, FAQ, home, About, payment, safety and relay pages describe the same
new mechanisms; historical implementation evidence retains its own scope.

Publication checks comprise exact monetary arithmetic and source review,
canonical Markdown-to-PDF text comparison, page/figure visual inspection,
Next.js production compilation, existing rendered navigation/anchor audit,
accessible desktop/mobile interaction and actual production artifact hashes.
These checks do not execute the monetary construction or qualify a proof guest.
No protocol test fixtures or local protocol suites are added or run. No protocol
source, monetary genesis, keys, values, running nodes or mainnet are changed.
