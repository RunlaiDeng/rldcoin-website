# Rldcoin: Interstellar Peer-to-Peer Payments

Runlai Deng
dengrunlai@gmail.com
www.rldcoin.com
19 October 2026

**Abstract.** A peer-to-peer currency used across distant habitats must separate the time needed to communicate from the authority to spend. We propose a system in which an open proof-of-work history determines one conserved supply, owners authorize transfers with digital signatures, and authenticated relays carry payments and their verification evidence through delayed or one-way contacts. Any capable full node can validate and attempt mining without a founder service or a designated committee. For connected participants, a fast payment layer can replace repeated block inclusion with signed updates against locked funds, while returning settlement and disputes to the underlying chain. Transaction fees provide income to miners without creating additional currency. Local fast states require their own enforceable funding, dispute and miner-fee rules. Interstellar transfers instead carry the original owner authorization and complete verification evidence without requiring a simultaneous connection or a return acknowledgment. We describe the accounting, chain selection, delayed delivery and security assumptions, and analyze the communication and settlement costs of seconds-scale local interaction and a workload of one hundred million payments per day. Local receipt remains conditional on its backing and selected history; it does not imply instantaneous interstellar delivery or irreversible settlement during isolation.

## 1. Introduction

A payment network spanning Earth, spacecraft and other stellar systems cannot depend on every participant observing the same recent event. A message may arrive after a long delay, a carrier may travel in only one direction, and a sender may leave before the recipient receives anything. Requiring a permanently reachable authority on Earth would make that authority a condition of payment everywhere. Allowing each disconnected region to create an independent copy of the same money would instead destroy conservation.

Rldcoin separates three operations: selecting a valid monetary history, authorizing a payment, and carrying evidence between participants. Proof of work selects among competing valid histories. An owner's signature identifies the exact value transfer it permits. Store-and-forward communication moves that signature and its dependencies without acquiring the right to spend or issue currency. The recipient executes the evidence locally before relying on the result.

The same separation makes two time scales possible. Connected participants can exchange funded payment states without waiting for a new block for every purchase. Distant participants exchange evidence when physical communication permits. The design workload includes seconds-scale local interaction and an aggregate of one hundred million payments per day; the analysis below distinguishes those aims from what the base chain alone can carry. Fast interaction does not remove the need for funding, settlement, usable routes or an enforceable exit.

Participation is open. A user needs authentic rules and history, computation and storage, rather than an account, stake, invitation, founder approval or compulsory pool. Ordinary personal computers can perform the public work function and construct their own block templates. Eligibility does not imply equal income or profitable CPU mining. If only one capable node remains, it can continue validating and attempting work, but cannot infer that no stronger unseen branch exists.

The following sections define the monetary history, payment authorization and delayed communication as separate mechanisms. The proposed fast layer additionally requires enforceable locked funds and settlement rules; a single-owner transfer alone does not provide them. All three mechanisms preserve the same supply, owner authorization and conservation constraints. Neither a transport format nor a local service can change these monetary rules.

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

The base work rule sets initial and maximum target 2^248-1, nominal spacing 600 seconds and an adjustment window of 144 blocks. At a non-genesis parent height divisible by 144, the base target scales with the timestamp span of the preceding 144 mined blocks, divided by the expected 85800 seconds. The span is clamped to 21450 through 343200 seconds and the target to 1 through 2^248-1. Other blocks inherit the parent's base target. A child timestamp exceeds both its parent's timestamp and the median of up to eleven ancestors. A local node defers activation more than 7200 seconds ahead of a reliable clock; delayed old evidence has no maximum delivery age.

If the child timestamp is at least 14400 seconds after its parent, the public rule permits the maximum target for that block. The recovery block receives only the work of its actual target, not the harder base score, and does not reset base difficulty. At the maximum target, a uniformly distributed header succeeds with probability 1/256 per distinct trial. No founder key, peer-count declaration or quorum authorizes this recovery.

