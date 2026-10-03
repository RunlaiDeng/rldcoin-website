# Rldcoin: A Peer-to-Peer Payment System Across Delayed Regions

Runlai Deng  
dengrunlai@gmail.com  
www.rldcoin.com  
30 September 2026 · Version 1.11

**Abstract.** Rldcoin is a peer-to-peer payment design for communities separated by long or intermittent communication. In the target architecture, every normally started full network node is a relay by default: it discovers reachable neighbors, retains admitted evidence and forwards it over successive contacts, allowing connected communities to extend the network without a central Earth directory. Regional ledgers establish local order, prefunded channels support local payment receipts, and source exports carry value to a separately validating destination. A source-enforced signed checkpoint, replayed history, and a unique import bind the two ledgers; delay-tolerant couriers carry evidence without monetary authority. Conservation depends on valid regional histories, non-conflicting finality, durable records, and uncompromised cryptography. Delivery and spendability additionally require contact, capacity, available signers, and destination progress. This paper defines the target architecture and mandatory acceptance conditions, relates them to distributed-systems and payment research, and specifies tests for delayed routes, archival survival, and protocol evolution. It promises neither immediate remote settlement nor recovery by timeout. Current public operating status is reported separately at www.rldcoin.com/network.

## 1. Introduction

Bitcoin showed how signatures, public transaction history, and proof of work can order electronic payments without a central transaction processor [1]. Rldcoin begins with the same need to reject double spending, then asks a further question: how can an asset move between regions whose messages may be delayed, interrupted, or carried physically? Delay-tolerant networking research uses persistent store-carry-forward delivery across scheduled or opportunistic contacts [2, 3]. Neither a synchronous global vote across distant regions nor a promise of immediate remote arrival follows from that transport. Treating a sent message as a received payment is unsafe.

The architecture separates local ownership from inter-region delivery. Each Zone has its own chain and validation rules. A source export removes an amount from that Zone's spendable state. A destination may create corresponding spendable value only after verifying an authenticated export and a finalized source checkpoint. A missing receipt or expired delivery deadline cannot authorize a second spend. Earth provides the first regional instance; the same principles can be evaluated for more distant Zones.

This is an engineering design and a statement of its trust assumptions, not evidence of an operating interplanetary route. A local channel receipt, source finality, destination import, and a returned receipt are different events. The recipient must distinguish the evidence available at each event. Formal proof-of-work analyses rely on bounded communication and adversary assumptions within a chain [4]; they do not make one globally synchronized chain practical when signal propagation between Zones takes minutes or longer.

**Scope and ultimate purpose.** The target is one conserved currency that humans can hold, receive and pay through independently verifying local nodes in habitats, spacecraft and distant settlements. With remote regions disconnected, the local economy must continue under its local communication and security assumptions. After physical contact, an owner must be able to transfer to any authorized region, pay there, export onward and return value to an earlier region. Every normally started full network node must contribute a bounded relay service without a separate relay launch or permission from a central operator. As useful contacts and independent resources are added, the network can extend its reach, retain more evidence and offer alternative delivery paths. No always-online Earth directory, Earth approval of each payment or simultaneous global state is required. Peer-to-peer means owner authorization and recipient-verifiable evidence; it does not remove local consensus or couriers. Local autonomy does not promise safe double spending between mutually isolated recipients with no shared ordering.

Requirements I1-I12 in Section 16 are mandatory and shared with the master plan. The word **must** describes the target protocol; it does not certify a software release or a physical route. The Earth parameter profile below illustrates concrete regional rules. Each deployed region requires its own exact adopted identity, rules and implementation. General multi-region transfer, disconnected operation, independent finality and long-term preservation require the acceptance evidence specified here. Implementation progress and operating status are maintained separately at www.rldcoin.com/network.

## 2. Participants and system invariants

The network has owners, miners, full verifiers, checkpoint signers, proof couriers, and optional channel watchtowers. Owners hold payment keys. Miners propose proof-of-work blocks within a Zone. Verifiers independently execute ledger transitions. Checkpoint signers commit a sufficiently buried source block for inter-Zone import. A courier stores and forwards an export proof or receipt across one or more contacts but cannot create value. A watchtower can challenge a stale channel close with a newer jointly signed state. These roles may be held by one operator; separating their names does not establish independent control.

Four invariants govern every transition. Only an owner signature or an expressly authorized protocol rule may move an output. Value can be spendable in one Zone or locked in one journey, never spendable in two places. Accepted state must be reproducible from a pinned genesis and ordered history. Total issued RLD must remain within the cap. Invalid, missing, or contradictory evidence stops the affected transition; elapsed time cannot manufacture authorization.

**Communication and fault model.** Within a Zone, ledger progress depends on its mining, connectivity, and validation assumptions. Between Zones, an adversary may delay, omit, duplicate, reorder, or replay every message, and no finite contact bound is assumed for safety. Signatures and hashes must remain secure for the entire validation horizon. Full verifiers must retain their trusted genesis and finality locks. Eventual delivery is an additional liveness assumption, not a consequence of a valid signature. Compromised checkpoint custody, lost archives, and regional reorganization are separate failures; a secure transport does not repair them.

For compatible selected histories, let I be distinct issued value, U all unspent outputs including immature rewards and imported outputs, E unsettled channel escrow and fee reserves, and T exports debited on the source history but not yet credited on the destination history under review. The accounting objective is I = U + E + T, with I bounded by the supply cap; transferred fees remain inside U. Historical exports and channel receipts are not additional balances. A completed import moves its amount from T to destination outputs, including its fee, even before recipient maturity. This is a conservation argument over compatible histories, not an instantly observable global balance: during disconnection the source cannot know whether T has already become a destination claim. Conflicting finality breaks the compatibility assumption and requires an incident response.

## 3. Ownership and transactions

The source ledger represents value in unspent outputs. A local transfer names mature, unspent inputs, authorizes them with the owner's signature, and creates recipient and optional change outputs. The input value must cover outputs and a nonnegative fee; execution is atomic. A failed command cannot partially update balances, escrow, exports, or the state root. Signatures establish authority to spend an output, while the shared chain resolves which conflicting spend is accepted.

The smallest accounting unit is the runlai: 1 RLD = 10^24 runlai. Every amount is an exact integer. Address, transaction, and proof validation bind the applicable chain or Zone identity; an object bound to another genesis has no authority on the selected network. A recipient should verify the selected chain, input maturity, signatures, and confirmation state rather than relying on a broadcast acknowledgment. A signed payment request can bind the recipient, destination Zone, amount, purpose, expiry, and nonce, but the payer still verifies its fields and signs the resulting transfer.

Figure 1 traces two mature outputs owned by one key into a signed Earth transfer. Its amounts are illustrative; the essential checks are network binding, input ownership, maturity, signature validity, non-reuse, and exact conservation. A fee output has reward maturity rather than immediate spendability.

![Figure 1. Two input outpoints, one owner signature, and three value claims: 12 + 8 = 15 + 4 + 1 RLD.](/diagrams/transaction.svg)

## 4. Genesis and chain identity

A region's height-zero anchor commits its currency root, regional identity, initial state, target, genesis manifest and exact rule and implementation commitments. The origin begins with zero issued RLD and no initial allocation. Signed, purpose-separated adoption authorizes its consensus and issuance rules; additional regions have zero native issuance and bind the currency root and authorized sources.

