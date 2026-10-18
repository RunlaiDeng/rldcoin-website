# Rldcoin: Interstellar Peer-to-Peer Payments

Runlai Deng
dengrunlai@gmail.com
www.rldcoin.com
18 October 2026

**Abstract.** A peer-to-peer currency used across distant habitats must separate the time needed to communicate from the authority to spend. We propose a system in which an open proof-of-work history determines one conserved supply, owners authorize transfers with digital signatures, and authenticated relays carry payments and their verification evidence through delayed or one-way contacts. Any capable full node can validate and attempt mining without a founder service or a designated committee. For connected participants, a fast payment layer can replace repeated block inclusion with signed updates against locked funds, while returning settlement and disputes to the underlying chain. Transaction fees provide income to miners without creating additional currency. The fast layer's fund enforcement and per-payment miner-fee construction remain distinct from the specified base protocol. We describe the accounting, chain selection, delayed delivery and security assumptions, and analyze the communication and settlement costs of seconds-scale local interaction and a workload of one hundred million payments per day. Local receipt remains conditional on its backing and selected history; it does not imply instantaneous interstellar delivery or irreversible settlement during isolation.

## 1. Introduction

A payment network spanning Earth, spacecraft and other stellar systems cannot depend on every participant observing the same recent event. A message may arrive after a long delay, a carrier may travel in only one direction, and a sender may leave before the recipient receives anything. Requiring a permanently reachable authority on Earth would make that authority a condition of payment everywhere. Allowing each disconnected region to create an independent copy of the same money would instead destroy conservation.

Rldcoin separates three operations: selecting a valid monetary history, authorizing a payment, and carrying evidence between participants. Proof of work selects among competing valid histories. An owner's signature identifies the exact value transfer it permits. Store-and-forward communication moves that signature and its dependencies without acquiring the right to spend or issue currency. The recipient executes the evidence locally before relying on the result.

The same separation makes two time scales possible. Connected participants can exchange funded payment states without waiting for a new block for every purchase. Distant participants exchange evidence when physical communication permits. The design workload includes seconds-scale local interaction and an aggregate of one hundred million payments per day; the analysis below distinguishes those aims from what the base chain alone can carry. Fast interaction does not remove the need for funding, settlement, usable routes or an enforceable exit.

Participation is open. A user needs authentic rules and history, computation and storage, rather than an account, stake, invitation, founder approval or compulsory pool. Ordinary ARM64 and x86-64 computers can perform the specified work and construct their own block templates. Eligibility does not imply equal income or profitable CPU mining. If only one capable node remains, it can continue validating and attempting work, but cannot infer that no stronger unseen branch exists.

The base rules are specified by RLD-SURVIVOR-1 [6]. The proposed fast layer requires an additional versioned fund and settlement construction; the base's single-owner transfer alone does not provide it. Keeping the two distinct avoids treating a proposed extension as authority to change an existing currency. Supply, owner authorization and conservation remain common constraints.

## 2. Transactions and one monetary history

A currency begins with a pinned genesis identifying its rules, network, initial target and zero allocated supply. A transfer names existing outputs, their owner, ordered destination outputs, an explicit fee and a height expiry. One strict Ed25519 owner signs the complete authorization. Values are integers in runlai, with 1 RLD equal to 10^24 runlai. Validation rejects unknown or repeated inputs, invalid signatures, overflow, immature rewards and unequal accounting:

```text
sum(input values) = sum(output values) + fee
```

All inputs are checked against the parent block's unspent-output set. An ordinary output can therefore be spent in a later block, while a transaction cannot spend another transaction's newly created output in the same block. Change is an explicit output authorized by the owner, rather than a balance inferred by a relay. The owner signature binds the currency and every signed field; transporting another copy cannot create another payment.

The currency has one selected proof-of-work history. Earth and another stellar system are locations of miners, not independent issuance authorities. Disconnection can produce competing branches, but their balances and rewards are never added. Each node executes the selected branch from genesis to determine issuance and spendable outputs. A peer's balance claim, serialized cache or header score is not a substitute for this execution.

Fast claims, when introduced, represent rights against value locked in that history. Locked backing and claims against it cannot be counted as two independent allocations. If a reorganization removes the backing, a fast-layer signature cannot recreate it. Independent regional mints and permanently final disconnected ledgers require different authority and conservation assumptions; they are not consequences of geographical separation.