This rule supplies a probabilistic path for a weak survivor, not a four-hour service guarantee. Repeated recovery gaps can make reward maturity slow: 100 gaps correspond to 400 timestamp-hours before additional random search time. Timestamp gaps are not proof of elapsed physical time, and the local future-clock allowance affects eligibility. Timestamp manipulation, withheld recovery branches, difficulty oscillation and early low-work reward concentration remain relevant threats. Bitcoin's confirmation probability model cannot simply be reused for different work and recovery rules.

Survivor operation preserves the ability to attempt computation. It provides no independent protection against stronger withheld work and cannot guarantee that every disconnected branch's economy survives reconnection. Zero allocation at genesis also does not, by itself, establish a fair distribution of subsequent rewards.

## 5. Payment verification and reorganization

An ordinary recipient independently verifies the transfer and its dependencies in the selected history. Its observations distinguish an authorized transaction, carriage, inclusion, confirmations and locally usable value. An acknowledgment that bytes were retained is evidence about transport, not evidence that those bytes create a spendable output. An offline recipient can be named without signing a receipt, but has not independently verified arrival until evidence reaches it.

A reward created at height h becomes eligible in a spending block at h+100, including its associated miner fees. Ordinary outputs become usable in subsequent blocks without this reward delay. Neither maturity nor confirmation count establishes the absence of stronger unseen work. A payment and an onward payment can both disappear if the history supporting them is displaced.

When a better valid branch arrives, the node removes the old suffix and executes the new one atomically. Displaced rewards cease to exist. Displaced ordinary transfers can be reconsidered in dependency order using their original signatures only where the exact inputs survive, are owned by the signer, mature, unspent and within the original height expiry. An expired transfer stays expired; conflicting spends do not merge. The ordinary no-short-expiry choice is height 2^128-1, so a wallet need not impose a short deadline on an interstellar transfer. Any earlier height chosen by the owner remains binding and is evaluated against the inclusion history, not a relay's clock.

For example, Alice can sign a payment to Bob using an input present before a partition. If that input remains unspent in the selected history after reconnection, the same signed intent can be offered again. If Alice instead spends a reward created only on the losing branch, Bob's receipt cannot restore the missing reward. Preserving an intention is different from preserving its backing.

The owner signs the exact currency, input references, ordered recipients and amounts, fee and expiry. Later evidence may describe another valid inclusion history, but a relay cannot substitute a key, increase the fee or change the intent. Wallet reservations and original signed bytes survive retries and branch changes; a new payment requires a new explicit owner decision. Fast-layer updates have their own authorizations and cannot silently rewrite an ordinary pending transfer or spend its backing twice.

## 6. Local fast payments

Waiting for proof of work on every purchase couples payment interaction to random block discovery. A funded payment channel offers a different arrangement: value is locked on the base chain, while participants exchange signed states describing how that value can be distributed [6]. Cooperative payments update those claims without putting every update into a block. The chain remains responsible for funding, settlement and dispute resolution.

For illustration, let a two-party state contain a funding reference, sequence number, balances b_A and b_B, and accrued miner-fee value F. For locked value L, the accounting relation is:

```text
b_A + b_B + F = L
A pays B amount v with protocol fee f > 0:
    b_A' = b_A - v - f
    b_B' = b_B + v
    F'   = F + f
```

The complete authorization binds the currency, funding, state sequence, payment and fee. The recipient retains a funded claim and the evidence needed to exercise it. The invariant prevents an update from inventing additional value, but does not by itself decide which of several signed states can be enforced. In particular, a signature on a newer state does not make an older, more favorable state impossible to publish.

A noncustodial channel therefore also needs a base-verifiable mechanism for resolving obsolete states, unavailable counterparties and unilateral exit. Existing channel designs use specific transaction conditions and monitoring/dispute assumptions [6]. The base single-owner transfer format has no such script or joint funding authority. The state above is a model of the proposed fast layer, not a base-chain spending condition. Its exact enforcement, canonical encoding, evidence availability and cross-mode reservation rules remain part of the extension's separate construction.

Where the funding and enforceable route already exist, interaction is governed by message exchanges, signature verification and durable state writes rather than a fresh proof-of-work discovery. A recipient can use an updated balance for another fast payment when the corresponding route and liquidity permit. This explains the possibility of seconds-scale local use without implying seconds-scale withdrawal to the base chain. First funding, depleted liquidity, a missing route or forced close can require substantially longer waits.

