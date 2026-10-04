import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Download,
  FileCheck2,
  Fingerprint,
  Globe2,
  KeyRound,
  Layers,
  LockKeyhole,
  Orbit,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button, Eyebrow, Note, PageHero, TextLink } from "@/components/ui";
import { TransferExplorer } from "@/components/transfer-explorer";
import { RelayAtlasPreview } from "@/components/relay-atlas";
import { NetworkStatusPanel } from "@/components/network-status";
import { LearningPage } from "@/components/learning-page";
import { PublicEvidence } from "@/components/public-evidence";
import { learning } from "@/lib/learning";
import {
  TESTNET,
  CURRENT_PLAN,
  GROUND_CANDIDATE,
  GROUND_RAW,
  PUBLIC_SOURCE_REVISION,
  PUBLIC_RESEARCH,
  GROUND_PATH,
  DEVELOPER_FORUM,
  MAINTAINER_PROFILE,
  pages,
  pageMetadata,
  REPOSITORY,
  WEBSITE_REPOSITORY,
  faqs,
} from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  return page ? pageMetadata(page[0], page[1], `/${slug}`) : {};
}
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (Object.hasOwn(learning, slug)) return <LearningPage slug={slug} />;
  switch (slug) {
    case "get-started":
      return <GetStarted />;
    case "how-it-works":
      return <HowItWorks />;
    case "individuals":
      return <Individuals />;
    case "applications":
      return <Applications />;
    case "developers":
      return <Developers />;
    case "network":
      return <Network />;
    case "roadmap":
      return <Roadmap />;
    case "faq":
      return <FAQ />;
    case "about":
      return <About />;
    case "resources":
      return <Resources />;
    case "privacy":
      return <Privacy />;
    case "media-sources":
      return <MediaSources />;
    default:
      notFound();
  }
}