Verifiers pin these commitments and authenticate the adopted signer set and rule epochs before replaying history. A chain ID is a network pin, not a substitute for signed adoption and valid state transitions. Test keys and test balances cannot establish monetary authority on a production network.

## 5. Proof of work and network selection

Earth value blocks use double SHA-256 proof of work. A block header binds its parent, chain, height, timestamp, target, miner, commands root, resulting state root, and nonce. The commands root commits the exact ordered command body; it is not a Bitcoin transaction Merkle root. A node validates all commands and state transitions before extending a branch. Subject to an installed source-finality checkpoint, it selects the valid branch with greatest cumulative work. Network messages may arrive out of order; a node can request missing blocks and replay from the pinned genesis.

In the Earth reference profile, the signed birth context fixes the initial target. Difficulty adjusts every 144 blocks toward a 600-second average interval, with bounded adjustment. This is a reference regional parameter set, not a guaranteed block time or a universal interstellar interval. Mining is probabilistic. An unfinalized transaction may be displaced by a competing branch, so API acceptance, block inclusion and finality are separate states.

Figure 2 opens two connected blocks: the header hash links them, while the commands root and state root bind the body and replay result. Proof of work only qualifies a block after the independent command and state checks pass. An installed checkpoint adds a separate branch constraint.

![Figure 2. Consecutive Earth blocks bind parent hash, target, nonce, commands root, and replayed state root.](/diagrams/blocks.svg)

The essential source-block validation algorithm is:

```text
ValidateBlock(B, P, C):
  require B.chain == pinned_chain and B.parent == hash(P)
  require SHA256d(B.header) <= B.target
  require B.target == expected_target(P) and B.height == P.height + 1
  require B extends installed checkpoint C
  S = replayed_state(P)
  for command in B.commands:
      S = apply_atomically(command, S) or reject B
  require commands_root(B.commands) == B.commands_root
  require root(S) == B.state_root and supply(S) <= 100 billion RLD
  return valid block with cumulative_work(P) + work(B)
```

A node compares only valid branches that extend its checkpoint; a hash meeting the target does not excuse an invalid command or incorrect state root.

## 6. Issuance and incentives

The maximum supply is 100,000,000,000 RLD. The origin starts with all of it unissued; no person or service receives an initial allocation. The Earth reference issuance profile specifies the following schedule, subject to exact signed adoption. The first selected block's subsidy is 250,000 RLD. Each 200,000-block era releases half of the remaining unissued reserve under exact integer accounting. Rewards and fees become spendable after 100 additional source blocks. Only valid blocks on the selected branch earn rewards; a discarded branch does not retain its issuance.

For a valid source transfer, the conservation condition is: mature inputs = recipient outputs + change + miner fee. Each uniquely issued unit can appear in source spendable state, source channel escrow, an in-transit export, or a destination claim under the adopted transition rules; an export record remains as evidence after import but is not a second unit of value. The source debit must precede destination credit, and one export ID cannot produce two destination claims. The cap bounds distinct source-issued units, not the sum of historical proof records. A destination import does not mine new RLD. A new Zone cannot increase the supply by copying records or assigning itself a new reserve. The early mining period can concentrate ownership even without a founder allocation; work and access are not guaranteed to be evenly distributed.

## 7. Prefunded local payment channels

An opening command places a mature source coin into a channel escrow; a separate mature coin can reserve a challenge fee. A receiver checks both the funded channel and its reservation before accepting a payment state. Each successive state has an increasing sequence number, identifies the same channel, and requires both parties' signatures. The receipt binds that state to an invoice.

A unilateral close exposes its state for 2,016 blocks. During that interval, a higher jointly signed sequence can replace a stale state; an on-chain challenge consumes its reserved fee atomically. Settlement conserves value and returns an unused reservation. Payer, receiver, and watchtower records must survive exact retries and restart. A reliable fast-payment receipt depends on verified funding, data availability, independent observation of stale closes, and tested recovery. It is evidence of a funded channel state, not a claim that an on-chain block has appeared.

**Locality of the dispute window.** A party or watchtower needs to observe a stale close and get the newer state included before the adopted block-height deadline. At the target interval, 2,016 blocks correspond to an expected 14 days, not a guaranteed wall-clock window. Timing attacks on Lightning illustrate why delayed chain observation can defeat timely reaction [15]. This motivates local observers with diverse peers and available challenge fees; it does not transfer Lightning's measured attack probabilities to Rldcoin. A years-distant watchtower cannot protect this channel by responding across the long-distance link. Extending a timeout alone gives no finite guarantee when outages are unbounded. Before leaving local coverage, a user needs a completed settlement or a separately tested, explicitly trusted local monitoring arrangement.

Figure 3 separates the funded off-chain state from the on-chain dispute. The reserved fee is a separate mature coin. A later jointly signed sequence can defeat a stale close during the 2,016-block window, provided the newer state remains available to a party or watchtower.

![Figure 3. Mature escrow and a separate challenge reserve support signed payment states, stale-close challenge, and final settlement.](/diagrams/channel.svg)

```text
AcceptChannelState(new, old, funding, reservation):
  require funding is mature and locked to the exact channel
  require reservation is mature and bound to its challenge fee
  require both signatures valid for new.channel and new.sequence
  require new.sequence > old.sequence
  require sum(new.participant_balances) == funding.value
  persist new and its invoice-bound receipt before acknowledging
```

## 8. Export, checkpoint, and destination import

An export consumes its source inputs and creates an ordered, unique export record. Before source finality, a source reorganization may remove that transition; such an export is not eligible for adopted destination credit. After finality, the source lock persists, and delivery timeout never refunds it: the destination might already have imported the proof. The export records form a hash tree in sorted export-ID order. A membership proof carries the record, its leaf index and count, and sibling hashes; the verified export root is part of the source commitment and resulting state root. The proof establishes membership in a *claimed* source state, not that the state belongs to the selected source chain or has reached finality. Those checks require replay and a signed checkpoint. Replaying an export ID cannot mint a second destination output.

![Figure 4. A target export, its index and count, and two sibling hashes recompute the ordered export root; dashed outlines also show surrounding tree context.](/diagrams/export-tree.svg)

A source checkpoint becomes eligible when selected source height H and checkpoint height h satisfy H - h + 1 >= 12: the count includes the checkpoint block, so eleven successors suffice. All four adopted keys sign the same statement, which binds the chain, adoption, block, height, state root, cumulative work, and preceding certificate. Source nodes durably install the certificate and reject any later branch that does not descend from the highest installed checkpoint, even if that branch has more proof of work. The destination checks the certificate against replayed source history and requires six successor blocks after import before the recipient coin can be spent. These two counting conventions differ. Source finality does not finalize destination blocks.

The destination credits each (source chain ID, export ID) at most once on its selected history. A duplicate may return an existing receipt or be rejected as already imported; neither outcome creates a second credit. If a destination reorganization removes the import, the associated outputs and downstream spends must also disappear from that selected state before re-import. An acknowledgment or later spend record may return asynchronously. Loss of that receipt does not unlock the original source output. Clients should expose export, source finality, delivery, import, maturity, and spend separately. A delivery report is not an import receipt, and a returned receipt does not prevent later destination reorganization.