## 3. Proof of work and open mining

A miner collects valid transfers, chooses its reward key, constructs a block and searches for a header satisfying the public target. The specified work is double-SHA256. Any participant can perform it without asking another signer to approve the block. A non-mining full node verifies and relays, but does not receive a subsidy merely for being online.

For target T, a valid block contributes floor(2^256 / (T+1)) units of work. Genesis contributes zero. Nodes independently validate parent linkage, target, work, signatures, input uniqueness, maturity, issuance and the resulting state commitment. Among complete, eligible, valid branches they select the greatest cumulative work. Equal work is resolved by the lexicographically smallest tip block ID. Node count, location and claimed uptime add no weight, and an invalid transaction cannot become valid through additional work.

A user can construct and verify its own template and choose a reward key while keeping spending keys separate. Pools and hosted services can be useful but are optional. Likewise, providing liquidity to a fast route is a different activity from mining; lack of a fast balance does not remove mining eligibility. Any adopted fast settlement has to be independently verifiable by base nodes rather than accepted because an operator or prover is trusted.

General-purpose computers can execute SHA256, but specialized hardware can execute it more efficiently. Open mining gives neither one-person-one-vote nor equal reward, and the protocol does not identify whether many machines belong to one person. A different CPU-oriented or memory-hard work function would change consensus and its work interpretation; its security cannot be inferred from its name or silently inherited from this profile.

## 4. Difficulty and survivor operation

Let H be a miner's stable trial rate and W the expected trials needed at the target. Expected discovery time is W/H. Discovery is random, so this expectation is not a deadline. A severe loss of work rate can leave a surviving miner eligible to participate while unable to find the next ordinary block promptly.

Survivor-1 sets initial and maximum target 2^248-1, nominal spacing 600 seconds and an adjustment window of 144 blocks. At a non-genesis parent height divisible by 144, the base target scales with the timestamp span of the preceding 144 mined blocks, divided by the expected 85800 seconds. The span is clamped to 21450 through 343200 seconds and the target to 1 through 2^248-1. Other blocks inherit the parent's base target. A child timestamp exceeds both its parent's timestamp and the median of up to eleven ancestors. A local node defers activation more than 7200 seconds ahead of a reliable clock; delayed old evidence has no maximum delivery age [6].

If the child timestamp is at least 14400 seconds after its parent, the public rule permits the maximum target for that block. The recovery block receives only the work of its actual target, not the harder base score, and does not reset base difficulty. At the maximum target, a uniformly distributed header succeeds with probability 1/256 per distinct trial. No founder key, peer-count declaration or quorum authorizes this recovery.

This rule supplies a probabilistic path for a weak survivor, not a four-hour service guarantee. Repeated recovery gaps can make reward maturity slow: 100 gaps correspond to 400 timestamp-hours before additional random search time. Timestamp gaps are not proof of elapsed physical time, and the local future-clock allowance affects eligibility. Timestamp manipulation, withheld recovery branches, difficulty oscillation and early low-work reward concentration remain relevant threats. Bitcoin's confirmation probability model cannot simply be reused for different work and recovery rules.

Survivor operation preserves the ability to attempt computation. It provides no independent protection against stronger withheld work and cannot guarantee that every disconnected branch's economy survives reconnection. Zero allocation at genesis also does not, by itself, establish a fair distribution of subsequent rewards.

## 5. Payment verification and reorganization

An ordinary recipient independently verifies the transfer and its dependencies in the selected history. Its observations distinguish an authorized transaction, carriage, inclusion, confirmations and locally usable value. An acknowledgment that bytes were retained is evidence about transport, not evidence that those bytes create a spendable output. An offline recipient can be named without signing a receipt, but has not independently verified arrival until evidence reaches it.

A reward created at height h becomes eligible in a spending block at h+100, including its associated miner fees. Ordinary outputs become usable in subsequent blocks without this reward delay. Neither maturity nor confirmation count establishes the absence of stronger unseen work. A payment and an onward payment can both disappear if the history supporting them is displaced.

When a better valid branch arrives, the node removes the old suffix and executes the new one atomically. Displaced rewards cease to exist. Displaced ordinary transfers can be reconsidered in dependency order using their original signatures only where the exact inputs survive, are owned by the signer, mature, unspent and within the original height expiry. An expired transfer stays expired; conflicting spends do not merge. The default ordinary expiry is the maximum u128 height, avoiding an unintended short deadline for interstellar carriage.

