# Rldcoin: Open Mining and Payments Across Delayed Networks

Runlai Deng
dengrunlai@gmail.com
www.rldcoin.com
16 October 2026

**Abstract.** Rldcoin proposes an open proof-of-work payment network that does not depend on its founder, a designated planet, or a fixed validator committee. Any participant with a valid history, sufficient resources and working mining software may attempt to extend that history, even when no peer is reachable. Owners authorize payments; nodes validate every block; competing valid histories are resolved by cumulative work. This availability comes with reorganizations and conditional confirmation, not irreversible finality. Authenticated store-and-forward communication can carry transactions and history across intermittent and interstellar contacts, but cannot remove light-time, prove that an isolated node has the globally strongest history, or preserve every conflicting payment after reconnection. This paper defines the revised design and its release obligations. It is not an executable consensus specification, an implemented mainnet, or evidence of an operational interstellar route.

## 1. Purpose and scope

The primary requirement is replaceability: no founder machine, server, validator identity, directory or geographic origin is required for ordinary mining and payments. If only one eligible user node remains anywhere, it must not be refused solely because other participants are absent. It can construct valid transactions and attempt proof of work using its retained, independently validated history. Its rewards and payments remain conditional on that history being selected when other histories become available.

A node cannot distinguish the last surviving participant from one isolated by a partition or an attacker. Accordingly, the protocol does not promise a fixed block time, guaranteed mining income, absolute payment finality, or preservation of all disconnected branches. An offline recipient can be named in a transaction, but has not independently verified receipt. A wallet signature cannot be produced without its owner's authority, even if only one node remains.

The revision replaces the previous design's mandatory regional validator quorum, irreversible regional export/import baseline and three/five-second final-spendability target. It retains the monetary cap, zero initial allocation, deterministic issuance recurrence, owner authorization, exact accounting, explicit cryptographic versions and evidence-based release requirements. Existing signed networks and historical results are not upgraded by publication.

## 2. One currency and one selected history

A fresh genesis binds the currency identity, zero issued supply, protocol and suite versions, network kind, network discriminator, start time and initial target. The exact profile is RLD-SURVIVOR-1, specified in the companion consensus, operations and conformance documents [6]. Its published identity is a common starting point, not a permanently online issuer or permission service. Independent implementations use the same consensus domains; an implementation source hash is release evidence rather than a consensus identifier. A node verifies from genesis and does not accept balances supplied by an operator, relay or serialized cache as authority.

The baseline uses one proof-of-work history per currency. Earth, a spacecraft and another stellar system describe locations of participants, not separate issuance authorities. Any eligible miner can extend the same currency's history from any location. A partition can produce competing branches, but their rewards and balances are never added together. Replaying the selected valid branch determines issuance and spendable state.

This choice avoids inventing new money whenever a region becomes disconnected. It also means that independently growing branches do not provide permanent regional settlement autonomy: a branch may later lose selection. Independently final regional ledgers, bridges and cross-region minting rights are outside this baseline and require a separate conservation and reorganization design before adoption.

## 3. Mining, validation and chain selection

Mining is permissionless under the adopted rules. Ordinary block validity must not require approval from the founder or a fixed signer committee. A non-mining full node still verifies and relays; running a node alone earns no subsidy. A miner earns only the subsidy and permitted fees of valid blocks retained in the selected history, subject to maturity and later reorganization.

Every accepted block must satisfy its parent linkage, difficulty, proof of work, canonical encoding, size and resource bounds, owner signatures, input uniqueness, maturity and exact issuance rules. An invalid branch never wins, regardless of claimed work. For target T, each block contributes floor(2^256 / (T+1)); genesis contributes zero. A full node recomputes cumulative work from validated targets rather than trusting a peer's score. Among complete eligible valid branches it selects the greatest cumulative work; equal work selects the lexicographically smallest tip block ID. Peer count, geography and claimed uptime never confer weight. No confirmation-depth checkpoint prevents a valid deeper reorganization.

A reorganization removes the old suffix and executes the new suffix atomically. Displaced rewards cease to exist in the selected state. Displaced payments may be reconsidered only if their inputs and signatures remain valid; conflicting payments do not survive by combining balances. Wallets must report changed confirmations and conflicts. A backup, relay acknowledgment or previous local acceptance cannot override the selected ledger.

Security depends on actual work, communication and validation. A lone miner can continue computation but offers no independent resistance to a stronger competing history. A small or isolated network must disclose its exposure to withholding, eclipse, double-spend and majority-work attacks. Confirmations observed under isolation are not an estimate of unseen honest work.

## 4. Difficulty and single-node operation