**Finality trust and availability.** The Earth reference policy uses 4-of-4 unanimity. Four keys controlled by one owner provide no independent fault tolerance. One unavailable or refusing key can stop new checkpoints even while local mining continues. A sufficient condition against two conflicting certificates in the same fixed signer set is an uncompromised signer that checks ancestry and persistently refuses every conflicting statement; validators must also enforce installed checkpoints. This conditional argument is not an independent implementation proof. Rollback, key theft, or inconsistent signer-set changes can invalidate it. A future 3-of-4 policy would need an actual Byzantine agreement protocol with locking, view changes, and reconfiguration; simply lowering the signature count does not inherit HotStuff's guarantees [14].

Figure 5 shows the independent checks on each side of the communication boundary. A courier carries evidence but has no authority to issue value. Finalized source ancestry, matching signatures, unique import ID, and destination maturity each answer a different question.

![Figure 5. Exported value crosses the Zone boundary only through a verified membership path, source checkpoint, unique import, and destination maturity.](/diagrams/cross-zone.svg)

The checkpoint and import decisions are separate algorithms:

```text
SignCheckpoint(block, source_history, signer_lock):
  require block is on selected source ancestry
  require selected_height - block.height + 1 >= 12
  statement = bind(chain, adoption, block, state_root,
                   cumulative_work, signer_lock.previous_id)
  require statement does not conflict with signer's durable lock
  persist the lock before releasing the signature
  return signature(statement)
Import(bundle, certificate, destination_state):
  require bundle.destination == pinned_destination
  require all four signatures on one valid source certificate
  require bundle.export is in the checkpoint's source ancestry
  require membership proof and source replay agree on value and ID
  key = (bundle.source_chain_id, bundle.export_id)
  require key has not already been credited on selected history
  record imported recipient and fee outputs once under key
  allow recipient spend only at import_height + 6 or later
```

## 9. Network operation and delayed communication

Owners broadcast signed commands, miners collect valid commands into blocks, and peers relay blocks or request missing ancestors after reconnecting. During remote disconnection, verified finalized evidence must remain distinct from unknown newer events. Local ledger progress and payments depend on local consensus and security resources; they must not depend on a recent HTTP response from a distant source. A receiving Zone pins the authorized source identity, adoption, proof format and signer epochs. Missing new evidence blocks dependent imports; wrong-domain and unsupported-version messages fail closed. Sending a message does not establish remote completion.

**Progressive node discovery and network extension.** Every normally started full network node must automatically enter relay service as part of the same node lifecycle: restore its persistent transport identity and queues, discover physically reachable neighbors, exchange authenticated advertisements, learn candidate distant routes, and store and forward admitted evidence for other participants. A separate relay command, central registration or manual configuration of every distant endpoint must not be required. Local adapter, trust and resource configuration may be necessary, but relaying is the default network-node role; a wallet-only client is not a full network node. With no usable contact the relay remains waiting and preserves admitted evidence rather than reporting a connection. The reference topology is Earth ↔ Proxima Centauri ↔ Andromeda: Earth need not connect directly to Andromeda, and no always-reachable Earth directory is required. Discovery begins with a real local neighbor, authenticated seed, scheduled contact or carried advertisement; an entirely isolated node cannot discover an unknown civilization before information arrives. At stellar distances a connection is an asynchronous contact relationship, not a permanent low-latency session. Advertised topology may be obsolete or dishonest, and does not prove current reachability, source freshness or authority to govern a Zone. Forward and return routes may differ or one may not exist [2, 3].

**Growth through useful participation.** Each node can serve its local community and connect it to further communities through neighboring relays. A newly contacted community can extend the reachable set; an additional usable path can reduce dependence on one courier; independently supplied storage and contact capacity can increase the admitted delivery budget. These are the intended meanings of a stronger network. Node count alone is not a security, throughput or availability guarantee: identities may share one controller, contacts may share one bottleneck, and malicious relays may withhold traffic. Nodes must qualify candidate paths, bound traffic and storage, prevent loops and duplicate forwarding, apply fair admission and retry policies, and attempt available alternatives without discarding valid locked exports. When offered load exceeds service, they must backpressure or refuse new custody before acknowledging it. Relay participation grants no mining, finality or issuance authority [2, 3, 6].

**Peer-to-peer payment across the mesh.** The payer signs an export for the recipient and exact authorized destination ledger. After source debit and recognized finality, any sequence of relays may carry the authenticated evidence unchanged; an intermediate community need not import the asset. The destination recipient verifies source authority, history, finality and unique import on a local full node, then receives spendable value under local maturity rules. Once those checks pass, local spending does not wait for a return message or Earth approval. Relays cannot redirect the recipient, spend the asset or make a transport acknowledgment count as payment. If the owner instead imports into an intermediate region and later pays onward, that is a new finalized export with the dependency and conservation checks in I4-I7. Missing contact or invalid evidence leaves the relevant payment pending; it never authorizes timeout refund.

**A network of local networks.** The relay pattern joins communities rather than requiring every participant to speak directly to every other participant. Earth, a deep-space station, a Proxima community, a carrier vessel and a distant galactic community are illustrative local networks. A relay can connect successive networks while each retains its own ledger authority. A mobile carrier may keep evidence until another physical contact becomes available; this does not imply faster-than-light travel. Overlapping circles in the atlas express an adjacent contact relationship, not overlapping radio coverage or a geographic distance scale.

![Figure 6. Target architecture: every full network node participates as a relay by default; adjacent contacts join local networks, stations and mobile habitats. Circles are not signal ranges; positions and travel times are not to scale.](/diagrams/relay-networks.svg)

**Separate discovery, receipt and value.** Transport identities and signed advertisements support neighbor authentication and candidate routing; they do not grant monetary authority. Durable queues need explicit limits, retry and custody policies, and capacity refusal must preserve the sender's evidence. A signed transport receipt establishes only the receiver's stated handling of bytes. The ledger separately verifies source authority, finalized history, unique import and maturity. A relay at Proxima may carry an Earth-to-Andromeda frame without importing, reissuing or becoming a consensus signer. Actual onward asset transfer is a separate ledger export requiring the lineage and finality rules in I4-I7.

**Galactic scale is a further research boundary.** NASA reports approximate distances of 4.24 light-years to Proxima Centauri and 2.5 million light-years to Andromeda [25]. In a simplified stationary-endpoint model, newly generated information takes at least years to the nearest star and millions of years across the galactic example; a relay cannot shorten the sum of physical propagation and waiting delays. Exact moving-endpoint routes need trajectory and time-coordinate models. Supporting a topology on paper does not establish institutional, archival or cryptographic survival for millions of years. Current Ed25519 identities have no such qualification; revocation or replacement information also crosses the physical gap. UI states must distinguish learned identity, candidate route, observed contact, queued evidence, destination storage, ledger acceptance and local spend maturity.

