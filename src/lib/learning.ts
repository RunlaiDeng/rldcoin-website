import { designTopics, routeTopics } from "./whitepaper-design";

import {
  CURRENT_RUNTIME,
  CURRENT_CYCLE,
  CURRENT_FAULT,
  TESTNET,
  REPOSITORY,
  WEBSITE_REPOSITORY,
  DEVELOPER_FORUM,
} from "./site";

type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  terms?: readonly (readonly [string, string])[];
};
type Guide = {
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  sections: Section[];
  references: readonly (readonly [string, string])[];
  next: readonly (readonly [string, string])[];
};

export const learning: Record<string, Guide> = {
  "you-need-to-know": {
    eyebrow: "You need to know",
    title: "Understand the rules before the payment.",
    description:
      "Start with what exists today, what a payment proves, and what still needs qualification.",
    context:
      "Development uses public-fixture testnets with no monetary value. No mainnet, token sale or qualified consumer wallet is available.",
    sections: [
      {
        id: "availability",
        title: "Test currency never becomes mainnet money",
        paragraphs: [
          "Test balances, rewards and keys are for experiments. They never migrate into a future mainnet. A future launch requires an exact accepted release and a new signed genesis with zero initial issuance; the website and a fixture signature cannot authorize it.",
        ],
      },
      {
        id: "locality",
        title: "Remote disconnection and a local partition differ",
        paragraphs: [
          "The target lets a sufficiently connected local region order its own payments while distant regions are unreachable. It does not let mutually isolated local groups both finalize conflicting spends. A group without its adopted quorum must stop the finality-dependent actions and retain the evidence.",
        ],
      },
      {
        id: "payment-states",
        title: "A receipt has a specific meaning",
        paragraphs: [
          "A submitted request, an included transaction, a finalized export, a transport receipt, a unique destination import and a mature recipient output are separate states. A courier’s acknowledgment states acceptance under its declared custody contract and tested scope; it does not prove that the recipient ledger accepted the payment.",
          "Import maturity permits a local spend under that region’s rules. Onward export additionally requires recognized finality for both imported provenance and the new debit. A historical record proof does not show current spendability.",
        ],
      },
      {
        id: "delay",
        title: "Silence cannot refund an included export",
        paragraphs: [
          "The source cannot know from a missing reply whether the destination already imported the value. Elapsed time, transport expiry and a lost receipt never release a finalized source debit. Safe cancellation would need a separately adopted destination exclusion rule; it is disabled by default in the target design.",
          "Delivery needs actual contact, usable capacity and destination progress. No finite arrival time is guaranteed when communication may never resume.",
        ],
      },
      {
        id: "custody",
        title: "Recovery requires more than a copied key",
        paragraphs: [
          "Signing keys authorize owner actions. Ground wallet candidates retain native journals and separate latest heads to review inputs and recover exact responses. Backups cannot be treated as safe current state merely because they decrypt. Common rollback, copied-key concurrent use, power loss and recovery across devices remain qualification work.",
        ],
      },
      {
        id: "profiles",
        title: "Regional rules are explicitly adopted",
        paragraphs: [
          "The target baseline requires independent Byzantine regional finality, n = 3f + 1 and 2f + 1 approved votes with a reviewed locking/view-change protocol. PoW and four unanimous checkpoint signatures describe the historical Earth reference profile. A new adoption needs complete signed consensus, epoch and maturity rules; it cannot retroactively alter existing genesis. Same-owner BFT fixtures remain separately scoped engineering evidence.",
        ],
      },
      {
        id: "evidence",
        title: "Read the source and the limits together",
        paragraphs: [
          "Published same-host ground results are useful engineering evidence. One owner’s multiple processes or keys do not establish independent operators or custody. Failed fault scopes remain failed. None of I1–I12 is fully qualified; sustained service, long history, cryptographic renewal and physical routes have separate gates.",
        ],
      },
    ],
    references: [
      [
        "White paper · assumptions and security",
        "/whitepaper#13-security-analysis-and-economic-recovery",
      ],
      ["Network & qualification", "/network"],
      ["Published finite fault outcome · v55", CURRENT_FAULT],
    ],
    next: [
      ["Follow a payment", "/payments"],
      ["Understand wallets", "/wallets"],
      ["Read common questions", "/faq"],
    ],
  },
  businesses: {
    eyebrow: "For businesses",
    title: "Plan around a payment you can verify.",
    description:
      "Local commerce and trade between distant communities motivate the design. Production merchant services remain a future goal.",
    context:
      "There is no mainnet merchant integration or real-value settlement service. Current work uses worthless test currency.",
    sections: [
      {
        id: "local-commerce",
        title: "Serve a community through its local ledger",
        paragraphs: [
          "A business in a future habitat or settlement should be able to receive a locally ordered payment while a remote region is disconnected. Availability still depends on local connectivity, consensus, custody and the region’s adopted rules. A partition without sufficient finality resources can stop settlement.",
        ],
      },
      {
        id: "invoice",
        title: "Bind the invoice to the intended payment",
        paragraphs: [
          "A signed payment request can identify the exact currency, recipient, destination Zone, amount, purpose, expiry and nonce. The payer must review those fields and authorize the resulting transaction. An invoice, browser download or queued command alone does not debit funds.",
          "The recipient must independently check the actual ledger result and current payment state. A screenshot or a relay delivery acknowledgment is insufficient.",
        ],
      },
      {
        id: "settlement",
        title: "Choose the acceptance state deliberately",
        paragraphs: [
          "Local block inclusion, recipient maturity and regional finality answer different questions. Prefunded channels aim to provide signed local payment receipts; they depend on verified funding and timely local monitoring of stale closes. A distant watchtower cannot promise a response within a local dispute window.",
          "A cross-region order may remain pending until finalized export evidence arrives, is imported exactly once and reaches local maturity. The business should expose that pending state and its dependency to both parties.",
        ],
      },
      {
        id: "accounting",
        title: "Account for the same value once",
        paragraphs: [
          "The source debit precedes destination credit. Import does not issue new RLD, and a retained export record is evidence rather than an additional balance. Accounting must distinguish all unspent outputs (including immature or quarantined value), escrow and every selected-history export debit awaiting unique destination credit, even before finality, with non-overlapping buckets and fees assigned once; disconnection prevents an instantly current global view.",
          "An onward or return journey is a new finalized export and unique import. A returned receipt never releases the original source debit.",
        ],
      },
      {
        id: "integration",
        title: "Evaluate before integrating",
        paragraphs: [
          "Use an exact public fixture to test invoice review, amount conservation, duplicate rejection, restart and recipient verification. Publish sanitized reproducible findings with the source commitment and observed limits. Consumer wallets, operational funding, independent custody, service capacity and outside review remain required before a real-value product.",
        ],
      },
    ],
    references: [
      [
        "White paper · transactions",
        "/whitepaper#3-ownership-and-transactions",
      ],
      [
        "White paper · payment channels",
        "/whitepaper#7-prefunded-local-payment-channels",
      ],
      ["Current testnet guide", TESTNET],
    ],
    next: [
      ["Payment states", "/payments"],
      ["Future applications", "/applications"],
      ["Developer guide", "/developers"],
    ],
  },
  wallets: {
    eyebrow: "Wallets & ownership",
    title: "Know what your signature authorizes.",
    description:
      "A wallet must help you review the payment, protect custody and distinguish evidence from spendable funds.",
    context:
      "A qualified consumer mainnet wallet is not available. This website has no wallet connection or private-key input.",
    sections: [
      {
        id: "review",
        title: "Review the currency, region and inputs",
        paragraphs: [
          "Before signing, verify the pinned currency and regional identity, recipient, amount, fee, actual input owners and current input availability. Pending reservations reduce the budget for another request. A cached balance or a downloaded proposal cannot authorize spending.",
          "The ground client asks native software to review complete authenticated history at the signing height. Its clicked pending review and separate caller head survive response loss; exact recovery cannot create a new signature.",
        ],
      },
      {
        id: "group",
        title: "Each owner approves independently",
        paragraphs: [
          "A group proposal fixes its ordered actual owners and input IDs, payment intent, refund conservation and one expiry. Construction does not sign or reserve. Each owner rechecks current native inputs and retains only their own partial approval and reservations. Every actual owner is required before normal native acceptance.",
        ],
      },
      {
        id: "recipient",
        title: "Verify the recipient’s state",
        paragraphs: [
          "The recipient needs more than the sender’s ‘sent’ label. It must distinguish source inclusion and finality, custody during transport, unique import, maturity, local spend and onward export eligibility. A historical proof can establish a certified old record while the current output is already spent or quarantined.",
        ],
      },
      {
        id: "backup",
        title: "Keep the complete custody history",
        paragraphs: [
          "Native encrypted ground custody binds a key to its exact currency, region, owner and purpose. Passwords enter through the local native path, never this website. The backup includes the complete owner journal; fresh-directory restore requires a separately retained latest head and native history checks.",
          "An interrupted restore target stays closed. Encrypted backups remain private. Common rollback of all state and heads, concurrent copied keys, hardware custody and recovery across devices are not qualified.",
        ],
      },
      {
        id: "availability",
        title: "Learn with a separate test fixture",
        paragraphs: [
          "Published wallet and node experiments use fresh private directories and worthless fixture assets. Do not reuse a real payment key or migrate old balances into an incompatible candidate. Follow the exact package’s guide and keep keys, journals, heads, sessions and recovery files out of public reports.",
        ],
      },
    ],
    references: [
      [
        "White paper · keys and interfaces",
        "/whitepaper#11-keys-privacy-and-user-interfaces",
      ],
      [
        "White paper · recovery",
        "/whitepaper#12-recovery-and-protocol-evolution",
      ],
      [
        "Historical v26 wallet and recovery evidence",
        "/developers#reproduce-v26",
      ],
    ],
    next: [
      ["What you need to know", "/you-need-to-know"],
      ["Follow a payment", "/payments"],
      ["Explore the testnet", "/run-a-node"],
    ],
  },
  payments: {
    eyebrow: "Payment states",
    title: "Follow the value. Check each step.",
    description:
      "A regional transfer is a sequence of independently verified events. Each state tells the recipient something different.",
    context:
      "This is the target payment model. Current implementations are separately admitted, bounded ground candidates with no monetary value.",
    sections: [
      {
        id: "authorization",
        title: "01 / The owner authorizes a request",
        paragraphs: [
          "Native review checks mature unspent inputs, owners, destination, amount and exact conservation. Signing authorizes one command; a queue acknowledgment alone does not include it in a block. Pending owner reservations are distinct from a native included debit.",
        ],
      },
      {
        id: "export",
        title: "02 / The source includes and finalizes an export",
        paragraphs: [
          "An export consumes source inputs and records the exact destination and export identity. Before finality, the region’s disclosed fork risk applies. Destination credit requires the adopted source finality and complete authenticated ancestry. After finality, timeout does not unlock the debit.",
        ],
      },
      {
        id: "transport",
        title: "03 / Contacts carry the evidence",
        paragraphs: [
          "Reachable neighbors durably store and forward admitted evidence. A signed identity, candidate route, observed contact and destination transport receipt are different observations. Couriers have no right to issue currency or authorize a ledger import.",
          "Delivery depends on physical contact, capacity and progress. More nodes can add useful paths, but cannot remove propagation delay or guarantee eventual arrival.",
        ],
      },
      {
        id: "import",
        title: "04 / The destination imports exactly once",
        paragraphs: [
          "The destination verifies currency and regional authority, source finality, complete history, ownership, conservation and dependencies. It binds the source chain and export ID to a unique import. Duplicate delivery can return an existing result or refuse; it never creates another credit. Invalid or conflicting evidence stops the affected transition.",
        ],
      },
      {
        id: "maturity",
        title: "05 / The recipient reaches local maturity",
        paragraphs: [
          "The destination advances under its own adopted rules before an imported output becomes locally spendable. In the paper’s Earth reference profile, an import at height 15 reaches maturity at height 21: six successor blocks, excluding the import block. That reference is neither a universal regional rule nor a wall-clock settlement promise.",
        ],
      },
      {
        id: "onward",
        title: "06 / Local spending or a new journey",
        paragraphs: [
          "A mature output can fund an owner-authorized local payment. Onward export also needs recognized local finality protecting the original imported provenance and the new debit. A return to the earlier region is another export and unique import; the first source debit remains spent.",
          "A returned receipt confirms its stated historical observation. It neither makes all regions simultaneously current nor overrides the destination’s finality and reorganization rules.",
        ],
      },
    ],
    references: [
      [
        "White paper · export and import",
        "/whitepaper#8-export-checkpoint-and-destination-import",
      ],
      [
        "White paper · composed target protocol",
        "/whitepaper#17-target-protocol-composition-and-qualification",
      ],
      ["Published ordinary return cycle · v54", CURRENT_CYCLE],
    ],
    next: [
      ["Explore the transfer diagram", "/how-it-works"],
      ["Learn the vocabulary", "/vocabulary"],
      ["Current qualification", "/network"],
    ],
  },
  vocabulary: {
    eyebrow: "Vocabulary",
    title: "A shared language for a delayed network.",
    description:
      "The terms used in the final white paper, explained in their payment and verification context.",
    context:
      "Definitions explain the design. They do not certify that a software release or route satisfies it.",
    sections: [
      {
        id: "identity",
        title: "Currency, regions and ownership",
        paragraphs: [],
        terms: [
          [
            "RLD / runlai",
            "RLD is the proposed currency unit. One RLD equals 10²⁴ integer runlai. The target cap is 100 billion RLD with zero initial allocation.",
          ],
          [
            "Zone",
            "An authorized region with its own ledger, local consensus and signed rules, bound to one currency root.",
          ],
          [
            "Genesis / admission",
            "The pinned origin and signed rules that establish exact network identity and authorized consensus. A discovered identity is not an admission.",
          ],
          [
            "Owner",
            "The actual key holder authorized to spend specific inputs under native owner and value checks.",
          ],
          [
            "Unspent output",
            "A retained value claim that has not been consumed on the selected history. Maturity, reservation and incident state still matter before spending.",
          ],
        ],
      },
      {
        id: "settlement",
        title: "Ledger and settlement",
        paragraphs: [],
        terms: [
          [
            "Inclusion",
            "A command has been executed in a block on the region’s selected history. It remains distinct from finality.",
          ],
          [
            "Checkpoint",
            "A signed commitment to an exact regional block and its authenticated state/history under adopted rules.",
          ],
          [
            "Finality",
            "The region’s enforced constraint against conflicting selected histories, dependent on its consensus and custody assumptions.",
          ],
          [
            "Maturity",
            "A local rule delaying when an output can be spent. It does not by itself supply onward export finality.",
          ],
          [
            "Export / import",
            "A source debit with a unique destination-bound record, followed by a fully verified unique destination credit. Import does not issue new currency.",
          ],
          [
            "Payment channel",
            "A prefunded local arrangement exchanging jointly signed states, with adopted settlement and stale-close challenge rules.",
          ],
          [
            "Quarantine",
            "An enforced restriction on every affected provenance descendant, including local payments, fees and channels. Any disputed input taints the entire mixed output; unsafe new value transitions stop while liabilities and evidence remain retained.",
          ],
          [
            "Validator epoch",
            "The explicitly authorized era of consensus keys and rules. A new key advertisement cannot activate an epoch.",
          ],
        ],
      },
      {
        id: "evidence",
        title: "Contacts, custody and qualification",
        paragraphs: [],
        terms: [
          [
            "Neighbor / route",
            "A reachable contact or a learned candidate sequence of contacts. A route advertisement does not prove present delivery.",
          ],
          [
            "Store-carry-forward",
            "Retaining evidence durably and forwarding it when a usable later contact becomes available.",
          ],
          [
            "Transport receipt",
            "A signed acknowledgment of evidence custody in its declared scope, separate from ledger import or spendability.",
          ],
          [
            "Native replay",
            "Reconstructing and validating ordered history from pinned genesis with full authority, ownership, value, finality and incident checks.",
          ],
          [
            "Latest head",
            "A retained commitment used to detect some old-state restores. Signing after recovery requires a surviving independent fresh monotonic witness; if all state and heads roll back together, inspection remains read-only and signing/spending refuses.",
          ],
          [
            "Ground candidate",
            "A separately admitted no-value engineering fixture with exact source, bounds and evidence; it does not upgrade an adopted network.",
          ],
          [
            "Qualification",
            "Evidence that an exact implementation meets specified fault, capacity and horizon requirements. A test count, website or hash alone cannot confer it.",
          ],
        ],
      },
    ],
    references: [
      ["Read the complete white paper", "/whitepaper"],
      ["Mandatory I1–I12 requirements", "/roadmap"],
    ],
    next: [
      ["How it works", "/how-it-works"],
      ["Follow a payment", "/payments"],
      ["Frequently asked questions", "/faq"],
    ],
  },
  participate: {
    eyebrow: "Participate",
    title: "Help turn a design into verified behavior.",
    description:
      "Read, reproduce, review or explain. Useful contributions resolve a concrete question and retain the evidence.",
    context:
      "Participation today is research and development on no-value fixtures. There is no mainnet mining, token sale or guaranteed reward.",
    sections: [
      {
        id: "learn",
        title: "Understand and explain",
        paragraphs: [
          "Read the introduction and key limitations, then follow the white paper’s target requirements. Help make the difference between delivery, inclusion, maturity and finality understandable. Bring a specific question or a correction to the community forum.",
        ],
      },
      {
        id: "reproduce",
        title: "Reproduce an exact public result",
        paragraphs: [
          "Choose a named package, verify its manifest and checksums, and follow its pinned toolchain and fresh-directory commands. Record the source, inputs, topology, timing, observed behavior and limits. Keep successful cycles separate from subsequent failed fault scopes.",
          "A useful next experiment states a falsifiable hypothesis, a discriminating observation, a bounded budget and the decision each outcome will support. More logs or repetitions alone are insufficient.",
        ],
      },
      {
        id: "review",
        title: "Review a payment or custody boundary",
        paragraphs: [
          "Look for a smallest reproducible case involving ownership, value conservation, repeated imports, incomplete proofs, restart, epoch changes or bounded capacity. Every carried envelope still needs authentication. Keep thresholds and deadlines unchanged when evaluating a reported result.",
          "For a suspected security vulnerability, use the maintainer contact described in the developer guide to request a private reporting route before sharing exploit details. Public reports must omit keys, credentials, wallet backups and private node/caller/signing state.",
        ],
      },
      {
        id: "contribute",
        title: "Improve source, documentation and the website",
        paragraphs: [
          "Submit a focused issue or proposed change to the relevant public repository. Explain the trigger, expected behavior, observed counterexample and validation. Website corrections belong to the website repository; protocol reproduction discussions belong with the published package and Nodes & Development.",
          "Independent operational and custody evidence is a separate requirement. A reproduction under one owner can clarify engineering behavior without claiming independent operation or a deployed stellar link.",
        ],
      },
    ],
    references: [
      ["Nodes & Development", DEVELOPER_FORUM],
      ["Developer feedback and disclosure guide", "/developers#participate"],
      ["Public protocol records", REPOSITORY],
      ["Website source and issues", WEBSITE_REPOSITORY],
    ],
    next: [
      ["Run a test node", "/run-a-node"],
      ["Explore research questions", "/research"],
      ["Read the roadmap", "/roadmap"],
    ],
  },
  "run-a-node": {
    eyebrow: "Running a test node",
    title: "Start with a fixture you can reproduce.",
    description:
      "A full node verifies locally. In the target architecture it also contributes bounded discovery and evidence relay through ordinary startup.",
    context:
      "Published experiments use public fixture keys and worthless currency. A node started from them has no mainnet or monetary authority.",
    sections: [
      {
        id: "choose",
        title: "01 / Choose an explicit experiment",
        paragraphs: [
          "The fresh Earth testnet and regional ground candidates have distinct identities, rules and evidence. The former uses explicit peer bridges. Regional candidates integrate relay and admitted local BFT into their normal fixture lifecycle. A separately started mesh demo tests transport only.",
          "Use the exact guide for the question you want to investigate. The pinned v53 runtime underlies the separate v54 ordinary return cycle and v55 failed finite fault scope. The older v26 guide remains available for segmented history and recovery research.",
        ],
      },
      {
        id: "verify",
        title: "02 / Verify the named source package",
        paragraphs: [
          "Compare the complete source-manifest inventory and SHA256SUMS before unpacking source.tar.gz. Pin the publication commit and its stated toolchain. GitHub’s automatic publication-repository archive is not the exact runtime source package. A checksum identifies reviewed bytes, not authorized ledger state.",
        ],
      },
      {
        id: "isolate",
        title: "03 / Use fresh private fixture directories",
        paragraphs: [
          "Follow the chosen guide’s actual startup commands, keys and literal neighbor configuration. Keep transport pins, native journals, voting custody, owner custody and separate caller heads in their intended directories. Incompatible candidates require fresh genesis/currency; never convert old custody or migrate value.",
          "Do not learn endpoints, TLS pins or consensus membership from advertisements. The configured neighbor establishes the first contact; farther discovery never grants ledger or signing authority.",
        ],
      },
      {
        id: "observe",
        title: "04 / Observe the behavior you came to test",
        paragraphs: [
          "Distinguish identity discovery, candidate routes, contact, durable transport receipt, native import and spendability. Inspect the exact declared capacity and verification horizon. Unknown lock-contended observations remain unknown; do not substitute height zero or infer a global balance from one lagging replica.",
          "Useful relay contacts can extend reach and add paths. Node count alone cannot establish independent custody, sustained consensus liveness or physical link capacity.",
        ],
      },
      {
        id: "retain",
        title: "05 / Stop and retain the evidence",
        paragraphs: [
          "Follow the package’s stop and cold-verification procedure. Preserve failed reports, included owner requests, unresolved exports and interrupted private targets. A stopped authentication audit describes the retained state; it cannot convert a failed live fault campaign into a pass.",
          "Publish only sanitized findings and exact public source bindings. Keys, wallet/caller/signer/replica/node state, TLS material and generated recovery images stay private. Same-host process interruption is not power-loss or independent operation.",
        ],
      },
    ],
    references: [
      ["Fresh Earth testnet guide", TESTNET],
      ["Pinned v53 runtime and reproduction instructions", CURRENT_RUNTIME],
      ["v54 ordinary cycle", CURRENT_CYCLE],
      ["v55 failed finite fault scope", CURRENT_FAULT],
      ["Historical v26 reproduction guide", "/developers#reproduce-v26"],
    ],
    next: [
      ["Understand nodes & relays", "/node-network"],
      ["Developer tools", "/developers"],
      ["Share a finding", "/participate"],
    ],
  },
};

// Route-specific summaries extend each existing guide and its on-page navigation.
for (const [slug, guide] of Object.entries(learning)) {
  for (const key of routeTopics[slug] ?? []) {
    const topic = designTopics[key];
    guide.sections.push({
      id: topic.id,
      title: topic.title,
      paragraphs: [...topic.paragraphs],
    });
  }
}
