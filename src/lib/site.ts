import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin";
// Immutable historical evidence uses its original publication history.
export const HISTORICAL_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-genesis";
export const TESTNET = `${REPOSITORY}/blob/main/docs/operations/EARTH_FRESH_TESTNET.md`;
// Public publication snapshot; never point reproduction at private development.
export const PUBLIC_SOURCE_REVISION =
  "40d5e7a216b2f89033bcfb11671ff311a3b8ab75";
export const GROUND_PATH =
  "research/2026-10-02/regional-native-segmented-paged-events-v26";
export const GROUND_CANDIDATE = `${HISTORICAL_REPOSITORY}/tree/${PUBLIC_SOURCE_REVISION}/${GROUND_PATH}`;
export const GROUND_RAW = `https://raw.githubusercontent.com/RunlaiDeng/rldcoin-genesis/${PUBLIC_SOURCE_REVISION}/${GROUND_PATH}`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const MAINTAINER_PROFILE = "https://forum.rldcoin.com/user/runlaideng";

export const CURRENT_PLAN = `${REPOSITORY}/blob/main/docs/RLDCOIN_MASTER_PLAN.md`;
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const WHITEPAPER_FREEZE = "/documents/rldcoin-whitepaper-freeze.json";
export const CONTENT_REVIEW_DATE = "4 October 2026";
// Reviewed public evidence; newer private experiments are not website evidence.
export const EVIDENCE_REVISION = "74f16276605823e8c84b67a66d5ff23134a86c8a";
export const PUBLIC_RESEARCH = `${HISTORICAL_REPOSITORY}/tree/${EVIDENCE_REVISION}/research`;
export const CURRENT_CYCLE = `${PUBLIC_RESEARCH}/2026-10-04/regional-joint-loop-cycle-v54`;
export const CURRENT_FAULT = `${PUBLIC_RESEARCH}/2026-10-04/regional-joint-loop-fault-v55`;
export const CURRENT_RUNTIME = `${PUBLIC_RESEARCH}/2026-10-04/regional-joint-loop-v53`;
export const REGIONAL_CYCLE = `${PUBLIC_RESEARCH}/2026-10-01/regional-native-archive-v16`;