A long-distance transfer follows an explicit state machine: locally authorized, source-locked, source-finalized, proof in transit, destination-imported, destination-matured, and receipt returned. Messages may be delayed, reordered, duplicated, or lost. A stable export ID, authenticated ancestry, and deterministic retry behavior make a courier replaceable without letting it mint value. Relays, intermittent networks, and carried media affect availability, not the authority to spend. The recipient can verify spendability on a local destination full node without waiting for a return signal to Earth. Earth can verify that outcome only after destination history and a receipt reach an Earth-side verifier. A timeout can trigger investigation or a second courier, but it cannot prove the destination did not import. This distinction resembles asynchronous cross-ledger packet protocols [5], although Rldcoin's adopted source-finality and no-silent-refund rules are its own.

For one complete evidence bundle carried sequentially through hops i, let L_i be one-way propagation distance divided by signal speed, W_i the actual non-overlapping contact wait after arrival at that hop, and X_i its serialization and relay time. Let T_source include export inclusion and source finality, and T_dest include destination verification, import inclusion, and the six-block spend maturity. A lower-bound decomposition for this store-and-forward model is:

```text
T_remote_spend >= T_source + T_route + T_dest
T_route >= sum over hops i of (L_i + W_i + X_i)
T_maturity_receipt >= T_remote_spend + T_return_route
```

These are durations, not promises of arrival. A scheduled contact plan can estimate W_i and capacity; an unscheduled or failed contact may make it unbounded [2, 6]. Mars links illustrate that even one-way light time varies with geometry and communications can be disrupted [7]. The return path may be different or absent. A local funded-channel receipt can be fast because its parties share a local validation context; it cannot certify remote destination maturity before evidence returns.

**Interplanetary versus interstellar scale.** NASA's representative Mars mission profiles include roughly 21-22 minutes of maximum one-way delay and blackout examples of about 13 or 21 days [7]. These are scenario-specific, not route guarantees. Proxima Centauri is about 4.25 light-years away [24]; under a simplified stationary-endpoint model, new evidence needs at least about 4.25 years one way and an immediate reply at least about 8.5 years round trip, before other delays. Moving spacecraft require a specified trajectory and time coordinate instead of this approximation. Relays cannot shorten the causal light-time bound. A destination liquidity provider could pay from funds already present locally, but would extend separately priced credit against an unconfirmed journey; that is a proposed service with counterparty and inventory risk, not faster arrival of the exported asset.

An export proof is an application payload for a persistent queue. Each relay should bind payload bytes to the export ID and intended destination, authenticate its peer or bundle where appropriate, retain the payload until durable custody transfer or a documented retention limit, and record receipt, forwarding, and deletion events. Contact scheduling must account for payload size, link capacity, competing traffic, and storage exhaustion [2, 3, 6]. Bundle Protocol lifetime expiration or a courier's deletion only ends that copy's delivery attempt; it does not reverse the ledger export. With imperfect clocks, transport lifetime and ledger validity must not be inferred from one another [2]. Bundle-layer integrity or confidentiality can protect payloads in transit but cannot substitute for source replay, checkpoint signatures, or the destination's unique-ID check [8].

BPv7 does not itself supply an end-to-end monetary acknowledgment or a mandatory durable-custody protocol; RFC 9171 moved custody transfer out of the base protocol. An operational custody profile therefore needs its own authenticated retention and deletion obligations. BPSec protects selected bundle data through integrity and confidentiality services; RFC 9172 explicitly does not provide hop-by-hop authentication as a service [8]. Neither standard proves that a remote ledger accepted value. Relay signatures make statements attributable but do not, by themselves, prove correct clocks, truthful delivery, or physical location. Transport lifetime, invoice expiry before signing, and ledger spend-height rules must remain separate.

An application-layer reference carriage profile uses the following bounded frame format for source and destination evidence. A versioned canonical JSON frame contains one of five kinds: source sync page, source finality certificate, finalized import command, destination sync page, or destination receipt. It binds both 32-byte chain IDs, the 32-byte export ID, the exact payload bytes, their SHA-256 digest, and a domain-separated message ID. Each payload is at most 3 MiB; a durable queue accepts at most 4,096 frames or 256 MiB and fails closed at capacity. Repeated receipt of identical bytes is idempotent, while carrying a frame leaves the original queue copy intact. These limits are transport controls, not consensus limits. The message ID detects changed bytes but is not a signature or proof of sender identity. Operators must authenticate peers or use bundle security for an actual route [8]. Frames can be carried by files, contact media or a separately qualified BPv7 adapter. This frame format does not itself specify contact scheduling, independent custody or a physical link [2, 6].

The receiver must replay source blocks from its pinned source anchor, install a valid four-signature certificate on its local source copy, then submit the finalized import to a destination node that independently mirrors that source. The destination node validates the proof and unique ID before local inclusion. To report the result back, a courier must return selected destination blocks and an import receipt; an Earth-side destination mirror must replay those blocks against the same source identity and verify the receipt on its selected branch at or above the receipt's recipient spendable height. The adopted rule adds six successor blocks after import, so an import in block 91 becomes spendable at height 97; six confirmations counted *including* block 91 reach only height 96 and are insufficient. A receipt alone is an index into history, not an independent finality proof. A source-region verifier must not interpret its own stale destination mirror as evidence of non-import.

```text
Frame(kind, source, destination, export_id, exact_payload):
  require pinned source != pinned destination and payload <= 3 MiB
  body = canonical_json(version, kind, source, destination,
                        export_id, SHA256(exact_payload), base64(exact_payload))
  message_id = SHA256(ASCII("RLD-INTERREGION-EVIDENCE-V1") || 0x00 || body)
  persist frame and message_id before a contact copies exact bytes
  return message_id  # integrity and deduplication, never value authority
ReceiveAndSettle(frames, local_source, local_destination):
  require each frame's route, digest, and message_id match pinned IDs
  replay ordered source pages and verify every block and state root
  install source certificate only if signatures and ancestry verify
  submit finalized import; require destination independently accepts it
  observe selected import plus six-block maturity on destination
  return destination history and receipt; replay on Earth side
  require selected destination height >= receipt.recipient_spendable_height
  never infer import, non-import, or refund from contact silence
```

Figure 7 makes the epistemic limit explicit. After the source finalizes an export, silence is consistent with both a proof that never reached the destination and a completed import whose receipt was lost. Those worlds are indistinguishable at the source without new authenticated evidence. A source-only time-based refund would release spendable value in the second world and violate conservation. Atomic-swap timelocks can work under their own bounded-time and observation assumptions [9]; they do not make an unverified absence of import a proof in this model.

![Figure 7. Store-carry-forward proof delivery and two indistinguishable silent outcomes; neither a contact gap nor a missing return receipt authorizes a refund.](/diagrams/contact-silence.svg)

```text
RelayExport(proof, export_id, destination):
  require proof bytes and destination match the queued export ID
  persist payload, hash, and forwarding state before acknowledging custody
  for each usable contact until a documented retention limit:
      send identical payload; record peer receipt and retry safely
  report delivery evidence separately from destination import evidence
  never issue or refund value as a consequence of transport status
```

An operating route requires a pinned destination, independent operators and key custody, tested contacts, durable capacity, and disconnection, restart, reorganization and contradictory-certificate qualification. Safety does not imply liveness: without contact, storage, available verifiers and non-conflicting finality, there is no finite bound on remote spend. Fully asynchronous deterministic consensus cannot guarantee termination in every execution under the crash model of FLP [10]; the design therefore states conditional regional progress rather than unconditional global consensus.