A proof-of-work network permits a single miner to try; it does not guarantee that the miner can solve the current target promptly. For stable work rate H and required expected work W, expected block time is W/H, not a deadline. If H falls sharply, the next block can be much later than the nominal interval. There is no finite worst-case discovery time.

Survivor-1 fixes double-SHA256 header work, initial and maximum target 2^248-1, nominal spacing 600 seconds, and a 144-block adjustment window. At a parent height divisible by 144, the base target scales by the timestamp span of the preceding 144 mined blocks divided by 85800 seconds; the span is clamped to 21450 through 343200 seconds and the resulting target to 1 through 2^248-1. Other blocks inherit the parent's base target. A child timestamp must exceed its parent's timestamp and the median of up to eleven ancestors. Local activation defers a block more than 7200 seconds ahead of a reliable local clock; delayed old evidence has no maximum delivery age. All arithmetic and byte encodings are fixed by [6].

When the child timestamp is at least 14400 seconds after its parent, the same public consensus rule permits the maximum target. The recovery block receives only the work of that actual target; it does not inherit the harder base score or reset base difficulty. No peer-count claim, founder approval, quorum or emergency key is involved. At that maximum target a uniformly distributed header succeeds with probability 1/256 per distinct trial. This preserves a probabilistic path for a weak surviving miner, not a four-hour deadline. Repeated recovery blocks and reward maturity may still take many days. Timestamp manipulation, waiting attacks, work oscillation and withholding require independent analysis; the rule does not inherit Bitcoin's confirmation probabilities.

Single-node acceptance must therefore report eligibility, actual block discoveries, elapsed time, resource use and uncertainty. It must separately test loss of most mining capacity at a previously harder target. Passing an easy fresh-genesis example does not establish useful liveness after a production-scale collapse in work rate.

## 5. Ownership, transfer and confirmation

A payment spends explicitly identified outputs using their owners' signatures. All amounts are checked integers; inputs equal new outputs plus explicit fees. Unknown inputs, duplicate spends, invalid signatures, overflow and immature rewards refuse. Change belongs to the authorized owner. Fees move existing value and cannot expand supply.

Wallets distinguish created, submitted, relayed, included, confirmations observed, locally spendable, conflicted and reorganized. Confirmation count belongs to an exact selected block and observed history; it is neither a delivery receipt nor irreversible finality. A recipient independently validates the payment and its inputs before choosing whether to accept its risk. An actual subsequent payment demonstrates local execution, not immunity to a later reorganization.

The candidate baseline makes a reward created at height h eligible in a spending block at height h+100, including its associated miner fees. Ordinary outputs may be spent only in a later block; same-block child transactions refuse. Reorganization can remove both reward and descendants. One strict Ed25519 owner authorizes each transfer's ordered inputs, outputs, explicit fee and height expiry. The default expiry is the maximum u128 height, avoiding an unintended short deadline for interstellar carriage. User interfaces must not turn local maturity, an acknowledgment, cached balance or connectivity indicator into a final-settlement claim.

Offline recipients can receive an output addressed to their key without signing the receipt. They cannot independently confirm it until evidence reaches their node. Losing all valid history, necessary software, keys or resources is outside the single-surviving-node premise. No surviving node may spend somebody else's output without authorization.

## 6. Supply and issuance

The maximum supply is 100,000,000,000 RLD, exactly C = 10^35 runlai, with 1 RLD = 10^24 runlai. Genesis height 0 issues nothing and allocates nothing. The reserve belongs to the currency's deterministic schedule, not to the founder or to a planet. Any eligible miner may compete for the next selected block's reward; regional labels grant no extra reserve.

For height h >= 1, let L = 200000, era j = floor((h-1)/L), and slot k = (h-1) mod L. At era start R_j is the remaining reserve. If R_j >= 2, B_j = floor(R_j/2); otherwise B_j = R_j. Let q_j = floor(B_j/L) and m_j = B_j mod L. The reward is q_j + 1 runlai when k < m_j, otherwise q_j. A completed era leaves R_(j+1) = R_j - B_j. All arithmetic is checked integers. An incomplete era issues only rewards from its selected blocks. Reorganization recomputes the reserve from the replacement history; competing branches never accumulate independent supply.

```text
EraBudget(R):
  require 0 <= R <= 10^35
  return R if R < 2 else floor(R / 2)
Reward(R, k):
  require 0 <= k < 200000
  B = EraBudget(R)
  q, m = divmod(B, 200000)
  return q + (1 if k < m else 0)
```

Boundary vectors retain the original recurrence. With R_0 = 10^35, heights 1 through 200000 each issue 250000 RLD; height 200001 issues 125000 RLD. For R = 3, 2 or 1, slot 0 issues one runlai and the remaining slots issue zero; the next reserves are 2, 1 and 0. For R = 0 all rewards are zero. For R = 400003, slot 0 issues two runlai and every other slot issues one. The final one-runlai reserve is released once. No calendar, service receipt or compensation claim creates additional issuance.