Fast service does not become a prerequisite for ordinary operation. A node without liquidity or an available channel peer can still validate, relay ordinary evidence and attempt mining. Conversely, a surviving miner cannot manufacture its absent counterparty's signature or guarantee a new block by a payment deadline. Fast claims remain exposed to base reorganization, and the wallet needs to distinguish them from selected-chain outputs and settled miner rewards.

## 7. Incentives and miner fees

Miners expend computation and energy to extend the selected valid history. The protocol compensates the successful block miner with scheduled issuance and the transaction fees assigned to that block. Each ordinary transfer conserves its inputs as recipient/change outputs plus a positive explicit fee. The block reward includes those fees; transferring existing value to a miner does not increase issuance.

The same economic direction applies to fast payments: each conforming payment owes a positive, owner-authorized protocol fee to miners. In the illustrative state above, F is reserved existing value rather than an unsecured promise of future payment. Settlement has to assign it to the miner or miners selected by exact public rules. An operator's private count or a batch hash cannot alone prove that every included payment paid its fee.

There is a further difficulty beyond summing balances. Parties might cooperate to close with a state that omits an earlier fee obligation, and an old-state dispute might expose another allocation. Preventing both fee erasure and duplicate claims requires a base-verifiable entitlement and a complete rule for settlement, closure and reorganization. The conservation identity in Section 6 does not solve this completeness problem. The full per-payment miner-fee construction remains open; ordinary payment channels do not automatically supply it, since channel-routing services can instead charge their own forwarding fees [7].

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

Communication is a sequence of contacts rather than a permanently open connection. A node may exchange data with a nearby habitat, a spacecraft or another relay, retain it through a long interruption, and forward it at a later contact. The sender and recipient need not be online together, and the individual contacts need never form one simultaneously connected path. Store-carry-forward networking provides the relevant communication model [2,3]. Radio, optical links and physically carried archives are possible media; none changes the rules determining value.

Nodes discover candidate neighbors through actual contacts and authenticated introductions. A new node still needs authentic currency rules and a first reachable peer or carried archive. Signed advertisements identify their issuer and claims, not the existence of a complete route or that issuer's honesty. Contact endpoints and trusted rules need independent authentication. There is no mandatory Earth directory, privileged relay or geographical issuance authority. A node can validate, relay and attempt mining with the material it already holds while other contacts are absent.

A payment travels as two logically separate objects: an immutable owner authorization and a replaceable collection of supporting evidence. The authorization fixes currency, inputs, recipients, values, fee and expiry as described in Section 2. Its identifier commits to those exact signed bytes. Supporting material includes the relevant genesis and rules, complete parent histories and the blocks establishing input ownership, maturity and any observed inclusion. A later carrier can add a valid history or a missing dependency without rewriting the payment or first-signing on the owner's behalf. A destination address is a payment key, not a physical place that a relay may silently substitute.

The recipient reconstructs and executes a complete history from the pinned genesis or an exact predecessor it has already fully validated under the same rules. Each new branch is checked before work selection. A header score, state root, archive manifest or relay signature identifies evidence but cannot supply unchecked balances. Missing or damaged dependencies leave the payment unverified. A compact proof can replace execution only under an additional explicitly defined soundness and data-availability construction; a hash alone is not such a proof.

Each carriage envelope binds its encoding version, currency, exact content digest and length, origin authentication and destination or forwarding purpose. Fragments also bind their position and the complete object's commitment. A receiver admits bytes only within declared resources and reconstructs the authenticated complete object before monetary use; pieces from different objects cannot be combined. Repeated fragments, duplicate packets and forwarding loops do not create payments. The same transaction may travel along several routes, but the selected history can consume its input only once.

Relays authenticate and durably retain accepted material before acknowledging custody. Admission can refuse a new object when storage or service capacity is exhausted; it cannot acknowledge a missing object or erase an existing obligation to make room silently. Dependency-first scheduling and bounded batches let a destination acquire a history across multiple contacts. Missing-material requests can improve a two-way exchange. A one-way sender instead has to provide the complete missing evidence or arrange its arrival through another carrier; it cannot assume that a request will return.

