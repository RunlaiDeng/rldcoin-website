import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const TESTNET = `${REPOSITORY}/blob/main/docs/operations/EARTH_FRESH_TESTNET.md`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const WHITEPAPER_RELEASE =
  "/documents/rldcoin-whitepaper-release-2026-10-19-authority.json";
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
    "Local settlement, source export, one-time destination import and evidence-dependent recovery across delayed contacts.",
  ],
  "you-need-to-know": [
    "Safety & limits",
    "Validator assumptions, provenance, in-flight funds, certified recovery and the limits of a research architecture.",
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
    "Rldcoin is a research architecture for interstellar peer-to-peer payments. Each spendable output has one authoritative home domain. Communities settle locally; certified exports relocate authority through delayed contacts. The paper gives conditional safety arguments, not a claim that the architecture is already implemented.",
  ],
  [
    "Can I buy or use RLD today?",
    "No mainnet has launched and this website offers no token sale or consumer transaction service. Existing test assets have no monetary value. The new architecture does not require a mandatory new token and does not migrate test balances or keys.",
  ],
  [
    "How can communities pay while separated?",
    "They use distinct funds already homed in their respective domains. A responsive local quorum can finalize local payments without a distant vote. A minority partition of the same domain must wait; it cannot spend a second copy of that domain's balance.",
  ],
  [
    "What moves between worlds?",
    "An owner-authorized export certificate, its exact recipient and destination, and the evidence needed to authenticate the source authority. The source first removes that value from local spendability. Ordinary carriers move bytes without becoming monetary validators.",
  ],
  [
    "When can the recipient spend?",
    "After the destination verifies the ticket and atomically finalizes one import with the recipient's output. The recipient can then pay locally without a return message to the source. A custody receipt or a submitted import request is not settlement.",
  ],
  [
    "Can stronger distant mining reverse a local payment?",
    "The new architecture has no global greatest-work history that overwrites a local finalized prefix. Its guarantee instead depends on the accepted domain and provenance validator assumptions, secure keys, correct consensus and durable state. Threshold compromise remains a security failure.",
  ],
  [
    "Can a missing payment be refunded after a timeout?",
    "No. A delayed copy may still be imported. The destination must permanently finalize rejection, excluding import of that ticket. Only an authenticated rejection allows the source to recover once. If the destination never returns, the exported value can remain stranded.",
  ],
  [
    "Is the system trust-free or universally permissionless?",
    "No. Anyone may create a domain or offer carriage, but users explicitly accept monetary authorities. The baseline has 3f + 1 admitted validators and tolerates at most f Byzantine validators per relevant configuration. New public keys do not automatically gain trust or issuance rights.",
  ],
  [
    "Why does provenance matter?",
    "Value retains the authority histories on which its backing depends. Importing through another domain does not erase earlier trust. Two balances with the same denomination and different provenance may have different acceptance or market value.",
  ],
  [
    "Does the paper guarantee seconds or one hundred million payments a day?",
    "No measured performance is claimed. Local latency depends on quorum communication, verification and durable storage. Aggregate capacity can scale across separate local domains, with explicit transfer and archive costs. Stellar arrival still depends on physical contacts and propagation.",
  ],
  [
    "Does the design require mining?",
    "The new architecture does not require a universal proof-of-work contest or an automatic subsidy. Asset issuance and local service funding have explicit policies. Earlier mining candidates retain their historical scope and are not upgraded by publication.",
  ],
  [
    "What happens if a domain loses its validators?",
    "The baseline can stop. A safe handoff needs the previously authorized succession rule and retained complete state. A single survivor cannot grant itself replacement authority. Prepositioning funds and independent validation capacity is part of preparing an autonomous community.",
  ],
  [
    "Does the paper guarantee a hundred million years of operation?",
    "No. Every cryptographic and archival profile has finite assumptions. Long journeys require authenticated key succession, explicit treatment of historical key compromise, sustained storage and real contacts. Lost state and destroyed authorities cannot be recreated by a guarantee.",
  ],
  [
    "What would be needed before an actual network?",
    "An exact executable profile, independent protocol analysis, durable implementation and custody qualification, explicit asset rules, governance and authenticated adoption. Existing no-value fixtures and website publication do not supply these. No new monetary genesis or physical stellar route is activated here.",
  ],
] as const;