For each fully replayed selected history, cumulative issuance equals the sum of all unspent outputs, including immature rewards, and never exceeds C. Fees are counted once through their recipient outputs. No baseline bridge reserve, imported duplicate balance or off-ledger compensation is allowed. Any future escrow extension must define mutually exclusive accounting and reorganization behavior. A supply cap does not guarantee price, liquidity, fair distribution or a funded long-term security budget.

## 7. Interstellar communication and payment

The transport target is authenticated, bounded store-and-forward. Nodes learn reachable neighbors, retain admitted transactions and evidence durably, and forward when a contact exists. Normal startup should support relay without a mandatory Earth directory. Bootstrap requires some prior trusted currency information and an actual contact or carried archive; discovery cannot manufacture connectivity.

A relay identity, route advertisement, packet digest or custody receipt grants no ownership or issuance authority. Survivor-1 defines signed origin packets, pinned neighbor identities, interactive challenge-bound delivery, offline one-way frames and signed destination-receipt return packets. Ground interactive links use pinned TLS 1.3 without downgrade. Origin identity, exact destination and bytes remain authenticated across forwarding; there is no claim of a complete signed physical path. Duplicate packets require exact-byte checks and durable custody before acknowledgment. Default carriage admission is 4096 packets and 256 MiB, separate from ledger history growth. Capacity refusal preserves existing obligations. A hop receipt alone cannot delete the last addressed copy; a valid destination receipt or explicit withdrawal is required. Message expiry never refunds a payment.

Cross-stellar payment in the baseline means carrying a transaction and enough authenticated history for the recipient to validate it on the same currency. It is not a separate destination mint. The receiving node must reconcile the received branch with its own valid history before reporting confirmations or spendability. Missing ancestors remain unresolved. An isolated sender's claim of greatest work is not proof that no stronger history exists elsewhere.

The earliest independent receipt is bounded by actual propagation and contact availability; prolonged or permanent disconnection can make delivery indefinitely pending. NASA's delay-tolerant networking and Bundle Protocol provide relevant transport techniques [2,3], but do not prove monetary finality, key longevity or route availability. Physical contacts, operators and storage must be qualified separately for each advertised route.

Long interstellar partitions can create deep competing histories. When contact resumes, cumulative-work selection may displace years of a weaker branch. The baseline therefore supports delayed transport and conditional payment verification, not guaranteed preservation of autonomous stellar economies. Useful interstellar settlement under realistic work distributions and latency remains an open acceptance problem. Merely increasing confirmation counts cannot remove this limitation.

## 8. Keys, archives and upgrades

Private keys remain with their owners. The candidate defines native encrypted wallet key files using fixed scrypt parameters and AES-256-GCM; a key file alone is not a complete wallet backup. Reviewed intent and input reservations are durable before signature release; exact retries recover the original signed transfer rather than first-signing again. Reorganization restores unresolved reservations when inputs reappear. Restore must validate full history and retained operations; an old backup cannot prove its own freshness. Without independently retained freshness evidence, the wallet discloses FRESHNESS_UNKNOWN and requires explicit local risk acknowledgment before signing; mining with an existing public reward key remains possible. Direct-key loss has no protocol reset or administrator compensation. Cross-device custody and hardware failure still require independent testing.

A usable survivor needs recoverable data. Nodes must specify archive retention, resource ceilings, pruning dependencies, full replay and recovery behavior. A digest identifies bytes; it cannot substitute for execution or recreate missing evidence. Test history beyond the first 200000-block issuance era, long partitions and deep reorganization within explicitly declared storage and CPU bounds. If an implementation cannot safely reconcile a history within those bounds it must refuse the affected operation and disclose the limitation, not fabricate acceptance.

Protocol, work algorithm, signature suite, hash and key-era identifiers must be explicit. Upgrades require public rules, compatible history interpretation and independently verifiable adoption. Unknown or expired cryptographic assumptions cannot authorize new acceptance. Post-quantum signatures, renewal and long-delayed revocation remain separate engineering and review obligations; their presence in a component does not qualify monetary use.

No finite cryptographic or storage test establishes a hundred-million-year guarantee. Long continuity requires funded maintenance, generational succession, media refresh, authenticated renewal and finite periods of requalification. Loss beyond recoverable evidence remains loss, not permission to issue replacement currency.

## 9. Threats and limitations

The principal threats are dominant or withheld work, network eclipse and partition, double spending, timestamp and difficulty manipulation, invalid-history flooding, storage exhaustion, key compromise, rollback, software supply-chain compromise and misleading payment displays. Every release must state which assumptions and attack budgets its evidence covers. Node count is not a measure of independent work or control.