Transport retention, forwarding lifetime and the owner's height expiry are different. A transport service can have finite capacity and a declared retention agreement, but its local deadline neither cancels a released signature nor refunds value. If a carrier becomes unavailable, retained copies can be forwarded elsewhere. Permanent loss of all necessary copies prevents delivery or verification. A receipt can report durable byte custody; any report of inclusion must separately name the exact history, height and observation it describes. Neither report certifies that no stronger history exists.

Link authentication protects a contact; end-to-end authentication protects evidence across successive carriers [8]. The payer's spending key never needs to be given to a relay. Encryption may protect a payload's declared audience, but validation still needs authentic history and metadata can reveal routes, counterparties or timing. A compromised relay can withhold, replay or discard material, and can lie about its advertised route. It cannot forge the owner's authorization or make an invalid history valid through a transport receipt.

For a route with successive legs i, let w_i be contact waiting, d_i distance, v_i propagation speed, e_i the bytes to send and r_i usable transmission rate. For a serialized store-and-forward schedule, a simple arrival model is:

```text
T_arrival >= sum_i(w_i + d_i/v_i + e_i/r_i) + T_verify
v_i <= c
```

Pipelining can overlap some transfer and verification costs, so the sum is a model for that schedule rather than a universal bound. Every route still obeys causal propagation and needs usable bandwidth and a sequence of real contacts. The return acknowledgment follows its own route and adds its own delay. Bundle Protocol and its security extensions describe useful transport mechanisms [3,8]; using them does not create a monetary settlement rule or establish an operating stellar link.

## 10. Interstellar payment lifecycle

Consider Alice on Earth paying Bob in another stellar system, with a later payment from Bob to Carol. Before disconnection, Alice authenticates Bob's payment key and the currency identity, verifies her inputs against her selected history, and authorizes exact outputs plus a positive miner fee. Her wallet durably records the signed intent and reserves those inputs before releasing the authorization. The reservation protects an honest wallet from accidental reuse; it does not prevent a malicious owner from signing a conflict elsewhere.

Alice supplies that authorization and its verification dependencies to willing relays. Source inclusion may already be part of the evidence, but a source receipt or an Earth block is not a separate import authority. Once custody has been accepted, Alice can go offline. Each later contact carries the same authorization and whatever authenticated history is available. Bob can be offline throughout this journey. No counterpart signature, live Earth service or immediate return message is necessary to name him as recipient.

At arrival, Bob's node authenticates the currency and exact intent, assembles dependencies and independently checks the complete histories. It selects the valid eligible history with greatest cumulative work. Three outcomes matter. If that history includes Alice's transfer, Bob checks its unspent output. If it lacks the transfer but leaves Alice's exact inputs valid, mature, unspent and unexpired, the original authorization may be submitted for ordinary mining on that history. If those inputs no longer exist or have been spent, the payment is conflicted or unsupported; carriage cannot repair it. Evidence that has not yet arrived leaves the result pending rather than proving any of these outcomes.

After valid inclusion, Bob can authorize a payment to Carol using his output in a subsequent block. His node checks current ownership, availability and the same conservation rules; an incoming receipt alone supplies no spending authority. Bob's onward authorization and its complete dependencies can travel through another one-way route. Carol repeats the same independent verification. This continuation is how delayed payment becomes useful to a recipient, without inventing a destination mint or merely displaying a delivered file as money.

```text
Alice: authenticate currency and Bob's key; sign and reserve inputs
Relays: retain exact intent and dependencies; forward at later contacts
Bob: verify histories; select work; obtain valid inclusion
Bob: authorize an onward spend of the selected unspent output
Carol: independently verify that spend and its supporting history
Later contact: reconcile stronger histories; update all affected positions
```

These are conditional monetary positions. Bob may receive an Earth branch while miners in his system have extended a conflicting branch. Nodes validate both completely and select by work; they do not merge balances or choose Earth by location. If the winning branch preserves Alice's inputs, her original authorization may still be usable. If it removes Alice's source reward or includes a conflicting spend, Bob's output and Carol's dependent output can disappear. Reconsidering the original signed transactions does not restore losing rewards, extend expiry, substitute inputs or authorize compensation.

