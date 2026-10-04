import { WhitepaperAlignment } from "@/components/whitepaper-alignment";
import { PublicEvidence } from "@/components/public-evidence";
import { ArrowUpRight } from "lucide-react";
import { Button, Eyebrow, Note, PageHero } from "@/components/ui";
import {
  pageMetadata,
  REPOSITORY,
  TESTNET,
  CURRENT_PLAN,
  GROUND_CANDIDATE,
  REGIONAL_CYCLE,
} from "@/lib/site";

export const metadata = pageMetadata(
  "Research & evidence",
  "The primary sources, implementation limits, progressive relay prototype, and open research questions behind Rldcoin white paper.",
  "/research",
);
const topics = [
  {
    n: "01",
    title: "Consensus has assumptions",
    status: "DESIGN FOUNDATION",
    text: "Safety and progress are separate claims. Regional agreement cannot promise a timely global decision through an unbounded communication gap.",
    question:
      "Which local actions remain safe when the remote source is unreachable?",
    sources: [
      [
        "FLP · Fischer, Lynch & Paterson",
        "https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf",
      ],
      [
        "Partial synchrony · Dwork, Lynch & Stockmeyer",
        "https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf",
      ],
    ],
  },
  {
    n: "02",
    title: "Transport carries bytes",
    status: "GROUND MESH PROTOTYPE",
    text: "A three-process contact-spool prototype automatically exchanges signed identities, discovers a two-hop route and resumes evidence delivery after relay interruption. Delivery, custody and ledger acceptance have different meanings; physical adapters remain open.",
    question:
      "Can both directions recover without losing evidence or exhausting storage?",
    sources: [
      [
        "Node mesh code and ground drill",
        `${REPOSITORY}/tree/main/research/2026-09-30/mesh`,
      ],
      [
        "Bundle Protocol v7 · RFC 9171",
        "https://www.rfc-editor.org/rfc/rfc9171.html",
      ],
      [
        "Bundle Protocol Security · RFC 9172",
        "https://www.rfc-editor.org/rfc/rfc9172.html",
      ],
    ],
  },
  {
    n: "03",
    title: "Distance sets a lower bound",
    status: "PHYSICAL CONSTRAINT",
    text: "Mars communication can involve tens of minutes of one-way delay and extended disruption. Messages to nearby stars take years. A protocol cannot shorten light travel time.",
    question:
      "What must a region retain and verify during years without a return message?",
    sources: [
      [
        "Mars communications · NASA",
        "https://www.nasa.gov/wp-content/uploads/2024/01/mars-communications-disruption-and-delay.pdf",
      ],
      [
        "Our nearest stellar neighbors · NASA",
        "https://science.nasa.gov/exoplanets/other-stars-other-worlds/our-nearest-celestial-neighbor-an-exotic-3-star-system/",
      ],
    ],
  },
  {
    n: "04",
    title: "Fast payment needs local protection",
    status: "CHANNEL QUALIFICATION",
    text: "The target channel requires funded local challenge protection, a non-extending deadline and incident handling for conflicting same-sequence states. Qualified restart freshness and monitoring remain necessary; a reserve cannot guarantee fee affordability or overcome censorship. A years-distant watchtower cannot meet the local deadline.",
    question:
      "Can a recipient recover the latest state and challenge an old close before the deadline?",
    sources: [
      [
        "Time-Dilation Attacks on Lightning · preprint",
        "https://arxiv.org/abs/2006.01418",
      ],
      ["Teechain · SOSP 2019", "https://arxiv.org/abs/1707.05454"],
    ],
  },
  {
    n: "05",
    title: "A transfer must conserve value",
    status: "PROTOCOL INVARIANT",
    text: "Atomic source debit and unique destination credit must preserve non-overlapping U/E/T, including selected pre-finality export debits. Rooted causal ancestry and complete descendant quarantine are mandatory. Baseline cancellation is excluded; a missing receipt cannot authorize a second spend.",
    question:
      "Can every compatible history account for spendable, escrowed, and in-transit value?",
    sources: [
      [
        "Interblockchain Communication · overview",
        "https://arxiv.org/abs/2006.15918",
      ],
      [
        "Atomic Cross-Chain Swaps · Herlihy",
        "https://arxiv.org/abs/1801.09515",
      ],
    ],
  },
  {
    n: "06",
    title: "Keys must outlast the journey",
    status: "FUTURE ADOPTION",
    text: "Long-lived evidence needs cryptographic continuity. NIST’s post-quantum signature standards inform research; they are not part of Rldcoin’s current adoption.",
    question:
      "How can authority migrate before old signatures become unsafe, without rewriting ownership?",
    sources: [
      [
        "ML-DSA · NIST FIPS 204",
        "https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.204.pdf",
      ],
      [
        "SLH-DSA · NIST FIPS 205",
        "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf",
      ],
    ],
  },
];
export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research & evidence"
        title="A longer horizon starts with harder questions."
        description="Explore the work behind white paper: distributed systems, space networking, payment safety, and the limits of the current implementation."
      >
        <div className="hero-actions">
          <Button href="/whitepaper">Read the white paper</Button>
          <Button href="/documents/rldcoin-whitepaper.pdf" secondary>
            Download the PDF
          </Button>
        </div>
      </PageHero>
      <PublicEvidence />
      <WhitepaperAlignment topic="research" />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>SELECTED PRIMARY SOURCES</Eyebrow>
              <h2>
                Ideas to examine.
                <br />
                Questions to test.
              </h2>
            </div>
            <p>
              The final white paper contains 39 references. These six reading
              paths connect selected sources to specific design questions.
              Citing a paper does not validate Rldcoin.
            </p>
          </div>
          <div className="research-grid">
            {topics.map((topic) => (
              <article className="research-card" key={topic.n}>
                <span className="progress-label">
                  {topic.n} / {topic.status}
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
                <div className="research-question">
                  <span>THE OPEN QUESTION</span>
                  <p>{topic.question}</p>
                </div>
                <ul>
                  {topic.sources.map(([title, href]) => (
                    <li key={href}>
                      <a href={href}>
                        {title}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow">
          <Eyebrow>FROM PAPERS TO QUALIFICATION</Eyebrow>
          <h2>Evidence has a scope.</h2>
          <div className="research-limits">
            <p>
              <strong>Target requirements.</strong> The final normative
              architecture, risk obligations and embedded acceptance gates
              require local autonomy, conserved onward and return value,
              recognized regional finality, default node relay and
              recipient-verifiable states. None of I1–I12 is fully qualified.
            </p>
            <p>
              <strong>Ground candidates.</strong> Public fixture ledgers
              exercise disconnected local activity, multiple-source transfers,
              cyclic returns, persistent signing, epoch handoff and conflict
              isolation. The revision 16 candidate integrates default TLS relay
              and automatic local BFT: twelve local nodes complete the value
              cycle while all Earth nodes stop during remote execution. The
              exact frozen source reproduces recipient maturity and 15
              conservation checks. These remain bounded ground results under one
              controller.
            </p>
            <p>
              <strong>Mandatory work.</strong> Sustained native relay and
              cross-region autonomous qualification, complete wallets,
              independent finality and custody, complete fault handling,
              long-term archives and cryptographic evolution remain required. A
              new mainnet needs fresh signed adoption and zero initial issuance;
              each physical route needs separate evidence.
            </p>
          </div>
          <p>
            <strong>Historical public v26 snapshot.</strong> The signed
            segmented candidate persists 1,029 ordinary-node blocks and 1,025
            signed payments, with native wallet review and exact private
            fresh-target ledger recovery. A separate process test reaches 361
            blocks with cross-region return and permanent duplicate-import
            refusal. Coverage includes 139 distinct native tests and 60 process
            tests; the long store test used byte-identical native source
            alongside 138 frozen native tests. That historical guide separately
            records its twelve-node BFT cycle and finite fault observations.
            Complete proof and archive capacities remain bounded. BFT long
            history, independent latest anchors, power-loss and signing custody
            remain open.
          </p>
          <p>
            <a href={GROUND_CANDIDATE}>
              Inspect the pinned v26 source and reports
            </a>
          </p>
          <Note title="Candidates do not inherit release qualification">
            Earlier source-refresh and storage behavior is historical. New
            candidate tests cannot certify an older release or establish
            independent operation. Use the exact source, network identity,
            parameters, fault assumptions and evidence scope for each result.
            Test assets and public fixture keys never authorize real value.
          </Note>
          <div className="hero-actions">
            <Button href={REGIONAL_CYCLE}>
              Reproduce the three-region cycle
            </Button>
            <Button href={CURRENT_PLAN} secondary>
              Read the master plan
            </Button>
            <Button
              href={`${REPOSITORY}/tree/main/research/2026-09-30`}
              secondary
            >
              Inspect the evidence & tools
            </Button>
            <Button href="/developers" secondary>
              Reproduce and contribute
            </Button>
            <Button href={TESTNET} secondary>
              Inspect testnet qualification
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
