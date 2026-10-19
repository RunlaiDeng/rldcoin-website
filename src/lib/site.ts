import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const TESTNET = `${REPOSITORY}/blob/main/docs/operations/EARTH_FRESH_TESTNET.md`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const WHITEPAPER_RELEASE =
  "/documents/rldcoin-whitepaper-release-2026-10-19-capabilities.json";
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
    "Ordering assumptions, exact exposure classes, receiving capabilities, stranded funds and finite key/archive obligations.",
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
    "Rldcoin is a research design for interstellar peer-to-peer payments in runlai (RLD). Funds have one authoritative home. Communities settle locally; a certified capsule carries a source debit to a prepared destination. Recursive execution receipts check historical validity while complete current data supports onward spending. Exclusive ordering still depends on accepted fault-bounded validators. Publication does not demonstrate an implemented network.",
  ],
  [
    "Which currency do payments and fees use?",
    "Only runlai (RLD). One RLD equals 10^24 atomic runlai units. Principal, native service fees, relay contracts and funded escrows use RLD. Every domain binds the same authenticated currency identity. Import relocates existing RLD without wrapping it or creating a domain currency.",
  ],
  [
    "What is the supply and initial allocation?",
    "The lifetime cap is 21,000,000 RLD. Genesis creates zero spendable RLD, with no founder, investor, treasury or validator allocation. There are 4,096 budget roots of 1,000,000 slots each, paying 0.005126953125 RLD per successful Mint. Public placement and subdivision cannot copy slots. There is no presale, halving, tail emission or replacement issuance for lost or retired coins.",
  ],
  [
    "How does a community obtain issuance capacity?",
    "A public ClaimRange operation uses proportional work to detach up to 256 unconsumed slots from a stable allocation generation. Mint changes a separate cursor; it cannot alter a finalized range ticket. A generic receiving capability is obtained in advance, without binding a moving source head. The source retains only disjoint residuals. Honest validators cannot substitute a private eligibility list or discretionary award. Claiming issues no RLD; Mint consumes each slot once. D_0 remains the initial bootstrap authority, and hardware advantage or censorship can still concentrate opportunity.",
  ],
  [
    "Can an isolated community mine RLD?",
    "Yes, under the proposed rules, after it has installed an authenticated issuance interval and can maintain its local quorum. Dividing ranges permits more than 4,096 issuance homes without increasing the cap. Creating a domain alone supplies no budget. Mining requires no stake, existing RLD or compulsory pool, but ordinary-computer eligibility does not establish profitability or equal hardware efficiency.",
  ],
  [
    "When will all RLD be issued?",
    "No calendar completion date or annual rate is promised. The fixed Argon2id profile has no automatic retarget; hardware progress can accelerate exhaustion. All 4,096,000,000 Mint events would exhaust the cap. Lost ranges can leave actual issuance lower. Placement work earns no additional reward and mining selects no global payment branch.",
  ],
  [
    "Can I buy or use RLD today?",
    "No mainnet has launched and this website offers no token sale or consumer transaction service. Existing test assets have no monetary value. Publishing this design creates no monetary genesis, RLD balance or migration of test keys.",
  ],
  [
    "What is reserved before a cross-domain payment?",
    "The destination preissues finite ReceiveCapability coupons naming exactly one source, recipient policy, amount or slot limits, fee formulas, accepted exposures, proof bounds and funded decision capacity. Actual inputs, change and exact amount are chosen later at the source. The coupon is not money and does not expire with travel time. Unused closure requires use authorization and a permanent certified source decision.",
  ],
  [
    "Does payment require an interstellar round trip?",
    "After a source-bound coupon reaches the payer, actual inputs can be chosen locally and the payment sent forward without a payment-specific draft-and-permission round trip. New sources, unknown destinations or exhausted coupon inventories still need setup. The recipient spends after import without a return receipt. Physical propagation remains causal.",
  ],
  [
    "What does the recipient verify?",
    "A pinned unconditional recursive execution receipt, matching PBFT certificate, exact ticket/coupon inclusion and complete current class, exposure and authority data. The proved program must check work, slot uniqueness, ownership, conservation, debit and duplicate prevention. Cold receipt does not replay every Mint origin. A proof alone supplies neither data availability nor detection of an unseen valid quorum fork. The RLD proof program and its cost still require implementation and independent analysis.",
  ],
  [
    "Does a compact proof eliminate history and storage costs?",
    "No. The proposed RISC Zero zkVM 3.0.6 SuccinctReceipt adapter folds historical execution under pinned program and verifier parameters. It still needs a correct RLD guest, real proving resources and resolved recursive assumptions. Current class tables, exposure sets and state access data must arrive and remain available for onward execution. Permanent decisions and contracted audit archives retain real storage costs. No RLD proving benchmark or completed proof implementation is claimed.",
  ],
  [
    "How do communities pay while separated?",
    "They use distinct funds already homed locally. A responsive accepted local quorum settles payments without a distant vote. A minority partition of the same domain must wait. A traveler carrying a private key must still relocate funds before losing access to their home; copying a ledger creates no independent balance.",
  ],
  [
    "Can a timeout refund a missing payment?",
    "No. A delayed copy may already have been imported. Only complete evidence of the destination's permanent rejection allows one source recovery. A receiving capability reduces avoidable policy and capacity surprises, but cannot rescue funds from a destroyed destination. Optional insurance is a separately funded RLD contract, with finite exposure and its own risks.",
  ],
  [
    "Does combining balances spread every source risk?",
    "Amounts group only by identical canonical authority-exposure sets, independently of individual Mint origins. Different sets stay separate inside an output. Paying from 100 RLD of accepted components need not attach an unrelated 1 RLD portion's history to them or their change. Real dependencies are never erased. Wallets select components accepted by the invoice and show other-policy or unresolved balances separately. Different acceptance risks may still affect market value.",
  ],
  [
    "Is the system trust-free or universally permissionless?",
    "No. Users authorize their own payments and anyone may offer carriage, but local PBFT ordering uses admitted validators and at most f Byzantine faults among 3f + 1. Sound execution receipts or correct reference execution reject invalid execution even with signatures; neither can prevent two valid conflicting branches after a threshold compromise. Public mining and domain creation do not automatically confer globally accepted consensus authority.",
  ],
  [
    "Who pays for validators, relays and permanent decisions?",
    "Payments include explicit positive RLD service fees and archival-reserve contributions. Every coupon family reserves funded bounded capacity for all its leaves or uses a sponsor. Relay service has its own finite contract. Service and insurance escrows hold already issued RLD, counted once. A finite reserve does not prove perpetual solvency; funded renewal and succession are necessary, especially after issuance ends.",
  ],
  [
    "How are old signing keys handled?",
    "The paper describes a finite per-height Ed25519 key schedule committed by public Merkle roots, forward-evolving secrets, retained exact responses and secure erasure after commitment. Authenticated handoff must occur before exhaustion. This proposed construction still requires custody and cryptographic analysis; disk deletion, copied backups and ordinary key rotation do not prove protection against rollback or historical forgery.",
  ],
  [
    "Are fast local payments or stellar routes already verified?",
    "No achieved latency, daily volume or physical stellar service is claimed. Recursive proving, current-state availability, durable PBFT, coupon liabilities and permanent decisions have explicit costs. Existing no-value implementations have separate profiles and evidence. A whitepaper edit does not upgrade running software or establish independent security qualification.",
  ],
  [
    "What would be needed before an actual network?",
    "An exact executable encoding of these rules, independent analysis of consensus and key custody, durable implementation, resource and operational qualification, sustainable service funding and authenticated adoption. No monetary genesis, keys or physical route is activated by this publication; existing test assets never migrate into real value.",
  ],
] as const;
