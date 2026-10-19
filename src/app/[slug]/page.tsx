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
          <h2>Why independent local validation?</h2>
          <p>
            Future communities may be separated by years of communication delay
            or intermittent contacts. Each capable full node validates its own
            view of one currency and can attempt mining without a distant Earth
            service or local committee. Payments remain conditional on that
            history continuing to win cumulative-work selection.
          </p>
          <p>
            Signed transactions and complete history travel through available
            contacts. Recipients validate them independently. Reconnection can
            reverse a losing branch; couriers and relays cannot issue money or
            turn a custody receipt into ledger acceptance.
          </p>
          <h2>One currency, conserved value</h2>
          <p>
            The white paper specifies a cap of 100 billion RLD, zero initial
            allocation. Locations receive no separate minting allocation.
            Amounts are exact integers: 1 RLD equals 10²⁴ runlai. Onward and
            return payments spend valid outputs on the selected history.
            Competing branch balances are never added together.
          </p>
          <h2>A standalone paper and an open implementation</h2>
          <p>
            The <Link href="/whitepaper">white paper</Link> explains the
            mechanisms, monetary rules and security assumptions without relying
            on repository documents. Its interstellar lifecycle covers offline
            parties, one-way relay, independent receipt, onward spending and
            reconciliation. The <a href={REPOSITORY}>protocol repository</a>{" "}
            contains development source. Testnets and separately scoped ground
            candidates have no monetary value. No mainnet or physical
            interstellar payment route has been qualified.
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
        title="Mine locally. Verify every payment."
        description="Open mining selects history. Funded fast states serve connected peers. Authenticated carriage moves ordinary payments between distant recipients."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>One currency, independently validated histories</h2>
          <p>
            Any capable full node can attempt mining with its retained valid
            history, even when no peer is reachable. No founder machine or fixed
            committee approves ordinary blocks. Locations do not receive
            separate issuance rights.
          </p>
          <p>
            Nodes select the complete valid history with greatest cumulative
            work, using the smallest tip ID to break exact ties. Disconnected
            nodes may continue on competing branches. Reconnection can reverse
            rewards, payments and their descendants; balances from different
            branches are never added together.
          </p>
          <h3>Recovery mining has explicit limits</h3>
          <p>
            The candidate permits a low-work block after a 14400-second parent
            timestamp gap. It counts only that block's actual work and does not
            reset base difficulty. Mining remains probabilistic, reward maturity
            still applies, and there is no guaranteed four-hour or seconds-scale
            settlement deadline.
          </p>
          <TextLink href="/whitepaper#4-difficulty-and-survivor-operation">
            Read the mining and recovery rules
          </TextLink>
        </div>
      </section>
      <section className="section soft-section" id="local-fast-payments">
        <div className="container narrow prose">
          <h2>Fast locally, causal between worlds</h2>
          <p>
            The proposed local fast layer exchanges signed states against
            existing locked funds. It aims to remove a new block wait from each
            purchase, while preserving a funded positive miner fee on every
            payment. The recipient needs enforceable backing, usable liquidity
            and an independent exit if a peer disappears.
          </p>
          <p>
            This requires a separate fund and settlement construction; the
            ordinary single-owner transfer cannot enforce it by itself. Safe
            disputes and mass exit must fit the underlying chain. Seconds-scale
            local use and one hundred million completed payments a day remain
            design targets, with no achieved-performance claim.
          </p>
          <p>
            An interstellar transfer uses the ordinary delayed evidence path. It
            does not require a fast channel, a return acknowledgment or a
            continuously connected path across the stellar gap. It still needs
            physical contacts, complete evidence and valid inclusion.
          </p>
          <TextLink href="/whitepaper#6-local-fast-payments">
            Read the local fast-payment mechanism
          </TextLink>
        </div>
      </section>
      <section className="section soft-section" id="payment-states">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>THE PAYMENT</Eyebrow>
              <h2>Evidence arrives. The recipient verifies.</h2>
            </div>
            <p>
              This illustrates the candidate contract, not a transaction service
              or an observed physical route.
            </p>
          </div>
          <div className="prose payment-explanation">
            <p>
              Alice signs a payment on Earth, reserves its inputs and gives
              willing relays the exact authorization and its dependencies. She
              can then go offline. Bob can be offline too while successive
              contacts carry the evidence toward him.
            </p>
          </div>
          <TransferExplorer />
          <div className="prose payment-explanation">
            <p>
              Owners sign exact inputs, outputs, fees and expiry. A recipient
              verifies complete history and selected-chain inclusion before
              reporting a payment. A transfer output can be spent in a later
              block; a reward created at height h first becomes eligible in
              block h+100.
            </p>
            <p>
              If the selected history has not included Alice&apos;s transfer but
              preserves its valid inputs, Bob can submit her unchanged
              authorization for mining. After valid inclusion, he can sign an
              onward payment to Carol without contacting Alice or Earth. Carol
              independently checks that payment and its full history.
            </p>
            <p>
              Relays retain and forward authenticated bytes. A destination
              receipt proves custody of those bytes, not ledger acceptance.
              Silence and elapsed time never refund a transaction. A valid
              winning history may later remove a payment that was previously
              included and spent onward.
            </p>
            <TextLink href="/whitepaper#10-interstellar-payment-lifecycle">
              Follow the complete interstellar payment lifecycle
            </TextLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose">
          <h2>What remains necessary</h2>
          <p>
            Exact accounting, complete validation, durable wallet intent, honest
            rollback displays and bounded storage must compose through the
            ordinary node lifecycle. The candidate does not include
            independently final regional ledgers, bridge mints, an enforced fast
            layer or an administrator recovery key.
          </p>
          <p>
            Cryptography, archives, independent security review and physical
            contacts require finite, separately supported qualification. A
            single surviving node cannot communicate with a destroyed receiver
            or recover permanently lost keys and history.
          </p>
          <div className="guide-next-links">
            <Button href="/whitepaper" secondary>
              Read the paper
            </Button>
            <Button href="/you-need-to-know" secondary>
              Safety and limits
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
        title="Know what a payment means."
        description="The candidate prioritizes continued local operation and permits rollback. A confirmation is an observation of one selected history."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>No monetary deployment is qualified here</h2>
          <p>
            Test networks and separate ground candidates have no monetary value.
            Specification publication, a build or a local experiment does not
            authorize mainnet or migrate test balances and keys.
          </p>
          <h2>Local operation and distant certainty are different</h2>
          <p>
            A capable full node can attempt mining without peers. It cannot know
            that no stronger history exists elsewhere. Payments, rewards and
            subsequent spends can be reversed after reconnection. No fixed
            confirmation count, relay receipt or maturity boundary provides
            irreversible global settlement.
          </p>
          <h2>Keys and recovery remain the owner's responsibility</h2>
          <p>
            Direct-key loss has no protocol reset. Durable intent and
            reservations reduce accidental conflicting signatures; copied keys
            and stale whole-wallet backups do not prove exclusive custody or
            freshness. Uncertain restore must be disclosed before any explicitly
            authorized new signing.
          </p>
          <h2>Resources and communication are finite</h2>
          <p>
            Storage exhaustion must preserve acknowledged obligations and refuse
            unsupported new work. No protocol recreates lost data or supplies a
            missing physical link. Transparent transactions and contact metadata
            are not anonymity.
          </p>
          <h2>Maintenance and qualification</h2>
          <p>
            The current suite is not post-quantum. Long journeys need defensible
            cryptographic and archival horizons, independent operators, funded
            maintenance and actual route evidence. Historical regional-finality
            experiments remain historical and do not qualify Survivor-1.
          </p>
          <div className="guide-next-links">
            <Button href="/whitepaper#12-security-and-scaling-analysis">
              Threats and limitations
            </Button>
            <Button
              href="https://github.com/RunlaiDeng/rldcoin/blob/main/docs/WHITEPAPER_IMPLEMENTATION_ACCEPTANCE.md"
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
            The <Link href="/whitepaper">white paper</Link> explains the design
            and its security assumptions. Exact protocol rules, implementation
            requirements and acceptance conditions are maintained in the
            repository. Changing code cannot silently weaken those obligations.
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
            The current candidate requires open single-node mining, exact
            owner-authorized payments, cumulative-work branch selection and
            reversible wallet state. Ordinary startup must integrate
            authenticated neighbor synchronization and durable delayed relay.
          </p>
          <p>
            Full qualification is not established. The complete Survivor-1
            contract defines C01-C11, O01-O13 and T01-T22, with an explicit
            mapping of replaced historical obligations. Independent review,
            custody, long-history resources and physical routes require their
            own evidence.
          </p>
          <p>
            The current paper separates reversible base payments, a proposed
            noncustodial fast layer and asynchronous interstellar carriage.
            Local usable receipt at p95 of at most 3 seconds and p99 of at most
            5 seconds, at least 100 million completed payments per continuous 24
            hours, and a positive funded miner fee on every payment remain
            engineering obligations. They are not achieved results or
            irreversible stellar finality. Earlier ground observations retain
            their original profiles and dates.
          </p>
          <TextLink href="https://github.com/RunlaiDeng/rldcoin/blob/main/docs/WHITEPAPER_IMPLEMENTATION_ACCEPTANCE.md">
            Read the acceptance contract
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
          "The standalone mechanism paper, including the complete delayed-payment lifecycle and its security assumptions.",
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
            The candidate protocol is a publicly verifiable pseudonymous ledger.
            Amounts, provenance and route/timing metadata may identify
            participants. Encryption protects only its declared scope and cannot
            erase information already disclosed or hide required verification
            history from validating nodes. Anonymity and qualified privacy
            mechanisms are not offered by this website. Read{" "}
            <Link href="/whitepaper#12-security-and-scaling-analysis">
              the threats and limitations
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