For example, Alice can sign a payment to Bob using an input present before a partition. If that input remains unspent in the selected history after reconnection, the same signed intent can be offered again. If Alice instead spends a reward created only on the losing branch, Bob's receipt cannot restore the missing reward. Preserving an intention is different from preserving its backing.

The owner signs the exact currency, input references, ordered recipients and amounts, fee and expiry. Later evidence may describe another valid inclusion history, but a relay cannot substitute a key, increase the fee or change the intent. Wallet reservations and original signed bytes survive retries and branch changes; a new payment requires a new explicit owner decision. Fast-layer updates have their own authorizations and cannot silently rewrite an ordinary pending transfer or spend its backing twice.

## 6. Local fast payments

Waiting for proof of work on every purchase couples payment interaction to random block discovery. A funded payment channel offers a different arrangement: value is locked on the base chain, while participants exchange signed states describing how that value can be distributed [10]. Cooperative payments update those claims without putting every update into a block. The chain remains responsible for funding, settlement and dispute resolution.

For illustration, let a two-party state contain a funding reference, sequence number, balances b_A and b_B, and accrued miner-fee value F. For locked value L, the accounting relation is:

```text
b_A + b_B + F = L
A pays B amount v with protocol fee f > 0:
    b_A' = b_A - v - f
    b_B' = b_B + v
    F'   = F + f
```

The complete authorization binds the currency, funding, state sequence, payment and fee. The recipient retains a funded claim and the evidence needed to exercise it. The invariant prevents an update from inventing additional value, but does not by itself decide which of several signed states can be enforced. In particular, a signature on a newer state does not make an older, more favorable state impossible to publish.

A noncustodial channel therefore also needs a base-verifiable mechanism for resolving obsolete states, unavailable counterparties and unilateral exit. Existing channel designs use specific transaction conditions and monitoring/dispute assumptions [11]. Survivor-1's single-owner transfer format has no such script or joint funding authority. The state above is a model of the proposed fast layer, not an accepted Survivor-1 transaction. Its exact enforcement, canonical encoding, evidence availability and cross-mode reservation rules remain part of the extension's unresolved construction.

Where the funding and enforceable route already exist, interaction is governed by message exchanges, signature verification and durable state writes rather than a fresh proof-of-work discovery. A recipient can use an updated balance for another fast payment when the corresponding route and liquidity permit. This explains the possibility of seconds-scale local use without implying seconds-scale withdrawal to the base chain. First funding, depleted liquidity, a missing route or forced close can require substantially longer waits.

Fast service does not become a prerequisite for ordinary operation. A node without liquidity or an available channel peer can still validate, relay ordinary evidence and attempt mining. Conversely, a surviving miner cannot manufacture its absent counterparty's signature or guarantee a new block by a payment deadline. Fast claims remain exposed to base reorganization, and the wallet needs to distinguish them from selected-chain outputs and settled miner rewards.

## 7. Incentives and miner fees

Miners expend computation and energy to extend the selected valid history. The protocol compensates the successful block miner with scheduled issuance and the transaction fees assigned to that block. Each ordinary transfer conserves its inputs as recipient/change outputs plus a positive explicit fee. The block reward includes those fees; transferring existing value to a miner does not increase issuance.

The same economic direction applies to fast payments: each conforming payment owes a positive, owner-authorized protocol fee to miners. In the illustrative state above, F is reserved existing value rather than an unsecured promise of future payment. Settlement has to assign it to the miner or miners selected by exact public rules. An operator's private count or a batch hash cannot alone prove that every included payment paid its fee.

There is a further difficulty beyond summing balances. Parties might cooperate to close with a state that omits an earlier fee obligation, and an old-state dispute might expose another allocation. Preventing both fee erasure and duplicate claims requires a base-verifiable entitlement and a complete rule for settlement, closure and reorganization. The conservation identity in Section 6 does not solve this completeness problem. The full per-payment miner-fee construction remains open; ordinary payment channels do not automatically supply it, since channel-routing services can instead charge their own forwarding fees [12].

