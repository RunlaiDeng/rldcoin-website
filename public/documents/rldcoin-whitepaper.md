# Rldcoin: Interstellar Peer-to-Peer Payments

Runlai Deng

dengrunlai@gmail.com · www.rldcoin.com
19 October 2026

**Abstract.** A payment system spanning worlds cannot require every purchase to wait for a distant vote. We describe one native currency, runlai (RLD), whose spend authority is partitioned before disconnection and transferred through authenticated evidence. Each output has one authoritative home. Local Byzantine consensus resolves conflicting spends; an independent monetary verifier reconstructs the execution supporting a payment rather than trusting a signed balance. A destination first reserves a specific receiving obligation. The source then surrenders spendability, and a complete export package can travel through one-way contacts. The destination permanently imports or rejects the ticket; only certified rejection permits source recovery. Amounts retain separate dependency components instead of indiscriminately merging their risks. A fixed budget of twenty-one million RLD is divided into non-overlapping work entitlements that can be publicly claimed and subdivided without creating another unit of supply. We give the transitions, conservation argument, resource obligations and remaining trust boundary. The construction permits local circulation during inter-domain isolation and onward spending without a return receipt. It does not make conflicting remote histories independently distinguishable during silence, recover funds from a destroyed authority, guarantee equitable mining, or remove the need for finite cryptographic and operational assumptions.

## 1. A payment system for separated worlds

A community should be able to pay a local worker while another world is unreachable. A ship should retain its prepared economy after departure. An authentic payment arriving through a succession of contacts should not need another interstellar round trip before its recipient can spend it. These requirements concern both communication and the location of conflict authority.

A globally preferred greatest-work history can eventually discard a competing branch [1]. It cannot also promise that every independently advancing branch of an indefinitely divided economy will remain final. We therefore assign each spendable output one home before use. Distinct homes can continue with distinct funds. Two partitions of the same home cannot both acquire its balance by declaring themselves independent.

The currency is runlai, ticker RLD, for principal, native fees and service escrows. Moving funds creates neither a wrapped currency nor a domain-issued substitute. The lifetime cap is 21,000,000 RLD, with zero spendable genesis supply and zero founder, investor, treasury or validator allocation. Denomination does not establish purchasing power.

The payment claim has two parts. Monetary execution can be independently checked: input ownership, issuance work, amounts, fees and authority transfers follow public rules. Exclusive ordering still needs an accepted conflict authority: a proof that a transaction is valid does not prove that another valid transaction spending the same input was never certified elsewhere. Separating these statements avoids treating either a signature or a validity proof as a solution to every fault.

This is peer-to-peer payment in the sense that owners authorize exact payments, any willing party may carry evidence, and there is no compulsory central payment intermediary or continuously reachable Earth directory. Local settlement uses explicitly admitted validators. Automatic trust in arbitrary new committees and universal permissionless consensus are not supplied by the term peer-to-peer.

## 2. Model, identities and assumptions

A domain is an authenticated replicated state machine, not a geographical monopoly. Several domains may coexist on a planet, and a ship can form its own domain. A stable descriptor binds the common currency identity C_RLD, initial validators, consensus and encoding rules, cryptographic suites, resource bounds, fee schedules and authorized succession. A self-asserted location or relay address is not that descriptor.

Identifiers are constructed before the objects that sign them. A stable domain ID hashes an initial identity statement containing an identity public key and nonce, not its later configuration, key trees or its own digest. The monetary descriptor names D_0 by that identity and fixes the initial logical slot intervals; C_RLD excludes subsequent certificates and state roots computed from C_RLD. Initial configuration attestations and key-tree roots bind those already fixed identifiers. A recipient's accepted anchor authenticates the complete initial descriptor; a second configuration claiming the same identity is not silently adopted. This ordering avoids circular genesis, key-tree and certificate commitments.

The baseline local consensus is PBFT with n = 3f + 1 distinct admitted validators, the prepare, commit, view-change and new-view rules of [2], and at least 2f + 1 distinct commit messages for a finalized sequence position. Messages additionally bind C_RLD, the stable domain, configuration, sequence, view, exact operation-batch digest and predecessor state. Ordinary owner operations are deterministic PBFT commands. A signed state root without the protocol's commit conditions is not finality. A different consensus suite requires a separately identified profile and authenticated adoption, not a local reinterpretation of a certificate.

Every relevant configuration assumes at most f Byzantine validators, correct deterministic validation, authentic keys, collision-resistant hashes and durable non-rollback consensus state. Safety does not require a timely stellar response. Liveness requires a responsive local quorum, eventual communication conditions sufficient for PBFT, fair bounded admission and funded resources. These are obligations of the accepted domain, not consequences of a radio connection.

An owner may control several keys, carriers may duplicate or lose messages, and an adversary may reorder contacts, lie about routes, submit conflicting spends or withhold evidence indefinitely. Owners need not be online simultaneously. A minority partition waits. A single surviving validator has no authority to replace a failed quorum; a deliberately single-validator domain has no Byzantine replication tolerance.

Receiving policies select acceptable configuration histories and maximum exposures before accepting funds. An available descriptor with identical rules is not automatically a trusted ordering authority. Threshold compromise, including applicable historical-key compromise, remains outside the safety claim. A finite cryptographic horizon, recoverable complete evidence and an eventual physical path are prerequisites of the corresponding verification and delivery claims.

## 3. Money with one authoritative home

One RLD equals 10^24 atomic runlai units. Amounts are nonnegative bounded integers; no floating-point rounding participates in authorization. C_RLD commits to one authenticated monetary genesis, the denomination, the complete issuance budget, work rules, retirement rules and succession restrictions. Matching a name or ticker is insufficient. A rule change cannot create a second supply under another identifier and call both balances the same RLD.

