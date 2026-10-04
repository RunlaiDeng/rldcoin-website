# Rldcoin — Final design and implementation overview

Reviewed 4 October 2026. The [final white paper](https://rldcoin.com/whitepaper) is the normative authority: 21 chapters, 18 architecture rules, 24 risk records with operational obligations, embedded acceptance gates and 39 references. The [frozen PDF](https://rldcoin.com/documents/rldcoin-whitepaper.pdf) and [publication receipt](https://rldcoin.com/documents/rldcoin-whitepaper-freeze.json) bind the approved text to hashes and its audit commit. This overview is a maintained explanation, not a replacement for the paper.

## Purpose and current availability

The target is one conserved currency for locally verified payments in human communities, habitats and spacecraft, with owner-authorized onward and return transfers through asynchronous contacts. Local progress requires the region's actual security and communication assumptions. Mutually isolated groups cannot both safely finalize conflicting spending.

Development uses no-value testnets and separately admitted ground fixtures. There is no launched mainnet, token sale, qualified consumer wallet or physical interstellar payment service. Test balances and keys never become mainnet assets or authority. None of I1–I12 is fully qualified. A future mainnet requires an accepted authenticated executable profile, independent qualification and a fresh signed zero-issuance genesis.

## Regional authority and consensus

CurrencyRoot and RegionAdmission bind genesis, issuance, rules, validator membership, governance and suite policies. Every approval or recovery role needs independently held identities, quorum, scope, predecessor and conflict/activation rules before qualification; absent authority fails closed. Discovery and coin ownership grant no finality or issuance authority. Membership admission remains a disclosed trust boundary.

The target baseline is independent Byzantine regional finality: n = 3f + 1 equal-weight validators, at most f Byzantine, and 2f + 1 approved votes for each required quorum under a reviewed locking/view-change protocol. Signers durably preserve locks and signing intent; certified ledger installation is atomic. Old/new epoch changes bind the identical closed prefix and carried locks. Missing quorum stops affected finality-dependent transitions. Sections 5–9 retain the historical Earth PoW/four-of-four checkpoint reference; a new target adoption is not constrained by that example and cannot retroactively alter its signed genesis.

## Value and provenance

The cap is 100 billion RLD, with 10^24 integer runlai per RLD, zero initial allocation and no regional reissuance. Section 6's exact integer recurrence, boundary and terminal vectors bind origin rewards; arithmetic and parsing must be checked.

On compatible selected histories, I = U + E + T with mutually exclusive buckets. U includes immature and quarantined unspent value; E includes channel escrows and adopted fee reserves; T includes every selected source export debit, even before finality, until unique destination credit. Fees are assigned once. Only finalized debits with complete admitted ancestry can be imported. Orphaned unfinalized debits reverse atomically; ordinary reorganization cannot undo finalized debits. Import atomically records permanent ExportID consumption and credit.

Proof dependencies form a finite causal DAG rooted in authenticated issuance. An onward or return journey creates a new debit/import identity; a proof ring cannot authenticate itself. Every payment, split/merge, change, fee and channel output commits the union of input provenance. Disputed lineage taints an entire mixed output and all reachable descendants, including received local balances. Affected spending, channel value transitions, imports and exports stop while liabilities and evidence remain retained. Resumption needs pre-adopted recovery authority and complete compatible replay. Timeout, expiry and missing receipts never refund a finalized debit; cancellation is excluded from the baseline.

## Wallets, channels and recovery

Wallets must distinguish review, reservation, submission, inclusion, source finality, transport custody, unique import, maturity, quarantine and onward eligibility. After restore, signing requires a surviving independent fresh monotonic witness; common rollback leaves inspection read-only and signing/spending refused. Owner recovery and inheritance require a policy authorized before the loss. No operator can invent recovery authority.

Channels need preauthorized challenge-fee reserves, local monitoring, exact conservation and qualified restart freshness. For close height c and window W, challenges run from c + 1 through d = c + W inclusive and settlement requires h > d. Challenges do not extend d; same-sequence conflicts trigger isolation. Exhausted reserves stop new receipts or insufficiently funded challenges. A reserve cannot guarantee affordable fees or overcome censorship; a distant watchtower cannot beat a local deadline.

## Bounded transport and continuing service

Every normally started full node must discover and relay admitted evidence in its ordinary lifecycle within declared resource limits. Real first contacts, signed candidate paths and store-carry-forward do not establish monetary admission, current reachability or ledger acceptance. Custody contracts bind objects, retention, horizon, capacity, payer and legal release conditions, separately from owner archive duties. A transport receipt cannot erase custody obligations. Capacity or funding exhaustion stops the affected service without destroying value evidence.

Proof, storage, decompression, graph, signature-work, CPU/RAM/disk, queue, retry and recovery limits are mandatory. Relay, validators, archives, watchtowers and recovery have declared payers, reserves, minimum service and insolvency stop rules. No free unlimited transit, endless archive retention or finite delivery deadline under permanent disconnection is promised.

The 100-million-year continuity goal is an objective, not a demonstrated lifetime. Independent archives, hardware/disaster recovery, authenticated key/suite/epoch succession, proactive renewal and causally delayed revocation remain qualification duties. Freezing the paper does not freeze executable protocol versions. Defects, experiments and risk changes belong in separate records; material changes require scoped requalification.

## Evidence and acceptance

Section 20 embeds A–G, I1–I12, N1–N10 and P1–P8 gates plus pre-mainnet decisions. Two independent verifiers, reproducible builds, supply-chain provenance, device/archive recovery and complete operational risk obligations are mandatory. Each R1–R24 record includes adversary, assumptions, mitigation, residual risk, detection, affected value, recovery authority, safe stop, payer and tests. Documentation, hash publication or a same-owner fixture does not establish full implementation. Failed runs cannot be cleared by deadline extensions, threshold reductions or repetition without a bounded causal hypothesis.

### Historical reviewed public evidence

At public evidence commit `74f16276605823e8c84b67a66d5ff23134a86c8a`, the [v54 ordinary cycle](https://github.com/RunlaiDeng/rldcoin-genesis/tree/74f16276605823e8c84b67a66d5ff23134a86c8a/research/2026-10-04/regional-joint-loop-cycle-v54) passed with pinned v53 runtime. The [v55 finite fault scope](https://github.com/RunlaiDeng/rldcoin-genesis/tree/74f16276605823e8c84b67a66d5ff23134a86c8a/research/2026-10-04/regional-joint-loop-fault-v55) failed its restored-contact import/maturity deadline. Separate stopped checks preserved that failure. Same host/controller results do not establish independent operation, sustained BFT, long history or physical routes; newer local work is outside this historical public snapshot.

## Inspect the actual scope

- [Architecture](https://rldcoin.com/how-it-works), [payments](https://rldcoin.com/payments), [wallets](https://rldcoin.com/wallets) and [limits](https://rldcoin.com/you-need-to-know)
- [Node and relay model](https://rldcoin.com/node-network), [research](https://rldcoin.com/research) and [mandatory roadmap](https://rldcoin.com/roadmap)
- [Current development summary](https://rldcoin.com/network) and [public no-value testnet](https://github.com/RunlaiDeng/rldcoin-genesis/tree/main/earth/testnet-20260930)
- [Test-node guide](https://rldcoin.com/run-a-node), [developer reproduction](https://rldcoin.com/developers) and [participation](https://rldcoin.com/participate)

Operator telemetry is not independent verification. No mainnet or physical interstellar route is qualified by this website.
