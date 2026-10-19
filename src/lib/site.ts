import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const TESTNET = `${REPOSITORY}/blob/main/docs/operations/EARTH_FRESH_TESTNET.md`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const WHITEPAPER_RELEASE =
  "/documents/rldcoin-whitepaper-release-2026-10-19-controllers.json";
export const CONTENT_REVIEW_DATE = "20 October 2026";
export const EVIDENCE_REVIEW_DATE = "4 October 2026";

export const navigation = [
  {
    name: "Learn",
    links: [
      ["About Rldcoin", "/about"],
      ["How it works", "/how-it-works"],
      ["RLD & issuance", "/rld"],
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
          alt: "Earth viewed from the International Space Station",
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
    "Why separated communities need local settlement and prepared payments in one native currency, runlai (RLD).",
  ],
  rld: [
    "RLD & issuance",
    "The 21 million RLD lifetime cap, zero initial allocation, public-work issuance and owner-funded payment fees explained.",
  ],
  "how-it-works": [
    "How Rldcoin works",
    "Follow a local payment and a cross-domain transfer through receiving capacity, preparation, cancellation, release and import or rejection.",
  ],
  "you-need-to-know": [
    "Safety & limits",
    "Understand the separate assumptions behind ownership, valid execution, local consensus, available data, delivery and recovery.",
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
    "A research construction for interstellar peer-to-peer payments in runlai (RLD). Each balance has one authoritative home. Communities settle locally and move exact payments between homes through prepared, verified transfers.",
  ],
  [
    "Can I buy or use RLD today?",
    "This publication establishes no active mainnet or consumer payment service. The website offers no token sale, exchange or wallet connection. Existing test assets have no monetary value and never migrate into a monetary genesis.",
  ],
  [
    "What is the supply and initial allocation?",
    "The proposed lifetime cap is 21,000,000 RLD, with 10^24 atomic units per RLD. Spendable genesis and founder, investor, treasury and validator allocations are zero. No halving, tail emission or lost-money reissue is specified.",
  ],
  [
    "How is new RLD issued?",
    "There are 4,096 roots of 1,000,000 unique slots. Successful Mint work consumes one eligible slot and pays 0.005126953125 RLD to its work author. All slots together sum to the cap. Claiming or relocating a range creates no RLD and does not replace Mint work.",
  ],
  [
    "Can ordinary users mine?",
    "The construction admits public Mint work under installed grants without prior RLD, stake or a compulsory pool. It proposes Argon2id with 64 MiB, three passes and one lane. A responsive accepted local quorum is still required. CPU admission does not establish profit, equal hardware opportunity or ASIC resistance; no production benchmark is claimed.",
  ],
  [
    "Does mining decide payment consensus?",
    "No. Public work distributes a conserved issuance budget. Local PBFT uses admitted validators and a stated fault bound to order payments. A work solution neither grants a vote nor selects a global payment history.",
  ],
  [
    "When will all RLD be mined?",
    "No calendar date is promised. The work profile has no automatic retarget. Hardware progress may accelerate issuance, while lost grants or unavailable authority can leave actual issuance below the cap.",
  ],
  [
    "Can a community pay while Earth is offline?",
    "It can circulate distinct RLD already homed locally while its accepted local quorum and resources remain responsive. An issuance grant is not needed to pay existing balances. A minority partition cannot finalize. Ships should prepare local funds, custody and receiving arrangements before departure.",
  ],
  [
    "Does each interstellar payment need a permission round trip?",
    "Not after compatible receiving capacity is available. A destination preissues a funded coupon for one source, leaving future inputs unspecified. The payer selects inputs locally and can send a released package forward. New sources, unknown destinations or exhausted capacity still need setup.",
  ],
  [
    "What happens when I prepare a payment?",
    "The native ledger locks the exact escrow and delegates it to an independent one-decision controller. Historical proving can continue while other payments advance. The controller releases only when the required proof and material are ready, or certifies cancellation before release.",
  ],
  [
    "Can I cancel or get a refund?",
    "Before release, an authorized controller cancellation permits one local return; performed preparation service stays paid. After release, only certified permanent destination rejection permits recovery. Silence, transport expiry, a missing receipt or a deadline cannot refund the released amount. Failed authority can strand funds.",
  ],
  [
    "When can the recipient pay someone else?",
    "After the destination verifies the complete released package, durably installs current material and finalizes one-time import. The recipient can then pay locally without waiting for a message to return to the source. Transport custody alone grants no balance.",
  ],
  [
    "Are payments instant across stars?",
    "No. A cross-domain payment follows actual communication or carriage opportunities. Local settlement does not wait for a distant vote, but its real latency and proof cost still require measurement. The current construction has no claimed achieved latency or daily volume.",
  ],
  [
    "Who receives the fees?",
    "Every owner-initiated local or cross-domain payment includes a positive RLD service fee and a positive share for a verifiable prior Mint work author. Exact authorized existing balances fund them, including any sponsor contribution. Service terms cover consensus, verification and archival reserves; relays and renewal have separately funded contracts.",
  ],
  [
    "Will every community accept the same RLD?",
    "Not automatically. Acceptance covers define finite authority families and security rules a recipient accepts. Two balances can share the RLD denomination but differ in exposure and acceptance. Signed broadening requires verified inclusion; narrowing needs additional ancestry evidence. An incident can quarantine the entire covered portion.",
  ],
  [
    "What do recursive execution receipts prove?",
    "Under a correct authenticated RLD program and a sound proof backend, they establish monetary execution without carrying every historical event. They do not reveal unseen valid quorum forks or supply missing current data. The paper’s reference adapter is not an implemented or independently qualified RLD guest.",
  ],
  [
    "What keeps long journeys and old records working?",
    "Finite signing schedules, retained controller authority, complete current data, permanent decisions, funded archives and authenticated succession all matter. Renewals need resources. No finite reserve funds infinite service, and key or authority loss can halt progress.",
  ],
  [
    "How do I take part?",
    "Read the paper, inspect the exact implementation and follow its repository instructions. Mechanism review, code and documentation all help. Current experiments remain no-value; a published paper or successful build does not establish monetary adoption, independent security or a physical stellar route.",
  ],
] as const;