A spendable output binds its identifier, currency, owner policy, home domain and an ordered vector of monetary components. A component contains an amount, its original issuance event and an authenticated dependency lineage. Components are accounting parts of the same RLD amount, not independently priced protocol tokens. Their sum is the output's amount. Only the current home can consume the output. Every actual input owner signs the complete allocation of its components to recipient outputs, change, explicit service fees and retirement.

The local state contains unspent outputs U, exports E, permanent destination decisions J, receiving reservations R, source permit-use decisions S, issuance intervals A, configuration history and service escrows. All maps are committed by the executed state. No public observation of a remote balance is signing authority. Every operation has a typed action tag, exact predecessor and unique identifier. Payment, permit, issuance and service-object namespaces are distinct.

## 3.1. A fixed, divisible issuance budget

The cap is C = 21,000,000 RLD = 21 x 10^30 atomic units. There are N = 4096 budget roots, each containing L = 1,000,000 slot identities. Slot (s,j), with 0 <= s < N and 0 <= j < L, can pay rho = 0.005126953125 RLD = 5126953125000000000000 atomic units once. N times L times rho equals C exactly. All successful Mint rewards go to the bound work author. There is no presale, reserve withdrawal, validator subsidy, halving, tail emission or replacement issuance for lost or retired money.

An active entitlement is a half-open interval (s,[k,h)) at one home, with an authenticated identity, opening anchor and complete placement lineage. Its remaining budget is (h-k) rho. Mint consumes its first slot k. Allocation can separate a prefix [k,q) from a remainder [q,h), but must consume the parent interval atomically. Descendant intervals never overlap, consumed slots never return, and a new home or new identifier cannot reset j. Intervals with the same root remain distinct objects unless a separately specified operation proves their exact disjoint union; this baseline has no merge operation.

The finite 4096 roots no longer limit the number of issuance homes to 4096. A root's disjoint remaining ranges may reach different prepared communities. The total number of payable slots remains 4,096,000,000. No domain obtains new slots merely by existing, multiplying identities or claiming a geographical name.

## 3.2. Public placement rather than discretionary awards

Initially the nonspendable intervals (s,[0,L)) reside in the genesis-designated bootstrap domain D_0. Selecting its validators is still an explicit bootstrap trust decision. Its quorum has no administrative command to choose favored issuance recipients or pay out the budget. Initial and later placement use the same public ClaimRange transition. Honest validators cannot add an eligibility list, sale requirement, founder signature or private allocation override.

For an active interval [k,h), a claim chooses its next prefix [k,q), where 1 <= q-k <= min(256,h-k). The destination must first provide an authenticated reservation for that exact typed interval, source, predecessor and supported monetary rules. A claimant supplies valid domain-separated placement work binding the parent interval, current anchor, q, destination, reservation and claimant policy. The first valid claim finalized at the current home atomically closes the parent, leaves [q,h) active if nonempty, and exports [k,q) to the named destination. Claiming pays no RLD reward and requires no prior RLD balance. A claim and Mint of k compete in ordinary local consensus; neither can consume an old interval after the other finalizes.

A destination installs the exact interval or permanently rejects its move. Only certified rejection can restore that same exported interval at its source with a new anchor. Counters, slot identities and remaining budget do not change. A recovery does not merge a detached interval back into an overlapping parent. Typed move decisions are permanent even if the range subsequently moves onward. There is no ordinary governance alternative that bypasses ClaimRange's public selection rule.

Range carriage uses kind RLD_ISSUANCE_INTERVAL with the same one-use source permit map and destination reservation/terminal-decision exclusion as payments. Claim finalization marks its permit Exported; installation marks the permit Imported and the move ID installed, while rejection permits one exact interval recovery. Unused typed reservations close only after source-certified permanent closure. No RLD output is created by claiming, installation or recovery. Any relocation service payment is separately funded existing RLD, never a deduction from unissued capacity. A child interval ID hashes its consumed parent identity, range bounds and the exact transition body digest; that body binds the old anchor but excludes resulting IDs, state roots and new anchors. Thus its identity is deterministic without a circular hash.

Public work removes discretionary selection of beneficiaries from valid placement, but does not prove demographic fairness. Faster hardware can win more claims, validators can censor if the assumed fair-admission condition fails, and D_0 remains an initial availability dependency until ranges leave it. Claims can temporarily remove minting capacity while in flight. The 256-slot maximum bounds one placement request, not a per-person entitlement or a proven optimum. Claim work scales with the number of detached slots, so one cheap proof cannot seize a large future budget. This raises the preparation cost for honest communities too. A work author may intentionally strand capacity; expended work does not prove a useful destination. Communities must obtain capacity before losing its contact path. Permanently stranded ranges reduce attainable issuance and are never recreated by timeout.

## 3.3. Public work and Mint

Mint and ClaimRange use Argon2id version 0x13 [3], memory 65536 KiB, three passes, one lane, output 32 bytes, empty secret and associated data. Enc is the profile's unambiguous typed encoding. A candidate binds C_RLD, the action kind, exact interval identity and bounds, next slot, home, opening anchor, payout or claimant policy and a 32-byte nonce. ClaimRange additionally binds its destination, q and exact reservation. Define:

```text
z = enc(currency, action, interval, slot, home, anchor,
        owner_policy, nonce, action_specific_fields)
P = SHA256(enc("RLD-WORK-PASSWORD", z))
S = first16(SHA256(enc("RLD-WORK-SALT", z)))
y = Argon2id(P, S; m=65536, t=3, p=1, v=0x13, out=32)
weight = 1 for Mint; q-k for ClaimRange
T_base = 2^240 - 1
valid_work = big_endian_integer(y) <= floor(T_base / weight)
```

