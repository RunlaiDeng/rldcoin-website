# Rldcoin — Current mechanism overview

Reviewed 20 October 2026 against [Rldcoin: Interstellar Peer-to-Peer Payments](https://rldcoin.com/whitepaper), dated 20 October 2026. The [current publication record](https://rldcoin.com/documents/rldcoin-whitepaper-release-2026-10-20-prefix.json) binds the canonical Markdown, PDF and two figures. This guide summarizes that construction; it is not an implementation or performance certificate.

## One RLD currency and a finite issuance budget

runlai (RLD) is the sole native payment, fee and service currency, with 10^24 atomic units per RLD. Its proposed lifetime cap is 21,000,000 RLD. Spendable genesis and all founder, investor, treasury and validator allocations are zero. Import relocates existing RLD without wrapping it or creating another domain supply.

The fixed budget contains 4,096 roots of 1,000,000 unique slots. Each successful Mint consumes one eligible slot and pays its work author 0.005126953125 RLD. Public range-claim work can detach at most 256 unconsumed slots for relocation; claiming issues no RLD and replaces no later Mint work. Stable placement grants preserve unrelated claims through source splits. Installation or return changes the grant for only the selected slots, preserving their identities.

The proposed work profile is Argon2id version 19, 64 MiB, three passes, one lane and a 32-byte output, with a base target of 2^240 - 1. Range-claim difficulty scales with the number of selected slots. Work distributes issuance; it does not choose payment consensus or grant validator votes. There is no automatic retarget, halving, tail emission, lost-money reissue or calendar exhaustion guarantee. CPU admission establishes neither profitability nor ASIC resistance.

## Local settlement and exclusive homes

Each balance has one authoritative home. A domain is an authenticated state machine, not a geographic monopoly. Distinct domains can circulate distinct locally homed funds during isolation while their accepted quorums and resources remain responsive. A minority partition waits. Copying a ledger or carrying a private key cannot create local authority over remotely homed money.

The baseline ordering profile is PBFT with n = 3f + 1 admitted validators and at least 2f + 1 distinct commits under the complete locking and view-change rules. Exact owner authorization and valid execution remain mandatory. Ordinary certified local outputs can be used in the next valid command; the current construction does not impose the older block-confirmation or mining-maturity rules on those payments.

## Advance receiving capacity, then local preparation

A destination preissues finite funded ReceiveCapability coupons. Each binds exactly one source, recipient policy, object/amount limits, accepted covers, fees, proof/current-data bounds and funded custody. Future payment inputs and the future source head remain unspecified. Unknown sources, new destinations and exhausted inventories require setup; one-way payment does not eliminate this preparation cost.

The payer later authorizes exact inputs, outputs, cover assignments and fees. Native preparation locks the exact escrow and delegates it to an independent one-decision controller. Historical proving continues while the ordinary native ledger advances. Separate key pools, durable locks and funded capacity constrain controllers; outstanding controllers retain their original authority across native handoff.

Before release, an authorized Canceled controller decision permits one local redemption; performed preparation service remains paid. Exported can finalize only when its required execution receipt and complete material are ready. The controller cannot both cancel and release under the stated safety assumptions.

## Import, rejection and recovery

Relays carry the released package through real contacts. The destination checks execution receipts, matching quorum certificates, creation and coupon binding, acceptance policy and complete current data. It imports or permanently rejects once. After import, the recipient can pay locally without a return message.

After release, only certified permanent destination rejection permits one source recovery under the original fee terms. Silence, a deadline, transport expiry or a missing receipt cannot restore source spending rights. Missing data, unavailable authority or a failed physical path can leave funds pending or stranded.

## Execution proofs and explicit acceptance covers

Recursive execution receipts summarize monetary validity under an authenticated RLD program. Matching PBFT certificates separately establish ordering under accepted fault assumptions. Validity proofs cannot expose an unseen, separately valid quorum fork. The named RISC Zero reference profile is not an implemented or independently qualified RLD monetary guest; concrete image identities and practical costs still need evidence.

An immutable acceptance cover defines finite accepted authority families and security rules. Execution proves that actual ancestry fits the cover. Same-cover amounts can coalesce. Broadening requires explicit owner authorization and verified inclusion; narrowing needs additional ancestry evidence. An incident can quarantine the whole covered portion. Shared RLD denomination guarantees neither uniform acceptance nor equal market value.

## Fees, custody and continued service

Owner-initiated local and cross-domain payments include a positive RLD service fee and a positive share for a verifiable prior Mint work author, funded from exact authorized existing balances. The work-author share is at least one atomic unit. Funded sponsors may pay on an owner's behalf. Mint itself requires no RLD admission fee.

Service terms cover consensus, verification and archival reserves. Relay and renewal contracts use existing RLD under finite funded terms. Complete current data, permanent decisions, controller responses and audit custody retain costs. Exhaustion stops new unsupported obligations while old pending liabilities remain; it cannot authorize a refund or replacement issuance.

Normal node operation includes bounded authenticated discovery and store-carry-forward carriage. Route hints and custody acknowledgments grant no monetary authority. Physical contacts, finite cryptographic horizons, secure custody and funded succession remain necessary. Finite reserves do not buy perpetual operation.

## Read further

- [Payment walkthrough](https://rldcoin.com/how-it-works)
- [RLD and issuance](https://rldcoin.com/rld)
- [Nodes and relays](https://rldcoin.com/node-network)
- [Safety and limits](https://rldcoin.com/you-need-to-know)
- [Current development scope](https://rldcoin.com/network)
- [Implementation summary](https://rldcoin.com/documents/rldcoin-implementation-status.md)

Earlier public artifacts are preserved byte-for-byte in the website repository's separate historical archive and Git history. They are not current mechanism authority. Existing test assets have no monetary value and never migrate into a monetary genesis. No active mainnet or operational interstellar payment route is established by this publication.

## Counted state commitments

State collections use counted compressed binary prefix trees. Branches bind the first differing key bit, common prefix, ordered child hashes and counts. Persistent updates retain unchanged branches; membership and ordered-neighbor absence proofs keep a finite 64-branch admission bound. Roots commit permanent monetary decisions and counters. This reduces root recomputation work without replacing complete current material, funded archives or authenticated execution, and establishes no measured throughput.
