import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const GENESIS = "https://forum.rldcoin.com/genesis/";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin-genesis";
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
export const RELEASE = `${REPOSITORY}/releases/tag/earth-pow-v0.3.0`;
export const DOWNLOAD = `${REPOSITORY}/releases/download/earth-pow-v0.3.0`;
export const MANIFEST =
  "874066fe96d12bfa42cc316f5387cc8f4df649f794b43e2ee724b8029b0abf33";
export const POW_ADOPTION =
  "16d2a4d3ba8dff33613a9127ffc7e540347d377066b367097b765e1472d01e02";
export const POW_CHAIN =
  "dab6756c593608078a7d1f8cbdc8af7f447ffad6c506f6299262a26511ee586a";
export const POW_STATUS = "https://api.rldcoin.com/v1/pow/status";
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
    "No. The permanent Earth network was established on September 22, 2026. It has a published genesis identity and retained history. Earth now uses explicitly adopted regional proof-of-work rules for automatic mining and signed local transfers. The original genesis and certified heartbeat history remain published. Development networks and simulations are separate from this permanent identity.",
  ],
  [
    "Can I send, receive, or buy RLD today?",
    "The Earth node accepts valid signed local transfers of mature RLD. Mining rewards mature after 100 additional blocks. The current release is a command-line node and developer transaction API; a consumer wallet is still to come. This website offers no token sale or exchange.",
  ],
  [
    "What is the total supply?",
    "The fixed supply is 100,000,000,000 RLD. One RLD contains 10²⁴ runlai, the smallest unit. The PoW adoption moves the original unused service reserves into one unissued mining reserve, with no personal allocation. Miners earn new RLD only through valid work on the selected chain. Creating a Zone or copying a ledger does not create more RLD.",
  ],
  [
    "Is there a founder allocation or premine?",
    "There is no personal or founder genesis allocation and no reserved founder share. The launch operator and later miners follow the same public work, reward, and maturity rules. Early mining before wider participation can concentrate ownership; no participant is guaranteed a share. Community contributions to source review, verification, documentation, and protocol development are welcome.",
  ],
  [
    "How does mining or earning RLD work?",
    "Run the released node with mining enabled and your receiving public key. It automatically searches for SHA-256d blocks. Valid blocks on the selected greatest-work branch earn a subsidy and included fees. The initial subsidy is 250,000 RLD, with a ten-minute target interval and a 200,000-block reward era. Actual rewards depend on competition and luck; discarded-branch rewards disappear.",
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
    "The current launch is controlled by one owner across two hosts. Separate processes or machines do not establish independent governance. Independent miners, broader hash-power distribution, and independent security review remain important next steps. Anyone adopting the published PoW rules can validate and mine without the founder’s signing keys.",
  ],
  [
    "How can I verify the genesis?",
    "The network page links to the exact genesis manifest, signed declaration, authorization records, checksums, and the versioned public release. Compare artifacts against the published manifest commitment. An external timestamp records the existence of the genesis file; it is not an independent security audit.",
  ],
  [
    "How can I participate now?",
    "Read the architecture, inspect the published source and evidence, reproduce verification work in an isolated environment, and discuss implementation questions in the community forum. You can also build the released node, verify the pinned adoption, connect to the public Earth peer, and enable mining with your own receiving key. Running a node alone does not guarantee a block reward.",
  ],
] as const;