The work author signs the complete candidate. Copying a solution cannot redirect its payout or placement choice. Distinct action tags prevent a placement solution being reused as Mint. Under a uniform-result model, Mint succeeds with probability 2^-16 per evaluation, or 65,536 evaluations on average. A ClaimRange covering n slots has exact probability (floor(T_base/n)+1)/2^256 and expected work approximately n times the Mint work. It earns no issuance credit and cannot replace later slot work. This is an expected work count, not a time guarantee, a hardware benchmark, ASIC resistance or a promise of ordinary-CPU profit. There is no stake, compulsory pool or initial RLD payment for valid work submission; bounded verification resources still require sponsors and fair admission.

Mint verifies work and current authority, advances k once and creates rho for the exact work author. The opening anchor commits to the interval's creation statement or exact preceding transition body, excluding resulting interval IDs, state roots and new anchors to avoid a circular hash. Mint, split/export, installation and recovery change that anchor. Ordinary payments and validator succession do not reset it. Old candidates cannot be transplanted to a new home or interval. A proposal, solved hash or preliminary vote is not issued money.

```text
Mint(candidate):
  require interval (s,[k,h)) is active here and k < h
  require exact current anchor, owner signature and valid Mint work
  atomically consume interval at k; retain [k+1,h) if nonempty
  create rho for candidate.owner; record issuance ID (C_RLD,s,k)
  retain full lineage and advance the opening anchor
```

There is no automatic difficulty retarget or calendar completion date. Hardware progress can accelerate exhaustion. Placement work is additional resource expenditure, not additional supply. Local governance cannot weaken work or alter rho. If confidence in the primitive fails, affected issuance stops; any replacement needs an authenticated successor preventing old/new double exercise and preserving every slot's history. Scarcity alone establishes neither fair distribution nor a stable price.

## 4. Local settlement and its meaning

Owners sign exact currency and domain identities, input references, component allocations, recipients, amounts, fees, service obligations, nonce and protocol/suite versions. Validators independently execute these commands before PBFT voting. A recipient reports local settlement only after verifying the commit proof, exact output inclusion and the supporting monetary execution, and retaining recoverable receipt material. Submission acknowledgment and a wallet reservation are not settlement.

A settled output can be consumed in the next valid local transition. No global block, mining maturity or stellar receipt is required. An available domain can settle existing RLD without an issuance interval or active mining. Local latency depends on communication, computation, resource admission and durable storage.

An independent verifier starts from C_RLD and authenticated domain descriptors, then reconstructs each relevant committed prefix from genesis or its own previously fully verified exact predecessor. It executes owner authorization, work, interval partition, component conservation, permit use, import/reject exclusion, fees and succession. An import recursively requires the exact prior certified execution that produced its export. Evidence forms a causal directed acyclic graph; a cycle, missing dependency, foreign currency or conflicting predecessor refuses. Each object is verified once per exact validation context, not once merely because a peer named its hash.

The baseline is full replay, without a trusted snapshot or unspecified succinct proof. A hash-indexed cache may retain already verified immutable prefixes under the identical currency, rules and accepted authority binding. A cold verifier reconstructs them again. A snapshot received from a quorum supplies bytes and a claimed root; it does not waive execution. An optional validity-proof system would need a pinned circuit, soundness, setup and data-availability model before replacing replay.

This separation rejects an invalid monetary transition even if every validator signed it. It does not distinguish two separately valid, conflicting certified histories during a partition. Two owners can both correctly authorize spends of the same old input; only the assumed exclusive ordering authority prevents both being finalized. Complete replay narrows trust to ordering and continuity instead of treating validators as an oracle of value. No amount of replay makes threshold equivocation harmless.

Finality means valid future protocol execution extends the domain's committed prefix. Unrelated reconnection does not select a distant branch to erase it. Theft, quorum compromise, rollback, invalid succession and broken cryptography remain failures of the applicable premises. A traveler must relocate funds while the old home is still available; carrying a private key does not relocate authority.

## 5. Export: surrender before sending

Before source debit, the destination durably finalizes a one-use ReceivePermit. It binds a unique permit ID p, C_RLD, the stable source and destination, exact draft payment digest, recipient, principal, ordered components and acceptance predicate, source/destination/recovery fees, cryptographic and consensus profiles, evidence-size and verification-work bounds, an accepted predecessor and maximum supported dependency expansion, and the reservation's service obligations. The draft includes exact inputs and change but excludes the permit itself; the final ticket includes its digest, avoiding a circular commitment. The payer verifies that the finalized source operation can satisfy those bounds before export.

R[p] = Reserved is a funded obligation to retain a terminal-decision position and process that particular conforming ticket. It is not a credit or a second money supply. The destination accounts for reserved bytes, verification capacity, archival obligations and agreed service funding before issuing it. A locally funded sponsor can support new users. Exhausted capacity causes refusal before reservation, not deletion of an old obligation. A reservation need not expose a private spending key.

A permit does not expire merely because an interstellar message is late. Releasing an unused reservation requires source-certified ClosePermit(p), which permanently sets S[p] = Closed only while unused and forever forbids export under p. The destination checks that execution before setting R[p] = Closed. Otherwise an apparently unused permit might already back an export in flight. A source unable to certify closure can leave unused capacity reserved. This is the explicit cost of a non-expiring commitment; it requires a bounded outstanding-reservation policy and funded operations, not infinite free preparation.

The source sets S[p] = Exported(x) only once, in the same atomic operation that consumes the ticket's inputs. A source change, cancellation of an unfinalized proposal or failed submission does not debit funds. After export, neither source administrators, a route advertisement nor local time can change its recipient or recreate its balance.

```text
x = H(enc("RLD-EXPORT", C_RLD, source, destination, T))
a = principal + destination_fee
Export(T, permit):
  require valid exact ReceivePermit and source S[p] absent
  require all actual owners authorize T and component allocation
  require unspent inputs cover a + source_fee + explicit change
  require complete evidence fits the reserved verification profile
  atomically consume inputs; create change and source_fee outputs
  set S[p] = Exported(x); set E[x] = Exported(T,a)
```