An attacker may reorganize payments using stronger valid work; it cannot make an invalid signature or excessive subsidy valid. Economic loss can still occur even when all protocol rules execute correctly. Risk grows when a recipient cannot compare histories, when work is concentrated, or when a payment is accepted before competing work can propagate. Privacy is not anonymity: transaction graphs, contact metadata and addresses can reveal relationships.

The design cannot simultaneously provide unrestricted progress in every isolated partition, one consistent spend history and irrevocable acceptance of conflicting payments. This revision chooses continued local attempts and explicit reorganization. It does not silently inherit the older committee-finality or regional export/import guarantees. Optional bridges, channels and independent regional settlement require separately reviewed rules and cannot be advertised as baseline features.

## 10. Acceptance and release

G1 - Open participation and survivor operation. An independent user installs the published software, validates genesis/history, creates a wallet and mines without a founder service or fixed signer approval. Shut down the founder and every other fixture node; retain the survivor's original history and target. Demonstrate block discovery, mature reward spending, receipt and an actual second owner-authorized payment. Report failures, waiting times and the exact work assumptions. Repeat with different surviving participants and with a sharp loss of mining capacity.

G2 - Partition and convergence. Separate miners and owners, submit conflicting spends, extend both branches and reconnect. Verify exact cumulative-work selection, equal-work behavior, displaced rewards, transaction reconsideration and atomic cold replay. No invalid history wins and no branch balances are combined. Include eclipse, withholding, timestamps, oscillating work, invalid proofs and resource exhaustion.

G3 - Money and wallets. Verify the cap, zero allocation, all issuance boundary vectors, 100-block reward maturity, fees, checked arithmetic, signatures, backups, reorganization displays and cross-device recovery. Measure submission, inclusion, observed confirmations and recipient acceptance separately. Retain every valid submission and original clock; no success-only performance statistics.

G4 - Delayed transport. Use ordinary nodes and actual authenticated contacts to carry complete evidence through interruption, duplication, reordering, corruption, limited capacity and restart. Distinguish transport custody from locally accepted money. Test long logical delays and deep divergent histories; simulations do not qualify physical routes or elapsed cryptographic lifetime. Confirm that an offline-recipient output is never reported as independently received before verification.

G5 - Independent security and durability. Obtain independent protocol and implementation review, independent validation implementations and operators, reproducible builds, declared work/security budgets, full-history recovery beyond an issuance era, cryptographic upgrade and long-term archive plans. Resolve release-blocking issues; preserve negative evidence and exact source/profile bindings. A single developer controlling multiple keys is not independent qualification.

G6 - Authenticated release. Publish the executable consensus profile, adoption rules, audited artifacts, supported hardware/resource envelope and operating limits. Only then use a new signed zero-allocation genesis with fresh non-test custody and explicit release authorization. Test balances, test keys and old abandoned networks never migrate. Verify actual distributed packages and services. This publication authorizes no mainnet, real-money activity or automatic upgrade.

The complete candidate contract now defines canonical bytes, work and recovery, accounting, branch selection, durable transition behavior, wallet state and delayed transport. Its content-bound specification and public no-value vectors are [6]. G1 maps to T06-T07; G2 to T05/T08-T10; G3 to T01-T04/T11-T13/T17/T22; G4 to T14-T16/T21; G5 to T18-T20 and the independent review obligations; G6 to authenticated adoption and release. The I/S/R/A-G/N/P mapping explicitly records which historical finality/admission obligations are replaced and which security duties remain. The design is not ready for monetary deployment until these gates have concrete evidence. Development status belongs in the implementation plan; specification publication does not convert historical results or current code into qualification for this new profile.

## References

[1] S. Nakamoto. Bitcoin: A Peer-to-Peer Electronic Cash System, 2008. https://bitcoin.org/bitcoin.pdf

[2] NASA. Delay/Disruption Tolerant Networking. https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/

[3] S. Burleigh, K. Fall and E. Birrane. Bundle Protocol Version 7, RFC 9171, 2022. https://www.rfc-editor.org/rfc/rfc9171.html

[4] Bitcoin Developer Guide. Block Chain: Proof of Work and Forking. https://developer.bitcoin.org/devguide/block_chain.html

[5] NIST. Module-Lattice-Based Digital Signature Standard, FIPS 204, 2024. https://doi.org/10.6028/NIST.FIPS.204

[6] Rldcoin. Survivor-first protocol specification, RLD-SURVIVOR-1: consensus C01-C11, operations O01-O13, conformance T01-T22 and specification commitments. https://github.com/RunlaiDeng/rldcoin/tree/cf37a9e576f2f6ca581bff0201ce21c9c06cc3ab/docs/protocol/survivor-v1
