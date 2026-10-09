import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Eyebrow, Note, PageHero, TextLink } from "@/components/ui";
import { TransferExplorer } from "@/components/transfer-explorer";
import { PublicEvidence } from "@/components/public-evidence";
import { NetworkStatusPanel } from "@/components/network-status";
import {
  CONTENT_REVIEW_DATE,
  DEVELOPER_FORUM,
  pages,
  pageMetadata,
  REPOSITORY,
  TESTNET,
  WEBSITE_REPOSITORY,
  WHITEPAPER_RELEASE,
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
    case "about":
      return <About />;
    case "how-it-works":
      return <HowItWorks />;
    case "you-need-to-know":
      return <Safety />;
    case "developers":
      return <Developers />;
    case "network":
      return <Network />;
    case "resources":
      return <Resources />;
    case "faq":
      return <FAQ />;
    case "privacy":
      return <Privacy />;
    case "media-sources":
      return <MediaSources />;
    default:
      notFound();
  }
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Rldcoin"
        title="Payments across delayed regions."
        description="Rldcoin is a peer-to-peer payment design for humanity’s interstellar future, beginning with development on Earth."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Why regional ledgers?</h2>
          <p>
            Future communities may be separated by years of communication delay
            or intermittent contacts. The design gives each authorized region
            its own ledger and local finality. A sufficiently connected region
            should be able to make local payments without waiting for a distant
            Earth service.
          </p>
          <p>
            Value moves between regions through authenticated source history,
            recognized finality and a unique destination import. Couriers and
            neighboring relays carry evidence; carrying a message grants no
            authority to issue or accept money.
          </p>
          <h2>One currency, conserved value</h2>
          <p>
            The white paper specifies a cap of 100 billion RLD, zero initial
            allocation and no native issuance in additional regions. Amounts are
            exact integers: 1 RLD equals 10²⁴ runlai. An onward or return
            transfer creates a new debit and import; it never releases an
            already spent source balance.
          </p>
          <h2>A specification and an open implementation</h2>
          <p>
            The <Link href="/whitepaper">white paper</Link> defines the required
            architecture, risk controls and acceptance conditions. The{" "}
            <a href={REPOSITORY}>protocol repository</a> contains development
            source. Testnets and separately scoped ground candidates have no
            monetary value. No mainnet or physical interstellar payment route
            has been qualified.
          </p>
          <Note title="A long-term objective with finite conditions">
            Continuity requires maintained cryptography, keys, archives,
            institutions and funded service. The hundred-million-year horizon is
            a purpose for successive generations, not a security lifetime or a
            guarantee that every risk can be removed.
          </Note>
          <div className="guide-next-links">
            <Button href="/how-it-works">How it works</Button>
            <Button href="/whitepaper" secondary>
              Read the white paper
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Verify locally. Carry evidence onward."
        description="The target combines owner authorization, independent regional finality and asynchronous transfers. Each stage has its own verification conditions."
      />
      <section className="section">
        <div className="container two-column">
          <div>
            <Eyebrow>01 / THE REGION</Eyebrow>
            <h2>
              A local ledger.
              <br />
              Its own finality.
            </h2>
          </div>
          <div className="prose">
            <p>
              A region, or Zone, orders and validates local payments under its
              authenticated rules. The target baseline uses independently
              operated Byzantine regional finality, with adopted validator
              membership, durable locks and reviewed epoch changes.
            </p>
            <p>
              Remote disconnection does not require unrelated local payments to
              stop. A partition inside a region can remove its required quorum;
              affected finalization and dependent imports or exports must then
              stop. Safety does not imply availability through every partition.
            </p>
            <h3>Seconds-scale local finality is a target</h3>
            <p>
              For payments within Earth, including continent-to-continent pairs,
              within a Mars region, or aboard the same spacecraft, the target
              under a declared normal network and offered load is p95 ≤ 3
              seconds and p99 ≤ 5 seconds. This has not been demonstrated. Each
              region uses its own quorum; local payments do not wait for a
              distant planet.
            </p>
            <p>
              Measure from signed transaction submission to the recipient
              independently verifying finality and a balance that can be paid
              onward. An actual second payment must verify that spendability.
              Include all valid submissions, pending ages, failures and
              completion rates, with separate Earth continent pairs, validator
              counts and load/latency classes. A percentile of successful
              payments alone is insufficient.
            </p>
            <p>
              Received, pre-confirmed and final/spendable are distinct states.
              Cross-region delivery still needs propagation, import and adopted
              destination maturity. Missing local quorum pauses finalization;
              multiple keys under one controller do not establish independent
              fault tolerance, even on a small spacecraft.
            </p>
            <TextLink href="/whitepaper#18-normative-architecture-and-transition-rules">
              Read the normative architecture
            </TextLink>
          </div>
        </div>
      </section>
      <section className="section soft-section" id="payment-states">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>02 / THE PAYMENT</Eyebrow>
              <h2>A transfer is a sequence of checks.</h2>
            </div>
            <p>
              The explorer illustrates required protocol behavior. It is not a
              transaction service or a live network observation.
            </p>
          </div>
          <TransferExplorer />
          <div className="prose payment-explanation">
            <p>
              The source consumes authorized inputs atomically. An import
              requires recognized finality for that debit and complete
              authenticated ancestry. The destination binds its own identity,
              accepts the export once and applies its adopted maturity rules.
            </p>
            <p>
              A relay receipt proves only its stated transport event. It does
              not finalize an export, credit the source or establish recipient
              spendability. Lost contact or elapsed time cannot refund value
              that a destination may already have accepted.
            </p>
            <h3>Optional cancellation is a separate proposed extension</h3>
            <p>
              Cancellation remains disabled in the baseline. An adopted
              extension would need recognized destination finality that
              permanently rejects an unimported export, followed by a unique
              source refund. An imported ID cannot also be cancelled. Refund
              outputs retain the original provenance and cancellation authority;
              silence, old non-membership evidence and transport expiry cannot
              authorize them.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <div>
            <Eyebrow>03 / THE CONTACT</Eyebrow>
            <h2>
              Reach a neighbor.
              <br />
              Then another.
            </h2>
          </div>
          <div className="prose">
            <p>
              Every normally started full network node should discover reachable
              neighbors and relay admitted evidence by default. Durable store,
              carry and forward lets a path use successive contacts even when
              the whole route is never online at once.
            </p>
            <p>
              A first contact, authenticated identity, capacity and custody
              policy are still required. The published contact-spool ground
              prototype is a separately started supplemental process. It does
              not establish native default discovery or a physical route.
            </p>
            <TextLink href="/node-network">Explore nodes and relays</TextLink>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2>What the protocol must preserve</h2>
          <ul>
            <li>Owner authority and exact checked accounting.</li>
            <li>
              One spendable location, permanent duplicate-import refusal and
              authenticated provenance through onward and return transfers.
            </li>
            <li>
              Retention and quarantine of conflicting histories and affected
              descendants; unrelated qualified activity remains separately
              scoped.
            </li>
            <li>
              Authentic recovery, key succession and cryptographic renewal
              within declared horizons, resources and funding.
            </li>
          </ul>
          <p>
            Prefunded local channels have separate challenge and watcher
            obligations. Copyable software alone cannot safely authorize
            unrestricted offline spending. Physical light-time still bounds when
            new information can arrive.
          </p>
          <Note title="Reference rules are not universal rules">
            The paper’s historical Earth proof-of-work and unanimous-checkpoint
            profile is distinct from the target baseline. Each region must
            authenticate and qualify its own exact consensus, epoch, maturity
            and operating limits. Ground fixtures do not establish complete
            acceptance.
          </Note>
          <div className="guide-next-links">
            <Button href="/whitepaper" secondary>
              Read the complete specification
            </Button>
            <Button href="/you-need-to-know" secondary>
              Safety &amp; limits
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Safety() {
  return (
    <>
      <PageHero
        eyebrow="Safety & limits"
        title="Understand the conditions before the claim."
        description="The design is conditional. Test assets, valid signatures and delivered messages do not by themselves establish a usable payment service."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>No mainnet or qualified consumer wallet</h2>
          <p>
            Current testnets and ground candidates are for development without
            monetary value. Test keys may be public. Do not fund them or use
            real secrets in fixtures. This website offers no sale, exchange,
            wallet connection or transaction form. A future mainnet needs
            separate qualification and a fresh signed zero-issuance genesis;
            test balances and keys never migrate into that authority.
          </p>
          <h2>Custody and recovery</h2>
          <p>
            Ownership depends on valid keys and an authenticated spending or
            recovery policy. A copied archive cannot authorize a spend. A stale
            restore or two copies of signing custody can produce dangerous
            conflicting actions. The target requires independently witnessed
            current state, durable signing intent and preauthorized succession
            or recovery rules.
          </p>
          <p>
            The research revision requires the complete independently witnessed
            prefix and safety floors before restored signing. A durable witness
            or equivalently qualified fencing must precede release of a new
            action and prevent two active copies of custody. A witness failure
            keeps affected signing stopped; a newer-looking local file is not
            proof of freshness.
          </p>
          <p>
            Key loss, compromise, unavailable guardians or lost archives can
            leave value unavailable. Recovery cannot be granted retroactively by
            an operator, a new genesis or a website statement. Never publish
            passwords, private keys or unredacted node and wallet data.
          </p>
          <h2>Finality and communication</h2>
          <p>
            Authorization, block inclusion, recognized finality, carriage,
            unique import and recipient maturity are distinct. A sufficiently
            connected local region can progress independently of remote contact,
            but a local group without its adopted finality resources stops
            dependent settlement.
          </p>
          <p>
            No protocol delivers information before a physical contact allows
            it. A timeout or a missing receipt cannot prove non-import and does
            not release a source debit. Permanent separation, unsupported
            ancestry or contradictory finality may leave affected value pending
            or quarantined.
          </p>
          <h2>Privacy and economic limits</h2>
          <p>
            A publicly verifiable pseudonymous ledger can expose amounts,
            provenance and route or timing metadata. Encryption protects only
            its declared scope; it does not erase disclosed information or
            guarantee anonymity. A supply cap does not guarantee purchasing
            power, liquidity or a sustainable security budget.
          </p>
          <h2>Maintenance and qualification</h2>
          <p>
            Signatures, suites and archives need finite verification horizons,
            renewal and funded preservation. Independent operation, real
            adapters and each physical route require their own evidence. Ground
            tests, a build and document publication cannot prove complete
            protocol acceptance or remove unknown future risks.
          </p>
          <p>
            Renewal must preserve original bytes, exact historical identities,
            finality locks, consumed IDs, liabilities and incident evidence.
            Verifying history is distinct from admitting a new action. Archives
            need measured full-extraction and repair duties, finite funding and
            explicit service stops. A compact root or a small model cannot
            establish those obligations.
          </p>
          <p>
            The p95 ≤ 3 second and p99 ≤ 5 second local-payment targets apply
            only to declared normal network and offered-load conditions. They
            are not demonstrated performance or a guarantee through quorum loss,
            partitions or overload. A safe pause must never appear as a final
            confirmation. Small spacecraft still require the independent
            validators and quorum of their adopted fault model.
          </p>
          <div className="guide-next-links">
            <Button href="/whitepaper#19-risk-register-and-falsifiable-controls">
              Read the risk register
            </Button>
            <Button
              href="/whitepaper#20-conformance-and-authenticated-adoption"
              secondary
            >
              Acceptance conditions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Developers() {
  return (
    <>
      <PageHero
        eyebrow="Development"
        title="Read. Review. Build."
        description="Use the specification and current repository instructions to work on isolated, no-value implementations."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Start with the specification</h2>
          <p>
            The <Link href="/whitepaper">white paper</Link> is the normative
            contract. Review the architecture, operational risks and acceptance
            conditions together. Implementation gaps belong in development
            records; changing code cannot silently weaken the specification.
          </p>
          <h2>Protocol and node source</h2>
          <p>
            Build and test instructions belong to the{" "}
            <a href={REPOSITORY}>protocol repository</a>. Follow its current
            README and documented commands for the selected source and platform.
            Use the <a href={TESTNET}>Earth testnet guide</a> for the separately
            scoped testnet. Keep valuable assets and real signing keys outside
            experiments.
          </p>
          <div className="guide-next-links">
            <Button href={REPOSITORY}>Protocol repository</Button>
            <Button href={TESTNET} secondary>
              Testnet guide
            </Button>
          </div>
          <h2>Contribute a change or review</h2>
          <p>
            Use the repository’s contribution workflow for implementation, tests
            and review. Explain the changed behavior, assumptions, affected
            scope and relevant verification. A prototype result must retain its
            source identity, failures and limits; it cannot certify an unchanged
            historical release or independent custody.
          </p>
          <h2 id="participate">Discussion and website corrections</h2>
          <p>
            Discuss public technical questions in the{" "}
            <a href={DEVELOPER_FORUM}>Nodes &amp; Development forum</a>. Website
            source and checks are in the{" "}
            <a href={WEBSITE_REPOSITORY}>website repository</a>; use its{" "}
            <a href={`${WEBSITE_REPOSITORY}/issues`}>issue tracker</a> for
            public corrections. The author’s published contact is{" "}
            <a href="mailto:dengrunlai@gmail.com">dengrunlai@gmail.com</a>. Do
            not post secrets or sensitive custody material in public
            discussions.
          </p>
          <Note title="Development is not release authorization">
            Independent protocol review, wallet and custody qualification,
            durable archive recovery and authenticated adoption remain required.
            No mainnet or physical interstellar route is qualified by the
            website.
          </Note>
        </div>
      </section>
    </>
  );
}

function Network() {
  return (
    <>
      <PageHero
        eyebrow="Network & development"
        title="Testnet work. Separate qualification."
        description="A dated development summary. It is not a live availability monitor, a release authorization or independent verification."
      />
      <section className="section">
        <div className="container">
          <NetworkStatusPanel />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2>What remains required</h2>
          <p>
            The specification requires owner-authorized local payments,
            independently recognized regional finality, conserved cross-region
            onward and return value, native neighbor discovery and durable
            relay. Key custody, complete provenance, wallet recovery, archive
            renewal and adversarial resource limits must compose safely.
          </p>
          <p>
            Full qualification is not established. The exact protocol must
            satisfy applicable S1–S18 and R1–R24 obligations and A–G, I1–I12,
            N1–N10 and P1–P8 acceptance conditions with independent evidence.
            Failed or missing scopes remain unqualified. A future mainnet
            requires fresh signed zero-issuance genesis and verified adoption;
            physical routes are separately scoped.
          </p>
          <p>
            The 9 October research revision adds a regional local-payment target
            of p95 ≤ 3 seconds and p99 ≤ 5 seconds under declared normal network
            and offered load, alongside cancellation, renewal, recovery,
            accounting and archive obligations. These are design requirements
            and proposed mechanisms; publication does not establish their
            implementation or independent qualification. Historical observations
            below retain their original dates and scope.
          </p>
          <p>
            At protocol commit{" "}
            <a href="https://github.com/RunlaiDeng/rldcoin/commit/01b7e0cd28cfd78194b2fdbf3612410594a4e265">
              01b7e0c
            </a>
            , 284 regression checks were reported passing, but the ordinary
            payment check failed to complete within 180 seconds. The native
            profile remains unadopted. Neither that regression result nor
            publication establishes the new final-spendability percentiles or
            readiness for use with value.
          </p>
          <TextLink href="/whitepaper#20-conformance-and-authenticated-adoption">
            Read the complete acceptance contract
          </TextLink>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <details className="historical-record">
            <summary>
              Earlier published ground observations and their limits
            </summary>
            <PublicEvidence />
          </details>
        </div>
      </section>
    </>
  );
}

function Resources() {
  const groups = [
    {
      title: "White paper",
      items: [
        [
          "Read online",
          "The research revision, including architecture, risk obligations and acceptance conditions.",
          "/whitepaper",
        ],
        [
          "Download PDF",
          "PDF of the research revision.",
          "/documents/rldcoin-whitepaper.pdf",
        ],
        [
          "Canonical Markdown",
          "The text source used by the web reader.",
          "/documents/rldcoin-whitepaper.md",
        ],
        [
          "Revision record",
          "Artifact hashes, predecessor bindings and the revision’s review and publication status.",
          WHITEPAPER_RELEASE,
        ],
      ],
    },
    {
      title: "Development",
      items: [
        [
          "Protocol source",
          "Implementation and current build, test and contribution instructions.",
          REPOSITORY,
        ],
        [
          "Earth testnet guide",
          "No-value testnet guidance, distinct from separately scoped ground candidates.",
          TESTNET,
        ],
        [
          "Website source",
          "Pages, media notices and website checks.",
          WEBSITE_REPOSITORY,
        ],
        [
          "Community forum",
          "Public project discussion.",
          "https://forum.rldcoin.com/",
        ],
      ],
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Documents and source."
        description="The specification and the real entry points for development. Publication does not establish implementation or qualification."
      />
      <section className="section">
        <div className="container">
          {groups.map((group) => (
            <section className="resource-section" key={group.title}>
              <div>
                <Eyebrow>READ THE SOURCE</Eyebrow>
                <h2>{group.title}</h2>
              </div>
              <div className="resource-list">
                {group.items.map(([title, text, href]) => (
                  <Link href={href} key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          <div className="container narrow prose">
            <p>
              Primary research references are in the{" "}
              <Link href="/whitepaper#references">
                white paper bibliography
              </Link>
              . A citation informs the design; it does not validate Rldcoin.
              Published documents retain their original dates and scope.
            </p>
            <p>
              A revision changes the design text, not an already signed genesis
              or regional adoption. The current publication is available here;
              earlier artifact bytes and receipts remain in Git history.
            </p>
            <p>
              The{" "}
              <Link href="/documents/rldcoin-implementation-status.md">
                editorial separation record
              </Link>{" "}
              retains prior dated implementation wording. It is not a current
              network status report or an acceptance certificate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions."
        description="The purpose, the target behavior and the limits of today’s development."
      />
      <section className="section">
        <div className="container narrow">
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <div className="guide-next-links">
            <Button href="/whitepaper" secondary>
              Read the specification
            </Button>
            <Button href="/you-need-to-know" secondary>
              Safety &amp; limits
            </Button>
          </div>
        </div>
      </section>
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
          <p className="updated-label">
            LAST REVIEWED / {CONTENT_REVIEW_DATE.toUpperCase()}
          </p>
          <h2>No account or wallet connection</h2>
          <p>
            This website has no account registration, payment form, wallet
            connection, or private-key input. It does not use advertising
            trackers or analytics scripts, and it does not set application
            cookies or store preferences in browser storage.
          </p>
          <h2>Public ledger privacy is a separate question</h2>
          <p>
            The final protocol design is a publicly verifiable pseudonymous
            ledger. Amounts, provenance and route/timing metadata may identify
            participants. Encryption protects only its declared scope and cannot
            erase information already disclosed or hide required verification
            and incident dependencies from validators. Anonymity and qualified
            privacy mechanisms are not offered by this website. Read{" "}
            <Link href="/whitepaper#18-normative-architecture-and-transition-rules">
              S15 in the final architecture
            </Link>
            .
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