All amounts, including separately reserved archival funding within declared service fees, are explicit RLD amounts. No carrier may deduct an unapproved fee from principal. Certificate release follows durable finalization; wallet intent and exact bytes are retained before submission. A lost response is reconciled against the same certified source state, never treated as evidence of a refund.

The receiving reservation adds a preparation step. A new pair may need a forward draft and a return permit before export. Where its conforming invoice and permit were prepared earlier, the payment package itself needs only forward delivery. The construction claims one-way execution after preparation, not setup-free payment to an unknown, unreachable recipient.

![Figure 1. A reserved destination verifies execution before one import or permanent rejection. Only certified rejection authorizes recovery; no missing receipt recreates source value.](/diagrams/authority-transfer.svg)

## 6. Import: a single destination decision

Any party may deliver T, owner signatures, the ReceivePermit, source commit proof and the complete causal execution package. The destination validates the reserved profile and reconstructs the supporting monetary state. It checks every work event and interval partition needed by the components, actual input owners, source debit, full component allocation, accepted authority continuity and the absence of incompatible locally known certificates. A Merkle path proves membership in its root, not that the root represents valid money.

If the exact reservation remains undecided and the complete package satisfies its committed rules, ordinary fee or policy changes cannot revoke it. Correct validators process it under those original terms, even after a newer configuration activates. Newly discovered authenticated compromise, broken cryptographic confidence or a package outside the agreed bounds is handled explicitly as an incident or incomplete obligation; the system cannot safely promise to import known conflicting money. An incident is not an unauthenticated refund certificate.

```text
Import(T, evidence):
  require exact currency, permit, destination and recipient
  require complete replay-valid final source Exported(T,a)
  require S[p] = Exported(x) in that certified source execution
  require R[p] = Reserved and J[x] absent at destination
  require reserved predicate and verification bounds are satisfied
  atomically set R[p] = Imported(x); set J[x] = Imported(H(T))
  create recipient(principal) and bound service(destination_fee)
```

The new outputs preserve the ticket's exact component partition and add the destination's relevant ordering dependency. Durable credit and durable consumption of p and x finalize together. Exact duplicate delivery reconstructs the same result without creating another balance. Changed bytes under an existing identity, foreign destinations and mixed proof fragments refuse. Stable domain and permit namespaces survive authorized configuration changes and compaction.

After import, the recipient can spend locally or export onward without a return receipt to the source. Source silence does not block that spending. An optional import receipt improves the payer's knowledge; it grants no source credit. Carrying A-to-B evidence through C adds no monetary authority. Importing into C and exporting again is a distinct payment with its own reservation, fees and dependencies.

## 7. Rejection, cancellation and stranded value

The destination serializes import and permanent rejection against both R[p] and J[x]. An authenticated rejection request binds the original export and recovery-owner authorization, or the recipient's authorization. If undecided, the destination may finalize Rejected. Once imported, it cannot validly reject; once rejected, it can never import. An invalid packet, unavailable server, expired transport envelope or full new queue is not a rejection certificate.

Recovery at the source verifies complete destination execution proving that exact rejection, including the reserved permit, authority succession and permanent terminal decision. It requires E[x] = Exported, changes it once to Refunded, and creates a-r for the recovery owner plus the originally authorized recovery fee r, with 0 <= r <= a. Component allocation is preserved; rejection adds its relevant ordering dependency. Separately funded rejection-service fees cannot silently consume another owner's principal.

A source cannot distinguish a never-delivered ticket from an already imported ticket whose receipt was lost. A rule refunding both cases would duplicate value in the latter. No elapsed-time refund exists. An import/rejection race is ordered by the destination, so a rejection request is not guaranteed recall. Rerouting requires permanent rejection, source recovery and a new owner-authorized export. The carrier cannot edit the destination.

A reservation removes avoidable policy and capacity surprises under continued correct operation; it cannot make a destroyed domain respond. If its quorum, archives or cryptographic assumptions permanently fail, money can remain unavailable. There is no automatic emergency replacement of the old authority. Independently operated replicas, prepared succession and off-domain copies reduce failure probability without changing the threshold assumption.

Optional insurance is separately funded in already issued RLD. A contract identifies the insurer, maximum payout, adjudicating authority, evidence and premium. On payout, it can transfer the original ticket's recovery/claim rights to the insurer through the authorized policy, avoiding a promise of both reimbursement and free later recovery to the same owner. Insurance does not mint a replacement coin or reverse the ticket; the insurer bears its finite exposure. It is additional credit and institutional risk, never a mandatory intermediary or guaranteed protocol rescue.

## 8. An interstellar payment and local autonomy

Alice in A obtains Bob's authenticated payment request and B's finalized reservation. She checks the exact currency, domains, components, fees, proof bounds and recovery rule. Her source quorum finalizes export and releases its complete evidence. Alice can then go offline. Carriers move copies over radio, optical links, moving storage or successive one-way contacts.

B verifies the causal execution and its reserved obligation, then atomically imports once. Bob receives an ordinary local RLD output and can pay Carol without querying A. His later payment to another domain repeats preparation, surrender and import. A receipt to Alice may return years later without suspending Bob's local economy.

```text
Before export: B reserves the exact receiving obligation
A: owner's local output -> final export x; source cannot spend it
Contacts: carry x, reservation and complete causal evidence
B: Reserved(p) -> Imported(x) OR permanently Rejected(x)
After import: Bob -> Carol through ordinary local settlement
After rejection: its verified return evidence -> one source recovery
```

Ships and habitats prepare their own accepted domain, balances, receiving permits, archive copies, succession material and optional issuance intervals before isolation. A ship merely copying another domain's ledger does not acquire independent funds. A device unable to reach its own home quorum cannot safely spend that home's outputs by local declaration. Owner keys remain separate from validator and carrier keys.