## 10. Verification and storage

A full verifier pins the exact genesis and adopted rules, checks signatures and block work, replays commands in order, and compares resulting state roots. Startup and replay reject wrong identities, corrupt durable records, unsupported history, or noncanonical inputs. Source and destination can be checked from their public records and published release rather than from a website badge. A lightweight client that trusts reported roots or a remote API inherits that operator's availability and honesty assumptions.

Old blocks and proofs may be indexed or compacted for convenience only if the commitments and sufficient data remain available for independent replay, destination import, channel challenge, and dispute resolution. An index accelerates lookup but is not an authority independent of the committed history. A light client that accepts a header and membership path without executing every command relies on full verifiers to detect invalid state and on its chosen source of the best chain. That trust assumption must be visible to the user. For a delayed route, archival policy must outlive the longest intended journey and possible dispute, including the source ancestry, export membership path, signed checkpoint, adoption records, import record, and receipts. A hash commitment cannot reconstruct data that every custodian has deleted. Independent archival copies and tested recovery are therefore part of availability, not a relaxation of the verification rule.

A future compact proof or validity proof would still need to bind the exact genesis, rule version, source state, finality policy, destination, amount, and consumed export ID. Data-availability research separates commitments from availability and gives light-client guarantees under additional network and sampling assumptions [20]. A disconnected verifier cannot treat a missing fraud proof as evidence of validity. Rldcoin currently requires source replay; proof compression, erasure-coded archival recovery, and data-availability sampling are research options, not deployed substitutes. Archives must preserve decoding software and versioned validation rules as well as bytes.

## 11. Keys, privacy, and user interfaces

Owner keys authorize payments; genesis and checkpoint keys sign only their narrowly defined network statements. These roles need separate custody, backups, and purpose-separated signing domains. A wallet should display the actual genesis, recipient, amount, fee, destination, expiry, and state before signing. A payment request can help bind these terms but cannot replace transaction validation. Secret keys should never be sent to a website, courier, or mining peer.

Journeys and archives spanning years also require cryptographic and operational migration planning. A future signature change must bind the same network and intent, preserve verification of old records, define activation and dual-verification rules, and test how in-flight exports are interpreted across versions. NIST's standardized ML-DSA is a candidate signature family to evaluate for such a change [11]; an algorithm becomes valid only through explicit adoption, and classical signatures must not be described as post-quantum secure. Key compromise during a long disconnection can be discovered only after evidence crosses that gap, so withdrawal and incident procedures must preserve conflicting signed evidence rather than rewrite history.

SLH-DSA offers a standardized hash-based comparison point [21]. Evaluation must measure signature and key sizes, verification cost, device resilience, and archive lifetime against the chosen route. Re-signing an old hash after its original authentication has become forgeable cannot establish which conflicting past record was genuine. A migration must authenticate the old checkpoint and new keys before that trust is lost, pin algorithm identifiers, reject downgrade, and specify old/new acceptance for every in-flight export. Hybrid verification and overlapping epochs are proposals requiring their own proof and activation ceremony. A revocation notice cannot protect an isolated destination before it arrives, so no upgrade schedule may assume simultaneous activation across stellar distances.

Public keys are pseudonyms, not anonymity. On-chain amounts, timing, and output relationships are visible; reused keys and multi-input transfers can reveal further links. New keys can reduce casual linkage, while cross-Zone proofs necessarily reveal enough history to justify an import. Privacy must account for the ledger and network metadata rather than assume that a cryptographic address hides identity.

![Figure 8. Public local transfers and cross-Zone proofs expose different links; a fresh key reduces simple reuse but does not hide value or timing.](/diagrams/privacy.svg)

## 12. Recovery and protocol evolution

Nodes recover by authenticating the original genesis, durable history, installed checkpoints, and executed state before serving value. Recovery must retain per-key signer locks and the most recent signed channel states. Restoring a checkpoint key without its last signed statement can permit equivocation; restoring a channel without its newest state can permit a stale close. A restart cannot turn an in-transit export into a refund or a pending receipt into a settled balance.

An upgrade requires an explicit version, activation rule, exact rule and code commitments, replayable migration, and preserved asset history. A software release alone cannot change another verifier's accepted genesis or supply. New Zones require their own signed identity and source bindings. Unknown formats must fail closed instead of falling back to an older interpretation. A public rule change must state how prior signatures, outputs, channels, exports, imports, and checkpoints remain valid or are resolved.

For a stranded export, recovery starts by querying independently held source and destination evidence and replaying both histories. If the destination has imported, resend or reconstruct the receipt. If import is not observed, keep the export pending and retry the same destination-bound proof through another courier. Absence from an incomplete destination view is not non-import proof. Any future cancellation must finalize a destination transition that both rejects an existing import and permanently consumes the export ID as cancelled, including against delayed copies and replay after recovery. The source must verify that transition under an adopted destination-finality rule before unlocking. A historical non-membership proof alone cannot prevent a later import. Such cancellation and its required destination finality do not exist in the current protocol; they would add communication and governance assumptions, not guarantee recovery from permanent separation.

## 13. Security analysis and economic recovery

An attacker may double-spend an unfinalized local transfer by outworking the observed branch, censor or withhold a contact, replay an export, substitute another Zone's proof, exhaust relay storage, present a stale channel state, steal a key, or cause signers to authorize conflicting checkpoints. Work, signature, domain, maturity, unique-ID, and state-root checks address different parts of this model. Proof of work is probabilistic; channel safety needs available evidence during its challenge window; source checkpoint safety requires adopted signers not to authorize conflicting histories and all value-serving source nodes to enforce the lock. Redundant couriers and contact paths can improve delivery odds but do not prevent signer equivocation or invalid destination validation.

For an idealized proof-of-work race, let p be the honest share of work, q the attacking share, and z a current block deficit. With independent block discoveries, the probability that the attacker ever catches up is (q/p)^z when p > q, and 1 when p <= q [1]. This is a catch-up model from an observed deficit, not an end-to-end payment guarantee. It excludes network partition, signer equivocation, channel failure, and destination reorganization. Those conditions must be evaluated separately.

If z instead counts honest confirmations observed while an attacker mines privately, the attacker may already have found k blocks. Under the idealized independent-discovery and Poisson approximation used in [1], let lambda = z*q/p. For q < p, the approximate eventual catch-up probability is:

```text
P(z, q) = 1 - sum(k = 0..z) [ exp(-lambda) * lambda^k / k!
                            * (1 - (q/p)^(z-k)) ]
lambda = z*q/p,  p = 1-q,  q < p
```

Illustrative values, rounded from that model, are:

```text
Honest confirmations z       q = 0.10          q = 0.30
1                            0.204587          0.627749
3                            0.013172          0.324584
6                            0.000243          0.132111
12                           0.000000089       0.023584
```

Figure 9 uses a logarithmic axis to display that decline. Neither this Poisson calculation nor its illustrative inputs measure Rldcoin's live hashrate or guarantee an import, because the source checkpoint's signer custody and the destination chain add separate risks.

![Figure 9. Idealized source proof-of-work catch-up probability after z confirmations, for illustrative attacker work shares of 10% and 30%.](/diagrams/pow-risk.svg)