A fee entitlement, its actual inclusion and its mature payout are different events. Settled miner fees retain the 100-block reward maturity rule. A losing branch removes its unsupported entitlements and payouts, and no unissued reserve or administrative compensation covers the loss. If no later block is discovered, a reserved fee is not a completed payout.

All protocol payment fees are directed to miners rather than a founder or treasury. Separately authorized optional services disclose their own costs; they cannot rename or divert the protocol fee. Routing, liquidity, evidence retention and any proof generation still consume resources. Their funding and miners' incentives to settle accumulated obligations are economic questions of the fast-layer construction, not consequences of merely declaring a fee field. Once issuance is exhausted, fees can remain a source of miner revenue, but no fee rule guarantees a sufficient perpetual security budget.

## 8. Supply and issuance

The maximum supply is 100,000,000,000 RLD, exactly C = 10^35 runlai. Genesis height 0 issues nothing and allocates nothing. The reserve follows the currency's deterministic schedule; it does not belong to the founder or to a planet. Any eligible miner may compete for a selected block's reward. Geographical labels create no additional reserve.

For height h >= 1, let L = 200000, era j = floor((h-1)/L), and slot k = (h-1) mod L. At the beginning of era j, R_j is the remaining reserve. If R_j >= 2, the era budget B_j = floor(R_j/2); otherwise B_j = R_j. Let q_j = floor(B_j/L) and m_j = B_j mod L. The reward is q_j + 1 runlai for k < m_j and q_j otherwise. A complete era leaves R_(j+1) = R_j - B_j. An incomplete era issues only the rewards of its selected blocks. Reorganization recomputes the reserve from the replacement history.

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

With R_0 = 10^35, heights 1 through 200000 each issue 250000 RLD; height 200001 issues 125000 RLD. For R = 3, 2 or 1, slot 0 issues one runlai and the remaining slots issue zero, leaving reserves 2, 1 and 0. R = 0 produces no reward. For R = 400003, slot 0 issues two runlai and the remaining slots one. The final one-runlai reserve is released once. Neither a calendar nor a delivery receipt creates issuance.

In a fully executed selected base history, cumulative issuance equals all unspent outputs, including immature rewards, and never exceeds C. A fast-layer accounting system also distinguishes the locked outputs from claims against them; the claims do not add supply. Fees move existing value between these rights. Branch balances, imported copies and off-ledger compensation cannot be added to the reserve. A cap constrains issuance, not market price, liquidity or the cost of securing the currency.

## 9. Interstellar communication

Communication uses authenticated store-and-forward rather than a permanently available central directory. A node learns reachable neighbors, admits bounded evidence into durable custody and forwards when a physical contact exists. Its bootstrap still needs authentic currency information and an actual contact or carried archive. Discovery cannot manufacture a link, and a neighbor's willingness to carry data is separate from permission to mine.

A portable ordinary payment consists logically of the exact signed transaction, its currency identity, dependencies and observations of inclusion histories [7]. Later evidence can change how the transaction is justified without changing what the owner signed. The collection is not a new coin, a destination mint or an authority certificate. Its concrete codec needs versioned canonical bytes and bounded assembly; giving it a name does not change the accepted transaction language.

The recipient resolves the evidence to complete native-validated history from the pinned genesis, or to an exact predecessor it has already fully executed under identical rules. Headers, manifests and state roots identify material but do not initialize a trusted balance. Missing material leaves verification unresolved. Exact-byte sharing can reduce duplicate storage, but cannot remove an unexecuted dependency or the need to authenticate it.

The ordinary forward path can operate without return traffic:

```text
Owner signs an exact intent and retains its reservation
  -> willing relays retain intent and complete dependencies
  -> recipient validates history and selects a local branch
  -> recipient observes a conditional usable payment
  -> recipient authorizes an actual onward payment
```

The sender can leave after a willing relay accepts durable custody. That transfers a byte-retention obligation, not guaranteed delivery or settlement. Dependency-first forwarding in bounded batches lets a fresh destination receive a prefix longer than one contact exchange. A receipt may return later by another route; permanent receipt loss leaves the sender uncertain rather than proving failure or authorizing a refund.