Where distance d must be crossed, new information cannot arrive before d/c. Contact waiting, serialization, verification and destination consensus add delay. Prepositioning RLD can make local purchases fast; it does not make the information about a new distant payment arrive sooner. Liquidity providers may offer separately funded credit, but cannot call an unarrived export settled.

## 9. Provenance and the spread of trust

Full replay distinguishes a counterfeit state transition from a valid but equivocating ordering authority. The former is rejected even with a quorum signature. The latter is prevented only while the relevant validator fault and key assumptions hold. No remote observer can infer a hidden conflicting certificate from silence. A deposit or a local waiting period does not establish its nonexistence.

Every component carries a dependency lineage beginning at its work slot and interval-placement history. Transfers add the current execution authority, imports add the destination, and recovery adds the rejection authority. For an amount split among recipients, fees and change, each resulting part inherits exactly its contributing parts' dependencies. Distinct lineages are not compressed into a universal union attached to every atom of the output.

For example, an owner can hold 100 RLD with lineage P and 1 RLD with lineage Q. A payment of 100 from the first group leaves the Q components in change. Neither group is relabeled as depending on P union Q merely because both were displayed in one wallet or authorized in one batch. If a recipient explicitly accepts a payment combining both, it receives separately identified P and Q amounts. Components sharing both the issuance event and exact lineage may be coalesced losslessly; different events or histories remain separately attributable. Proofs for the whole operation still verify every input, not a selected convenient subset.

This avoids accidental spread of risk to unrelated change and fees. It does not erase a real dependency, establish uniform market value or make a risky component safe. A conservative wallet selects only components satisfying the invoice's acceptance predicate, refuses silent mixing, and displays accepted spendable, other-policy, exported, insured and unresolved amounts separately. RLD remains the sole denomination and fee currency, with explicit acceptance risk rather than a promise of perfect fungibility.

A shared acceptance policy can specify the exact monetary verifier, supported key profile, accepted ordering roots, fault-domain diversity, evidence availability and exposure limits. Policy versions are authenticated, and outstanding reservations bind their original predicate. This makes interoperability deliberate. It does not turn a new self-created committee into a universally accepted monetary authority.

An incident record contains verifiable conflicting certificates or invalid execution, exact identities and affected dependencies. Carriers propagate it like other evidence. Affected policies can suspend new acceptance and quarantine dependent components without erasing unrelated finalized histories or automatically moving losses to other holders. Discovery of compromise may devalue funds already accepted. Per-wallet limits and funded insurance can limit named exposure; no bound on economy-wide contagion or an instantaneous global warning follows.

## 10. Transport and durable evidence

The carriage model is store-carry-forward over actual contacts, compatible with the delay/disruption model of Bundle Protocol version 7 [4]. A transport envelope binds its version, currency/application domain, whole content hash, length, origin and destination. Fragments bind positions and exact whole-object commitment. A receiver reconstructs and authenticates the complete object before monetary processing. Transport expiry can remove an attempt, never a monetary obligation.

An admitted custodian durably stores complete agreed bytes before acknowledging custody. A digest without the bytes is not evidence retention. Capacity refusal precedes a new obligation. Custody contracts bind retention scope, replication, failure reporting, service fees and renewal responsibility. Independent copies reduce single-carrier loss but not correlated failure or fraud. A signed custody receipt proves an assertion of custody, not successful future delivery or destination settlement.

End-to-end authentication persists across route changes; link authentication secures the present contact [5]. Two-way contacts may negotiate missing dependencies. A one-way carriage package contains all material needed by its declared verifier, or relies on an explicitly arranged later dependency delivery. The latter remains pending until complete. Candidate advertisements cannot change a ticket's destination or supply a trusted domain root.

A request identifier, content commitment and durable receiver record make retries idempotent. Receipt loss resumes carriage without another debit. Ledger acceptance, byte retention, relay compensation and optional receipt return are separate events. No forwarding schedule, satellite range or unavailable physical route is invented by monetary consensus.

## 11. Fees, liquidity and incentives

Every native payment has an explicit positive RLD service fee. Its signed allocation specifies consensus operation, monetary verification and a positive archival-reserve contribution; a sponsor may pay on an owner's behalf through exact funded inputs. A work-author share, when required by a declared service profile, names a verifiable prior work event and payout policy and is a transfer of existing RLD. No label such as miner fee authorizes an unbound future deduction. Mint itself requires no RLD admission fee, so the first successful miner can obtain a balance without a circular funding prerequisite.

A destination reservation is issued only against a funded service agreement or sponsor budget covering its stated bounds. A zero-balance recipient may have a sponsor; that is a real payment by another party, not free perpetual capacity. Source export pays its exact source services; import credits the recipient and the bound destination services; recovery pays only its original formula. All sums and component assignments are owner-authorized. New fees cannot retroactively modify an exported ticket.

An archival reserve is existing RLD locked under an explicit threshold-controlled service policy. Records bind their remaining obligations, funded capacity and custodian set. Scheduled releases pay documented service under that policy; changing custodians requires authenticated handoff of complete data and liabilities. New reservations stop when funded capacity is exhausted, while existing terminal decisions and liabilities remain retained. A reserve cannot be withdrawn as surplus while its covered obligations persist. Without an independently specified proof-of-storage construction, releases still trust the agreed service authority; a receipt alone proves neither storage nor indefinite solvency.

Relay contracts are finite purchased services, also in RLD. Prepayment exposes a customer to nonperformance; delayed payment exposes a carrier to credit and return-path risk. Funded escrow, reputation, collateral and disclosed adjudication may distribute these risks. An arbitrary one-way message is not an automatically fair exchange of delivery and payment. No new subsidy is created by uptime, receipts, self-payments or newly created identities.