function Closing({
  title = "The next step is understanding.",
  text = "Explore the ideas and evidence behind Rldcoin.",
  href = "/resources",
  label = "Explore resources",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="closing">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Button href={href} light>
          {label}
        </Button>
      </div>
    </section>
  );
}
function GetStarted() {
  const steps = [
    {
      title: "Meet Rldcoin",
      text: "Learn what Rldcoin is, why the project starts on Earth, and how its long-term vision reaches future human communities.",
      href: "/about",
      label: "Get to know Rldcoin",
      icon: BookOpen,
    },
    {
      title: "Know the rules and limits",
      text: "Understand no-value fixtures, owner custody, local finality and why a delivery receipt or timeout cannot establish a spendable balance.",
      href: "/you-need-to-know",
      label: "What you need to know",
      icon: Globe2,
    },
    {
      title: "Follow the evidence",
      text: "Read white paper, inspect testnet fixtures and source commitments, and compare the ground evidence with the mandatory acceptance conditions.",
      href: "/resources",
      label: "Browse official resources",
      icon: FileCheck2,
    },
    {
      title: "Reproduce a public ground candidate",
      text: "Inspect and reproduce the candidate in an isolated test environment. There is no mainnet mining or payment service.",
      href: "/run-a-node",
      label: "Choose a test-node experiment",
      icon: Users,
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="A new horizon. A clear first step."
        description="You don’t need to know the protocol to understand the vision. Start with the essentials, then choose your own path."
      />
      <section className="section">
        <div className="container narrow">
          <Note title="Where the network stands today">
            Development continues on a separate testnet; its currency has no
            monetary value. A new mainnet requires a fresh signed zero-issuance
            genesis after qualification.
          </Note>
          <div className="step-list">
            {steps.map((step, i) => (
              <div className="step-item" key={step.title}>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <step.icon size={25} strokeWidth={1.5} aria-hidden="true" />
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                  <TextLink href={step.href}>{step.label}</TextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container guide-next-links">
          <Button href="/individuals" secondary>
            For individuals
          </Button>
          <Button href="/businesses" secondary>
            For businesses
          </Button>
          <Button href="/developers" secondary>
            For developers
          </Button>
        </div>
      </section>
      <Closing
        title="More curious about the technical side?"
        text="Start with the published Rust source and genesis evidence."
        href="/developers"
        label="For developers"
      />
    </>
  );
}
function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Local trust. A longer reach."
        description="Interstellar distance changes the problem. Rldcoin is designed around separate regions that verify locally and communicate asynchronously."
      />
      <section className="section">
        <div className="container">
          <div className="two-column">
            <div>
              <Eyebrow>01 / THE ZONE</Eyebrow>
              <h2>
                A local ledger.
                <br />
                Its own consensus.
              </h2>
            </div>
            <div className="prose">
              <p>
                A <strong>Zone</strong> maintains a ledger and local consensus.
                Its participants confirm local activity without waiting for a
                distant star system. The architecture is intended to support
                regions that cannot depend on an always-reachable Earth clearing
                service.
              </p>
              <p>
                A Zone could one day serve a community, a habitat, or a
                spacecraft. Earth is the first test environment; all regions
                need their own operational and security qualification.
              </p>
            </div>
          </div>
          <RelayAtlasPreview />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow">
          <Eyebrow>THE NODE MESH</Eyebrow>
          <h2>New nodes extend the path.</h2>
          <p className="page-lead">
            Local networks connect through neighboring relays. A planetary
            community, a station and a mobile habitat can each extend the path.
            Signed information helps discover farther regions; evidence moves
            onward as contacts become available.
          </p>
          <p>
            A separately started contact-spool prototype exercises transport;
            separately admitted regional candidates integrate relay into their
            ordinary node lifecycle. The existing Earth testnet still uses
            explicit peers. Physical adapters, sustained service and long-term
            disconnection still need qualification.
          </p>
          <TextLink href="/node-network">
            Explore progressive discovery and relays
          </TextLink>
        </div>
      </section>
      <section className="architecture-section">
        <div className="container">
          <Eyebrow light>02 / THE JOURNEY</Eyebrow>
          <h2>A transfer carries evidence.</h2>
          <p className="section-lead">
            Each step establishes what the next region is allowed to accept.
            Explore the intended lifecycle below.
          </p>
          <TransferExplorer />
          <TextLink href="/payments">
            Read every payment state and its checks
          </TextLink>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <div>
            <Eyebrow>03 / THE INVARIANTS</Eyebrow>
            <h2>
              What distance
              <br />
              must never change.
            </h2>
          </div>
          <div className="principle-list">
            {[
              [
                "Authorization",
                "A sender must authorize the transfer. Possession of a copy of the ledger does not confer ownership.",
              ],
              [
                "A single spendable location",
                "The source locks the asset before export. The destination accepts it only after verifying the required evidence.",
              ],
              [
                "Explicit uncertainty",
                "Missing, conflicting, or unsupported evidence leaves a transfer pending or quarantined. A timeout is not proof that the destination did not import it.",
              ],
              [
                "Local autonomy, local constraints",
                "Remote disconnection must not require Earth approval of local payments. A local group without its adopted finality resources stops dependent settlement.",
              ],
              [
                "Continuous history",
                "The target requires authenticated continuity through recovery and cryptographic evolution. Incompatible present candidates use fresh genesis and never migrate old value.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <ShieldCheck size={21} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow">
          <h2>Distance still takes time.</h2>
          <p className="page-lead">
            No protocol removes the need for information to arrive. A local
            confirmation, an exported proof, a destination import, and a
            returned receipt are different events.
          </p>
          <Note title="Architecture, not a claim of live interstellar service">
            The target requires local payments during remote disconnection,
            onward export and actual value return between authorized regions.
            Native discovery, finality, durable recovery and independent review
            still need qualification. Ground candidates and diagrams do not
            establish an operating physical interstellar route.
          </Note>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Eyebrow>THE EARTH REFERENCE PROFILE</Eyebrow>
          <h2>Parameters belong to an adopted region.</h2>
          <dl className="parameter-grid">
            <div>
              <dt>Supply cap</dt>
              <dd>100 billion RLD</dd>
            </div>
            <div>
              <dt>Integer unit</dt>
              <dd>1 RLD = 10²⁴ runlai</dd>
            </div>
            <div>
              <dt>Initial allocation</dt>
              <dd>Zero</dd>
            </div>
            <div>
              <dt>Target block interval</dt>
              <dd>600 seconds on average</dd>
            </div>
            <div>
              <dt>Reward maturity</dt>
              <dd>100 successor blocks</dd>
            </div>
            <div>
              <dt>Import maturity</dt>
              <dd>6 successor blocks</dd>
            </div>
          </dl>
          <Note title="Reference profile and BFT candidates are distinct">
            The paper’s PoW reference uses four unanimous checkpoint signers and
            a twelve-block checkpoint count including the checkpoint block.
            Separately signed BFT candidates use three-of-four prepare and
            commit votes with durable locks. A regional threshold, interval or
            maturity cannot change merely because another candidate uses
            different rules.
          </Note>
          <TextLink href="/whitepaper#5-proof-of-work-and-network-selection">
            Read the exact reference rules
          </TextLink>
        </div>
      </section>
      <Closing href="/developers" label="Explore the protocol" />
    </>
  );
}
function Individuals() {
  return (
    <>
      <PageHero
        eyebrow="For individuals"
        title="Your journey. Your ownership."
        description="A future in which moving to a new region does not mean giving up the ability to verify and control what you own."
      />
      <section className="section">
        <div className="container">
          <div className="feature-grid three">
            {[
              {
                icon: KeyRound,
                title: "Control begins with keys",
                text: "The design puts payment authorization with the owner. A wallet should help you understand what you sign, protect your keys, and recover safely.",
              },
              {
                icon: Fingerprint,
                title: "Know what has happened",
                text: "A wallet should distinguish locked funds, a proof in transit, a verified import, and a returned receipt. “Sent” must not conceal a pending journey.",
              },
              {
                icon: Globe2,
                title: "Move between regions",
                text: "A future transfer is bound to a real destination Zone. The recipient can use the asset locally after a valid unique import and the destination’s maturity rule.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div className="feature" key={title}>
                <Icon size={29} strokeWidth={1.5} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <Note title="Wallet availability">
            A test wallet has exercised encrypted backup recovery and signed
            transfers with worthless test currency. A qualified consumer mainnet
            wallet is not available. Hardware signing, recovery across devices
            and protection against old-backup rollback remain open. This website
            never asks for a private key or wallet connection.
          </Note>
          <div className="guide-next-links">
            <Button href="/wallets" secondary>
              Understand wallet custody
            </Button>
            <Button href="/payments" secondary>
              Follow the recipient’s payment
            </Button>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container two-column">
          <div>
            <Eyebrow>BEFORE YOUR FIRST TRANSFER</Eyebrow>
            <h2>
              Learn the basics
              <br />
              before the balance.
            </h2>
          </div>
          <div className="prose">
            <h3>Know the network</h3>
            <p>
              Verify the genesis identity, software release, and current
              operating phase. A similar name or logo does not establish a
              network’s identity.
            </p>
            <h3>Understand custody</h3>
            <p>
              Keys authorize ownership. Future wallet releases must make backup
              and recovery practical, and preserve the distinction between a
              public address and secret signing material.
            </p>
            <h3>Follow activation, not promises</h3>
            <p>
              Testnet and ground candidates exercise local transfers, exports,
              imports and recovery. A future real-value service requires exact
              signed adoption, qualified finality and wallet recovery, and
              independent operational evidence.
            </p>
            <TextLink href="/you-need-to-know">What you need to know</TextLink>
          </div>
        </div>
      </section>
      <Closing href="/get-started" label="Get started" />
    </>
  );
}
function Applications() {
  return (
    <>
      <PageHero
        eyebrow="Future applications"
        title="A wider world of possibilities."
        description="Peer-to-peer payments across distant human communities are the goal. Local and cross-region capabilities are being qualified on a value-free testnet."
      />
      <section className="section">
        <div className="container application-grid">
          {[
            {
              icon: Globe2,
              title: "Communities on Earth",
              label: "01 / THE FOUNDATION",
              text: "Begin with verifiable local transfers, ownership, recovery, and continuity. Build the operational confidence needed for wider participation.",
              foot: "Testnet transfers and wallet recovery are exercised; no qualified mainnet consumer service.",
            },
            {
              icon: Orbit,
              title: "Habitats and settlements",
              label: "02 / LOCAL INDEPENDENCE",
              text: "A future habitat could maintain its own ledger and confirm local activity while messages to other regions are delayed or unavailable.",
              foot: "Future deployment scenario.",
            },
            {
              icon: Radio,
              title: "Spacecraft in transit",
              label: "03 / A MOVING REGION",
              text: "A spacecraft could operate as a Zone, carrying the evidence needed to maintain ownership through long periods away from other regions.",
              foot: "Requires route, continuity, and recovery qualification.",
            },
            {
              icon: Layers,
              title: "Distant star systems",
              label: "04 / A LONGER HORIZON",
              text: "Transfers would arrive as verifiable evidence, possibly carried through relays or physical media. The destination independently decides whether it has enough evidence to accept.",
              foot: "Long-term objective; no physical interstellar route is deployed.",
            },
          ].map(({ icon: Icon, title, label, text, foot }) => (
            <article className="application-card" key={title}>
              <Icon size={42} strokeWidth={1} aria-hidden="true" />
              <Eyebrow>{label}</Eyebrow>
              <h2>{title}</h2>
              <p>{text}</p>
              <small>{foot}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow">
          <h2>Planning a payment service?</h2>
          <p className="page-lead">
            Explore invoice binding, recipient verification and the acceptance
            states a future merchant integration would need.
          </p>
          <TextLink href="/businesses">Rldcoin for businesses</TextLink>
        </div>
      </section>
      <Closing
        title="The architecture begins with constraints."
        text="See how Rldcoin approaches distance, delay, and verifiable ownership."
        href="/how-it-works"
        label="How it works"
      />
    </>
  );
}
function Developers() {
  return (
    <>
      <PageHero
        eyebrow="For developers"
        title="Build for what comes next."
        description="The protocol is open to inspection. Start with the exact source, follow the evidence, and help turn long-term requirements into verifiable engineering."
      >
        <div className="hero-actions">
          <Button href="/run-a-node">Choose a test-node experiment</Button>
          <Button href="/whitepaper" secondary>
            Read the white paper
          </Button>
        </div>
      </PageHero>
      <PublicEvidence />
      <section className="section">
        <div className="container">
          <div className="two-column">
            <div>
              <Eyebrow>THE STACK</Eyebrow>
              <h2>
                Rust at the core.
                <br />
                Evidence throughout.
              </h2>
              <p className="section-lead">
                The testnet publication includes exact source, public fixture
                records, verification tools and explicit qualification gaps.
              </p>
            </div>
            <div className="code-panel">
              <div>
                <span />
                <span />
                <span />
                <small>LOCAL DEVELOPMENT</small>
              </div>
              <pre>
                <code>
                  {
                    "# From the fresh testnet source archive\n# Requires the pinned Rust toolchain\n\ncargo build --locked --release --bins -p rld-cli -p rld-pow -p rld-value-successor\ncargo test --locked -p rld-value-successor --lib\n\n# Follow earth/testnet-20260930/README.md\n# Public fixture keys; test currency has no value"
                  }
                </code>
              </pre>
              <p>
                Reproduce the fresh testnet in a separate directory. Fixture
                rewards, balances and signing keys have no monetary value.
              </p>
              <TextLink href={`${REPOSITORY}/tree/main/earth/testnet-20260930`}>
                Use the fresh testnet guide
              </TextLink>
            </div>
          </div>
          <div className="module-list">
            {[
              [
                "rld-core",
                "Protocol types, ledgers, transactions, transfer proofs, and verification.",
              ],
              [
                "rld-pow",
                "Shared proof-of-work, reward and transition types; Earth runtime behavior is implemented in the successor nodes.",
              ],
              [
                "rld-value-successor",
                "Earth source and destination nodes, signing tools, payment and settlement logic.",
              ],
              [
                "rld-cli / rld-earth-genesis",
                "Key and signature tools plus the direct genesis builder.",
              ],
              [
                "vectors / tools / formal",
                "Test vectors, verification programs, and formal models.",
              ],
            ].map(([name, desc]) => (
              <div key={name}>
                <code>{name}</code>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p>
            <TextLink href="/node-network">
              Run and inspect the supplemental discovery and relay prototype
            </TextLink>
          </p>
          <Note title="Use the exact testnet source">
            Follow the testnet README and verify source-manifest.json and
            SHA256SUMS before using source.tar.gz. GitHub’s automatically
            generated archive of the publication repository is not the exact
            runtime source package. Public fixture keys confer no mainnet
            authority.
          </Note>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>START WITH VERIFICATION</Eyebrow>
              <h2>
                Useful work starts
                <br />
                with a precise question.
              </h2>
            </div>
            <p>
              Reproducible findings help the project move forward. Public source
              availability does not mean the protocol has received an
              independent security audit.
            </p>
          </div>
          <div className="feature-grid three">
            <div className="feature">
              <FileCheck2 />
              <h3>Reproduce a result</h3>
              <p>
                Record the exact release, toolchain, inputs, commands, and
                output. Distinguish simulations from real network evidence.
              </p>
            </div>
            <div className="feature">
              <LockKeyhole />
              <h3>Review a boundary</h3>
              <p>
                Inspect authorization, duplicate imports, replay, incomplete
                proofs, and recovery behavior. Use an isolated environment.
              </p>
            </div>
            <div className="feature">
              <Code2 />
              <h3>Discuss an improvement</h3>
              <p>
                Bring a concrete issue or design question to Nodes &amp;
                Development. Use the feedback template below and keep all
                private signing and recovery material off the forum.
              </p>
            </div>
          </div>
          <div className="hero-actions">
            <Button
              href={`${REPOSITORY}/raw/refs/heads/main/earth/testnet-20260930/source.tar.gz`}
            >
              Download testnet source
            </Button>
            <Button href={DEVELOPER_FORUM} secondary>
              Nodes &amp; Development
            </Button>
          </div>
        </div>
      </section>
      <section className="section" id="reproduce-v26">
        <div className="container narrow">
          <span id="reproduce-v14" aria-hidden="true" />
          <span id="reproduce-v15" aria-hidden="true" />
          <span id="reproduce-v16" aria-hidden="true" />
          <span id="reproduce-v17" aria-hidden="true" />
          <span id="reproduce-v18" aria-hidden="true" />
          <span id="reproduce-v19" aria-hidden="true" />
          <span id="reproduce-v20" aria-hidden="true" />
          <span id="reproduce-v21" aria-hidden="true" />
          <span id="reproduce-v25" aria-hidden="true" />
          <Eyebrow>HISTORICAL REPRODUCTION / REVISION 26</Eyebrow>
          <h2>Replay payment history one complete page at a time.</h2>
          <p className="page-lead">
            The explicitly signed segmented candidate retains immutable event
            pages and fully verifies their payment history from genesis. Wallets
            review the original signing inputs; private ledger recovery checks a
            separately retained latest head. Evidence hashes alone never
            authorize a payment.
          </p>
          <Note title="Finite local payment and recovery checks passed">
            An ordinary node persisted 1,029 blocks and 1,025 signed payments,
            then restored its exact ledger into a fresh private directory. A
            separate process test reached 361 blocks with a cross-region return,
            original debit preservation and duplicate-import refusal. These
            segmented tests use four unanimous validators. The separate
            twelve-node BFT cycle uses its original bounded profile; its results
            are recorded in the pinned guide. Neither observation qualifies BFT
            long history, independent latest-state custody or physical routes.
          </Note>
          <ol className="prose">
            <li>
              Verify the 254-file manifest and checksums. Coverage includes 139
              distinct native tests and 60 process tests: 138 native tests ran
              from the frozen source, and the long-store test ran against
              byte-identical native source. Checked release builds and strict
              checks passed. Each page holds 16 events; the 4,096-file / 256 MiB
              archive, complete-evidence and 64-checkpoint bounds remain.
            </li>
            <li>
              Build all binaries with Rust 1.98.0 and the pinned Python
              requirements. Use fresh private fixture directories and a cycle;
              prior currency and old or test balances never migrate. Keep all
              keys, configurations, signer heads and wallet/node state private.
            </li>
            <li>
              Run the separate cycle verifier after all owned nodes stop. If
              continuing with the fault profile, retain every failed report and
              fixture. The full-profile verifier refuses a failed run. Local
              deadlines never refund a debit or delete pending evidence.
            </li>
          </ol>
          <div className="code-panel">
            <div>
              <span />
              <span />
              <span />
              <small>PINNED PUBLIC SOURCE / LOCAL FIXTURES ONLY</small>
            </div>
            <pre>
              <code>{String.raw`git clone https://github.com/RunlaiDeng/rldcoin-genesis.git rldcoin-public
cd rldcoin-public
git checkout --detach ${PUBLIC_SOURCE_REVISION}
cd ${GROUND_PATH}
shasum -a 256 -c SHA256SUMS
mkdir source-v26
tar -xzf source.tar.gz -C source-v26

# Follow the pinned README's fresh-genesis cycle commands
# then the fault profile, stopped-state checks and private-image restore audit.
# Preserve old private states, interrupted runs and fault failures.`}</code>
            </pre>
            <p>
              These experiments use worthless public fixtures on one host under
              one controller. Independent operations, full BFT reconfiguration,
              long-term archives and cryptography, complete wallets, channels
              and physical routes remain open. No I1–I12 requirement is fully
              qualified.
            </p>
          </div>
          <div className="hero-actions">
            <Button href={GROUND_CANDIDATE}>Read the pinned v26 guide</Button>
            <Button href={`${GROUND_RAW}/source.tar.gz`} secondary>
              Download v26 source
            </Button>
            <Button
              href={`${GROUND_CANDIDATE}/README.md#reproduce-the-observed-path`}
              secondary
            >
              Starting path &amp; commands
            </Button>
          </div>
          <p>
            <TextLink href={TESTNET}>Existing Earth testnet guide</TextLink>
            {" · "}
            <TextLink href={`${GROUND_CANDIDATE}/source-manifest.json`}>
              v26 source manifest
            </TextLink>
            {" · "}
            <TextLink href={`${GROUND_CANDIDATE}/SHA256SUMS`}>
              v26 checksums
            </TextLink>
            {" · "}
            <TextLink
              href={`${PUBLIC_RESEARCH}/2026-10-02/regional-native-history-recovery-v21`}
            >
              Historical v21 ledger recovery
            </TextLink>
            {" · "}
            <TextLink
              href={`${PUBLIC_RESEARCH}/2026-10-01/regional-native-paged-history-v20`}
            >
              Historical v20 paging result
            </TextLink>
            {" · "}
            <TextLink
              href={`${PUBLIC_RESEARCH}/2026-10-01/regional-native-bft-shared-evidence-v19`}
            >
              Historical v19 fault result
            </TextLink>
            {" · "}
            <TextLink
              href={`${PUBLIC_RESEARCH}/2026-10-01/regional-native-prefix-replay-v18`}
            >
              Historical v18 fault failure
            </TextLink>
            {" · "}
            <TextLink
              href={`${PUBLIC_RESEARCH}/2026-10-01/regional-native-bft-fault-recovery-v17`}
            >
              Historical v17 fault result
            </TextLink>
          </p>
        </div>
      </section>
      <section className="section soft-section" id="participate">
        <div className="container narrow">
          <Eyebrow>CONTRIBUTE A REPRODUCIBLE FINDING</Eyebrow>
          <h2>Bring the evidence to the forum.</h2>
          <ol className="prose">
            <li>
              Open Nodes &amp; Development and read the recent topics before
              posting.
            </li>
            <li>
              Sign in with your own account. Reply to a matching topic, or
              create one with a specific question and the template below.
            </li>
            <li>
              Include failures as well as successes. Separate transport receipt,
              ledger import, maturity and finality in your observations.
            </li>
          </ol>
          <div className="code-panel">
            <div>
              <span />
              <span />
              <span />
              <small>PUBLIC FEEDBACK TEMPLATE</small>
            </div>
            <pre>
              <code>{`Source commit / archive SHA-256:
OS / CPU / Rust / Python versions:
Fresh-directory setup and exact commands:
Topology, timing, fault and restart conditions:
Expected result / actual result:
First failing phase and elapsed time:
Sanitized report or minimal reproduction:
Scope: local fixture / existing Earth testnet`}</code>
            </pre>
          </div>
          <Note title="Protect keys and disclose privately">
            Never post seed phrases, private keys, passwords, session URLs,
            wallet backups or signer/replica/head/transport state. The public
            archive does not provide a verified SECURITY.md disclosure route.
            For a suspected vulnerability, use the official maintainer’s forum
            profile to request a private reporting channel before sharing
            exploit details. No response-time or bounty commitment is offered.
          </Note>
          <div className="hero-actions">
            <Button href={DEVELOPER_FORUM}>Open Nodes &amp; Development</Button>
            <Button href={MAINTAINER_PROFILE} secondary>
              Maintainer profile
            </Button>
            <Button href={WEBSITE_REPOSITORY} secondary>
              Contribute website fixes
            </Button>
          </div>
        </div>
      </section>
      <Closing
        title="Every claim should have a record."
        href="/network"
        label="Inspect current qualification"
      />
    </>
  );
}
function Network() {
  return (
    <>
      <PageHero
        eyebrow="Network & qualification"
        title="Test on Earth. Qualify every step."
        description="Development uses a fresh testnet with public fixture keys and no monetary value. A new mainnet has not launched."
      />
      <PublicEvidence />
      <section className="section network-section">
        <div className="container">
          <NetworkStatusPanel />
          <Note title="A fresh genesis after qualification">
            Development and qualification use public fixtures with no monetary
            value. Test balances, channels, exports and imports do not migrate
            into a future mainnet. Production requires its own signed
            zero-issuance genesis and independent acceptance.
          </Note>
          <div className="section-heading genesis-heading">
            <div>
              <Eyebrow>WHITE PAPER</Eyebrow>
              <h2>Defined goals. Evidence still required.</h2>
            </div>
            <p>
              The paper and master plan share mandatory requirements I1–I12.
              Full protocol qualification, new-mainnet authorization and each
              physical route require distinct evidence.
            </p>
          </div>
          <div className="download-grid">
            {[
              [
                "White paper",
                "The target design and mandatory acceptance contract.",
                "/whitepaper",
              ],
              [
                "Fresh testnet",
                "Exact source, public fixtures and qualification gaps.",
                TESTNET,
              ],
              [
                "Delivery roadmap",
                "The twelve mandatory capabilities and remaining work.",
                "/roadmap",
              ],
              [
                "Public master plan",
                "Versioned goals and acceptance requirements.",
                CURRENT_PLAN,
              ],
            ].map(([title, text, href]) => (
              <a className="download-card" href={href} key={title}>
                <FileCheck2 size={24} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Closing
        title="Follow the requirements and evidence."
        href="/roadmap"
        label="See the roadmap"
      />
    </>
  );
}
const milestones = [
  [
    "I1",
    "Currency and regional identity",
    "Authenticate one currency root, distinct regional rules and signer epochs without an online Earth directory. Discovery never grants monetary authority.",
  ],
  [
    "I2",
    "Local autonomy during remote disconnection",
    "Keep local blocks, payments and recovery working without remote HTTP. Ground candidates exercise this; long-term and independent qualification remain open.",
  ],
  [
    "I3",
    "Unique issuance and conservation",
    "Bind the supply cap, integer units and zero initial allocation. Preserve issued value across outputs, escrow, in-transit exports, fees and recovery.",
  ],
  [
    "I4",
    "Transfers between authorized regions",
    "Support both export and import with multiple sources, owner-authorized debit, exact destination binding and permanent duplicate protection.",
  ],
  [
    "I5",
    "Onward export and composed finality",
    "Protect imported provenance and the new debit with recognized local finality before onward import. Probabilistic maturity alone is insufficient.",
  ],
  [
    "I6",
    "Actual return of value",
    "Return value through a new export and unique import. Ground cyclic-transfer candidates exist; a returned receipt never releases the initial debit.",
  ],
  [
    "I7",
    "Regional finality and trust evolution",
    "Qualify local fault tolerance, durable signer locks, epoch transitions and conflict quarantine. Four fixture keys under one owner do not establish independent BFT.",
  ],
  [
    "I8",
    "Native discovery and evidence relay",
    "Each normally started full node must discover and relay in the same lifecycle. The supplemental mesh and public v26 native-startup candidate have separate scopes; sustained cross-region progress, real adapters and independent qualification remain open.",
  ],
  [
    "I9",
    "Recipient-verifiable payment states",
    "Distinguish identity, route, contact, transport receipt, import, maturity and finality. Wallets must verify current signing state and expose missing or conflicting evidence.",
  ],
  [
    "I10",
    "Durable history and bounded recovery",
    "Retain histories, permanent import commitments and finality locks. Qualify independent archives, corruption recovery, old-backup rejection and a declared preservation horizon.",
  ],
  [
    "I11",
    "Cryptographic longevity and delayed revocation",
    "Version key and algorithm epochs, qualify post-quantum migration and renewal, and reject downgrades. Million-year cryptographic safety is not established.",
  ],
  [
    "I12",
    "Independent qualification and sustained service",
    "Provide separate operators and custody, external review, device recovery and measurable service budgets. Each physical route needs its own evidence.",
  ],
] as const;
function Roadmap() {
  return (
    <>
      <PageHero
        eyebrow="The roadmap"
        title="A defined purpose. Mandatory steps."
        description="White paper and the master plan define I1–I12 alongside the A–G foundations. No requirement is fully qualified; progress follows evidence, not a promised calendar."
      />
      <section className="section">
        <div className="container narrow">
          <p className="updated-label">CONTENT REVIEW / 4 OCTOBER 2026</p>
          <Note title="Development phase">
            Ground candidates implement parts of the design. Document alignment
            is established; full protocol qualification, new-mainnet
            authorization and physical-route qualification remain unfinished.
            Old and test balances never migrate into a future mainnet.
          </Note>
          <div className="roadmap">
            {milestones.map(([id, title, description]) => (
              <article className="milestone" key={id}>
                <div className="milestone-index">{id}</div>
                <div>
                  <span className="milestone-status">
                    {id} · Qualification incomplete
                  </span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  {id === "I8" && (
                    <TextLink href="/node-network">
                      Inspect the ground mesh
                    </TextLink>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Button href={CURRENT_PLAN}>Read the full master plan</Button>
            <Button href={TESTNET} secondary>
              Inspect testnet evidence & gaps
            </Button>
          </div>
          <Note title="Separate acceptance stages">
            A reviewed protocol version must pass its applicable foundations and
            I1–I12 within stated fault, capacity and verification limits. A new
            Earth mainnet additionally needs exact signed adoption and a
            zero-issuance genesis. A physical route needs measured contacts,
            capacity and independent operating evidence. Tests or telemetry
            cannot substitute for these stages.
          </Note>
        </div>
      </section>
      <Closing href="/research" label="Explore research & evidence" />
    </>
  );
}
function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="A little more understanding."
        description="Straight answers about the vision, the asset, and the network that exists today."
      />
      <section className="section">
        <div className="container narrow">
          <div className="faq-list faq-full">
            {faqs.map(([question, answer], i) => (
              <details key={question} open={i === 0}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
                {question === "What network is available today?" && (
                  <TextLink href="/network">
                    Inspect network qualification
                  </TextLink>
                )}
                {question === "How can I verify the genesis?" && (
                  <TextLink href="/resources">Find the public records</TextLink>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container guide-next-links">
          <Button href="/you-need-to-know" secondary>
            Key limitations
          </Button>
          <Button href="/vocabulary" secondary>
            Vocabulary
          </Button>
        </div>
      </section>
      <Closing
        title="Keep the conversation going."
        text="Bring your questions and ideas to the Rldcoin community."
        href="https://forum.rldcoin.com/"
        label="Visit the forum"
      />
    </>
  );
}
function About() {
  return (
    <>
      <PageHero
        eyebrow="About Rldcoin"
        title="A future worth building toward."
        description="Rldcoin is building an interstellar peer-to-peer payment system for the future of humanity. Development and qualification continue on a value-free Earth testnet."
      />
      <section className="section">
        <div className="container editorial">
          <aside>
            <Eyebrow>THE IDEA</Eyebrow>
            <span className="editorial-symbol" aria-hidden="true">
              <Image
                src="/brand/rldcoin-coin-logo.png"
                alt=""
                width={210}
                height={210}
              />
            </span>
          </aside>
          <div className="prose large-prose">
            <h2>Humanity may not always live in one connected place.</h2>
            <p>
              People could build lives on Earth, in orbital habitats, aboard
              spacecraft, and eventually in distant star systems. Between those
              places, communication will take time. Sometimes it will be
              interrupted for long periods.
            </p>
            <p>
              Rldcoin asks a practical question: how can people pay each other
              across star systems while ownership remains verifiable and the
              participants cannot share an immediate conversation?
            </p>
            <p>
              The answer being developed begins with local Zones and
              asynchronous evidence. A local community confirms its own
              activity. A transfer to another region carries proof. The asset’s
              history must remain continuous throughout the journey.
            </p>
            <h2>
              A defined purpose.
              <br />
              An unfinished system.
            </h2>
            <p>
              Development now uses a fresh testnet with public fixture keys and
              no monetary value. A future mainnet requires a new signed
              zero-issuance genesis. Old and test balances never migrate.
            </p>
            <p>
              White paper makes local autonomy, conserved onward and return
              transfers, native relay discovery, long-term preservation and
              independent qualification mandatory. Ground candidates exercise
              parts of this design. None of I1–I12 is fully qualified yet.
            </p>
            <h2>One currency. Regional verification.</h2>
            <p>
              Authorized regions bind one currency root while applying their own
              explicitly adopted consensus. The target cap is 100 billion RLD,
              with zero initial allocation and 10²⁴ runlai per RLD. Additional
              regions do not issue a second reserve. Each import, onward export
              and return must preserve exact value and authenticated ancestry.
            </p>
            <p>
              Courier discovery cannot authorize a region or a payment. Actual
              contacts carry evidence; no always-online Earth directory or
              simultaneous global balance is required.
            </p>
            <h2>Built in the open.</h2>
            <p>
              The protocol source and verification artifacts are published for
              inspection. The code is licensed under Apache-2.0. Open source is
              an invitation to review; it does not replace independent security
              work.
            </p>
            <TextLink href={TESTNET}>
              Explore testnet source & evidence
            </TextLink>
            <br />
            <TextLink href="/whitepaper">Read the white paper</TextLink>
          </div>
        </div>
      </section>
      <Closing
        title="Start with the idea. Follow the evidence."
        href="/get-started"
        label="Get started"
      />
    </>
  );
}
function Resources() {
  const sections = [
    {
      title: "Understand the target",
      label: "01 / WHITE PAPER & REQUIREMENTS",
      items: [
        [
          "Rldcoin white paper",
          "The target protocol, mandatory I1–I12 requirements and references. Read online or download the PDF.",
          "/whitepaper",
        ],
        [
          "How it works",
          "Local ledgers, asynchronous evidence, conservation and payment states.",
          "/how-it-works",
        ],
        [
          "Protocol overview",
          "A concise English introduction to the current design and qualification limits.",
          "/documents/rldcoin-overview.md",
        ],
        [
          "Mandatory roadmap",
          "The twelve requirements and separate protocol, mainnet and physical-route gates.",
          "/roadmap",
        ],
        [
          "Public master plan",
          "Versioned purpose and acceptance contract.",
          CURRENT_PLAN,
        ],
        [
          "You need to know",
          "Availability, custody, finality and communication limits before a payment.",
          "/you-need-to-know",
        ],
        [
          "Payment states",
          "Owner authorization through unique import, maturity and onward export.",
          "/payments",
        ],
        [
          "Vocabulary",
          "Plain definitions of the white paper’s terms.",
          "/vocabulary",
        ],
        [
          "Wallets & ownership",
          "Payment review and the remaining custody and recovery gates.",
          "/wallets",
        ],
        [
          "Questions & answers",
          "Testnet, supply, wallets and ways to participate today.",
          "/faq",
        ],
      ],
    },
    {
      title: "Inspect and reproduce",
      label: "02 / CURRENT DEVELOPMENT",
      items: [
        [
          "Fresh testnet source & records",
          "Public fixture keys, exact source commitments, checksums and qualification gaps. No monetary value.",
          TESTNET,
        ],
        [
          "Historical v26 ground candidate",
          "Segmented history and private recovery observations; separate bounded BFT evidence and retained failures. No monetary value.",
          GROUND_CANDIDATE,
        ],
        [
          "Run a test node and contribute",
          "Choose an exact fixture, follow the published commands and share sanitized findings.",
          "/run-a-node",
        ],
        [
          "Network & qualification",
          "The current phase, limits and links to public testnet telemetry.",
          "/network",
        ],
        [
          "Discovery and relay prototype",
          "Supplemental ground mesh code, requirements and reproducible drill.",
          `${REPOSITORY}/tree/main/research/2026-09-30/mesh`,
        ],
        [
          "Regional ledger candidates",
          "Ground evidence for local autonomy, onward/return transfers, signer epochs and conflict isolation; full qualification remains open.",
          `${REPOSITORY}/tree/main/research/2026-09-30`,
        ],
        [
          "Website source",
          "The independent English website source repository.",
          WEBSITE_REPOSITORY,
        ],
      ],
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Explore. Inspect. Understand."
        description="The current design, testnet source and qualification evidence."
      />
      <PublicEvidence />
      <section className="section">
        <div className="container">
          {sections.map((section) => (
            <section className="resource-section" key={section.title}>
              <div>
                <Eyebrow>{section.label}</Eyebrow>
                <h2>{section.title}</h2>
              </div>
              <div className="resource-list">
                {section.items.map(([title, text, href]) => (
                  <Link href={href} key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                    {href.endsWith(".gz") || href.endsWith(".md") ? (
                      <Download size={21} aria-hidden="true" />
                    ) : (
                      <ArrowUpRight size={21} aria-hidden="true" />
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
          <Note title="Download with context">
            Use the fresh testnet guide and verify exact source commitments and
            checksums in an isolated environment. Test keys are public and test
            currency has no value. Testnet evidence does not authorize a mainnet
            or establish independent qualification.
          </Note>
        </div>
      </section>
      <Closing
        title="Knowledge grows through conversation."
        href="https://forum.rldcoin.com/"
        label="Visit the community"
      />
    </>
  );
}
function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="A simple, public website."
        description="What this website requests, what it stores, and where its links take you."
      />
      <section className="section">
        <div className="container narrow prose">
          <p className="updated-label">LAST REVIEWED / 4 OCTOBER 2026</p>
          <h2>No account or wallet connection</h2>
          <p>
            This website has no account registration, payment form, wallet
            connection, or private-key input. It does not use advertising
            trackers or analytics scripts, and it does not set application
            cookies or store preferences in browser storage.
          </p>
          <h2>Hosting and network status</h2>
          <p>
            Vercel hosts the website and processes standard web requests, which
            can include an IP address, browser information, requested URL, and
            operational logs. See{" "}
            <a href="https://vercel.com/legal/privacy-policy">
              Vercel’s privacy policy
            </a>{" "}
            for its practices.
          </p>
          <p>
            The network page displays the development phase and qualification
            limits, with links to public testnet telemetry. It does not poll a
            mainnet or retain cached mainnet status. Testnet telemetry is an
            operator observation, not independent verification.
          </p>
          <h2>External services</h2>
          <p>
            Links to GitHub, the Rldcoin forum, and other external pages leave
            this website. Those services have their own practices. Fonts are
            served with the website; your browser does not need to contact a
            third-party font provider.
          </p>
          <h2>Questions or corrections</h2>
          <p>
            For website questions, use the{" "}
            <a href={`${WEBSITE_REPOSITORY}/issues`}>website issue tracker</a>.
            Please do not include passwords, private keys, or other sensitive
            material in a public issue.
          </p>
        </div>
      </section>
    </>
  );
}

function MediaSources() {
  return (
    <>
      <PageHero
        eyebrow="Media sources"
        title="The images behind the journey."
        description="Sources and credits for the real spacecraft, space-station, and rover imagery on the homepage."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Earth from the International Space Station</h2>
          <p>
            The Earth footage and photographs come from the{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Earth_Views_from_the_International_Space_Station.webm">
              NASA HDEV camera recording
            </a>
            . The homepage uses two short excerpts, resized and cropped for the
            layout.
          </p>
          <h2>Jupiter</h2>
          <p>
            The color-enhanced JunoCam photograph is{" "}
            <a href="https://science.nasa.gov/photojournal/jupiters-colorful-cloud-belts/">
              Jupiter’s Colorful Cloud Belts
            </a>
            . Image processing by Kevin M. Gill ({" "}
            <a href="https://creativecommons.org/licenses/by/">CC BY</a>) using
            images courtesy of NASA/JPL-Caltech/SwRI/MSSS. The homepage displays
            it as a still photograph.
          </p>
          <h2>Earth aurora</h2>
          <p>
            The aurora time lapse is an excerpt from{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Earth_Illuminated-_ISS_Time-lapse_Photography.webm">
              Earth Illuminated: ISS Time-lapse Photography
            </a>
            , assembled from NASA ISS photographs.
          </p>
          <h2>Mars</h2>
          <p>
            The rover camera footage is from{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Perseverance%27s_Mastcam-Z_Video_of_Ingenuity_Hovering.webm">
              Perseverance’s Mastcam-Z Video of Ingenuity Hovering
            </a>
            , NASA/JPL-Caltech/ASU.
          </p>
          <h2>Context</h2>
          <p>
            These records show places and missions in our Solar System; they do
            not depict an Rldcoin payment. NASA and its mission partners are not
            affiliated with Rldcoin and do not endorse it.
          </p>
        </div>
      </section>
    </>
  );
}
