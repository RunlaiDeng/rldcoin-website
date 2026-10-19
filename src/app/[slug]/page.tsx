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
        title="Local economies. Connected worlds."
        description="One native currency, independent monetary verification and prepared payments across delayed contacts."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Settle where the funds are usable</h2>
          <p>
            Locally homed RLD circulates without a distant vote. Owners
            authorize exact payments; accepted PBFT validators order competing
            spends. Reconnection does not itself replace a finalized local
            history. A ship prepares its domain and balances before departure.
          </p>
          <h2>Prepare capacity before choosing inputs</h2>
          <p>
            A destination preissues finite receiving coupons naming one source,
            recipient policy, amount limits, fees and funded processing
            capacity. The payer chooses actual inputs later. With a compatible
            coupon in hand, payment needs one forward journey and no
            payment-specific permission round trip. Unknown sources and depleted
            inventories still require setup.
          </p>
          <h2>Verify history without carrying every event</h2>
          <p>
            Recursive execution receipts summarize monetary validity; matching
            PBFT certificates establish the accepted ordering. Complete current
            class tables, exposure sets and state access data still accompany
            the payment so the recipient can spend onward independently. A proof
            cannot reveal an unseen valid fork from a compromised quorum.
          </p>
          <h2>One currency. A fixed 21 million RLD cap.</h2>
          <p>
            runlai (RLD) is the sole native payment, fee and service currency.
            One RLD equals 10^24 atomic units. Genesis creates zero spendable
            RLD, with no founder, investor, treasury or validator allocation.
            Import moves existing money without wrapping or duplicating it.
          </p>
          <p>
            There are 4,096 budget roots of 1 million work slots, paying
            0.005126953125 RLD per successful Mint. Public ClaimRange work
            detaches at most 256 unconsumed slots and leaves disjoint residuals.
            Stable placement generations are separate from Mint cursors:
            subsequent mining cannot change an exported range. Claiming pays no
            reward; every slot still requires its own Mint work.
          </p>
          <p>
            Installed ranges support mining during isolation. There is no
            halving, tail emission, lost-coin replacement or promised completion
            date. Bootstrap trust, unequal hardware and censorship remain
            boundaries; fees and funded renewal must sustain operations.
          </p>
          <Note title="Research and operation are separate">
            The RLD proof program, exact cryptographic bindings, proving cost,
            custody and independent operations require implementation and
            analysis. Publication establishes no measured capacity, mainnet or
            physical interstellar service. Existing no-value code keeps its
            separate identity.
          </Note>
          <div className="guide-next-links">
            <Button href="/how-it-works">Follow a payment</Button>
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
        title="Prepare capacity. Choose locally. Send forward."
        description="Source-bound coupons leave future inputs unspecified. A proof-ready export reaches one destination decision."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Local ordering, independent validity</h2>
          <p>
            Owners authorize actual inputs, class allocations and RLD fees. PBFT
            orders operations with at most f Byzantine validators among 3f + 1.
            The monetary program checks issuance, ownership, conservation and
            unique import. Recursive execution receipts carry those checks
            forward without requiring a cold recipient to replay all mining
            events.
          </p>
          <p>
            Proof validity and exclusive ordering remain different assumptions.
            A compromised quorum can certify two individually valid branches.
            Current spend data must also be available: a proof alone is not an
            onward-spendable balance. Local latency and proving cost are not
            established by this design.
          </p>
          <TextLink href="/whitepaper#4-local-settlement-and-its-meaning">
            Read the execution and settlement model
          </TextLink>
        </div>
      </section>
      <section className="section soft-section" id="payment-states">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>THE PAYMENT</Eyebrow>
              <h2>Advance capacity. One exact export.</h2>
            </div>
            <p>
              A conceptual journey under stated assumptions, not an available
              transaction service.
            </p>
          </div>
          <TransferExplorer />
          <div className="prose payment-explanation">
            <h3>An invoice can arrive before the payer owns the inputs</h3>
            <p>
              Bob sends a coupon naming Alice’s source domain and committing to
              fees, acceptance and resource bounds. Alice may receive funds
              later, select inputs locally and authorize a conforming payment.
              No draft-specific stellar approval is needed. Each coupon names
              exactly one source so two domains cannot race for one slot. Unused
              release requires authorized, source-certified closure.
            </p>
            <h3>Prepare the proof before the debit</h3>
            <p>
              The source prepares the candidate execution receipt and complete
              current material, then finalizes their matching header. Local head
              conflicts retry without renewing the coupon across space. The
              destination checks the receipt, matching PBFT certificate and all
              current data, then imports or permanently rejects once. Bob can
              spend locally after import without replying to Alice.
            </p>
            <h3>Group equal risks, preserve different ones</h3>
            <p>
              Rewards from different Mint events can share one amount entry when
              their exact authority-exposure sets match. Unequal sets stay
              separate. Every consumed class is conserved through recipients,
              change and fees. Real trust exposure is never discarded, and
              distinct classes or permanent decisions can still grow.
            </p>
            <h3>Separate placement identity from mining progress</h3>
            <p>
              A generic issuance coupon does not bind a changing Mint cursor.
              Claim work names a stable allocation generation and selected
              unconsumed range. Finalization detaches it atomically; mining in
              residual ranges cannot invalidate its in-flight ticket. A local
              claim still loses if another operation consumes its selected slots
              first.
            </p>
            <p>
              Only permanent certified rejection permits source recovery.
              Silence cannot refund. Principal and positive service fees use
              RLD; funded capacity, accepted quorums, available data and actual
              physical contacts remain necessary.
            </p>
          </div>
          <div className="guide-next-links">
            <Button href="/whitepaper#12-conservation-and-safety-argument">
              Read the conservation argument
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
        title="Verify the money. Know the assumptions."
        description="Compact validity proofs, current data and exclusive ordering have distinct obligations. Advance capacity cannot eliminate authority loss or causal delay."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Proofs do not establish an unseen fork’s absence</h2>
          <p>
            Correct reference execution or a sound receipt rejects invalid
            ownership, work and amounts. Accepted PBFT authorities must still
            avoid certifying two individually valid competing histories. A
            remote hidden certificate cannot be discovered from silence.
          </p>
          <h2>A proof backend is not a completed monetary program</h2>
          <p>
            The proposed RISC Zero zkVM 3.0.6 SuccinctReceipt adapter requires
            an exact RLD guest, trusted program and verifier commitments,
            successful execution and resolved recursive assumptions. Fake,
            conditional or unsupported receipts refuse. Program correctness,
            backend soundness, Argon2 proving cost and implementation resources
            still need independent analysis; no RLD proof benchmark is claimed.
          </p>
          <h2>Compact history still needs available current data</h2>
          <p>
            Recipients must retain full current class tables, exposure sets and
            authenticated state access data before onward-spendable credit.
            Equal-risk grouping removes obligatory per-Mint components, but
            genuinely different exposures, permanent decisions and audit
            archives retain real costs. Small roots do not supply missing bytes.
          </p>
          <h2>Coupons are finite funded obligations</h2>
          <p>
            A coupon binds one source, fixed acceptance terms and bounded
            capacity. Ordinary policy changes cannot revoke a conforming unused
            coupon, and time cannot release it. Authorized source-certified
            closure prevents an export before capacity is freed. A failed source
            or destination can still strand money or unused capacity.
          </p>
          <h2>No timeout refund or unfunded replacement</h2>
          <p>
            Only certified permanent rejection allows one source recovery.
            Missing receipts can hide a completed import. Optional insurance
            spends already issued RLD under finite terms; it cannot mint a
            replacement or reverse a ticket. Different exposure classes can
            still have different acceptance and value.
          </p>
          <h2>Public work is not equal opportunity</h2>
          <p>
            ClaimRange removes discretionary beneficiary awards, not bootstrap
            trust, hardware advantage or censorship. Stable placement identity
            avoids invalidation by unrelated Mint; it does not prevent local
            conflicts or maliciously stranded ranges. The 21 million cap remains
            conditional on valid exclusive histories and proof soundness.
          </p>
          <h2>Finite keys, archives and physical contacts</h2>
          <p>
            The proposed per-height key schedule needs secure erasure, durable
            custody heads and authenticated renewal. Historical proof renewal
            must occur while predecessor assumptions remain trustworthy. Finite
            reserves cannot guarantee endless storage or create a missing
            physical route.
          </p>
          <Note title="No mainnet or qualified consumer service">
            This is a research revision. Existing test assets have no monetary
            value and never migrate into a future network. The website offers no
            token sale, wallet connection or transaction service.
          </Note>
          <div className="guide-next-links">
            <Button href="/whitepaper#12-conservation-and-safety-argument">
              Safety argument
            </Button>
            <Button
              href="/whitepaper#4-3-validity-current-data-and-ordering"
              secondary
            >
              Proof and availability boundaries
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
            and its security assumptions. The new architecture is not
            automatically implemented by existing source. Repository protocol
            identities, requirements and acceptance conditions retain their own
            scope until explicitly reconciled. A paper edit does not upgrade a
            running network.
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
        title="A new research architecture."
        description="The current paper specifies local settlement and asynchronous authority transfer. Existing implementations retain their separate profiles and no-value scope."
      />
      <section className="section">
        <div className="container">
          <NetworkStatusPanel />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2>What the paper changes</h2>
          <p>
            The paper combines local PBFT ordering with recursive execution
            receipts, advance source-bound capabilities, complete current spend
            data, exact exposure classes and stable-generation issuance ranges.
            runlai (RLD) is the sole native currency, capped at 21 million with
            zero initial allocation. Domain creation cannot create money or
            replace an unavailable authority.
          </p>
          <h2>What publication establishes</h2>
          <p>
            The paper provides a transition system, conditional conservation
            argument and fault assumptions. It is not a new running ledger, an
            implemented consensus suite, an independent security review or
            measured payment capacity. A complete executable profile still needs
            exact encodings, consensus and cryptographic selections, durable
            custody and operational verification.
          </p>
          <h2>Existing code and historical obligations</h2>
          <p>
            Earlier no-value candidates, receipts, failures and implementation
            requirements remain historical records under their own source and
            protocol identities. This architecture does not adopt their
            evidence, migrate their value or silently change their rules.
            Repository guidance must be reconciled explicitly before an
            implementation targets the new design.
          </p>
          <TextLink href={REPOSITORY}>Inspect development source</TextLink>
          <p>
            <TextLink href={WHITEPAPER_RELEASE}>
              Read the current publication record
            </TextLink>
          </p>
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
          "The new architecture: local settlement, exclusive spend authority, asynchronous export/import and evidence-dependent recovery.",
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
            <Link href="/whitepaper#14-capacity-archives-and-failure-bounds">
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
