import type { Metadata } from "next";

export const SITE = "https://rldcoin.com";
export const REPOSITORY = "https://github.com/RunlaiDeng/rldcoin-genesis";
export const TESTNET = `${REPOSITORY}/tree/main/earth/testnet-20260930`;
// Public publication snapshot; never point reproduction at private development.
export const PUBLIC_SOURCE_REVISION =
  "40d5e7a216b2f89033bcfb11671ff311a3b8ab75";
export const GROUND_PATH =
  "research/2026-10-02/regional-native-segmented-paged-events-v26";
export const GROUND_CANDIDATE = `${REPOSITORY}/tree/${PUBLIC_SOURCE_REVISION}/${GROUND_PATH}`;
export const GROUND_RAW = `https://raw.githubusercontent.com/RunlaiDeng/rldcoin-genesis/${PUBLIC_SOURCE_REVISION}/${GROUND_PATH}`;
export const DEVELOPER_FORUM =
  "https://forum.rldcoin.com/category/4/nodes-development";
export const MAINTAINER_PROFILE = "https://forum.rldcoin.com/user/runlaideng";

export const REGIONAL_CYCLE = `${REPOSITORY}/tree/dd02da67a8945cc7c953810ab39bb6949d8e518a/research/2026-10-01/regional-native-archive-v16`;
export const CURRENT_PLAN = `${REPOSITORY}/blob/main/MASTER_PLAN.md`;
export const WEBSITE_REPOSITORY =
  "https://github.com/RunlaiDeng/rldcoin-website";
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
  "get-started": [
    "Get started",
    "Your first steps into Rldcoin: understand the design, explore the value-free testnet, and join the discussion.",
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
    "Explore exact testnet source, public fixtures, ground candidates and verification tools.",
  ],
  network: [
    "Network & qualification",
    "Inspect the value-free testnet, mandatory qualification gates and the path to a fresh mainnet.",
  ],
  roadmap: [
    "The road ahead",
    "The mandatory I1–I12 requirements for locally autonomous payments, conserved regional transfers, and independent qualification.",
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
    "White paper 1.11, current testnet source and reproducible ground evidence.",
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
    "Can value move onward and return to an earlier region?",
    "This is mandatory in the target protocol. Imported value can be spent locally or exported again only under the exporting region’s recognized finality and authenticated ancestry. A return is a new export and unique import, never release of the first debit. Ground candidates exercise cyclic transfers; full protocol and independent qualification remain open.",
  ],
  [
    "What would count as completing the protocol?",
    "An exact version must pass the A–G foundations and all I1–I12 requirements within published fault, capacity and verification limits, with independent evidence. Document alignment alone is insufficient. New-mainnet adoption additionally needs a signed zero-issuance genesis and verified deployment; physical routes require separate measurements. None of I1–I12 is fully qualified today.",
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
    "The white paper requires zero initial allocation and no reserved founder share. Future miners must follow the same adopted work, reward and maturity rules; no participant is guaranteed a share. A new mainnet has not launched. Source review, testnet verification and protocol development are ways to participate today.",
  ],
  [
    "How does mining or earning RLD work?",
    "Developers can reproduce the fresh testnet with public fixture keys and worthless rewards. A future mainnet needs its own accepted release, signed genesis and mining parameters. Rewards depend on competition and luck; test rewards never migrate.",
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
    "No. The research edition discusses migration to standardized post-quantum signatures, but no qualified algorithm migration or new-mainnet adoption is established. Preserving authority and history across a cryptographic upgrade is a separate protocol and operational task.",
  ],
] as const;
