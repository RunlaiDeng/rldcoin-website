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
        description="One native currency, independently verified money and prepared payments across long or intermittent contacts."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Settle where the funds are usable</h2>
          <p>
            A community uses locally homed RLD without waiting for a distant
            world's vote. Owners authorize exact payments; accepted PBFT
            validators order competing spends. Reconnection does not itself
            replace a finalized local history. A ship prepares its domain and
            balances before departure.
          </p>
          <h2>Verify money before accepting it</h2>
          <p>
            Receiving nodes reconstruct the causal monetary execution, including
            issuance work, ownership, amounts, source debit and unique import. A
            signed balance or a downloaded state root cannot replace that
            verification. Exclusive ordering still relies on accepted validator
            fault assumptions: replay cannot reveal an unseen conflicting valid
            branch signed by a compromised quorum.
          </p>
          <h2>Prepare receipt before sending</h2>
          <p>
            The destination reserves an exact receiving obligation with agreed
            fees, evidence limits and retained decision capacity. The source
            verifies this permit before surrendering spendability. Complete
            evidence then travels through contacts to one import or permanent
            rejection. After import the recipient can spend locally without a
            return receipt. A new pair may need advance communication to prepare
            its permit.
          </p>
          <h2>One currency. A fixed 21 million RLD cap.</h2>
          <p>
            runlai (RLD) is the sole currency for native payments, fees and
            funded service escrows. One RLD equals 10^24 atomic units. Genesis
            creates zero spendable RLD and no founder, investor, treasury or
            validator allocation. Cross-domain transfer neither wraps RLD nor
            creates a second supply.
          </p>
          <p>
            There are 4,096 budget roots of 1 million work slots each, paying
            0.005126953125 RLD per successful Mint. Public placement work
            detaches up to 256 next slots into a prepared home and leaves a
            disjoint remainder. Each slot pays once. No private eligibility list
            or discretionary award replaces that rule; bootstrap authority,
            censorship risk and unequal hardware remain explicit.
          </p>
          <p>
            An isolated community can mine after an authenticated interval
            arrives. There is no fixed completion date, halving, tail emission
            or lost-coin replacement. Mining distributes supply and grants no
            validator vote. Funded service fees and archival renewal must
            sustain operations independently of future issuance.
          </p>
          <Note title="Research and operation are separate">
            The paper develops a mechanism under stated assumptions. Existing
            no-value implementations have separate identities. Publication does
            not demonstrate the new design's implementation, measured capacity,
            independent security or a physical interstellar service.
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
        title="Prepare. Verify. Settle."
        description="Reserve the receiving obligation before debit. Carry complete execution to one destination decision, then spend locally."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Local authority, independent monetary verification</h2>
          <p>
            Owners authorize actual inputs, recipients, component allocations
            and RLD fees. PBFT orders their operations under the accepted 3f + 1
            validator model and at most f Byzantine faults. Full replay
            separately checks the money, from work entitlements and issuance
            through each debit and credit. A quorum signature cannot make an
            invalid transition acceptable.
          </p>
          <p>
            A verified local output is usable in the next local transition.
            Neither a remote mining branch nor a stellar receipt is required. A
            minority partition waits, and threshold compromise can still produce
            conflicting valid histories: independent execution is not automatic
            trust in every new domain.
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
              <h2>Reserve receipt. Export once.</h2>
            </div>
            <p>
              A conceptual payment journey under the paper's stated assumptions.
              It is not an available transaction service.
            </p>
          </div>
          <TransferExplorer />
          <div className="prose payment-explanation">
            <h3>A receiving obligation comes first</h3>
            <p>
              Bob's destination commits to an exact draft, acceptance policy,
              fees, proof bounds and decision capacity. Alice's source verifies
              that permit before debit. A new pair may need a returning permit;
              with preparation complete, the payment itself can use one-way
              contacts. Unused capacity cannot be released until the source
              permanently closes its permission to export.
            </p>
            <h3>Full evidence, one terminal decision</h3>
            <p>
              The destination replays the supporting monetary execution and
              consumes the permit together with one import or permanent
              rejection. Duplicate delivery adds no balance. Import lets Bob pay
              locally without a reply to Alice. Only authenticated rejection
              permits one source recovery; silence cannot refund the payment.
            </p>
            <h3>Keep actual dependencies separate</h3>
            <p>
              Accepted components totaling 100 RLD need not inherit an unrelated
              1 RLD portion's history merely because a wallet shows both.
              Explicit per-component allocations preserve real dependencies,
              keep change attributable and let invoices select accepted funds.
              This reduces accidental risk mixing without guaranteeing equal
              market value.
            </p>
            <p>
              Source, destination and archive services receive explicit funded
              RLD fees. Custody receipts attest retained bytes; they grant no
              payment finality. Physical propagation, available quorums and
              preserved evidence remain necessary.
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
        description="Independent execution narrows validator trust to exclusive ordering. Preparation reduces avoidable failures; it cannot eliminate destroyed authorities or causal delay."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Execution and exclusive ordering are different</h2>
          <p>
            Complete monetary replay rejects invalid ownership, issuance or
            amounts even with quorum signatures. Accepted PBFT authorities must
            still avoid certifying two individually valid conflicting spends. An
            unseen remote fork cannot be discovered from silence. The design
            does not claim universal permissionless consensus.
          </p>
          <h2>
            Reservations are obligations, not guarantees against destruction
          </h2>
          <p>
            A destination commits to funded capacity, fees and a particular
            acceptance predicate before export. Ordinary later policy changes
            cannot revoke a conforming reservation. Destroyed quorums, missing
            archives or broken cryptographic assumptions can still stop
            progress. Unused permits also need certified closure to release
            capacity safely.
          </p>
          <h2>No automatic refund or unfunded replacement</h2>
          <p>
            Only permanent destination rejection permits source recovery. A
            missing return receipt may hide an already completed import, so
            elapsed time cannot restore the old balance. Optional insurance
            spends separately funded RLD under explicit finite terms; it neither
            mints replacement money nor reverses a ticket.
          </p>
          <h2>One denomination, separately attributable risks</h2>
          <p>
            Component allocations prevent unrelated funds automatically sharing
            every dependency through merging. Real authority histories remain,
            and acceptance or price may differ. Incidents can suspend acceptance
            of dependent components; they do not make distant losses vanish or
            erase unrelated settled histories.
          </p>
          <h2>Open placement is not equal opportunity</h2>
          <p>
            Public ClaimRange rules remove discretionary beneficiary selection
            from valid placement. The initial D_0 quorum is still a bootstrap
            dependency, and hardware advantage or censorship can concentrate
            issuance. The 21 million cap applies to valid exclusive histories;
            it is not protection against every accepted quorum failure.
          </p>
          <h2>Finite keys, funded archives and real contacts</h2>
          <p>
            The proposed per-height key schedule depends on secure erasure,
            current custody heads and authenticated renewal before exhaustion.
            Ordinary disk deletion or old secret backups do not prove these
            conditions. Full replay and permanent decisions have continuing
            storage costs. Finite reserves and cryptographic profiles cannot
            guarantee endless service or create a missing physical route.
          </p>
          <Note title="No mainnet or qualified consumer service">
            The paper is research. Existing test assets have no monetary value
            and never migrate into a new network. This website offers no token
            sale, wallet connection or transaction service. New mechanisms
            require independent analysis and implementation qualification.
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
            The paper combines local PBFT ordering with independently replayed
            money, reserved receiving obligations, one-time import or rejection,
            separate dependency components and public placement of disjoint work
            entitlements. runlai (RLD) is the sole native currency, capped at 21
            million with zero initial allocation. Domain creation cannot create
            money or replace an unavailable authority.
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