Mining rewards distribute the fixed budget and do not prove that validators, carriers or archives can operate profitably. After issuance ends, they rely on service fees, voluntary support or other disclosed funding. Outstanding reservations must not assume future inflation. No finite reserve buys mathematically infinite storage; continued service needs funded renewal and succession. Failure of that economic premise can stop progress without granting a refund or rewriting the cap.

Long journeys also lock capital. Under stable-flow conditions, an export flow lambda and average unavailable interval W imply approximately lambda W of in-flight value [6]. Prepositioned RLD, reciprocal flows and separately funded liquidity can improve usability. Lending, insurance, external-currency exchange and delivery of goods remain additional economic arrangements. The basic payment operation is not atomic exchange of arbitrary distant assets or goods.

## 12. Conservation and safety argument

Consider a causally consistent cut: every included destination operation includes its causal source operation. U is spendable value across homes, including fee outputs and locked service/insurance balances. F is exported principal plus reserved destination fees not yet imported or recovered. Z is cumulative owner-authorized retirement. I is cumulative finalized Mint rewards, G = 0 and C = 21,000,000 RLD. Copies, permits and receipts contribute no monetary amount. Then:

```text
U + F = G + I - Z
```

An unused reservation is a resource liability, not an RLD credit. Funded escrow is counted once in U and cannot simultaneously be a freely spendable owner balance. A rejected ticket stays in F until recovery. A stale source may still show Exported after import; its observation is not an additional allocation. These are accounting quantities over the causal execution, not instantaneous global totals available to disconnected users.

**Lemma 1: local exclusivity.** Two sets of 2f + 1 validators among 3f + 1 intersect in at least f + 1 identities. Under the fault bound and PBFT's durable locking and view-change rules, an honest intersection prevents conflicting final commands at the same position. Valid configuration handoff preserves that exclusion. Quorum arithmetic alone is insufficient.

**Lemma 2: valid money and component attribution.** Independent execution starts from the common budget and accepts Mint only for an active next slot with valid work. Every ordinary operation consumes actual inputs and partitions each contributing component exactly among outputs, fees, exports and retirement. No extra component, hidden fee, changed owner or unsupported interval enters by a signed root. Induction on the causal evidence graph preserves amounts and actual dependency attribution. This validity result does not establish that a compromised quorum has not certified another individually valid branch.

**Lemma 3: one receiving obligation.** The permit binds the exact draft and destination. Source S[p] becomes Exported or Closed once. Destination R[p] becomes Imported, Rejected or source-certified Closed once. T and x bind the reservation and stable domains. Duplicate delivery, restart, compaction and configuration succession preserve these decisions. A carrier cannot redirect the credit or reuse the capacity for another ticket.

**Lemma 4: import excludes recovery.** J[x] becomes Imported or Rejected, never both under Lemma 1. Recovery requires complete certified rejection and consumes E[x] once. No other destination can import the same ticket. Therefore the exported amount cannot create both destination spendability and source recovery. A signature on conflicting outcomes is an incident, not permission to accept both.

**Proposition: payment conservation.** Local transfers and service funding redistribute U. Export reduces U by a and increases F by a; source fees remain in U. Import reduces F by a and creates principal plus destination fees totaling a. Rejection changes neither. Recovery reduces F by a and creates (a-r)+r = a. Mint increases U and I by rho; retirement decreases U and increases Z equally. The lemmas exclude duplicate applications of value-creating transitions, so induction preserves the invariant.

**Proposition: bounded issuance.** Every root's slot space is a disjoint partition of consumed identities, active intervals and in-flight intervals. Mint moves one slot from active to consumed. ClaimRange partitions an active interval exactly; installation or certified recovery relocates the same detached interval once. No operation introduces a new (s,j). Let B be active unissued budget and Q in-flight unissued budget. Then:

```text
I + B + Q = C
U + F + B + Q + Z = C
0 <= I <= C
C = 4096 * 1000000 * 0.005126953125 RLD
```

Lost intervals remain unavailable in B or Q; exhausted or retired value does not replenish them. A malicious quorum signing an invalid split is rejected by replay. A quorum certifying conflicting individually valid placements violates the exclusive-ordering premise and can still defeat conservation across unsuspecting observers. The cap is a property of valid exclusive histories, not a magical protection against accepted threshold equivocation.

![Figure 2. Disjoint slot intervals can be publicly claimed and relocated. Split, Mint and move consume exact predecessors; no operation copies the remaining issuance budget.](/diagrams/issuance-strands.svg)

**Proposition: conditional progress and isolation.** If a valid reservation exists, complete conforming evidence eventually arrives, its historical security assumptions remain applicable, a correct funded destination quorum progresses, and rejection has not won first, import completes without a source return message. A rejected payment can recover once after authentic rejection evidence reaches a correct source. Existing local payments need only their own prepared home. Reconnection alone cannot replace a committed local prefix. Permanent authority loss, broken cryptography, unfunded service or missing physical contact invalidates the relevant progress premise; no unconditional deadline or recovery follows.

**Boundary of the construction.** A receiver with the same observed evidence in two worlds cannot act differently merely because one world contains an unseen conflicting certificate. Full execution, short validity proofs, mining puzzles and collateral do not change that observation. Eliminating all accepted remote ordering assumptions would require another conflict-resolution construction with its own delay and fault model. We do not claim to obtain global double-spend exclusion, unrestricted disconnected spending and automatic acceptance of arbitrary authorities simultaneously.

## 13. Configuration, keys and long journeys

A validator handoff is a special committed command. It binds old/new configurations, exact activation boundary, predecessor, complete monetary state, component lineages, imports, rejections, permit-use/closure maps, outstanding reservations, service liabilities, issuance intervals and anchors. The old configuration commits it; a new quorum authenticates and durably installs the full replay-verified state before acting. Old keys cannot authorize the old configuration beyond that boundary. Copying balances alone is not succession. Without an authorized old handoff, an administrator cannot resume stopped money under a replacement root.

