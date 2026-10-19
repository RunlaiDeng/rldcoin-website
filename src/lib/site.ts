import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const TESTNET = `${REPOSITORY}/blob/main/docs/operations/EARTH_FRESH_TESTNET.md`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const WHITEPAPER_RELEASE =
  "/documents/rldcoin-whitepaper-release-2026-10-19-standalone.json";
export const CONTENT_REVIEW_DATE = "19 October 2026";
export const EVIDENCE_REVIEW_DATE = "4 October 2026";

export const navigation = [
  {
    name: "Learn",
    links: [
      ["About Rldcoin", "/about"],
      ["How it works", "/how-it-works"],
      ["Nodes & relays", "/node-network"],
      ["Safety & limits", "/you-need-to-know"],
    ],
  },
  {
    name: "Resources",
    links: [
      ["White paper", "/whitepaper"],
      ["Documents & source", "/resources"],
      ["FAQ", "/faq"],
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
          alt: "Rldcoin over a view of Earth from the International Space Station",
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
  about: [
    "About Rldcoin",
    "A peer-to-peer payment design for communities separated by long or intermittent communication.",
  ],
  "how-it-works": [
    "How Rldcoin works",
    "Open mining, local fast states and interstellar payments from authorization through one-way relay, verification and onward spending.",
  ],
  "you-need-to-know": [
    "Safety & limits",
    "Testnet limits, custody, rollback, payment states, privacy and conditions for future operation.",
  ],
  developers: [
    "Develop Rldcoin",
    "Protocol source, testnet guidance, review and contribution. Development uses no-value fixtures.",
  ],
  network: [
    "Network & development",
    "Current testnet scope, the distinction between design and qualification, and conditions for a future release.",
  ],
  resources: [
    "Documents & source",
    "Read the research revision, download its PDF and inspect its publication record and development source.",
  ],
  faq: [
    "Frequently asked questions",
    "Answers about Rldcoin’s design, development, payments, node relay and long-term limits.",
  ],
  privacy: [
    "Privacy",
    "Website requests, hosting, cookies and external services.",
  ],
  "media-sources": [
    "Media sources",
    "Sources and credits for the spacecraft and space-station imagery used on this website.",
  ],
} as const;

export const faqs = [
  [
    "What is Rldcoin?",
    "Rldcoin is a peer-to-peer payment design combining open mining, a single currency, reversible local payments and authenticated delayed carriage. A capable surviving full node can keep attempting mining without a founder or committee. The white paper describes required behavior, not completed qualification.",
  ],
  [
    "Can I buy or use RLD today?",
    "No mainnet has launched. Testnets and separate ground candidates have no monetary value. There is no token sale or qualified consumer wallet offered here. Test balances and keys never become mainnet assets or authority.",
  ],
  [
    "How can local payments work while distant regions are disconnected?",
    "Each capable full node validates and can mine its retained history without a quorum. Disconnected branches may both include payments. When histories meet, actual cumulative work and a deterministic tie rule select one; losing payments and rewards can roll back.",
  ],
  [
    "How does an interstellar payment reach someone who is offline?",
    "The owner signs the exact payment and retains its input reservation. Willing relays store and forward that authorization with the history needed to verify it through later contacts. Sender and recipient need not be online together. On arrival, the recipient independently validates the currency and selected history, then checks inclusion and unspent value. Receipt of bytes alone is not receipt of spendable money.",
  ],
  [
    "Can the recipient spend onward without a message back to Earth?",
    "Yes in the proposed ordinary payment mechanism, once valid inclusion produces an unspent output on the recipient's selected history. The recipient signs a new payment; that spend needs ordinary mining and independent verification. A return acknowledgment is optional. A later stronger valid history may reverse both payments. This mechanism is distinct from an operational interstellar service, which is not available today.",
  ],
  [
    "Do fast local payments make stellar delivery instant?",
    "No. The paper separates a proposed funded fast layer from base mining and ordinary interstellar carriage. Fast use needs enforceable backing, liquidity, responsive peers and safe dispute and exit rules, including a funded miner fee on every payment. Stellar delivery still needs real contacts and causal propagation. Seconds-scale local use and one hundred million daily payments remain design targets, not measured capabilities.",
  ],
  [
    "Is there a guaranteed confirmation time?",
    "No. Mining is probabilistic and transport depends on real contacts. The candidate's timestamp-based recovery rule permits easier attempts, not a four-hour deadline. Ordinary outputs can be spent in a later block; rewards become eligible at height h+100. Neither condition makes payment irreversible.",
  ],
  [
    "Does a delivered message mean a completed payment?",
    "No. Byte custody, independently validated history, selected-chain inclusion and local spendability are distinct. A destination receipt does not mint or import money. The recipient verifies the same currency's history; payments may later be reorganized.",
  ],
  [
    "Does the revision permit refunds after a timeout?",
    "No. Silence, expiry and a transport receipt cannot refund or revoke a released signature. An owner can explicitly authorize a conflicting transfer from still-valid inputs, but selection determines which history includes it; a replacement is not a guaranteed refund.",
  ],
  [
    "Will a new node extend the network?",
    "A useful new contact can extend a path. The design requires ordinary nodes to discover authenticated neighbors and durably relay admitted evidence without a compulsory Earth directory. A first real contact or carried archive is still needed. Advertised routes and ground prototypes do not establish an operating physical interstellar service.",
  ],
  [
    "Are the historical Earth rules universal?",
    "No. Survivor-1 is an incompatible new candidate with explicit work, encoding, maturity and recovery rules. Old regional BFT and unanimous-checkpoint fixtures retain their original scope and are not migrated or upgraded by the new paper.",
  ],
  [
    "Does Rldcoin guarantee a hundred million years of operation?",
    "No. That horizon is a continuity objective for successive generations. Contact, funding, institutions, key succession, archives and cryptographic renewal remain conditional. No protocol can remove every future risk or guarantee purchasing power, delivery or recovery after permanent loss.",
  ],
  [
    "What would authorize a future mainnet?",
    "An exact protocol profile must satisfy the white paper’s applicable specification, risk and acceptance obligations with independent evidence. A future mainnet then requires fresh signed zero-issuance genesis and verified release adoption. Ground results, website publication and test assets cannot substitute for this authority. Physical routes need separate qualification.",
  ],
] as const;