Survivor-1 specifies signed origin packets, pinned neighbors, challenge-bound interactive delivery, offline one-way frames and destination-receipt return packets [6]. Ground interactive links use pinned TLS 1.3 without downgrade. Origin and exact bytes remain authenticated, but this does not prove a complete physical path. Route advertisements cannot choose trusted genesis, connection endpoints or certificate pins. Duplicate bytes still require durable custody before acknowledgment, and capacity refusal preserves existing obligations.

For distance d and propagation speed at most c, newly authorized information cannot arrive sooner than d/c, before contact waiting and verification. A fresh destination may also need a large chain prefix. NASA's delay-tolerant networking and Bundle Protocol provide relevant transport techniques, not monetary finality or an operational route by themselves [2,3,8]. Remote arrival, return acknowledgment and base settlement consequently have different clocks.

A stellar locality may use fast payment within a connected area where its backing and dispute assumptions hold. It cannot assume that a protocol requiring return messages or a monitoring deadline works over a one-way or indefinitely disconnected leg. Ordinary delayed evidence carriage remains available independently of such a fast route. Local speed creates neither another issuance authority nor protection against stronger work received after years of isolation.

## 10. Keys, storage and protocol continuity

Private spending keys remain with their owners. The native wallet uses encrypted key files with fixed scrypt parameters and AES-256-GCM, while durable intent and input reservations precede signature release. A key file alone does not describe all outstanding obligations. Exact retries recover an existing authorization; they do not first-sign a changed transfer. Losing a key gives no administrator authority to replace it or compensate its value.

Restore combines authenticated history, retained operations and separately retained freshness information. An old backup cannot prove it is the latest state. Without independent freshness evidence, the wallet exposes that uncertainty before new signing; mining with an existing public reward key remains a separate operation. Fast states add their own latest-state and dispute dependencies, so copying a balance is not a safe restore method.

A digest identifies evidence but cannot recreate missing bytes or replace execution. Storage, replay and recovery therefore remain costs of the system, particularly through deep branch changes and long disconnection. A node unable to verify a history within its resources has an unresolved verification problem, not permission to accept an operator's unchecked snapshot. Compact proofs require their own precisely stated soundness and evidence-availability assumptions.

Protocol, work, signature, hash and key-era identifiers distinguish cryptographic meanings over time. Upgrades require authentic rules, compatible historical interpretation and an independently verifiable adoption path. A hybrid or post-quantum signature name alone does not establish a safe monetary transition [5]. Nor does a finite key or storage construction establish a hundred-million-year guarantee. Continuity depends on maintenance, media renewal and generational succession; loss beyond recoverable evidence remains loss rather than new issuance.

## 11. Security and scaling analysis

The principal consensus threats are dominant or withheld work, eclipse and partition, double spending, timestamp manipulation, invalid evidence and resource exhaustion. More confirmations record additional observed work; they do not reveal work that has not arrived. Unlike the majority-work analysis for Bitcoin [1], this system also needs to account for its distinct recovery-target rule and long, asymmetric contacts before assigning any attack probability.

Consider one owner copying an input before isolation, then signing a payment to Bob and a conflicting payment to Carol. Without communication or an additional non-equivocation assumption, each recipient can receive an apparently consistent local history. If both receipts are treated as irrevocable, the same value can be accepted twice. Detecting the conflict later cannot make both earlier decisions conserved. A DAG, signature, local counter or relay acknowledgment does not remove the missing information [9]. Rldcoin consequently permits local continuation and later reorganization, including removal of payments and their descendants.

The capacity arithmetic is independent of that consensus choice. Let P be daily completed payments. For P = 100,000,000:

```text
average payment rate = P / 86400
                     = approximately 1157.41 payments/second
base nominal count   = 128 / 600
                     = approximately 0.213 transfers/second
base nominal daily   = 18432 transfers
```

The base also limits a block to 262,144 bytes [6]. Its nominal full-count rate is an illustration, not a guaranteed random-discovery service rate. Putting one hundred million ordinary transfers directly into this format is inconsistent with these limits. Shortening the interval or increasing block size changes propagation, verification and work-security costs, particularly for ordinary hardware and isolated nodes.

Repeated funded updates reduce how often a payment needs a separate base transaction. If each settlement carries b payments and settlements have usable base capacity s per second, then P/86400 <= b*s is a necessary settlement-rate condition for that simple model. Allocating the entire nominal base transaction count would require an average of approximately 5426 payments per settlement to match the proposed daily workload. This optimistic arithmetic leaves no capacity for funding, other traffic or disputes; channel lifecycle costs and the concrete settlement encoding can make the requirement larger. It is not a throughput result or proof that a suitable construction exists.