The protocol can reject an ordinary source reorganization after a unanimous checkpoint, but cannot automatically restore value already spent at the destination after signer equivocation or compromise. If contradictory certificates appear, affected imports and redemptions should stop, both certificates and liabilities should be published, and any compensation should follow an auditable rule. An external value service needs a cap on outstanding credit, matured source collateral, an incident ledger, and a reproducible allocation process. A shortfall must be disclosed rather than covered by silent extra issuance.

Independent miners and operators, separate key custody, outside review, capacity testing, and long-running recovery improve assurance. Four signatures controlled by one person do not establish independent governance. An operator status page helps users observe a service but cannot prove custody, consensus safety, or availability of a distant route. Each new Zone and route needs evidence for delay, disconnection, conflicting proofs, and operator failure. No protocol can make a message arrive before physical communication permits.

Destination security has its own budget. A destination region has zero native issuance; source mining rewards do not automatically pay its miners or provide its hashrate. Import/transfer fees, operator funding, concentrated hash power, and destination reorganizations must be evaluated separately. A fixed global cap is not a security-budget proof, a guarantee of purchasing power, or a promise of liquidity. Long-haul transport and archival fees also need explicit payers; unpaid preservation cannot be assumed for decades.

## 14. Related work and design choices

**Consensus and asset transfer.** Partial-synchrony research explains how termination can depend on eventual communication bounds [12], while FLP excludes unconditional deterministic consensus termination under its asynchronous crash model [10]. It does not prove that every payment needs global consensus. Guerraoui et al. show that single-owner asset transfer has consensus number one and give a Byzantine message-passing construction using secure broadcast [13]. That remains a communication and fault-model result. Applying it to Rldcoin's mining, shared channel states, checkpoints, and reconfiguration would need a new composition proof. This revision therefore preserves adopted regional ordering while treating causal asset-transfer designs as an explicit research alternative.

**Partitioned ledgers and cross-chain evidence.** Monoxide studies asynchronous consensus Zones for blockchain throughput [23]; its terrestrial sharding results do not establish years-long partition tolerance. IBC separates authenticated client state and packet processing [5], and atomic-swap protocols state assumptions for timeouts and cooperation [9]. These inform identity pinning, replay protection, and state-machine reasoning. They do not justify copying a timeout refund into a destination that can still accept a delayed export. A future Rldcoin re-export must first define asset lineage, destination finality, local debit before onward credit, and non-duplication through cyclic routes.

**Offline and asynchronous payment alternatives.** Teechain reduces dependence on timely blockchain access using trusted execution and replication assumptions [16]. Hu et al. study intermittent rural connectivity with bank-supported local payments [17]. The BIS Polaris handbook surveys offline CBDC design decisions [22]. These are useful alternatives to compare, but neither a trusted device nor a bank-backed claim is an assumption-free offline bearer coin. Copyable software state and a signature alone cannot stop two isolated recipients accepting conflicting spends. Any future offline mode must specify preallocated spending rights or hardware/trust assumptions, value and duration limits, reconnect behavior, and who bears an unreconciled loss.

**Interplanetary proposals.** Puente and Puente's 2025 preprint proposes Bitcoin-related transit receipts and delay-aware operating policies [18]. Its auditable carriage idea is relevant; its preprint status and planetary scope limit what it establishes. Rldcoin can investigate signed courier receipts as operational evidence without making their timestamps a consensus clock or importing claims of automatic BPv7 custody. Transport claims must be checked against the RFCs themselves. No cited preprint validates Rldcoin, establishes interstellar deployment, or removes the light-time lower bound.

## 15. Route capacity and experimental acceptance

**Capacity before availability claims.** A route profile must publish the intended contact plan, payload and archive sizes, admitted arrival load, per-hop bandwidth, storage quotas, retry policy, and forward/return reachability. Capacity-aware routing research explicitly considers contact and buffer constraints [19]. For an illustrative fluid queue with admitted serialized rate r bytes/second, a no-service gap D, and burst allowance B, at least r*D + B bytes are needed at that bottleneck before replication, metadata, and safety margin. Recovery service must exceed ongoing arrivals long enough to drain the backlog. Average bandwidth alone does not guarantee a particular delivery deadline or survive a failed contact.

The reference 256 MiB queue would hold only about 2,684 seconds, or 44.7 minutes, at an assumed 100,000 serialized bytes/second with no departures. This is dimensional arithmetic, not a measured traffic rate or throughput result; frame-count limits and overhead can bind earlier. A four-year outage cannot be supported by citing a bounded terrestrial queue. Future admission should distinguish stored bytes from promised future capacity, reject or backpressure excess traffic, and keep ledger exports locked even if every relay reaches its retention limit. Retrying and batching history pages may reduce overhead; they cannot waive missing ancestry.

**Reproducible experiments.** Each result should identify genesis and rule hashes, code revision, topology, independent owners, contact trace, random seeds, hardware, initial state, offered load, and injected faults. Scenarios should include short contacts, asymmetric links, the NASA-inspired multi-week gaps, multi-year logical-time gaps, and permanent separation. Accelerated simulation measures protocol behavior under a model; it cannot validate physical links, years of media aging, or independent custody. Report destination spend latency separately from the latency until the source learns it. Publish success fraction, unresolved exports and their age, duplicate-credit violations, queue high-water mark, bytes per completed import, CPU/replay cost, and recovery outcomes. Latency percentiles over successful transfers alone must not hide undelivered transfers.

**Acceptance conditions.** Duplicate and reordered delivery must never produce extra credit. Lost receipts, expired bundles, exhausted queues, and permanent partitions must never cause a refund. A source checkpoint conflict must preserve both certificates and stop affected new value transitions once detected; the report must retain any already-paid exposure. Destination reorganization must invalidate receipts tied to orphaned history and reconstruct balances consistently. Missing signers must stop new source finality without inventing signatures. Restart, disk corruption, key/lock restoration, wrong destination, and unknown rule versions must have explicit rejection and recovery evidence. Conservation should be checked after every simulated transition and every recovered state. A finite test campaign can find counterexamples; it is not a proof over all executions.

## 16. Mandatory interstellar payment requirements

These requirements define completion of the ultimate purpose. They are mandatory alongside the A-G foundational acceptance phases. They apply to an exact adopted version; listing them does not establish implementation or operating qualification. Every requirement needs a versioned specification, stated fault assumptions, actual node evidence and independent review.

**I1. Currency and regional identity.** All regions must share one authenticated currency root while retaining distinct regional genesis and rules. A locally trusted root and carried adoption evidence must suffice to validate regional admission, rule commitments and signer epochs without an online Earth directory. A discovered identity, self-signed region label or route advertisement must confer no ledger, finality or issuance authority. Unknown currency roots, genesis identities, rules and unauthorized regions must be rejected.

**I2. Local autonomy during remote disconnection.** With sufficient local communication and security resources, a region must start, progress, receive and spend locally verified value, and recover consistently while every remote-source endpoint is unavailable. Exports already covered by locally verified finality may be imported; missing new evidence blocks only the transitions that need it. Remote freshness must not gate all local balances or payments. New contact evidence must be authenticated, replayed and installed without erasing prior finality or hiding conflicts. Full CLI startup, actual signed payments, block production and persistent recovery are required; a fixed-cache interface test is insufficient.