A return message is optional information. It can report custody or a particular validated inclusion observation and return by a different route after Alice reconnects. Its loss leaves Alice uncertain. Silence, a vanished route, elapsed wall-clock time and a delivery failure do not establish that her signature was never used. Reclaiming still-valid inputs requires another explicit owner-authorized transaction and ordinary chain selection; it is a conflicting spend, not a guaranteed remote cancellation. An expired signature also cannot undo an inclusion that was valid when mined.

Local fast payments and stellar carriage have different prerequisites. Bob and Carol can exchange fast states only where the required locked backing, available liquidity, reciprocal messages and enforceable dispute process exist. A route whose dispute interval is shorter than contact delay cannot provide a safe unilateral exit. The ordinary interstellar path therefore does not depend on a fast channel spanning the stellar gap. Fees for ordinary transfers reach the selected block's miner and mature with that reward; relay storage or transmission services, if purchased, require separate explicit payment terms.

Eventual usefulness assumes at least one sequence of willing contacts, recoverable authentic evidence, recipients able to validate it and sufficient mining opportunity for any needed inclusion. Consistent reconciliation additionally requires that competing valid work can eventually arrive. Delivery, a stable winning history and miner revenue have no finite unconditional deadline. Under indefinite isolation, nodes may keep validating and attempting payments, but cannot prove that another region has no stronger branch. Irreversible disconnected acceptance of the same reusable inputs would require a different exclusive-rights assumption; it does not follow from delayed transport.

## 11. Keys, storage and protocol continuity

Private spending keys remain with their owners. Authenticated encryption protects retained keys, while durable intent and input reservations precede signature release. Passwords and encryption parameters protect local custody; they do not change the authority of a signed payment. A key file alone does not describe all outstanding obligations. Exact retries recover an existing authorization; they do not first-sign a changed transfer. Losing a key gives no administrator authority to replace it or compensate its value.

Restore combines authenticated history, retained operations and separately retained freshness information. An old backup cannot prove it is the latest state. Without independent freshness evidence, the wallet exposes that uncertainty before new signing; mining with an existing public reward key remains a separate operation. Fast states add their own latest-state and dispute dependencies, so copying a balance is not a safe restore method.

A digest identifies evidence but cannot recreate missing bytes or replace execution. Storage, replay and recovery therefore remain costs of the system, particularly through deep branch changes and long disconnection. A node unable to verify a history within its resources has an unresolved verification problem, not permission to accept an operator's unchecked snapshot. Compact proofs require their own precisely stated soundness and evidence-availability assumptions.

Protocol, work, signature, hash and key-era identifiers distinguish cryptographic meanings over time. Upgrades require authentic rules, compatible historical interpretation and an independently verifiable adoption path. A hybrid or post-quantum signature name alone does not establish a safe monetary transition [5]. Nor does a finite key or storage construction establish a hundred-million-year guarantee. Continuity depends on maintenance, media renewal and generational succession; loss beyond recoverable evidence remains loss rather than new issuance.

## 12. Security and scaling analysis

The principal consensus threats are dominant or withheld work, eclipse and partition, double spending, timestamp manipulation, invalid evidence and resource exhaustion. More confirmations record additional observed work; they do not reveal work that has not arrived. Unlike the majority-work analysis for Bitcoin [1,4], this system also needs to account for its distinct recovery-target rule and long, asymmetric contacts before assigning any attack probability.

Consider one owner copying an input before isolation, then signing a payment to Bob and a conflicting payment to Carol. Without communication or an additional non-equivocation assumption, each recipient can receive an apparently consistent local history. If both receipts are treated as irrevocable, the same value can be accepted twice. Detecting the conflict later cannot make both earlier decisions conserved. A DAG, signature, local counter or relay acknowledgment does not remove the missing information. Rldcoin consequently permits local continuation and later reorganization, including removal of payments and their descendants.

The capacity arithmetic is independent of that consensus choice. Let P be daily completed payments, n the number of ordinary transfers that fit in a block after byte and verification limits, and tau the expected block interval under a stated work rate. For P = 100,000,000:

```text
average payment rate = P / 86400
                     = approximately 1157.41 payments/second
nominal base rate    = n / tau
nominal daily count  = 86400 * n / tau
```

These are capacity relations, not measured service. Random block discovery and changes in work rate affect actual inclusion. Increasing n or reducing tau changes propagation, verification, storage and work-security costs, especially for ordinary hardware and isolated nodes. An aggregate rate that excludes the evidence needed for independent execution understates the system's cost.

Repeated funded updates can reduce the number of separate base transactions. If each settlement carries b payments and usable settlement capacity is s per second, P/86400 <= b*s is a necessary rate condition for that simple model. For illustration only, s = 0.2 and b = 6000 imply 1200 payments per second before other costs. Funding, closure, fees, ordinary traffic and disputes consume capacity too. This arithmetic neither specifies an enforceable settlement nor establishes that this workload can be sustained.

Local interaction time similarly contains communication exchanges, verification, durable writes and any routing/retry delay. Removing a per-payment block wait can make this time seconds-scale where routes are funded and responsive. It cannot bound a disconnected peer's response, random base settlement or propagation across a stellar distance. Reported network volume would also have to distinguish distinct usable payments from copies and repeated attempts; a message counter alone says nothing about conserved payment capacity.

Growth has not vanished when updates stay off chain. Participants retain enforceable states and fee obligations, routes need liquidity, and forced exits can converge on a much smaller base. An aggregate fast rate is unsafe if the corresponding disputes cannot be included before their validity windows expire. State availability, unilateral exit under congestion, per-payment miner-fee completeness and ordinary-node verification cost are unresolved parts of the fast construction, not properties established by the accounting model. These limitations preclude treating the proposed daily workload as an achieved capability.

For a distant route, usable arrival is bounded by contact availability, dependency size, bandwidth, replay cost and reconciliation with competing work. A lighter branch can lose years of rewards after reconnection. Fast payments within that branch inherit the loss of their backing. The design therefore supports conditional monetary positions over delayed communication, while permanently autonomous stellar economies would need a different exclusive-rights and conservation argument.

## 13. Conclusion

We have described a peer-to-peer currency in which open proof of work selects monetary history, owner signatures define transfers, and authenticated relays carry the evidence needed for independent verification. Ordinary users can validate and attempt mining without a founder service. A surviving node can continue computation, while delayed reconnection may replace its branch and reverse unsupported rewards and payments.

Separating local interaction from base settlement provides a path toward fast, high-volume payments without requiring every purchase to wait for a block. Existing locked value, enforceable state updates, miner-directed fees and a credible unilateral exit are essential to that path. Their complete fast-layer construction is not supplied by the transfer-only base or by a throughput estimate. Across interstellar distances, the same currency can be carried only as quickly as real communication and validation allow. The interstellar mechanism covers absent senders and recipients, one-way multi-hop carriage, independent inclusion and onward spending, delayed receipts and reconciliation of conflicting histories. Its monetary result remains conditional on the selected work and recoverable evidence. It supplies no instantaneous agreement or irreversible settlement between disconnected worlds.

## References

[1] S. Nakamoto. Bitcoin: A Peer-to-Peer Electronic Cash System, 2008. https://bitcoin.org/bitcoin.pdf

[2] NASA. Delay/Disruption Tolerant Networking. https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/

[3] S. Burleigh, K. Fall and E. Birrane. Bundle Protocol Version 7, RFC 9171, 2022. https://www.rfc-editor.org/rfc/rfc9171.html

[4] Bitcoin Developer Guide. Block Chain: Proof of Work and Forking. https://developer.bitcoin.org/devguide/block_chain.html

[5] NIST. Module-Lattice-Based Digital Signature Standard, FIPS 204, 2024. https://doi.org/10.6028/NIST.FIPS.204

[6] J. Poon and T. Dryja. The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, 2016. https://lightning.network/lightning-network-paper.pdf

[7] Lightning Labs. Sending Payments. https://docs.lightning.engineering/lightning-network-tools/lnd/payments

[8] E. Birrane and K. McKeever. Bundle Protocol Security (BPSec), RFC 9172, 2022. https://www.rfc-editor.org/rfc/rfc9172.html
