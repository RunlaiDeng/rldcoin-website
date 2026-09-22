import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const GENESIS = "https://forum.rldcoin.com/genesis/";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin-genesis";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const RELEASE = `${REPOSITORY}/releases/tag/earth-genesis-20260922`;
export const DOWNLOAD = `${REPOSITORY}/releases/download/earth-genesis-20260922`;
export const MANIFEST =
  "874066fe96d12bfa42cc316f5387cc8f4df649f794b43e2ee724b8029b0abf33";
export const ZONE = "zone-77bc978af4837a1e7971";
export const GENESIS_ROOT =
  "37325242b485e9f4ee67ea6594bc0259d72883498bcd2bf55d76f1a9453533bf";

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
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rldcoin`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export const pages = {
  "get-started": [
    "Get started",
    "Your first steps into Rldcoin: understand the system, inspect the Earth genesis, and join the discussion.",
  ],
  "how-it-works": [
    "How Rldcoin works",
    "Local consensus. Asynchronous transfers. Verifiable ownership across regions separated by communication delay.",
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
    "Explore the Rust protocol, published source, genesis records, and verification tools.",
  ],
  network: [
    "Earth network",
    "Inspect the permanent Rldcoin Earth genesis, live operator-reported status, and current operating limits.",
  ],
  roadmap: [
    "The road ahead",
    "From a permanent Earth genesis to independently operated Zones and interstellar transfer routes.",
  ],
  faq: [
    "Frequently asked questions",
    "Answers about RLD, the permanent Earth network, supply, rewards, wallets, and the interstellar vision.",
  ],
  about: [
    "About Rldcoin",
    "A peer-to-peer transfer system for humanity’s interstellar future. Starting on Earth, designed to reach further.",
  ],
  resources: [
    "Resources",
    "Official Rldcoin source releases, public genesis evidence, technical introductions, and community links.",
  ],
  privacy: [
    "Privacy",
    "How the Rldcoin website handles requests, network status, cookies, and external links.",
  ],
} as const;

export const faqs = [
  [
    "What is Rldcoin?",
    "Rldcoin is a peer-to-peer transfer system being built for humanity’s interstellar future. It aims to preserve ownership and a continuous asset history across Earth, space habitats, spacecraft, and distant settlements. The first permanent Earth network is the starting point.",
  ],
  [
    "Is this a testnet?",
    "No. The permanent Earth network was established on September 22, 2026. It has a published genesis identity and retained history. Its current operating phase is deliberately limited to zero-value heartbeats: payments and service rewards are not enabled. Development networks and simulations are separate from this permanent identity.",
  ],
  [
    "Can I send, receive, or buy RLD today?",
    "Payments are not enabled on the current Earth network, and this website does not offer a token sale or exchange. The wallet and node software in the source release are developer tools; a public payment-ready wallet is not yet available. Check the network status and roadmap before treating any feature as active.",
  ],
  [
    "What is the total supply?",
    "The fixed supply is 100,000,000,000 RLD. One RLD contains 10²⁴ runlai, the smallest unit. Genesis places the supply in protocol reserves: 1% for startup services, 9% for continuity, archiving and migration, and 90% for verified demand matching. Creating a Zone or copying a ledger does not create more RLD.",
  ],
  [
    "Is there a founder allocation or premine?",
    "There is no personal or founder genesis allocation. The founder intends to earn at least 5 billion RLD through verified services before a broader promotional campaign. That goal is not a reserved share, a guaranteed reward, or a special right. At launch, earned service rewards are 0 RLD and rewards are disabled.",
  ],
  [
    "How does mining or earning RLD work?",
    "The existing design pays for verified protocol services from fixed reserves. Admission proof-of-work helps regulate access; performing that computation does not itself mint RLD, produce a reward, or grant validation authority. Reward activation requires the later contribution and security milestones.",
  ],
  [
    "What is a Zone?",
    "A Zone is a region with its own ledger and local consensus. The architecture lets activity within a Zone be confirmed locally, while transfers to another Zone travel asynchronously. A future Zone could serve a community, habitat, or spacecraft. Only the Earth genesis is currently deployed.",
  ],
  [
    "Does Rldcoin make interstellar payments instant?",
    "No. Information still has to reach its destination. The design separates local confirmation from the time needed to deliver a cross-Zone proof. The destination must verify and finalize the import before the recipient can spend the asset there.",
  ],
  [
    "What happens when a transfer loses connectivity?",
    "The design keeps a transfer in an explicit pending state until the necessary evidence arrives. The source locks the asset before export; the destination verifies it before import. Elapsed time alone cannot unlock the source balance, because that could let the same asset be spent twice.",
  ],
  [
    "Is the network decentralized today?",
    "The current launch is controlled by one owner across two hosts. Separate processes or machines do not establish independent governance. Independent operators, independent security review, wider participation, and transfers of validation authority remain later milestones.",
  ],
  [
    "How can I verify the genesis?",
    "The network page links to the exact genesis manifest, signed declaration, authorization records, checksums, and the versioned public release. Compare artifacts against the published manifest commitment. An external timestamp records the existence of the genesis file; it is not an independent security audit.",
  ],
  [
    "How can I participate now?",
    "Read the architecture, inspect the published source and evidence, reproduce verification work in an isolated environment, and discuss implementation questions in the community forum. Participation today does not promise a reward or grant permission to activate payments.",
  ],
] as const;