**I3. Unique issuance and conservation.** The future signed currency root must bind its cap, integer units and issuance authority. The currency specifies 100 billion RLD, 10^24 runlai per RLD and zero initial allocation, bound by exact signed adoption. Only the authorized origin issues native currency; additional regions have zero native issuance. No new reserve is created by admission or import. For compatible selected histories, I = U + E + T must hold through splitting, merging, change, fees, channels, import, onward export and recovery. Historical proofs, receipts and import tombstones are evidence, not additional balances. Delegating issuance would require a separate non-overlapping budget protocol and is not a dependency of this design.

**I4. Transfer between arbitrary authorized regions.** Every qualified region must be capable of both export and import, including multiple authorized source regions. An owner must authorize local debit before a finalized export can create unique credit at its exact destination. An export must bind its currency root, source and destination genesis, rule and finality epoch, input dependencies, amount, recipient, fee/change rules and unique domain-separated ID. Full authenticated history or an explicitly adopted equivalent must establish all dependencies. Wrong domains, missing evidence, altered recipients, duplication and reordered carriage cannot create value.

**I5. Onward export and composed finality.** Imported value must be usable for local payments and for a new export. The exporting region's recognized finality must protect the imported input, its accepted provenance and the new local debit before onward import is allowed. Six-block probabilistic maturity is not irreversible export finality. Splits and merges require a verifiable dependency graph; repeating historical ancestors must not issue value. Reorganization before finality, conflicting ancestry and recovery must preserve the same conservation rule. This requires a general regional ledger and a validated finality composition.

**I6. Actual return of value.** A return is a new owner-authorized export from the region holding the asset and a new unique import into the earlier region. Each leg retains its own ID and permanent duplicate-import protection. Returning information, a custody receipt or the asset itself must never unlock the first source debit again. Earth-to-Proxima-to-Andromeda-to-Earth is a required three-ledger test topology, with labels representing ground fixtures. Lost receipts, expired transport copies and permanent partitions cannot refund an export.

**I7. Regional finality and trust evolution.** Finality must complete within a region under a specified local fault model, with no simultaneous vote across stars. The adopted protocol must define signer independence, quorum intersection, durable locks, view changes, epoch transitions, reconfiguration and conflict recovery. A threshold alone is insufficient: established BFT protocols also specify voting and locking rules [14]. Four keys under one owner are not independent Byzantine tolerance, and changing four-of-four to three-of-four is not a qualified protocol. Detected authenticated conflicts must preserve both histories, suspend affected new imports and onward exports within explicit dependency scope, and propagate evidence. A disconnected region may not yet know a conflict; already-paid exposure cannot be promised reversible. Reconfiguration and custody need independent adversarial tests and explicit adoption.

**I8. Native discovery and causal evidence carriage.** Every normally started full network node must enable authenticated discovery and bounded durable relay in the same lifecycle, without a separate relay launch or mandatory central Earth service. With usable contacts it must progressively learn neighbors and candidate distant routes, automatically forward admitted payment evidence for other participants, and resume retained work after restart. Qualification must demonstrate incremental node addition extending reach, a usable alternative path delivering after relay loss, and capacity refusal preserving already admitted evidence. Additional node count alone must not be reported as increased consensus security or guaranteed delivery. The master plan's N1-N10 apply to native integration as well as the ground reference. Real contact adapters, authenticated retention/deletion obligations, resource admission and recovery must be qualified. Transport must respect physical contact and light time; forward and return reachability are separate. Bad neighbors, asymmetric links, restarts, lost copies and full queues must not change ledger value. A mesh receipt is neither import acceptance nor spendability.

**I9. Recipient-verifiable payment states.** Wallets and nodes must separately expose discovered identity, candidate route, observed contact, transport receipt, ledger import, local maturity, export finality and source knowledge of a returned receipt. The recipient must verify the currency, region, ownership and accepted local state independently. Locally spendable imports must not wait for Earth or a returned acknowledgment. Displayed stale information cannot substitute for current signing qualification. Unknown dependencies and detected conflicts must remain visible rather than being represented as settled money.

**I10. Durable history and bounded recovery.** Each region must qualify its active-history and archive design, authenticated state/proof recovery, permanent unique-import commitments, finality locks and signer anti-rollback protection. Checkpoints alone cannot waive history under rules that still require replay. Multiple independently held archives, corruption and old-backup tests, resource limits and measurable restoration cost are required beyond the first 200,000-block issuance era and the declared operating scale. A lost tombstone or old snapshot must never make a previously imported export importable again. The qualification states a storage and preservation horizon, not infinite media life.

**I11. Cryptographic longevity and delayed revocation.** Signature/hash formats, key epochs and verification horizons must be versioned. A qualified post-quantum migration path, authenticated renewal of still-valid historical evidence and downgrade rejection are mandatory long-term obligations [20, 21]. An in-flight export must have a defined policy when keys rotate, revoke or leave the verifier's qualified horizon. Distant compromise cannot become known faster than communication; renewal cannot rehabilitate evidence whose authenticity was already lost. Out-of-scope evidence remains preserved but unavailable for new acceptance until an authorized verification rule resolves it. Neither Ed25519 nor a post-quantum standard proves million-year security. The Andromeda example specifies topology and causal scale, not a qualified cryptographic lifetime.

**I12. Independent qualification and sustained service.** Independent operators, separate finality custody, external security review and reproducible recovery must substantiate the exact release. Default relay service must declare its storage, bandwidth, admission, retention and operating-cost budgets; starting a node earns no automatic reward or issuance right. Local mining/finality, long-haul carriage and archive preservation need explicit resource and fee budgets; zero-native-issuance destinations do not inherit the source mining budget. User payments, unilateral local-channel exit, device recovery and anti-rollback must be verified under the declared scale. Reports must retain unresolved exports, incidents, paid exposure and budget shortfalls. Every physical route and preservation period must have its own evidence; operator telemetry and accelerated logical-time tests cannot establish independent custody or physical interstellar availability.

## 17. Target protocol composition and qualification

A regional adoption package must bind the currency root, regional genesis, precise rules and implementation, admission authority, local finality protocol/epochs and upgrade ancestry. Directory answers are candidate data. A verifier authorizes them from its adopted local trust context and carried evidence, without a mandatory online central lookup. Evidence updates must be checked before becoming trusted state, while conflicting evidence is retained and isolated according to declared dependencies.

The target value path is:

```text
locally spendable output
  -> owner signs export -> local debit -> recognized local finality
  -> asynchronous evidence carriage -> exact destination validation
  -> unique import -> local maturity -> local payment or new export
  -> onward region; return is another finalized export and import
```

The export certificate must cover accepted input dependencies and the debit, not merely a block number or operator statement. Ordinary local spending remains subject to the region's disclosed reorganization rules. Export safety additionally requires the adopted local finality protocol to constrain selected history, restart, subsequent certificates and epoch changes. Proving that composition, implementing its wire formats and validating its adversarial behavior are work still required; a diagram or threshold configuration does not supply them.