export const navigation = [
  {
    name: "Introduction",
    links: [
      ["Getting started", "/get-started"],
      ["How it works", "/how-it-works"],
      ["You need to know", "/you-need-to-know"],
      ["For individuals", "/individuals"],
      ["For businesses", "/businesses"],
      ["Wallets & ownership", "/wallets"],
      ["White paper", "/whitepaper"],
      [
        "Architecture & risk rules",
        "/whitepaper#18-normative-architecture-and-transition-rules",
      ],
    ],
  },
  {
    name: "Resources",
    links: [
      ["Resource library", "/resources"],
      ["Payment states", "/payments"],
      ["Vocabulary", "/vocabulary"],
      ["Research & evidence", "/research"],
      ["Roadmap", "/roadmap"],
      ["About Rldcoin", "/about"],
    ],
  },
  {
    name: "Participate",
    links: [
      ["Ways to contribute", "/participate"],
      ["For developers", "/developers"],
      ["Running a test node", "/run-a-node"],
      ["Nodes & relays", "/node-network"],
      ["Community forum", "https://forum.rldcoin.com/"],
    ],
  },
] as const;
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | Rldcoin` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Rldcoin`,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          alt: "Rldcoin mission over a real view of Earth from the International Space Station",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rldcoin`,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

export const pages = {
  "you-need-to-know": [
    "You need to know",
    "Testnet availability, payment finality, custody, communication delays and the limits to understand before using Rldcoin.",
  ],
  businesses: [
    "Rldcoin for businesses",
    "Plan for recipient-verified payments, local settlement and asynchronous regional transfers. Business payment services remain a future goal.",
  ],
  wallets: [
    "Wallets & ownership",
    "Owner-authorized payments, independently witnessed restore freshness, preauthorized recovery and inheritance, and the remaining wallet qualification gates.",
  ],
  payments: [
    "Understanding a payment",
    "Follow owner authorization, source export, finality, delivery, unique import and recipient maturity.",
  ],
  vocabulary: [
    "Rldcoin vocabulary",
    "Plain definitions of the regional ledgers, finality, custody and evidence used in the final white paper.",
  ],
  participate: [
    "Participate in Rldcoin",
    "Read, reproduce, review and contribute to a peer-to-peer payment design through public source and the community.",
  ],
  "run-a-node": [
    "Running a test node",
    "Choose a published no-value fixture, verify its exact source and reproduce a node experiment in an isolated environment.",
  ],
  "get-started": [
    "Get started",
    "Your first steps into Rldcoin: understand the design, explore the value-free testnet, and join the discussion.",
  ],
  "how-it-works": [
    "How Rldcoin works",
    "Independent regional BFT is the target baseline. Explore atomic conserved transfers, causal ancestry, descendant quarantine and the separate historical Earth profile.",
  ],
  individuals: [
    "Rldcoin for individuals",
    "Understand self-custody, ownership, and the future of peer-to-peer transfers with Rldcoin.",
  ],
  applications: [
    "Future applications",
    "Explore how Rldcoin is being designed for communities, habitats, spacecraft, and distant settlements.",
  ],
  developers: [
    "Build with Rldcoin",
    "Explore exact testnet source, public fixtures, ground candidates and verification tools.",
  ],
  network: [
    "Network & qualification",
    "Inspect the value-free testnet, mandatory qualification gates and the path to a fresh mainnet.",
  ],
  roadmap: [
    "The road ahead",
    "The final design authority: S1–S18, R1–R24, I1–I12 and embedded A–G, N1–N10 and P1–P8 gates. Full qualification remains open.",
  ],
  faq: [
    "Frequently asked questions",
    "Answers about testnet, the proposed currency, wallet qualification, and future regional transfers.",
  ],
  about: [
    "About Rldcoin",
    "Rldcoin is building an interstellar peer-to-peer payment system for the future of humanity. Development and qualification continue on a value-free Earth testnet.",
  ],
  resources: [
    "Resources",
    "The final white paper, normative architecture, risk obligations, acceptance gates and reproducible no-value ground evidence.",
  ],
  privacy: [
    "Privacy",
    "How the Rldcoin website handles requests, network status, cookies, and external links.",
  ],
  "media-sources": [
    "Media sources",
    "Sources and credits for the real planetary and space-station imagery on the Rldcoin homepage.",
  ],
} as const;

export const faqs = [
  [
    "Is Rldcoin a live currency I can buy or use?",
    "No mainnet has launched. Current testnets and ground candidates have no monetary value. There is no token sale or qualified consumer wallet. Test keys, rewards and balances never become mainnet authority or assets.",
  ],
  [
    "Does local autonomy mean spending through every partition?",
    "No. A sufficiently connected local region should progress while distant regions are disconnected. Mutually isolated groups cannot both safely finalize conflicting spends. A group without its adopted finality resources must stop dependent actions and preserve the evidence.",
  ],
  [
    "Are the white paper’s timing and signatures universal?",
    "No. The target baseline requires independent Byzantine regional finality with n = 3f + 1 and 2f + 1 approved votes, plus a reviewed locking and view-change protocol. The 600-second PoW interval and four-of-four checkpoint rule are the historical Earth reference profile. Existing signed genesis rules cannot change retroactively; same-owner three-of-four BFT fixtures do not establish independent qualification.",
  ],
  [
    "What do the latest reviewed public results show?",
    "At the historical 4 October 2026 public evidence snapshot, v54 records a successful ordinary three-region return on the pinned v53 runtime. The subsequent v55 finite fault scope failed its restored-contact import and maturity deadline. Separate stopped authentication preserved the failed state; it did not make that scope pass. Newer local experiments are outside this reviewed public snapshot.",
  ],

  [
    "Can value move onward and return to an earlier region?",
    "This is mandatory in the target protocol. Imported value can be spent locally or exported again only under the exporting region’s recognized finality and authenticated ancestry. A return is a new export and unique import, never release of the first debit. Ground candidates exercise cyclic transfers; full protocol and independent qualification remain open.",
  ],
  [
    "What would count as completing the protocol?",
    "An exact authenticated executable profile must pass the embedded A–G, I1–I12, N1–N10 and P1–P8 gates, the applicable S1–S18 rules and R1–R24 operational obligations within declared fault, load and horizon limits, with independent evidence. Document alignment alone is insufficient. New-mainnet adoption additionally needs a signed zero-issuance genesis and verified deployment; physical routes require separate measurements. None of I1–I12 is fully qualified today.",
  ],
  [
    "Will starting a node extend the network?",
    "Yes, that is a mandatory target: every normally started full network node must relay by default, discover reachable neighbors and forward admitted evidence for other users without a separate relay launch. Useful contacts can extend reach and provide alternative paths, including Earth–Proxima Centauri–Andromeda; node count alone does not guarantee security or delivery. The separate contact-spool prototype and revision 16 native fixture runtime have different scopes: the fixture integrates relay into ordinary startup, while adopted Earth nodes still use explicit peers. Real contacts, adapters, capacity and independent qualification are still required.",
  ],
  [
    "Can nodes find one another instantly across star systems?",
    "No. A first reachable neighbor, seed or carried message is needed. New information takes years to the nearest star and millions of years across Andromeda-scale distances in a simplified stationary-endpoint model. A learned route and a signed transport receipt do not prove current connectivity or spendable funds.",
  ],
  [
    "What is Rldcoin?",
    "Rldcoin is building an interstellar peer-to-peer payment system for the future of humanity. It aims to preserve ownership and a continuous asset history across Earth, space habitats, spacecraft, and distant settlements. Development continues on a separate fresh Earth testnet. Nodes should progressively discover neighbors and relay evidence over multiple contacts; physical interstellar routes are not deployed.",
  ],
  [
    "What network is available today?",
    "Development uses a value-free testnet and separate ground candidates. No mainnet is available. A future mainnet requires a new signed zero-issuance genesis; test balances and keys never become mainnet assets or authority.",
  ],
  [
    "Can I send, receive, or buy RLD today?",
    "A mainnet has not launched. The fresh testnet can exercise transfers with worthless test currency. Test balances never become mainnet assets. This website offers no token sale or exchange.",
  ],
  [
    "Does a local payment take ten minutes?",
    "The white paper’s Earth reference profile targets a 600-second average block interval; actual discovery varies. Submission, inclusion, maturity and finality are separate states. Prefunded channels aim to support fast local payment receipts, but require local monitoring, recovery and qualification. Testnet timing is not a mainnet confirmation promise.",
  ],
  [
    "What is the total supply?",
    "The target currency specifies a cap of 100,000,000,000 RLD and 10²⁴ runlai per RLD, with zero initial allocation. A future mainnet must bind these rules in its signed adoption. Only the authorized origin issues native currency; additional regions have zero native issuance. Test rewards have no monetary value.",
  ],
  [
    "Is there a founder allocation or premine?",
    "The white paper requires zero initial allocation and no reserved founder share. Any future origin reward participant must follow the same authenticated consensus, exact integer issuance and maturity rules; no participant is guaranteed a share. The historical PoW profile does not define every future implementation. A new mainnet has not launched. Source review, testnet verification and protocol development are ways to participate today.",
  ],
  [
    "How do origin rewards work?",
    "Developers can reproduce the fresh testnet with public fixture keys and worthless rewards. A future mainnet needs its accepted executable profile, signed zero-issuance genesis, consensus and exact integer reward rules. The historical PoW profile involves competition and luck; new adopted consensus may differ. Reward eligibility is not a guaranteed income; test rewards never migrate.",
  ],
  [
    "What is a Zone?",
    "A Zone is an authorized region with its own ledger, rules and local consensus, bound to one authenticated currency root. The target requires local payments during remote disconnection and transfers between arbitrary authorized regions. Testnet and ground candidates explore these capabilities; full qualification and physical off-world routes remain unfinished.",
  ],
  [
    "Does Rldcoin make interstellar payments instant?",
    "No. Information must physically reach its destination. The target separates transport delivery, unique ledger import, local maturity and export finality. The Earth reference profile uses six-block import maturity; that is not irreversible finality for an onward export. Each actual region and route needs its own qualification.",
  ],
  [
    "What happens when a transfer loses connectivity?",
    "The design keeps a transfer in an explicit pending state until the necessary evidence arrives. The source locks the asset before export; the destination verifies it before import. Elapsed time alone cannot unlock the source balance, because that could let the same asset be spent twice.",
  ],
  [
    "Is independent operation qualified today?",
    "No. The current testnet and ground candidates are controlled by one owner. Separate processes or machines do not establish independent operation. Independent participants, separate key custody and outside security review remain required.",
  ],
  [
    "How can I verify the genesis?",
    "Current testnet records are linked from Resources. Verify exact fixture genesis, rules, source commitments and checksums within that test network. Fixture signatures do not authorize a mainnet, and operator telemetry is not an independent security audit.",
  ],
  [
    "How can I participate now?",
    "Read the architecture, inspect the published source and evidence, reproduce verification work in an isolated environment, and discuss implementation questions in the community forum. Reproduce the candidate in an isolated test environment; test balances have no value and will never migrate into mainnet.",
  ],
  [
    "Can regions pay locally during remote disconnection?",
    "This is mandatory requirement I2. Ground candidates exercise local blocks, signed payments and recovery without remote HTTP, but long-term and independent qualification remain unfinished. The earlier Earth implementation’s source-refresh dependency does not satisfy the target. Missing new remote evidence should block only the transitions that require it.",
  ],
  [
    "Can a distant watchtower protect a local payment channel?",
    "Only if its challenge can arrive within the local dispute window. The Earth reference profile uses a 2,016-block dispute window, about 14 days at a ten-minute target, with no fixed wall-clock duration. A watchtower years away cannot provide that timely response; channels need local monitoring and recovery.",
  ],
  [
    "Are post-quantum signatures already adopted?",
    "No. The final design requires authenticated suite, key and epoch evolution, downgrade rejection and proactive renewal; it discusses standardized post-quantum signatures but no qualified algorithm migration or new-mainnet adoption is established. Preserving authority and history across a cryptographic upgrade is a separate protocol and operational task.",
  ],
  [
    "Does the frozen paper guarantee 100 million years of operation?",
    "No. Continuous ownership and authentic history over 100 million years is the objective. Hardware, archives, institutions, cryptography and physical contacts require ongoing renewal and independent evidence. The paper is frozen; software profiles and keys must continue to evolve under authenticated rules.",
  ],
  [
    "What if disputed value has already been paid locally?",
    "The baseline follows its provenance through every descendant, including local payments, split/merge, change, fees and channels. Any mixed output with disputed lineage is entirely quarantined. Accounted value is retained but new affected spending stops until the pre-adopted recovery authority and complete replay permit resumption.",
  ],
  [
    "Can an old encrypted backup restore spending by itself?",
    "No. A surviving independent fresh monotonic witness must establish current signing state. If all state and heads rolled back together, the wallet remains read-only and refuses signing or spending. Lost-owner recovery or inheritance also requires a policy authorized before the loss.",
  ],
  [
    "Who pays for relay, archives and recovery?",
    "The signed adoption declares service budgets, minimum duties, payers, reserves and insolvency or safe-stop rules. The baseline requires bounded relay in normal full-node startup; it does not promise unlimited unpaid transit or permanent free storage. Exhaustion cannot erase monetary evidence.",
  ],
  [
    "How is every exported amount accounted for?",
    "On compatible selected histories, I = U + E + T with non-overlapping buckets. T includes selected source debits even before finality until unique destination credit. Orphaned unfinalized debits reverse atomically; finalized debits cannot be ordinarily reorganized. Fees are assigned once, and import requires finalized complete ancestry.",
  ],
] as const;