For long-journey ordering certificates we describe a finite per-height key schedule using ordinary Ed25519 [7], SHA256 commitments and HKDF-SHA256 [8]. It is a construction requiring secure erasure and custody analysis, not a claim of a newly standardized forward-secure signature. Each validator's epoch descriptor commits to a Merkle root of K = 65536 per-height public keys. Leaves bind C_RLD, domain, validator, epoch, offset and public key; internal nodes use a distinct tag. The epoch fixes the first sequence position; the offset cannot be chosen by the sender.

For initial random secret S_0, define S_(i+1) = SHA256(enc("RLD-KEY-NEXT", binding, i, S_i)). Derive the Ed25519 seed for i with HKDF-SHA256 from S_i, using the epoch binding as salt and a distinct key-purpose information string. The public tree is prepared before epoch activation. The private signer retains only its current S_i, exact locks and response journal, never a recoverable copy of retired S_i or the initial seed. Each PBFT signature carries its exact offset and Merkle authentication path. Signature inputs include phase, view, sequence, predecessor and body, so a path cannot rebind a vote.

After a position is irreversibly committed, the signer durably retains the commit, lock/head and exact already signed responses, advances to S_(i+1), and erases S_i and derived private material before signing a later position. Retransmission uses retained bytes, not regenerated retired signatures. Current-secret compromise should not recover earlier secrets under the hash/KDF assumptions; it can compromise future keys until a valid succession. Consensus safety still needs the active fault bound, secure heads, prevention of concurrent cloned signers and verified erasure. Ordinary disk deletion, encrypted old backups or a local timestamp do not prove those conditions.

The key schedule has finite capacity. A valid old/new handoff must activate a fresh independently generated tree before exhaustion; otherwise signing stops. Epoch identities never reset a source, permit or import namespace. Public key trees and full handoff history travel with relevant evidence. The erasure assumption narrows later key-theft risk; it does not stop an already compromised quorum from signing conflicting present histories, or signatures being broken by later cryptanalysis. Forward-secure research makes the distinction explicit [9].

Every journey declares supported cryptographic suites and an acceptance horizon. Unknown or cryptographically unsound evidence refuses or remains pending. Post-quantum standards can inform an explicitly instantiated successor [10], but a new algorithm name does not renew all old history. Revocation warnings propagate causally. Secure long-term operation requires generational maintenance and preserved anchors, not a promise of eternal signatures.

Owners choose recovery policies before loss, such as independent threshold keys. Recovery requires an ordinary certified command at the current home; a relay or founder cannot reset ownership. Backups must reconstruct current certified state, permanent decisions and freshness anchors before signing or voting. A restored old image cannot declare itself current. Loss of all state and independent anchors is not repairable by a protocol assertion.

The transparent baseline exposes amounts, keys, component histories and some timing and route metadata. Encrypted carriage does not hide all linkage. Privacy systems such as Zef [11] address a different problem; integration needs a proof that hidden amounts, acceptance predicates and duplicate prevention remain sound.

## 14. Capacity, archives and failure bounds

Independent payment domains can add local capacity because they use distinct funds. Aggregate throughput is at most the sum of their sustained execution capacities after import verification, work checking, reservations, archival writes and configuration changes. A common hot destination is still a bottleneck. Relocating authority is actual work, not free replication of one balance.

One hundred million payments per day corresponds to approximately 1157.41 completions per second. This arithmetic is not a measured result. Local usable receipt time includes owner verification, PBFT finality, output inclusion and durable availability; a submitted request is not a completed payment. Stellar arrival includes actual distance and contact scheduling. No performance result from another payment system transfers automatically to this one.

Full execution is intentionally the reference validity mechanism, with a potentially large cost. A fresh receiver may need substantial source prefixes, earlier imports and issuance placement history. Exact content-addressed deduplication avoids repeated bytes, and a previously verified prefix permits suffix verification, but neither authorizes unverified state. A succinct proof could reduce bandwidth only after its complete construction and availability obligations are established. This paper does not claim small interstellar proofs from the word commitment.

Every receiving reservation commits to encoded and expanded bytes, graph depth, object count, signature/work evaluations and durable terminal-state capacity. Validators check both compressed carriage and expanded execution bounds. A package exceeding its terms cannot consume an unbounded verifier or force a different payment. If the source cannot build conforming evidence, it must not export under that permit; it can obtain a new reservation or close the unused one. Out-of-bound or incomplete post-export material remains unresolved until a valid decision, never silently refunded.

Permanent decisions have permanent logical cost. An authenticated map root is small, but updating it correctly still needs retained data or authenticated witnesses and available archives. With 100 million 64-byte decisions daily, raw growth would be about 2.34 terabytes per year before indexes and replicas. This illustrates the obligation, not a concrete encoding size or proof that ordinary hardware can retain unlimited history.

Compaction preserves every consumed permit, import, rejection, interval identity, predecessor and unresolved liability needed for replay or authenticated witnesses. No old ticket becomes harmless merely by age. Archival renewal transfers complete data, certified commitments, funding obligations and independent retrieval information before old custody ends. A quorum-signed snapshot alone does not replace monetary replay for a new verifier. Unknown capacity, lost bytes and rollback stay failures, not successful cleanup.

Funded admission, independent failure domains, replicated public evidence, erasure-aware signing and prepared succession reduce practical failure risks. They do not prove infinite operation or recover an unavailable quorum by assigning its funds elsewhere. Deployment quality, adversarial resource behavior and independent operation require evidence beyond a transition argument.

## 15. Relation to prior work and scope of the contribution

