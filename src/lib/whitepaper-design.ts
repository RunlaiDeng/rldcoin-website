// Summaries of the frozen design; never implementation-completion claims.
export const designTopics = {
  authority: {
    id: "final-design-authority",
    title: "One frozen design; separately qualified releases",
    paragraphs: [
      "The final white paper has 21 chapters and 39 references. Sections 18–21 state the normative architecture, 24 risk records and operational obligations, embedded acceptance gates and continuity rules. Current code, a mutable plan or an older fixture cannot lower that contract.",
      "The frozen publication has no version label. Its content hashes and audit commit are recorded separately. Executable protocol profiles, cryptographic suites, validator and key epochs still require authenticated versions, activation and renewed qualification when their assumptions change. Freezing the paper does not freeze the software or approve a mainnet.",
    ],
  },
  consensus: {
    id: "independent-regional-finality",
    title: "Independent regional finality is the target baseline",
    paragraphs: [
      "The target uses independently operated Byzantine regional finality: n = 3f + 1 equal-weight validators, at most f Byzantine, and at least 2f + 1 distinct approved votes for each required quorum. A reviewed locking and view-change protocol, persisted signing intent and atomic installation of certified history are required; counting signatures is insufficient.",
      "Progress needs the adopted local synchrony and available honest quorum. A local partition lacking quorum stops dependent finalization, imports and onward exports. A new epoch must bind an old-epoch closed prefix and a new-epoch acknowledgment of the identical prefix and carried locks. Copied signer custody cannot run in parallel.",
      "The PoW timing, four-of-four checkpoints and block delays in sections 5–9 are the historical Earth reference profile. They do not constrain a new target adoption or retroactively change an existing signed genesis. Same-owner BFT fixtures do not establish independent fault tolerance.",
    ],
  },
  "authority-roles": {
    id: "admission-and-governance",
    title: "Admission and recovery have explicit authority",
    paragraphs: [
      "A pinned CurrencyRoot binds issuance, regional admission, governance and suite policies. Every admission, finality, incident recovery, owner recovery and renewal role needs authenticated identities, quorum, scope, predecessor and conflict/activation rules in its signed adoption package before qualification. An omitted role fails closed.",
      "Discovery and relay are open transport functions with bounded admission policies; they grant no monetary voting or issuance right. Regional finality membership is an explicit trust boundary, with controller and conflict disclosures. More nodes or more coin ownership cannot substitute for independent authority.",
      "Offline governance must preserve predecessor continuity and conflicting statements. Incompatible governance branches cannot be merged by set union, a threshold reduction or a reset genesis. Unavailable authority stops the affected transition while evidence remains available.",
    ],
  },
  conservation: {
    id: "conservation-and-provenance",
    title: "Account for every amount once, including pending exports",
    paragraphs: [
      "On compatible selected histories, issued value I = U + E + T. U includes immature and quarantined unspent outputs; E includes live channel escrows and adopted fee reserves; T includes every source export debit present on the selected history, even before finality, until its unique destination credit. These buckets never overlap, and fees are assigned exactly once.",
      "Only finalized debits with complete admitted ancestry can be imported. Replay atomically reverses an orphaned unfinalized debit and restores its inputs; ordinary reorganization cannot undo a finalized debit. Atomic import records permanent ExportID consumption together with the unique credit. A missing receipt, expiry or timeout never refunds a finalized source debit; cancellation is excluded from the baseline.",
      "Value proofs form a finite causal DAG rooted in authenticated origin issuance. A geographical return has new debit and import identities; a self-supporting ring of proofs is invalid. Split, merge, change, local payments, fees and channel settlement all carry the union of input provenance.",
    ],
  },
  incidents: {
    id: "incident-isolation",
    title: "Conflicts follow value through every descendant",
    paragraphs: [
      "An authenticated finality or governance conflict quarantines every dependent output, escrow, pending import and onward export, including already received local balances and descendants created by payment, split, merge, fees or channels. Mixing disputed and clean lineage taints the entire resulting output in the baseline.",
      "Quarantined value remains an accounted liability but cannot fund new local spends, channel updates or closes that create available value, imports or exports. Unrelated proven lineage may progress under its own qualified local quorum. Resumption needs the pre-adopted recovery authority, authenticated compatible decision and complete replay; waiting or deleting the incident cannot clear it.",
    ],
  },
  wallets: {
    id: "freshness-and-owner-recovery",
    title: "A usable backup must establish current signing state",
    paragraphs: [
      "Signing and spending after restore require a surviving independent fresh monotonic witness. If every local state and latest head has rolled back together, decrypting a backup cannot establish freshness: inspection remains read-only and signing or spending must refuse. Hardware isolation, interrupted restore and concurrent copied-key prevention need qualification.",
      "Lost-owner recovery and inheritance require a policy authorized before the loss, with named trustees or beneficiaries, quorum, delay, objection, scope and activation rules. A validator or operator cannot invent authority or transfer ownership during an incident. Recovery without such a policy may be impossible.",
      "Wallet states must distinguish review, reservation, submission, inclusion, source finality, transport custody, unique import, maturity, quarantine, local spending and onward eligibility. Missing or conflicting dependencies must be visible. Addresses and public proofs are pseudonymous; the baseline does not promise anonymity.",
    ],
  },
  channels: {
    id: "local-channel-protection",
    title: "Channels require funded, timely local protection",
    paragraphs: [
      "The reference channel closes at height c with deadline d = c + W. Challenges are allowed at c + 1 through d inclusive; settlement requires h > d. A challenge does not extend the deadline, and valid conflicting states with the same sequence create an incident.",
      "The target requires a preauthorized challenge-fee reserve, explicit reserve ownership and conservation, and qualified local monitoring. Exhausted reserves refuse new receipts or insufficiently funded challenges. Top-ups require mature owner-authorized inputs; recovery needs independently witnessed freshness. Reserves cannot guarantee affordable fees, inclusion or protection against censorship. A distant watchtower cannot outrun the local deadline.",
    ],
  },
  economics: {
    id: "issuance-and-service-funding",
    title: "Exact issuance and paid service obligations",
    paragraphs: [
      "The cap is 100,000,000,000 RLD, or 10^35 integer runlai; one RLD equals 10^24 runlai. Initial allocation is zero. Only the authenticated origin may issue native currency; additional regions issue none. Checked parsing and arithmetic must conserve inputs, outputs, fees, channels and exports.",
      "Section 6 defines the exact integer recurrence: each 200,000-block era allocates floor of half its remaining reserve, except a terminal one-runlai reserve is released once. Quotient and remainder determine individual block rewards. A release must pass boundary and terminal vectors, rather than substitute a floating-point halving curve.",
      "Relay, validation, archive retention, watchtowers and recovery need declared resource budgets and funding. Adoption states the payer, reserve, minimum service and insolvency/stop conditions. The default bounded node relay obligation is not a promise of free unlimited transit or permanent unpaid storage. Insufficient funding or capacity stops the affected service without destroying value evidence.",
    ],
  },
  transport: {
    id: "bounded-relay-and-custody",
    title: "Relay by default within a declared custody contract",
    paragraphs: [
      "Every normally started full network node must discover and relay admitted evidence within declared resource limits in the same lifecycle. A real first neighbor, seed or carried message is required. Signed advertisements describe candidate paths; they do not prove current reachability, admitted regional authority or accepted money.",
      "Custody acceptance binds the objects, retention duty, horizon, capacity and payer. Legal deletion needs the adopted handoff, expiry or other release conditions; an acknowledgment alone cannot silently erase retained evidence. Transport retention duties are separate from the owner’s obligation to preserve authentic history and permanent ledger commitments.",
      "Object size, decompression, graph depth/fanout, signature work, CPU, RAM, disk, queues, retries and recovery indices need enforced limits and explicit pending/refusal states. Missing contact has no guaranteed finite delivery time. Earth–Proxima–Andromeda is an illustrative topology; drawings and local fixtures do not qualify a physical route.",
    ],
  },
  continuity: {
    id: "continuity-and-renewal",
    title: "A 100-million-year objective needs continuing evidence",
    paragraphs: [
      "The goal is continuous ownership and authentic history across 100 million years of changing hardware, societies and cryptography. It is an objective, not a proven operating lifetime or guarantee. Long silence can outlast institutions, archives, keys, contacts and accepted assumptions.",
      "The adopted release needs independent archives and verifiers, corruption and disaster recovery, repair and migration procedures, authenticated suite/key/epoch succession and proactive renewal before old evidence becomes unsafe. Revocation travels causally; a remote party cannot know an unseen update. An unverifiable or expired chain of authority stops affected new value transitions while records remain inspectable.",
      "Implementation defects, experiments and changing risks are tracked in separate records under the frozen design. Material changes, incidents, exhausted resources or exceeded fault/load/horizon bounds trigger scoped requalification; they do not authorize weakening the contract.",
    ],
  },
  qualification: {
    id: "implementation-acceptance",
    title: "Qualification is a complete, bounded evidence contract",
    paragraphs: [
      "A release needs a complete executable protocol profile and authenticated pre-mainnet decisions, including root/admission/recovery authorities, consensus and epoch rules, suites and canonical encodings, issuance, limits, custody and retention, funding, privacy and qualification horizon. Missing decisions stop the affected qualification.",
      "Section 20 embeds the A–G foundations, I1–I12 requirements, N1–N10 native implementation gates and P1–P8 pre-mainnet gates. Two independent verifiers, reproducible builds, supply-chain provenance and qualified device/archive recovery are mandatory. Deployment is a separate acceptance stage, followed by separately measured physical routes.",
      "Each R1–R24 risk record specifies adversary, assumptions, mechanisms, residual risk, detection, affected value, recovery authority, safe-stop condition, payer and discriminating tests. Failures remain failures. Repeating a run, extending its deadline or reducing its threshold cannot convert it into qualification. Current no-value fixtures leave full qualification open.",
    ],
  },
} as const;

export const routeTopics: Record<
  string,
  readonly (keyof typeof designTopics)[]
> = {
  home: ["consensus", "conservation", "continuity"],
  "get-started": ["authority", "qualification"],
  "how-it-works": ["consensus", "conservation", "incidents"],
  individuals: ["wallets", "incidents"],
  applications: ["continuity", "transport"],
  developers: ["authority-roles", "conservation", "qualification"],
  network: ["consensus", "qualification"],
  roadmap: ["authority", "authority-roles", "economics", "qualification"],
  faq: ["authority", "qualification"],
  about: ["authority", "continuity"],
  resources: ["authority", "qualification"],
  "node-network": ["transport", "authority-roles"],
  research: ["incidents", "continuity", "qualification"],
  "you-need-to-know": ["authority-roles", "incidents", "economics"],
  businesses: ["channels", "incidents", "economics"],
  wallets: ["wallets", "continuity"],
  payments: ["conservation", "incidents"],
  vocabulary: ["authority-roles", "conservation"],
  participate: ["authority", "qualification"],
  "run-a-node": ["transport", "qualification"],
};