**No timeout refund.** Cancellation is optional and disabled by default. A future cancellation would require recognized destination finality that permanently consumes the export ID and excludes both existing and later import, followed by source verification and explicit adoption. A query, old non-membership proof, transport expiry or absence of a receipt is insufficient. Local liquidity advances, proof compression and fully offline bearer spending may be separate proposals; they cannot replace I1-I12 or remove their trust assumptions.

**Mandatory end-to-end campaign.** At least three actual native regional ledgers and multiple owners must execute split/merge/fee transactions, multiple-source imports, onward exports and a cyclic return. Only neighboring contacts are provided. After origin authorization/export, all Earth services and directories are removed: distant local payments and onward legs must continue; the return-to-Earth leg may wait for restored contact. Earth then imports that new export exactly once without releasing the initial debit. Full CLI startup, real local mining, maturity and restart must work without source HTTP. Tests must cover pre-finality reorganization, post-maturity onward export without finality, deep locked forks, signer faults, equivocation and dependency quarantine, in-flight epoch rotation, delayed revocation, wrong destinations, malicious neighbors, queue exhaustion, lost acknowledgments, old backups, lost archives and permanent partitions. Conservation is checked at every transition and restoration.

**Completion and claims.** DOC_ALIGNED means the paper and plan state the same mandatory purpose and acceptance contract. PROTOCOL_QUALIFIED requires an exact version to pass A-G and I1-I12 within published fault assumptions, capacity, verification horizon and independent evidence. EARTH_RELEASE_AUTHORIZED additionally requires a signed zero-initial-issuance genesis and a verified real release; test balances and keys are excluded. PHYSICAL_ROUTE_QUALIFIED applies only to a specific measured route, its operators, contact/capacity trace and operating horizon. Ground protocol qualification can precede a physical stellar route, but cannot establish that such a service is operating. Deployment progress is reported separately; the paper is not an acceptance certificate.

Implementation proceeds through a reviewed currency/admission/value/finality specification, three generic native ledgers with disconnected operation and onward/return value, native discovery and wallet integration, durable archive/cryptographic qualification, then independent acceptance and exact new release adoption. Regional block intervals, maturity and channel challenges must be chosen from local propagation, persistence and attack measurements and signed together; stellar light time or an accelerated test clock cannot choose them. Continuing refinement is necessary whenever a claimed route, scale, trust model or verification horizon changes. The ultimate purpose remains conserved, locally autonomous payment between arbitrary authorized regions, with conditional delivery and honest evidence of its limits.

## References

[1] S. Nakamoto, *Bitcoin: A Peer-to-Peer Electronic Cash System*, 2008. https://bitcoin.org/bitcoin.pdf

[2] S. Burleigh et al., *Bundle Protocol Version 7*, RFC 9171, 2022. https://www.rfc-editor.org/rfc/rfc9171.html

[3] K. Fall, *A Delay-Tolerant Network Architecture for Challenged Internets*, SIGCOMM, 2003. https://people.eecs.berkeley.edu/~sylvia/papers/dtn.pdf

[4] J. Garay, A. Kiayias, and N. Leonardos, *The Bitcoin Backbone Protocol: Analysis and Applications*, EUROCRYPT, 2015. https://doi.org/10.1007/978-3-662-46803-6_10

[5] C. Goes, *The Interblockchain Communication Protocol: An Overview*, 2020. https://arxiv.org/abs/2006.15918

[6] CCSDS, *Schedule-Aware Bundle Routing*, 734.3-B-1, 2019. https://ccsds.org/Pubs/734x3b1.pdf

[7] NASA, *Mars Communications Disruption and Delay*, 2023 Moon to Mars Architecture Concept Review. https://www.nasa.gov/wp-content/uploads/2024/01/mars-communications-disruption-and-delay.pdf

[8] E. Birrane and K. McKeever, *Bundle Protocol Security (BPSec)*, RFC 9172, 2022. https://www.rfc-editor.org/rfc/rfc9172.html

[9] M. Herlihy, *Atomic Cross-Chain Swaps*, 2018. https://arxiv.org/abs/1801.09515

[10] M. Fischer, N. Lynch, and M. Paterson, *Impossibility of Distributed Consensus with One Faulty Process*, JACM, 1985. https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf

[11] NIST, *Module-Lattice-Based Digital Signature Standard*, FIPS 204, 2024. https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.204.pdf

[12] C. Dwork, N. Lynch, and L. Stockmeyer, *Consensus in the Presence of Partial Synchrony*, JACM 35(2), 1988. https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf

[13] R. Guerraoui, P. Kuznetsov, M. Monti, M. Pavlovic, and D.-A. Seredinschi, *The Consensus Number of a Cryptocurrency*, PODC, 2019; extended version. https://arxiv.org/abs/1906.05574

[14] M. Yin, D. Malkhi, M. K. Reiter, G. G. Gueta, and I. Abraham, *HotStuff: BFT Consensus in the Lens of Blockchain*, PODC, 2019; extended version. https://arxiv.org/abs/1803.05069

[15] A. Riard and G. Naumenko, *Time-Dilation Attacks on the Lightning Network*, arXiv preprint, 2020. https://arxiv.org/abs/2006.01418

[16] J. Lind, O. Naor, F. Kelbert, I. Eyal, E. G. Sirer, and P. Pietzuch, *Teechain: A Secure Payment Network with Asynchronous Blockchain Access*, SOSP, 2019; extended version. https://arxiv.org/abs/1707.05454

[17] Y. Hu et al., *A Delay-Tolerant Payment Scheme Based on the Ethereum Blockchain*, arXiv preprint, 2018. https://arxiv.org/abs/1801.10295

[18] J. E. Puente and C. Puente, *Bitcoin as an Interplanetary Monetary Standard with Proof-of-Transit Timestamping*, arXiv:2508.20591v1, 2025; preprint. https://arxiv.org/html/2508.20591v1

[19] T. Alhajj and V. Corlay, *Improved Contact Graph Routing in Delay Tolerant Networks with Capacity and Buffer Constraints*, arXiv preprint, first posted 2024. https://arxiv.org/abs/2410.15546

[20] M. Al-Bassam, A. Sonnino, and V. Buterin, *Fraud and Data Availability Proofs: Maximising Light Client Security and Scaling Blockchains with Dishonest Majorities*, arXiv preprint, first posted 2018. https://arxiv.org/abs/1809.09044

[21] NIST, *Stateless Hash-Based Digital Signature Standard*, FIPS 205, 2024. https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf

[22] BIS Innovation Hub, *Project Polaris: Handbook for Offline Payments with CBDC*, 2023; institutional design handbook. https://www.bis.org/publications/project-polaris-handbook-offline-payments-cbdc

[23] J. Wang and H. Wang, *Monoxide: Scale Out Blockchains with Asynchronous Consensus Zones*, NSDI, 2019. https://www.usenix.org/conference/nsdi19/presentation/wang-jiaping

[24] NASA, *Our Nearest Celestial Neighbor? An Exotic 3-Star System*, 2025; astronomical distance reference. https://science.nasa.gov/exoplanets/other-stars-other-worlds/our-nearest-celestial-neighbor-an-exotic-3-star-system/

[25] NASA, *Voyager 1: What Is a Light-Day*, 2026. https://science.nasa.gov/mission/voyager/voyager-1/voyager-1-what-is-a-light-day/
