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
        description="A payment architecture for communities separated by long or intermittent contact. Each spendable output has one authoritative home."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Settle where the funds are usable</h2>
          <p>
            A community should not need a distant world's approval for every
            purchase. The paper places conflict resolution in explicit local
            domains. Under their accepted validator fault assumptions, local
            payments finalize without waiting for a stellar round trip.
          </p>
          <p>
            To pay another domain, an owner first surrenders local spendability.
            A certificate binds that exported amount to one destination and one
            recipient. The destination records one import or one permanent
            rejection; only verified rejection can authorize source recovery.
          </p>
          <h2>A payment protocol with explicit trust</h2>
          <p>
            Users control their spending keys. Communities can create domains,
            and people choose which authority histories to accept for RLD. A
            domain's signatures are meaningful only under its declared security
            model. Open discovery does not automatically make a new committee
            trustworthy.
          </p>
          <h2>One native currency: runlai (RLD)</h2>
          <p>
            All native payments and protocol fees use runlai (RLD). One RLD
            equals 10^24 atomic runlai units. Every domain binds the same
            authenticated currency identity and monetary rules. Cross-domain
            transfers relocate existing RLD; they do not mint another supply or
            replace it with a wrapped or domain-issued token.
          </p>
          <p>
            The proposed lifetime cap is 21 million RLD, with zero spendable
            genesis supply and no founder allocation. All issuance uses 4,096
            conserved public-work strands, each with 1 million slots paying
            0.005126953125 RLD. Moving a whole strand preserves its remaining
            slots; creating a domain grants no issuance right.
          </p>
          <p>
            An isolated community can mine after an authenticated strand
            arrives. Initial strand placement is discretionary quorum
            governance, so the design does not promise equal allocation to every
            settlement. There is no fixed completion date, halving, tail
            emission or lost-coin replacement. All rewards go to successful work
            authors; operators need funded service fees or other disclosed
            support.
          </p>
          <Note title="Research and operation are separate">
            The paper is a new architecture proposal. Existing no-value
            implementations and testnets have separate identities. Publication
            does not demonstrate this design's implementation, measured capacity
            or a physical interstellar service.
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
        title="One home for every spend."
        description="Settle locally. Surrender source spendability before exporting. Verify one destination decision before creating a new local balance."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Local settlement, without a distant vote</h2>
          <p>
            A domain is a replicated ledger with an authenticated identity and
            explicit validators. In the baseline, 3f + 1 validators tolerate at
            most f Byzantine validators; finalization uses the selected
            consensus protocol's commit proof from at least 2f + 1. A few
            signatures on an arbitrary root are not enough.
          </p>
          <p>
            Owners authorize exact inputs, recipients, amounts and fees. The
            domain resolves competing spends and finalizes an output the
            recipient can use in a subsequent local transaction. There is no
            global greatest-work branch that automatically overwrites settled
            local history after reconnection.
          </p>
          <p>
            This guarantee is conditional on accepted domain histories, secure
            keys and durable state. A minority partition waits. A lone surviving
            machine cannot grant itself a replacement quorum or recreate stopped
            funds.
          </p>
          <TextLink href="/whitepaper#4-local-settlement-and-its-meaning">
            Read the local settlement model
          </TextLink>
        </div>
      </section>
      <section className="section soft-section" id="payment-states">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>THE PAYMENT</Eyebrow>
              <h2>Export once. Import once.</h2>
            </div>
            <p>
              A conceptual payment journey under the paper's stated assumptions.
              It is not an available transaction service.
            </p>
          </div>
          <TransferExplorer />
          <div className="prose payment-explanation">
            <p>
              Alice's source domain consumes her inputs and finalizes an export
              bound to Bob's destination, key and amount. Alice and Bob may be
              offline while carriers deliver the certificate and its
              authenticated authority material.
            </p>
            <p>
              Bob's destination verifies the source, exact ticket, provenance
              and permanent decision map. It atomically records the import and
              creates Bob's output. Bob can then pay locally without sending a
              message back to Alice's world.
            </p>
            <TextLink href="/whitepaper#8-an-interstellar-payment-and-local-autonomy">
              Read the interstellar example
            </TextLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose">
          <h2>Recovery needs evidence</h2>
          <p>
            The destination can finalize either import or rejection for the same
            ticket. A permanent rejection forbids later import. Only its
            authenticated proof permits the source to recover the exported value
            once, under the owner's bound recovery rule.
          </p>
          <p>
            A missing receipt, full queue or transport timeout does not prove
            rejection. If the destination never becomes available, exported
            value can remain stranded. The paper chooses to preserve exclusivity
            rather than silently create another balance.
          </p>
          <TextLink href="/whitepaper#7-rejection-cancellation-and-stranded-value">
            Read rejection and recovery
          </TextLink>
          <h2>Trust travels with value</h2>
          <p>
            An output retains the authority histories on which its backing
            depends. Passing value through a reputable domain cannot erase
            earlier risk. A wallet should distinguish spendable funds, exports
            in flight and different provenance sets.
          </p>
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
        title="Know the authority behind a payment."
        description="Local finality has explicit validator and custody assumptions. Cross-domain delivery can be delayed indefinitely, and silence never authorizes recovery."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Accepted authority is a security assumption</h2>
          <p>
            The baseline trusts a fault-bounded validator set in each relevant
            domain configuration. A threshold compromise can certify false
            state; cryptographic signatures do not repair missing backing. The
            paper does not claim universal permissionless consensus or automatic
            trust in new domains.
          </p>
          <h2>Finality preserves a valid local prefix</h2>
          <p>
            Inter-domain isolation or reconnection does not itself reverse local
            settlement. This property depends on correct consensus,
            authenticated handoff, secure historical keys and retained import
            decisions. A conflicting final certificate is a security incident,
            not a reason to accept both balances.
          </p>
          <h2>Exported funds can be unavailable</h2>
          <p>
            The source cannot spend an exported amount. Import needs a working
            destination quorum; recovery needs certified rejection from that
            same destination. Permanent loss of the authority or evidence can
            strand the value. There is no guaranteed timer-based refund or
            emergency administrative replacement.
          </p>
          <h2>One currency, explicit authority risks</h2>
          <p>
            RLD is the sole native currency, but authority histories still carry
            different risks. The protocol conserves RLD under its assumptions;
            it does not guarantee a price, bound an entire economy's losses or
            insure every payment. Privacy is not supplied by a transparent
            certificate.
          </p>
          <h2>Keys, archives and real contacts remain necessary</h2>
          <p>
            Ordinary key rotation does not protect old signatures after
            compromise. Long journeys need a declared cryptographic horizon,
            authenticated succession and recoverable permanent decision state.
            No finite profile guarantees endless operation or an unavailable
            physical route.
          </p>
          <Note title="No mainnet or qualified consumer service">
            The new paper is research. Existing test assets have no monetary
            value and never migrate into a new network. This website offers no
            token sale, wallet connection or transaction service.
          </Note>
          <div className="guide-next-links">
            <Button href="/whitepaper#12-conservation-and-safety-argument">
              Safety argument
            </Button>
            <Button
              href="/whitepaper#13-configuration-keys-and-long-journeys"
              secondary
            >
              Keys and succession
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
            The owner-authorized redesign replaces a globally competing work
            history with explicit local finality domains, unique
            destination-bound exports, permanent import-or-reject decisions and
            evidence-dependent recovery. runlai (RLD) is the sole native payment
            and fee currency. Domains cannot issue their own substitutes or mint
            RLD merely by joining the network.
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
