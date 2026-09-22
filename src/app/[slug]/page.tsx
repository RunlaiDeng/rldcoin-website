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
      text: "Earth has a permanent genesis. Its initial phase runs zero-value heartbeats. Public payments, service rewards, and independent operation are later milestones.",
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
      title: "Join the work",
      text: "Discuss the design, review the code, or reproduce verification in an isolated environment. Questions and careful review are useful contributions today.",
      href: "https://forum.rldcoin.com/",
      label: "Visit the community",
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
            The permanent Earth network is established. Payments and rewards are
            not enabled, and there is no public payment-ready wallet or token
            sale on this website.
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
            development tools, and the permanent network does not accept value
            transfers. This website never asks you to connect a wallet or enter
            a private key.
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
              Payment support and service rewards require explicit later
              milestones. Follow the official records to see what has actually
              been enabled.
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
        description="A transfer system for places that cannot share a single, uninterrupted conversation. These are design scenarios, not active services."
      />
      <section className="section">
        <div className="container application-grid">
          {[
            {
              icon: Globe2,
              title: "Communities on Earth",
              label: "01 / THE FOUNDATION",
              text: "Begin with verifiable local transfers, ownership, recovery, and continuity. Build the operational confidence needed for wider participation.",
              foot: "Current deployment: permanent genesis; payments not enabled.",
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
                    "# From the published source archive\n# Requires the pinned Rust toolchain\n\ncargo build --locked --release \\\n  -p rld-node -p rld-signer \\\n  -p rld-witness -p rld-cli\n\ncargo test --locked --workspace"
                  }
                </code>
              </pre>
              <p>
                These commands build and test locally. They do not authorize a
                permanent launch or enable payments.
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
                "rld-node",
                "Persistent Zone state, read APIs, synchronization, and recovery.",
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
            The initial binary bundle is Linux x86-64; later operating revisions
            are recorded separately.
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
            <Button href={`${DOWNLOAD}/rldcoin-runtime-source-445e27b.tar.gz`}>
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
          <Note title="Permanent identity. Initial operating phase.">
            The Earth network launched on September 22, 2026 under the remote
            zero-value profile. It has one controlling owner across two hosts,
            no personal genesis allocation, no active rewards, and no enabled
            payments. Independent operators, independent security review, and
            hardware custody remain later work.
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
              <dt>Launch profile</dt>
              <dd className="hash">P1_REMOTE_ZERO_VALUE_V1</dd>
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
            <div
              className="reserve-bar"
              aria-label="Reserves: 1 percent startup, 9 percent continuity, 90 percent demand matching"
            >
              <i />
              <i />
              <i />
            </div>
            <div className="reserve-rows">
              <div>
                <strong>1%</strong>
                <span>Startup services</span>
              </div>
              <div>
                <strong>9%</strong>
                <span>Continuity, archiving & migration</span>
              </div>
              <div>
                <strong>90%</strong>
                <span>Verified demand matching</span>
              </div>
            </div>
            <p className="section-footnote">
              Genesis supply is held in protocol reserves. Admission work does
              not issue coins. Service rewards require the later contribution
              and activation milestones.
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
    "P0",
    "Foundation qualified",
    "Completed",
    "Candidate qualification established the source baseline, relevant verification, recovery work, and upgrade requirements.",
  ],
  [
    "P1",
    "A permanent Earth genesis",
    "Completed · remote zero-value profile",
    "Published genesis identity and artifacts, authorized operation, same-history recovery, encrypted backups, and a separate-host observer. One owner remains in control.",
  ],
  [
    "P2",
    "Independent observation",
    "Ahead",
    "External operators install on their own equipment, verify synchronization, replace peers, and recover without founder keys or accounts.",
  ],
  [
    "P3",
    "Open contribution",
    "Ahead",
    "Complete the path from verified service delivery to contribution records, bounded budgets, and eligible rewards. Admission computation alone does not earn RLD.",
  ],
  [
    "P4",
    "Transfer of authority",
    "Ahead",
    "Qualify dynamic membership, broader validation authority, independent operators and clients, and operational recovery across fault domains.",
  ],
  [
    "P5",
    "Restricted Earth payments",
    "Ahead",
    "Enable limited local value only after the applicable security, wallet, fee, monitoring, and recovery conditions have been satisfied.",
  ],
  [
    "P6",
    "Interstellar transfer engineering",
    "Ahead · work can progress alongside Earth stages",
    "Qualify asynchronous multi-Zone transfers, delays, disconnection, carried proofs, receipt handling, and long-term recovery. Each real-value route requires its own authorization and evidence.",
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
          <p className="updated-label">DELIVERY STATUS / 22 SEPTEMBER 2026</p>
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
                  {id === "P1" && (
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
        description="A peer-to-peer transfer system for humanity’s interstellar future. Starting on Earth, with the realities of distance designed in from the beginning."
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
              Rldcoin asks a practical question: how can ownership remain
              verifiable, and transfers remain coherent, when the participants
              cannot all share an immediate conversation?
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
              Today, one owner controls the launch. Payments and rewards remain
              disabled. Independent operation, broader validation authority, and
              qualified interstellar routes are milestones to be earned through
              engineering and evidence.
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
          "The evidence-led delivery stages from P0 through P6.",
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
          "SHA-256 checksums for the named release assets.",
          `${DOWNLOAD}/SHA256SUMS`,
        ],
        [
          "Operations authorization",
          "The published second operating authorization. It does not replace the original genesis.",
          `${GENESIS}operations-authorization-2.json`,
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
          "Protocol source archive",
          "Full named runtime source snapshot 445e27b, published with the genesis release.",
          `${DOWNLOAD}/rldcoin-runtime-source-445e27b.tar.gz`,
        ],
        [
          "Linux x86-64 executables",
          "The initial node, signer, witness, and command-line release bundle. For development and verification.",
          `${DOWNLOAD}/rldcoin-linux-x86_64-445e27b.tar.gz`,
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
