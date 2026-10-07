import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const TESTNET = `${REPOSITORY}/blob/main/docs/operations/EARTH_FRESH_TESTNET.md`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const WHITEPAPER_FREEZE = "/documents/rldcoin-whitepaper-freeze.json";
export const CONTENT_REVIEW_DATE = "7 October 2026";
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
    "Local regional finality, conserved value and evidence carried across successive contacts. Target capabilities defined by the white paper.",
  ],
  "you-need-to-know": [
    "Safety & limits",
    "Testnet limits, custody, regional finality, payment states, privacy and the conditions for future operation.",
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
    "Read the frozen white paper, download its PDF and find the protocol and website repositories.",
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
    "Rldcoin is a peer-to-peer payment design for communities separated by long or intermittent communication. Its target combines local regional ledgers, owner-authorized payments and authenticated transfers carried over successive contacts. The white paper defines the required capabilities; it is not a certificate that they are implemented.",
  ],
  [
    "Can I buy or use RLD today?",
    "No mainnet has launched. Testnets and separate ground candidates have no monetary value. There is no token sale or qualified consumer wallet offered here. Test balances and keys never become mainnet assets or authority.",
  ],
  [
    "How can local payments work while distant regions are disconnected?",
    "The target lets a sufficiently connected local region order and finalize its own payments under its adopted consensus. A partition inside that region is different: isolated groups cannot both safely finalize conflicting spends. A group without the required quorum must stop dependent settlement.",
  ],
  [
    "Does a delivered message mean a completed payment?",
    "No. Source authorization, source finality, transport receipt, destination import and recipient maturity are distinct states. The recipient must validate the destination ledger and the complete authenticated provenance. A timeout does not refund an export or prove that another region never accepted it.",
  ],
  [
    "Will a new node extend the network?",
    "That is a required target capability: ordinary full-node startup must enable signed neighbor discovery and durable multi-hop relay. A first reachable contact is still needed. The separate contact-spool prototype is supplemental transport, not evidence that default native discovery or a physical interstellar route is operating.",
  ],
  [
    "Are the historical Earth rules universal?",
    "No. The white paper distinguishes its proof-of-work reference profile from the target baseline of independent Byzantine regional finality. Each adopted region must bind its exact consensus, signers, epochs, maturity and operating limits. An already signed genesis cannot be changed retroactively.",
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
