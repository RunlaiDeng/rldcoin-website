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
    "An interstellar peer-to-peer payment design using runlai (RLD) as its sole native currency.",
  ],
  "how-it-works": [
    "How Rldcoin works",
    "Verified monetary execution, advance source-bound receiving capabilities, one-time import and rejection-based recovery across delayed contacts.",
  ],
  "you-need-to-know": [
    "Safety & limits",
    "Ordering assumptions, explicit acceptance covers, receiving capabilities, stranded funds and finite key/archive obligations.",
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
    "Rldcoin is a research construction for interstellar peer-to-peer payments in runlai (RLD). Native homes settle locally; independent one-decision controllers release or cancel prepared objects while ordinary settlement continues. Recursive execution receipts, explicit acceptance covers and current data support asynchronous transfer. Accepted ordering and custody assumptions remain.",
  ],
  [
    "Which currency do payments and fees use?",
    "Only runlai (RLD), with 10^24 atomic units per RLD. Principal, service fees, positive work-author fees and funded escrows use the same authenticated currency. Import relocates existing RLD without wrapping or creating a domain supply.",
  ],
  [
    "What is the supply and initial allocation?",
    "The lifetime cap is 21,000,000 RLD. Genesis and all founder/investor/treasury/validator allocations are zero. There are 4,096 roots of 1,000,000 slots, each paying 0.005126953125 RLD once to its work author. No presale, halving, tail emission or lost/retired-money reissue.",
  ],
  [
    "How do disjoint issuance claims avoid invalidating each other?",
    "Claim work binds a stable placement grant and selected range, not mutable segment boundaries. Splitting unrelated slots retains the same grant in source residuals. Only actual consumption, delegation or relocation of selected slots changes their eligibility. Public proportional-work claims detach at most 256 slots and issue no RLD.",
  ],
  [
    "Can an isolated community mine RLD?",
    "After installing a valid grant and maintaining its accepted local quorum, it can submit public Mint work without an existing RLD balance, stake or compulsory pool. Every slot is checked uniquely. Bootstrap trust, hardware advantage, finite sponsored admission and censorship risk remain; CPU eligibility is not profitability.",
  ],
  [
    "When will all RLD be issued?",
    "No calendar completion date is promised. The fixed Argon2id profile has no automatic retarget. Hardware progress can accelerate exhaustion; unavailable ranges can leave actual issuance below the cap. Placement work pays no reward and does not select payment consensus.",
  ],
  [
    "Can I buy or use RLD today?",
    "No mainnet or consumer payment service is launched by this publication. Existing test assets have no monetary value and never migrate into a monetary genesis. The website offers no token sale or wallet connection.",
  ],
  [
    "What is reserved before a cross-domain payment?",
    "A funded finite coupon family binds exactly one source, destination, accepted covers, fees, object/amount limits and controller/proof/current-data bounds. Future inputs and source heads are unspecified. Each leaf has one terminal use; wildcard multi-source leaves are forbidden.",
  ],
  [
    "Does payment need a stellar permission round trip?",
    "Once a compatible source-bound coupon reaches the payer, inputs can be chosen locally and a released capsule sent forward. New sources, unknown destinations or exhausted inventories need setup. No return acknowledgment is required before the recipient spends after import.",
  ],
  [
    "Does proving stop ordinary local payments?",
    "The proposed construction commits a historical preparation first. Its independent controller releases or cancels that fixed object while the native ledger and other controllers advance. This removes current-head retry as a requirement. Shared computation, queues and finite controller capacity still constrain actual performance.",
  ],
  [
    "Can a prepared payment be canceled?",
    "Before controller Exported finalizes, the bound owner can request controller Canceled. Its exact quorum certificate authorizes one local return and closes that coupon. Agreed preparation fees remain paid. Cancellation needs the original controller and source to be available and cannot override a release that already won.",
  ],
  [
    "What happens after release?",
    "The destination verifies the terminal execution receipt and matching quorum certificate, exact native creation/coupon binding and complete current material. It imports or permanently rejects once. After release, only certified rejection permits source recovery; silence and transport expiry cannot refund.",
  ],
  [
    "What is an acceptance cover?",
    "An immutable finite policy over authority families and security rules. Monetary execution proves all actual ancestry fits it. Same-cover amounts can coalesce and circulate without carrying every old key epoch. Explicit owner-approved broadening requires verified policy inclusion. Narrowing needs extra ancestry evidence; an incident can quarantine the whole covered amount.",
  ],
  [
    "Do compact receipts remove storage costs?",
    "No. Current outputs, cover definitions, authenticated access data, controller responses and permanent duplicate-prevention maps remain available. Audit archives have explicit contracts. A proof does not supply lost bytes or prove perpetual funding. The RLD guests and their practical costs still require implementation and independent analysis.",
  ],
  [
    "How do communities pay while separated?",
    "They use distinct funds already homed locally, under responsive accepted quorums. A minority partition waits. Travelers relocate funds and prepare coupons, custody and keys before losing contact; copying a ledger or carrying a remote private key creates no local authority.",
  ],
  [
    "Is consensus universally permissionless?",
    "No. Owners authorize exact payments and carriers can move evidence, but PBFT uses admitted validators and explicit fault bounds. Correct execution receipts reject invalid transitions; they cannot reveal an unseen separately valid quorum fork. Public work does not automatically grant consensus votes.",
  ],
  [
    "Who funds payments and long-lived capacity?",
    "Owner-authorized existing RLD funds services, a positive work-author share and archives. Coupon families name reserves, renewal payers and custodians. Service deficits stop new obligations and retain old pending ones; insolvency cannot certify a refund. Finite reserves do not buy infinite service.",
  ],
  [
    "How are controller and native keys separated?",
    "Native height keys use their finite signing schedule. Controllers use distinct precommitted key-pool indices and independent locks, retaining original keys across native reconfiguration until terminal resolution. Exhaustion stops new preparations; it does not transfer outstanding escrow to a new quorum. Erasure, anti-rollback custody and safe renewal still need independent qualification.",
  ],
  [
    "Does a complete paper mean a qualified live system?",
    "No. The paper specifies objects, transitions, encoding, conditional proofs and failure rules. Executable guest images, measured cost, custody security and independent review need separate evidence. Existing no-value implementations are not silently upgraded; no mainnet or physical stellar route is qualified.",
  ],
] as const;