Local interaction time similarly contains communication exchanges, verification, durable writes and any routing/retry delay. Removing a per-payment block wait can make this time seconds-scale where routes are funded and responsive. It cannot bound a disconnected peer's response, random base settlement or propagation across a stellar distance. Reported network volume would also have to distinguish distinct usable payments from copies and repeated attempts; a message counter alone says nothing about conserved payment capacity.

Growth has not vanished when updates stay off chain. Participants retain enforceable states and fee obligations, routes need liquidity, and forced exits can converge on a much smaller base. An aggregate fast rate is unsafe if the corresponding disputes cannot be included before their validity windows expire. State availability, unilateral exit under congestion, per-payment miner-fee completeness and ordinary-node verification cost are unresolved parts of the fast construction, not properties established by the accounting model. These limitations preclude treating the proposed daily workload as an achieved capability.

For a distant route, usable arrival is bounded by contact availability, dependency size, bandwidth, replay cost and reconciliation with competing work. A lighter branch can lose years of rewards after reconnection. Fast payments within that branch inherit the loss of their backing. The design therefore supports conditional monetary positions over delayed communication, while permanently autonomous stellar economies would need a different exclusive-rights and conservation argument.

## 12. Conclusion

We have described a peer-to-peer currency in which open proof of work selects monetary history, owner signatures define transfers, and authenticated relays carry the evidence needed for independent verification. Ordinary users can validate and attempt mining without a founder service. A surviving node can continue computation, while delayed reconnection may replace its branch and reverse unsupported rewards and payments.

Separating local interaction from base settlement provides a path toward fast, high-volume payments without requiring every purchase to wait for a block. Existing locked value, enforceable state updates, miner-directed fees and a credible unilateral exit are essential to that path. Their complete fast-layer construction is not supplied by the transfer-only base or by a throughput estimate. Across interstellar distances, the same currency can be carried only as quickly as real communication and validation allow. The result is conditional payment under explicit trust, work and communication assumptions, rather than instantaneous agreement between disconnected worlds.

## References

[1] S. Nakamoto. Bitcoin: A Peer-to-Peer Electronic Cash System, 2008. https://bitcoin.org/bitcoin.pdf

[2] NASA. Delay/Disruption Tolerant Networking. https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/

[3] S. Burleigh, K. Fall and E. Birrane. Bundle Protocol Version 7, RFC 9171, 2022. https://www.rfc-editor.org/rfc/rfc9171.html

[4] Bitcoin Developer Guide. Block Chain: Proof of Work and Forking. https://developer.bitcoin.org/devguide/block_chain.html

[5] NIST. Module-Lattice-Based Digital Signature Standard, FIPS 204, 2024. https://doi.org/10.6028/NIST.FIPS.204

[6] Rldcoin. Survivor-first protocol specification, RLD-SURVIVOR-1. https://github.com/RunlaiDeng/rldcoin/tree/cf37a9e576f2f6ca581bff0201ce21c9c06cc3ab/docs/protocol/survivor-v1

[7] Rldcoin. Interstellar open-payment requirements. https://github.com/RunlaiDeng/rldcoin/blob/725a5392135862b94446bbb7767699bde7d2f6c4/docs/protocol/INTERSTELLAR_OPEN_PAYMENT_REQUIREMENTS.md

[8] E. Birrane and K. McKeever. Bundle Protocol Security (BPSec), RFC 9172, 2022. https://www.rfc-editor.org/rfc/rfc9172.html

[9] Rldcoin. Interstellar exclusive rights: candidate and security boundary. https://github.com/RunlaiDeng/rldcoin/blob/d9cdf6245609b0bb62f1d1d7f976a212ffd26f4a/docs/research/INTERSTELLAR_EXCLUSIVE_RIGHTS.md

[10] J. Poon and T. Dryja. The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, 2016. https://lightning.network/lightning-network-paper.pdf

[11] Lightning specification. BOLT 5: Recommendations for On-chain Transaction Handling. https://github.com/lightning/bolts/blob/master/05-onchain.md

[12] Lightning Labs. Sending Payments. https://docs.lightning.engineering/lightning-network-tools/lnd/payments
