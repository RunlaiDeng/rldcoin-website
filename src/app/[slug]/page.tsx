import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
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
import { NetworkStatusPanel } from "@/components/network-status";
import {
  DOWNLOAD,
  GENESIS,
  GENESIS_ROOT,
  MANIFEST,
  pages,
  pageMetadata,
  RELEASE,
  REPOSITORY,
  WEBSITE_REPOSITORY,
  ZONE,
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
      title: "Understand the idea",
      text: "Begin with Zones, ownership, and the distinction between local confirmation and a proof’s journey across distance.",
      href: "/how-it-works",
      label: "How Rldcoin works",
      icon: BookOpen,
    },
    {
      title: "Know the current chapter",
      text: "Earth has a permanent genesis and a regional PoW release. Automatic mining and signed local transfers are available; independent participation and interstellar routes are the next chapters.",
      href: "/network",
      label: "Inspect the network",
      icon: Globe2,
    },
    {
      title: "Follow the evidence",
      text: "Explore the signed genesis declaration, published checksums, source archives, and release records. Learn what has been established and what remains ahead.",
      href: "/resources",
      label: "Browse official resources",
      icon: FileCheck2,
    },
    {
      title: "Run a node or mine",
      text: "Verify the published adoption, connect an Earth peer, and enable the miner with your own receiving public key. Keep the secret key in your custody.",
      href: "https://github.com/RunlaiDeng/rldcoin-genesis/blob/main/pow-v1/NODE-GUIDE.md",
      label: "Follow the node guide",
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
            The Earth node now supports automatic PoW mining and signed local
            transfers. Use the published node guide to join. A consumer wallet
            is still in development; this website offers no token sale.
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
                spacecraft. Earth is the first deployment; future regions need
                their own operational and security qualification.
              </p>
            </div>
          </div>
          <div
            className="zone-illustration"
            aria-label="Concept: independently operating regions"
          >
            <div>
              <Globe2 size={40} strokeWidth={1} />
              <h3>Earth</h3>
              <span>The beginning</span>
            </div>
            <span className="zone-connector" />
            <div>
              <Orbit size={40} strokeWidth={1} />
              <h3>A habitat</h3>
              <span>A future region</span>
            </div>
            <span className="zone-connector" />
            <div>
              <Radio size={40} strokeWidth={1} />
              <h3>A distant settlement</h3>
              <span>A future region</span>
            </div>
          </div>
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
                "Continuous history",
                "Upgrades, recovery, and changes in cryptography must preserve the established history and asset lineage.",
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
            Cross-Zone software engineering, long-delay validation, independent
            operation, and each real-value route have separate delivery
            requirements. The permanent Earth launch does not establish a
            working physical interstellar route.
          </Note>
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
                text: "A future transfer is bound to a real destination Zone. The recipient can use the asset locally only after the destination verifies and finalizes it.",
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
            There is no public payment-ready Rldcoin wallet at this launch
            stage. Wallet and node components in the source release are
            developer tools with a signed local transaction API. Mining rewards
            require 100 additional blocks before they can be spent. This website
            never asks you to connect a wallet or enter a private key.
          </Note>
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
              Local PoW payments and mining follow the published adoption rules.
              Cross-region transfers remain disabled until their proofs,
              recovery rules, and reorganization handling are qualified.
            </p>
            <TextLink href="/roadmap">See the delivery roadmap</TextLink>
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
        description="Peer-to-peer payments across distant human communities are the goal. Earth local transfers are live at the protocol level; off-world scenarios remain future work."
      />
      <section className="section">
        <div className="container application-grid">
          {[
            {
              icon: Globe2,
              title: "Communities on Earth",
              label: "01 / THE FOUNDATION",
              text: "Begin with verifiable local transfers, ownership, recovery, and continuity. Build the operational confidence needed for wider participation.",
              foot: "Current deployment: signed local transfers via the developer API; no consumer wallet yet.",
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
          <Button href={RELEASE}>Explore the release</Button>
          <Button href="/resources" secondary>
            Browse resources
          </Button>
        </div>
      </PageHero>
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
                The published release includes protocol source, operating
                material, verification tools, and versioned genesis artifacts.
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
                    "# From the published source archive\n# Requires the pinned Rust toolchain\n\ncargo build --locked --release -p rld-pow\ncargo test --locked --release -p rld-pow\n\n# Follow NODE-GUIDE.md in the release to join"
                  }
                </code>
              </pre>
              <p>
                Build and test locally, then follow the release’s node guide to
                pin the existing network, connect a peer, and enable mining.
              </p>
            </div>
          </div>
          <div className="module-list">
            {[
              [
                "rld-core",
                "Protocol types, ledgers, transactions, transfer proofs, and verification.",
              ],
              [
                "rld-pow / rldpow",
                "Automatic mining, signed local transfers, durable blocks, greatest-work selection, and peer synchronization.",
              ],
              [
                "rld-signer / rld-witness",
                "Isolated signing, durable authorization, state witnessing, and recovery checks.",
              ],
              [
                "rld-cli / rld-sim",
                "Command-line tools and local scenarios for multi-Zone communication.",
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
          <Note title="Use the versioned assets">
            Download the named runtime source and binary assets from the
            release. GitHub’s automatically generated source archive of the
            publication repository contains records, not the full protocol tree.
            The PoW release includes Linux x86-64 and macOS Apple Silicon
            executables, the exact source snapshot, and adoption records.
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
                Bring a concrete issue or design question to the forum. For
                vulnerability disclosure, follow SECURITY.md in the source
                archive.
              </p>
            </div>
          </div>
          <div className="hero-actions">
            <Button href={`${DOWNLOAD}/rldcoin-pow-source-v0.3.0.tar.gz`}>
              Download protocol source
            </Button>
            <Button href="https://forum.rldcoin.com/" secondary>
              Developer discussion
            </Button>
          </div>
        </div>
      </section>
      <Closing
        title="Every claim should have a record."
        href="/network"
        label="Inspect the genesis"
      />
    </>
  );
}
function Network() {
  return (
    <>
      <PageHero
        eyebrow="The network"
        title="Earth is the beginning."
        description="A permanent genesis, a published identity, and an observable first chapter. Explore what has been established and what remains ahead."
      />
      <section className="section network-section">
        <div className="container">
          <NetworkStatusPanel />
          <Note title="Permanent identity. Regional proof of work.">
            Earth began on September 22, 2026 with a retained zero-value
            history. The published PoW adoption explicitly replaces those
            consensus rules and enables mining rewards and signed local
            transfers. There is no personal allocation. One owner currently
            operates the deployment; independent participation and review remain
            ahead.
          </Note>
          <div className="section-heading genesis-heading">
            <div>
              <Eyebrow>THE GENESIS RECORD</Eyebrow>
              <h2>An identity you can inspect.</h2>
            </div>
            <p>
              The public artifacts identify the permanent network. Compare the
              exact commitment and signed declaration; a live status feed is
              operator telemetry, not an independent consensus verifier.
            </p>
          </div>
          <dl className="identity-table">
            <div>
              <dt>Network</dt>
              <dd>Rldcoin-Earth</dd>
            </div>
            <div>
              <dt>Zone identifier</dt>
              <dd className="hash">{ZONE}</dd>
            </div>
            <div>
              <dt>Permanent designation</dt>
              <dd>22 September 2026, 06:52:45 UTC</dd>
            </div>
            <div>
              <dt>Genesis manifest commitment</dt>
              <dd className="hash">{MANIFEST}</dd>
            </div>
            <div>
              <dt>Genesis state root</dt>
              <dd className="hash">{GENESIS_ROOT}</dd>
            </div>
            <div>
              <dt>Current consensus</dt>
              <dd className="hash">RLD_REGIONAL_POW_V1</dd>
            </div>
          </dl>
          <p className="section-footnote">
            The manifest commitment uses the protocol’s canonical
            representation. It is different from the checksum of a downloaded
            JSON file; use SHA256SUMS to verify file bytes.
          </p>
          <div className="download-grid">
            {[
              [
                "Genesis manifest",
                "The published network manifest.",
                `${GENESIS}genesis-manifest.json`,
              ],
              [
                "Signed designation",
                "The permanent genesis declaration.",
                `${GENESIS}permanent-genesis.json`,
              ],
              [
                "Versioned release",
                "Source, executables, checksums, and records.",
                RELEASE,
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
      <section className="section soft-section">
        <div className="container two-column">
          <div>
            <Eyebrow>SUPPLY & ACTIVATION</Eyebrow>
            <h2>A fixed foundation.</h2>
            <p className="supply-number">
              100<span>billion RLD</span>
            </p>
            <p>1 RLD = 10²⁴ runlai</p>
          </div>
          <div>
            <div className="reserve-rows">
              <div>
                <strong>0</strong>
                <span>Personal allocation at genesis or adoption</span>
              </div>
              <div>
                <strong>250,000</strong>
                <span>RLD initial block subsidy</span>
              </div>
              <div>
                <strong>100</strong>
                <span>Additional blocks before rewards are spendable</span>
              </div>
            </div>
            <p className="section-footnote">
              Valid PoW blocks release RLD from the fixed unissued reserve. Each
              200,000-block era distributes half the remaining reserve. Fees go
              to miners. New regions cannot duplicate the supply.
            </p>
            <TextLink href="/faq">Understand supply and rewards</TextLink>
          </div>
        </div>
      </section>
      <Closing
        title="Established is not the same as finished."
        text="Follow the milestones from Earth genesis to independently qualified routes."
        href="/roadmap"
        label="See the roadmap"
      />
    </>
  );
}
const milestones = [
  [
    "A",
    "A permanent Earth identity",
    "Established",
    "Published genesis, retained certified history, recoverable custody, and encrypted backups. The original birth records remain immutable.",
  ],
  [
    "B–D",
    "Automatic regional mining",
    "Released · explicit PoW adoption",
    "Real SHA-256d blocks, fixed-supply rewards, mature signed transfers, durable recovery, peer synchronization, and a public node guide.",
  ],
  [
    "E",
    "Practical local payments",
    "In progress",
    "Make signing, confirmations and recovery usable in a wallet; separately qualify prefunded, noncustodial local payments with a verifiable receipt within seconds.",
  ],
  [
    "F",
    "Asynchronous regional settlement",
    "Ahead",
    "Qualify source locking, authenticated proofs, unique import, delayed receipts, source reorganizations, interrupted links, and shared supply budgets.",
  ],
  [
    "G",
    "Open and resilient operation",
    "Ongoing work",
    "Recruit independent operators and reviewers, broaden hash-power distribution, qualify long-term storage and upgrades, and eventually deploy real distant routes.",
  ],
] as const;
function Roadmap() {
  return (
    <>
      <PageHero
        eyebrow="The roadmap"
        title="A long view. Concrete steps."
        description="Build the foundation, open participation, then qualify each new capability. Progress follows evidence and dependencies, not a promised calendar."
      />
      <section className="section">
        <div className="container narrow">
          <p className="updated-label">DELIVERY STATUS / 23 SEPTEMBER 2026</p>
          <div className="roadmap">
            {milestones.map(([id, title, status, description], i) => (
              <article
                className={i < 2 ? "milestone completed" : "milestone"}
                key={id}
              >
                <div className="milestone-index">
                  {i < 2 ? <Check size={18} aria-label="Completed" /> : id}
                </div>
                <div>
                  <span className="milestone-status">
                    {id} · {status}
                  </span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  {id === "B–D" && (
                    <TextLink href="/network">
                      Inspect the permanent genesis
                    </TextLink>
                  )}
                </div>
              </article>
            ))}
          </div>
          <Note title="Several kinds of evidence">
            A model, a local process test, an independent operator exercise, and
            a physical communication route establish different things. The
            project reports them separately. Interstellar engineering can
            progress while Earth milestones are completed; value activation
            retains its own conditions.
          </Note>
        </div>
      </section>
      <Closing href="/developers" label="Explore the implementation" />
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
                {i === 1 && (
                  <TextLink href="/network">Inspect the Earth network</TextLink>
                )}
                {i === 10 && (
                  <TextLink href="/resources">Find the public records</TextLink>
                )}
              </details>
            ))}
          </div>
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
        description="Rldcoin’s long-term goal is peer-to-peer payments between future human communities across star systems. The permanent Earth network is the first step."
      />
      <section className="section">
        <div className="container editorial">
          <aside>
            <Eyebrow>THE IDEA</Eyebrow>
            <span className="editorial-symbol" aria-hidden="true">
              R<span>↗</span>
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
              A permanent beginning.
              <br />
              An unfinished system.
            </h2>
            <p>
              The Earth network’s permanent genesis was established on September
              22, 2026. It provides a lasting network identity, public records,
              and an initial operational foundation.
            </p>
            <p>
              Earth now runs regional proof of work with automatic mining and
              signed local transfers. One owner operates the launch deployment.
              Independent participation, wider hash-power distribution, and
              qualified interstellar routes require further engineering and
              evidence.
            </p>
            <h2>Built in the open.</h2>
            <p>
              The protocol source and verification artifacts are published for
              inspection. The code is licensed under Apache-2.0. Open source is
              an invitation to review; it does not replace independent security
              work.
            </p>
            <TextLink href={RELEASE}>Explore the public release</TextLink>
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
      title: "Learn the system",
      label: "01 / INTRODUCTIONS",
      items: [
        [
          "How it works",
          "Zones, local consensus, and the lifecycle of a cross-region transfer.",
          "/how-it-works",
        ],
        [
          "Protocol overview",
          "A concise English introduction to architecture, supply, and current limitations. Markdown download.",
          "/documents/rldcoin-overview.md",
        ],
        [
          "Roadmap",
          "The path from Earth mining to asynchronous regional settlement.",
          "/roadmap",
        ],
        [
          "Questions & answers",
          "Wallets, supply, earning RLD, and what is active today.",
          "/faq",
        ],
      ],
    },
    {
      title: "Inspect the evidence",
      label: "02 / PUBLIC RECORDS",
      items: [
        [
          "Permanent genesis records",
          "The original public record site, including identity and operating material.",
          GENESIS,
        ],
        [
          "Genesis manifest",
          "Machine-readable permanent network manifest.",
          `${GENESIS}genesis-manifest.json`,
        ],
        [
          "Signed permanent declaration",
          "The declaration identifying the Earth genesis.",
          `${GENESIS}permanent-genesis.json`,
        ],
        [
          "Release checksums",
          "SHA-256 checksums for the original release assets; the updated network archive has a separate checksum below.",
          `${DOWNLOAD}/SHA256SUMS`,
        ],
        [
          "PoW rule adoption",
          "Explicit PoW rule adoption, full predecessor history, and verification records.",
          "https://github.com/RunlaiDeng/rldcoin-genesis/tree/main/pow-v1",
        ],
        [
          "Live network status",
          "A readable view of the public operator status feed.",
          "/network",
        ],
      ],
    },
    {
      title: "Work with the code",
      label: "03 / SOURCE & TOOLS",
      items: [
        [
          "Run a node or enable mining",
          "Step-by-step verification, peer connection, wallet custody, and automatic mining.",
          "https://github.com/RunlaiDeng/rldcoin-genesis/blob/main/pow-v1/NODE-GUIDE.md",
        ],
        [
          "Current network records archive",
          "Genesis, adoption and public records with the api.rldcoin.com peer address.",
          `${DOWNLOAD}/rldcoin-pow-network-v1-api-rldcoin-com.tar.gz`,
        ],
        [
          "Current network archive checksum",
          "SHA-256 checksum for the archive with the dedicated API endpoint.",
          `${DOWNLOAD}/SHA256SUMS.api-rldcoin-com`,
        ],
        [
          "macOS Apple Silicon executable",
          "The regional PoW node and automatic miner for Apple Silicon.",
          `${DOWNLOAD}/rldpow-macos-arm64-v0.3.0.tar.gz`,
        ],
        [
          "Protocol source archive",
          "Full source snapshot for the regional PoW v0.3.0 release.",
          `${DOWNLOAD}/rldcoin-pow-source-v0.3.0.tar.gz`,
        ],
        [
          "Linux x86-64 executables",
          "The regional PoW node with an optional automatic miner.",
          `${DOWNLOAD}/rldpow-linux-x86_64-v0.3.0.tar.gz`,
        ],
        [
          "All release assets",
          "Versioned records, operations source, downloads, and checksums.",
          RELEASE,
        ],
        [
          "Website source",
          "The separate source repository for this public website.",
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
        description="A starting point for official introductions, public genesis records, and the source behind the system."
      />
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
            The release is an early permanent-network foundation, not a consumer
            payment product. Read the included operating and security
            documentation, verify checksums, and use isolated environments for
            development. Published archives may contain historical material; the
            network page describes the current launch scope.
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
          <p className="updated-label">LAST UPDATED / 22 SEPTEMBER 2026</p>
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
            The network page requests public status from a server-side endpoint
            on this website every 30 seconds while visible. That endpoint
            fetches the public Earth status feed. The displayed data contains
            network operation details, not visitor wallet information.
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