Bitcoin demonstrates open-work selection of a monetary history [1]. PBFT supplies local state-machine replication under explicit validator assumptions [2]. This design keeps conflict resolution local to avoid a distant branch contest over an isolated community's completed payments; it changes the trust model rather than improving every property at once.

FastPay and Zef show that payment workloads can avoid a single global total order [11,12]. Asynchronous asset-transfer research separates transfer from general consensus [13]. Escrow and bounded-counter techniques partition finite rights before disconnected use [14]. Those database results do not supply Byzantine monetary security. Here work entitlements additionally require authenticated exclusive histories, complete execution and permanent import/placement decisions.

IBC separates remote consensus verification, transport and application transitions [15]. Cross-shard work studies replay and stale-message failures [16]. Delay-tolerant networking supplies the appropriate carriage model [4,5]. We do not claim a new BFT algorithm, cryptographic primitive, general transfer concept or invention of store-carry-forward networking.

The contribution proposed here is their explicit composition for one RLD currency across extremely delayed contacts: independently verified monetary execution, prepared bounded receiving obligations, non-expiring destination-bound authority transfer, rejection-only recovery, amount-specific dependency attribution, conserved divisible work entitlements and finite key/archive succession. Its novelty and security require independent comparison and analysis. Interstellar terminology alone establishes neither.

The most immediate applications are already-separated communities, moving platforms and disrupted infrastructure with real custody and payment needs. Whether users prefer RLD to existing money depends on practical costs, acceptance, access and risk. A payment mechanism does not itself create demand, stable purchasing power or social impact. Physical links, sustainable institutions and useful adoption remain necessary.

## 16. Conclusion

Interstellar payment can preserve local economic activity by assigning exclusive spend authority before disconnection and moving it through complete authenticated evidence. A destination reserves its receiving obligation before source debit; the source surrenders local rights; the destination verifies monetary execution and permanently imports or rejects once. Onward local spending needs no return message. Silence never authorizes a replacement balance.

runlai (RLD) remains one native currency with a twenty-one-million lifetime cap and zero initial allocation. Public work consumes fixed, disjoint slot identities; public placement and subdivision relocate remaining entitlements without copying their budget. Component-level attribution prevents unrelated funds inheriting each other's dependencies merely through a wallet total or batch, while preserving real historical risks.

The remaining boundary is explicit. Independent validity is stronger than trusting signed balances, but exclusive ordering, durable state, finite cryptography and funded operations remain assumptions. Arbitrary new authorities are not automatically trusted, destroyed destinations can strand funds, and neither a cap nor a whitepaper guarantees adoption. Under those stated conditions, the mechanism supports owner-authorized payments across delayed one-way contacts while prepared communities continue local settlement without a continuously reachable center.

## References

[1] S. Nakamoto. Bitcoin: A Peer-to-Peer Electronic Cash System, 2008. https://bitcoin.org/bitcoin.pdf

[2] M. Castro and B. Liskov. Practical Byzantine Fault Tolerance, OSDI, 1999. https://pdos.csail.mit.edu/6.824/papers/castro-practicalbft.pdf

[3] A. Biryukov, D. Dinu, D. Khovratovich and S. Josefsson. Argon2 Memory-Hard Function for Password Hashing and Proof-of-Work Applications, RFC 9106, 2021. https://www.rfc-editor.org/rfc/rfc9106.html

[4] S. Burleigh, K. Fall and E. Birrane. Bundle Protocol Version 7, RFC 9171, 2022. https://www.rfc-editor.org/rfc/rfc9171.html

[5] E. Birrane and K. McKeever. Bundle Protocol Security (BPSec), RFC 9172, 2022. https://www.rfc-editor.org/rfc/rfc9172.html

[6] J. D. C. Little. A Proof for the Queuing Formula: L = lambda W, Operations Research, 1961. https://doi.org/10.1287/opre.9.3.383

[7] S. Josefsson and I. Liusvaara. Edwards-Curve Digital Signature Algorithm (EdDSA), RFC 8032, 2017. https://www.rfc-editor.org/rfc/rfc8032.html

[8] H. Krawczyk and P. Eronen. HMAC-based Extract-and-Expand Key Derivation Function (HKDF), RFC 5869, 2010. https://www.rfc-editor.org/rfc/rfc5869.html

[9] M. Bellare and S. K. Miner. A Forward-Secure Digital Signature Scheme, CRYPTO, 1999. https://cseweb.ucsd.edu/~mihir/papers/fsig.pdf

[10] NIST. Module-Lattice-Based Digital Signature Standard, FIPS 204, 2024. https://doi.org/10.6028/NIST.FIPS.204

[11] M. Baudet, A. Sonnino, M. Kelkar and G. Danezis. Zef: Low-latency, Scalable, Private Payments, 2022. https://arxiv.org/abs/2201.05671

[12] M. Baudet, G. Danezis and A. Sonnino. FastPay: High-Performance Byzantine Fault Tolerant Settlement, 2020. https://arxiv.org/abs/2003.11506

[13] P. Kuznetsov, Y.-A. Pignolet, P. Ponomarev and A. Tonkikh. Permissionless and Asynchronous Asset Transfer, DISC, 2021. https://doi.org/10.4230/LIPIcs.DISC.2021.28

[14] V. Balegas, D. Serra, S. Duarte, C. Ferreira, R. Rodrigues, N. Preguica, M. Shapiro and M. Najafzadeh. Extending Eventually Consistent Cloud Databases for Enforcing Numeric Invariants, 2015. https://arxiv.org/abs/1503.09052

[15] Inter-Blockchain Communication. How the IBC Protocol Works. https://ibcprotocol.dev/how-ibc-works

[16] A. Sonnino, S. Bano, M. Al-Bassam and G. Danezis. Replay Attacks and Defenses Against Cross-shard Consensus in Sharded Distributed Ledgers, 2020. https://arxiv.org/abs/1901.11218
