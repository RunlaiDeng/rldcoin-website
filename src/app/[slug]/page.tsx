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
    case "rld":
      return <Money />;
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
        title="A local economy should not wait for another star."
        description="Rldcoin explores how one currency can move between communities that cannot stay in continuous contact."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Start with the distance</h2>
          <p>
            A community on a ship or another world needs to trade while Earth is
            unreachable. Waiting for a distant vote on every purchase would make
            ordinary commerce depend on the journey time of a message. Rldcoin’s
            paper starts with a different arrangement: give each balance one
            authoritative home and settle its payments there.
          </p>
          <h2>One currency, many local homes</h2>
          <p>
            runlai (RLD) is the sole native currency. A home, called a domain,
            maintains its accepted local validators and available balances.
            Owners authorize payments; local consensus orders them. Separate
            communities can circulate distinct funds during disconnection as
            long as their own quorums and resources remain available.
          </p>
          <p>
            Moving between homes requires surrendering the old spending right
            before a new one is installed. Copying a ledger, carrying a private
            key or relaying a message cannot create a second balance. Import
            relocates the same RLD under one common monetary identity.
          </p>
          <h2>Prepare before the long journey</h2>
          <p>
            A destination first supplies funded receiving capacity for one
            source and agreed acceptance terms. The payer can choose actual
            inputs later. Local preparation locks the exact amount in a separate
            controller, which makes one decision: cancel or release. Other local
            payments can continue while its historical execution proof is built.
          </p>
          <p>
            After release, a complete payment package travels through real
            contacts. The destination verifies it and imports or permanently
            rejects once. A recipient can spend imported RLD locally without
            sending a receipt back to the source. Unknown destinations and
            depleted receiving capacity still need setup.
          </p>
          <h2>A finite supply and explicit operating costs</h2>
          <p>
            The proposed lifetime cap is 21 million RLD, with zero spendable
            genesis and no founder, investor, treasury or validator allocation.
            Public work issues the fixed budget. Existing RLD pays payment,
            work-author, relay and archival services. Continued operation needs
            funded capacity and renewal; no finite reserve promises eternal
            service.
          </p>
          <TextLink href="/rld">Understand RLD and its issuance</TextLink>
          <h2>A construction with stated assumptions</h2>
          <p>
            Local validators, execution proofs, signing custody and available
            data each have a separate role. The paper makes those dependencies
            explicit. A shared currency does not mean every community accepts
            every other authority, and a valid proof cannot expose an unseen
            conflicting quorum certificate.
          </p>
          <Note title="Current stage">
            The current paper describes a research construction. Existing
            implementations and no-value testnets have their own scope. Monetary
            implementation, measured performance and independent security still
            need evidence. No mainnet or operational interstellar payment route
            is established by this publication.
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

function Money() {
  return (
    <>
      <PageHero
        eyebrow="RLD & issuance"
        title="One currency. A finite issuance budget."
        description="runlai (RLD) pays principal and native protocol fees. The paper fixes a 21 million lifetime cap and zero initial allocation."
      />
      <section className="section">
        <div className="container">
          <div className="progress-grid">
            <article>
              <h2>21,000,000 RLD</h2>
              <p>
                Lifetime issuance cap under the construction’s execution,
                ordering and custody assumptions.
              </p>
            </article>
            <article>
              <h2>Zero allocation</h2>
              <p>
                No spendable genesis, founder reserve, investor, treasury or
                validator allocation.
              </p>
            </article>
            <article>
              <h2>10²⁴ atomic units</h2>
              <p>
                Per RLD. Moving to another domain creates neither a wrapped
                token nor new supply.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2 id="issuance">How the budget becomes RLD</h2>
          <p>
            The budget consists of 4,096 roots, each containing 1,000,000 unique
            issuance slots. Successful Mint work consumes one eligible slot and
            pays its work author 0.005126953125 RLD. All 4,096,000,000 slots
            together sum to the cap. A slot can be exercised only once.
          </p>
          <h2>Claiming a range is different from mining it</h2>
          <p>
            Public proportional-work claims can select up to 256 unconsumed
            slots for relocation under funded receiving terms. Claiming pays no
            RLD and replaces no later Mint work. It moves only those exact
            entitlements through the same prepare, release and install-or-reject
            mechanism used for typed transfers.
          </p>
          <p>
            A stable placement grant identifies the selected range. Splitting an
            unrelated range does not invalidate that claim’s work. Moving,
            consuming or delegating a selected slot can. Every installation or
            return preserves its unique slot identity and receives a new grant;
            it never copies the budget.
          </p>
          <h2 id="mining">Public work during isolation</h2>
          <p>
            A community with an installed grant and a responsive accepted local
            quorum can admit Mint work without an existing RLD balance, stake or
            compulsory pool. The proposed profile is Argon2id with 64 MiB
            memory, three passes and one lane. Work distributes issuance; it
            does not choose a global payment history or grant validator votes.
          </p>
          <p>
            CPU participation does not establish profitability, equal access or
            ASIC resistance. Hardware advantage, bootstrap authority, bounded
            sponsored admission and censorship remain real considerations. The
            profile and its proving costs have no claimed production benchmark.
          </p>
          <h2>No promised exhaustion date</h2>
          <p>
            There is no halving, automatic difficulty retarget, tail emission or
            reissue of lost or retired RLD. Hardware progress may accelerate
            issuance. Lost grants, unavailable controllers or unreachable
            authorities can leave actual issuance below the cap. Creating a new
            domain cannot replenish it.
          </p>
          <h2 id="fees">Who pays for a payment?</h2>
          <p>
            Every owner-initiated local or cross-domain payment includes a
            positive RLD service fee and a positive share for a verifiable prior
            Mint work author, funded from exact authorized existing balances.
            The work-author share is at least one atomic unit. A funded sponsor
            may pay on an owner’s behalf. Mint itself requires no RLD admission
            fee, so first issuance has no prior-balance prerequisite.
          </p>
          <p>
            Service terms cover consensus, verification and an archival-reserve
            contribution. Cross-domain terms also bind destination and recovery
            charges before preparation. Performed preparation service remains
            paid after cancellation. Relay contracts and renewal have their own
            funded terms; receipts cannot create a subsidy.
          </p>
          <h2>Same denomination, explicit acceptance</h2>
          <p>
            Communities choose which authority families and security rules they
            accept. The paper calls these finite policies acceptance covers. Two
            balances can both be RLD while carrying different accepted exposure.
            Common denomination alone guarantees neither universal acceptance
            nor equal market value.
          </p>
          <Note title="No sale or monetary launch">
            These are the current paper’s monetary rules. This website offers no
            RLD sale, exchange, mining download or wallet connection. Existing
            test assets have no monetary value and never become mainnet assets.
          </Note>
          <div className="guide-next-links">
            <Button href="/whitepaper#3-money-with-one-authoritative-home">
              Read the monetary mechanism
            </Button>
            <Button href="/you-need-to-know" secondary>
              Acceptance and risk
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
        title="Pay nearby. Prepare to send farther."
        description="Keep local settlement local. Move an exact payment between homes through preparation, verified release and one destination decision."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2 id="local-payments">A local payment stays in its home</h2>
          <p>
            Alice authorizes exact inputs, Bob’s output, change and fees. The
            domain’s admitted validators execute the command and use Byzantine
            consensus (PBFT) to order it. Under that quorum’s stated fault
            bound, a valid certified output can be spent in the next local
            command. It waits for neither a distant vote nor mining maturity.
          </p>
          <p>
            The community needs locally homed RLD, a responsive accepted quorum
            and operating resources. An issuance grant is needed to mint, not to
            circulate existing money. A minority partition must wait rather than
            claim competing spending authority.
          </p>
          <h2 id="receiving-capacity">Arrange receiving capacity in advance</h2>
          <p>
            Bob’s destination supplies a receiving capability: a finite funded
            coupon naming one source domain, recipient policy, amount limits,
            fees, accepted authorities and data/proof bounds. It leaves Alice’s
            future inputs and future source head unspecified. Each coupon is
            usable once.
          </p>
          <p>
            Once compatible capacity reaches Alice, she can select funds later
            and send forward without a payment-specific stellar permission round
            trip. A new source, unknown destination or depleted coupon inventory
            still needs setup. Capacity is a retained obligation; local timeouts
            cannot silently free it.
          </p>
        </div>
      </section>
      <section className="section soft-section" id="payment-states">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>BETWEEN DOMAINS</Eyebrow>
              <h2>Follow the payment. Explore its outcomes.</h2>
            </div>
            <p>
              A conceptual payment under the paper’s assumptions. Import and
              rejection are alternative destination decisions.
            </p>
          </div>
          <TransferExplorer />
          <div className="prose payment-explanation">
            <h3>Preparation locks only the selected funds</h3>
            <p>
              Alice’s native ledger commits exact escrow and delegates it to an
              independent controller. Other payments continue. Any prover with
              retained witnesses can prove that historical creation while the
              ordinary ledger advances; a later head does not invalidate the
              fixed preparation.
            </p>
            <h3>Cancellation belongs before release</h3>
            <p>
              The controller makes one certified terminal decision. Canceled
              permits one local return and closes the coupon. Exported releases
              a proof-ready payment package and excludes cancellation. Original
              preparation charges remain paid. An unavailable controller can
              strand the escrow; a new native committee cannot seize it.
            </p>
            <h3>A complete package supports independent receipt</h3>
            <p>
              Bob’s domain checks execution proofs, matching quorum
              certificates, the original coupon and complete current data. It
              either imports once or permanently rejects. After import, Bob can
              spend locally without a source reply. After release, source
              recovery requires certified rejection. Silence, delay and a lost
              receipt never refund a released payment.
            </p>
            <h3>The recipient chooses acceptable exposure</h3>
            <p>
              An acceptance cover lists the authority families and rules Bob
              accepts. Execution proves the payment’s actual ancestry fits that
              policy. Amounts with exactly the same cover can coalesce. A wider
              cover needs explicit owner approval and verified inclusion; a
              narrower one needs additional ancestry evidence. Incidents can
              quarantine an entire covered portion.
            </p>
            <h3>Proofs and ordering answer different questions</h3>
            <p>
              Recursive receipts establish valid monetary execution under an
              authenticated program. PBFT separately excludes competing uses
              under its fault assumptions. A valid proof cannot reveal a hidden,
              separately valid quorum fork. Complete current data is also needed
              to make the next payment; a root or receipt alone is insufficient.
            </p>
          </div>
          <div className="guide-next-links">
            <Button href="/whitepaper#5-export-surrender-before-sending">
              Read the exact transition rules
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
  const boundaries = [
    [
      "Local finality is conditional",
      "PBFT uses admitted validators, durable locks and a stated Byzantine fault bound. A disconnected minority cannot finalize. If the accepted quorum is compromised, individually valid conflicting histories can be certified; remote silence cannot expose the hidden branch.",
    ],
    [
      "A proof needs a correct program",
      "Recursive receipts verify execution only under an authenticated RLD program and a sound proof backend. The paper names a RISC Zero reference profile, but supplies no implemented RLD guest, qualified image identity or measured proving cost. Unsupported, fake or unresolved conditional receipts must refuse.",
    ],
    [
      "Available data remains essential",
      "Recipients need full current outputs, cover definitions and authenticated access material to execute their next payment. Proof compression does not supply lost bytes. Permanent duplicate-prevention decisions and contracted audit archives retain storage and funding costs.",
    ],
    [
      "Preparation and release have different exits",
      "Before release, an authorized certified controller cancellation can return escrow once. After release, only permanent destination rejection permits recovery. A timeout, expired transport attempt, missing receipt or failed service cannot restore source spending rights.",
    ],
    [
      "Acceptance carries exposure",
      "Immutable covers summarize explicitly accepted authority families. Broader covers trade precise attribution for bounded continuation and may quarantine more funds. Broadening needs signed approval; narrowing requires additional ancestry evidence. One RLD denomination does not guarantee uniform acceptance.",
    ],
    [
      "Resources and keys are finite",
      "Coupons, controllers, signing-key schedules, archives and queues all consume funded capacity. Pending controllers retain their original quorum and keys across native handoff. Exhaustion stops new obligations. Finite reserves cannot fund indefinite storage, and an administrator cannot replace stranded authority.",
    ],
    [
      "Public work has economic limits",
      "Mining is distinct from payment ordering. CPU admission is not a profitability or ASIC-resistance guarantee. Bootstrap trust, unequal hardware, bounded admission and censorship remain. The cap’s conservation argument depends on valid execution, exclusive histories and custody.",
    ],
    [
      "Distance and permanent loss remain real",
      "Delivery requires an actual physical forward path. Recovery requires authentic rejection to travel back. Lost authority, unavailable data or a failed long-term service can strand funds. Finite insurance spends existing RLD and cannot mint compensation.",
    ],
  ];
  return (
    <>
      <PageHero
        eyebrow="Safety & limits"
        title="Know what a payment depends on."
        description="Ownership, execution, ordering, available data and physical delivery each carry separate assumptions."
      />
      <section className="section">
        <div className="container narrow prose">
          {boundaries.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <Note title="Read the stage correctly">
            No mainnet or qualified consumer payment service is established.
            Existing tests and ground candidates have no monetary value.
            Published mechanisms and conditional arguments are separate from
            executable implementation, security review and measured performance.
          </Note>
          <div className="guide-next-links">
            <Button href="/whitepaper#12-conservation-and-safety-argument">
              Read the safety argument
            </Button>
            <Button href="/network" secondary>
              Current development scope
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
        title="Build the mechanism. Make the evidence inspectable."
        description="Start with the current paper, then identify the exact implementation and assumptions your work addresses."
      />
      <section className="section">
        <div className="container narrow prose">
          <h2>Read the construction first</h2>
          <p>
            The <Link href="/whitepaper">white paper</Link> defines monetary
            state, native transitions, independent controllers, proofs and
            failure outcomes. Appendix A describes canonical objects and
            reference bounds. Its conditional arguments are the starting point
            for implementation and review, not evidence that older code already
            realizes the design.
          </p>
          <h2>Work on a named implementation</h2>
          <p>
            The <a href={REPOSITORY}>protocol repository</a> maintains node
            code, requirements and source-specific records. Follow its current
            local instructions and build guidance. Earlier candidates keep their
            own protocol identities and no-value evidence; a manuscript revision
            does not upgrade them. The <a href={TESTNET}>Earth testnet guide</a>
            concerns that separately scoped testnet.
          </p>
          <div className="guide-next-links">
            <Button href={REPOSITORY}>Protocol source</Button>
            <Button href={TESTNET} secondary>
              Testnet guide
            </Button>
          </div>
          <h2>Where implementation and review matter</h2>
          <ul>
            <li>
              Exact monetary execution, unique issuance slots and funded fees.
            </li>
            <li>
              Controller cancellation/release exclusion, durable locks and
              one-time redemption.
            </li>
            <li>
              Authenticated proof programs, complete current material and
              practical resource costs.
            </li>
            <li>
              Independent custody, succession, incident handling and archive
              recovery.
            </li>
            <li>
              Bounded discovery, durable carriage and explicitly scoped physical
              adapters.
            </li>
          </ul>
          <p>
            Report the exact source, changed behavior, assumptions and remaining
            limitations. Preserve failed observations and distinguish
            compilation from runtime evidence. Keep experiments isolated from
            valuable assets and real monetary keys.
          </p>
          <h2 id="participate">Contribute a correction or technical review</h2>
          <p>
            Use the protocol repository’s contribution workflow for code and
            mechanism review. Discuss public questions in the{" "}
            <a href={DEVELOPER_FORUM}>Nodes &amp; Development forum</a>. Website
            changes belong in the{" "}
            <a href={WEBSITE_REPOSITORY}>website repository</a> and its{" "}
            <a href={`${WEBSITE_REPOSITORY}/issues`}>issue tracker</a>. The
            author’s published contact is{" "}
            <a href="mailto:dengrunlai@gmail.com">dengrunlai@gmail.com</a>. Keep
            signing material, backups and private node state out of public
            reports.
          </p>
          <Note title="Implementation and qualification remain separate">
            Monetary adoption needs exact executable identities, independent
            analysis, durable custody and operational evidence. A successful
            build, candidate observation or published paper cannot establish all
            of these conditions.
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
        title="The design is public. Qualification remains open."
        description="Read the current construction alongside the separately scoped source and no-value network records."
      />
      <section className="section">
        <div className="container">
          <NetworkStatusPanel />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2>What the current paper specifies</h2>
          <p>
            One RLD currency and fixed issuance budget; local PBFT settlement;
            funded receiving capabilities; independent cancel-or-release
            controllers; one-time import or rejection; recursive execution
            relations; explicit acceptance covers; finite key, custody and
            archival obligations. These mechanisms form a conditional research
            construction.
          </p>
          <h2>What still needs implementation evidence</h2>
          <p>
            A complete monetary implementation needs authenticated RLD program
            and verifier identities, correct executable transitions, durable
            signing custody and complete current data. Practical proof costs,
            payment latency, sustained capacity and failure behavior require
            evidence tied to that implementation. Independent security and
            physical-route qualification remain separate work.
          </p>
          <p>
            The site publishes no measured throughput or settlement-time claim
            for this architecture. Earlier engineering targets and source-bound
            results retain their own records; they are not measurements of the
            current construction.
          </p>
          <h2>How to read existing network records</h2>
          <p>
            Existing testnets and ground candidates use separate source and
            protocol identities. Their test assets have no monetary value.
            Preserve their failures and limits when interpreting a result;
            neither their balances nor their keys migrate into a monetary
            genesis. Publishing this website changes no protocol or node
            service.
          </p>
          <h2>A future monetary launch needs its own record</h2>
          <p>
            An actual launch requires a separately authenticated genesis with
            zero initial issuance and zero allocation, fresh monetary keys and
            explicit adoption of the completed executable construction. A
            website update cannot stand in for those steps.
          </p>
          <div className="guide-next-links">
            <Button href={REPOSITORY}>Inspect protocol source</Button>
            <Button href={WHITEPAPER_RELEASE} secondary>
              Paper publication record
            </Button>
          </div>
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
      title: "Understand the design",
      items: [
        [
          "White paper",
          "The complete mechanism, assumptions, transition rules and conditional safety argument.",
          "/whitepaper",
        ],
        [
          "Payment walkthrough",
          "Local settlement, receiving capacity, cancellation, release and destination outcomes.",
          "/how-it-works",
        ],
        [
          "RLD & issuance",
          "The cap, zero allocation, public work and owner-funded service fees.",
          "/rld",
        ],
        [
          "Safety & limits",
          "Accepted authorities, proof correctness, available data and stranded-value conditions.",
          "/you-need-to-know",
        ],
      ],
    },
    {
      title: "Publication files",
      items: [
        [
          "Download PDF",
          "The current paper in a standalone document.",
          "/documents/rldcoin-whitepaper.pdf",
        ],
        [
          "Canonical Markdown",
          "The exact source text used by the online reader.",
          "/documents/rldcoin-whitepaper.md",
        ],
        [
          "Publication record",
          "Document hashes, predecessor bindings and the manuscript’s explicit scope.",
          WHITEPAPER_RELEASE,
        ],
        [
          "Mechanism overview",
          "A concise current-paper summary, including issuance, controllers, acceptance and service obligations.",
          "/documents/rldcoin-overview.md",
        ],
        [
          "Implementation scope",
          "The current publication’s boundaries and the separate status of existing no-value candidates.",
          "/documents/rldcoin-implementation-status.md",
        ],
        [
          "Research references",
          "Primary references cited by the paper; citations do not qualify the RLD construction.",
          "/whitepaper#references",
        ],
      ],
    },
    {
      title: "Source & participation",
      items: [
        [
          "Protocol source",
          "Implementation, local instructions and source-specific development records.",
          REPOSITORY,
        ],
        [
          "Earth testnet guide",
          "Guidance for the separately scoped no-value testnet.",
          TESTNET,
        ],
        [
          "Website source",
          "Pages, public assets, media notices and website build guidance.",
          WEBSITE_REPOSITORY,
        ],
        [
          "Community forum",
          "Public project discussion and technical questions.",
          "https://forum.rldcoin.com/",
        ],
      ],
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Read the mechanism. Inspect the source."
        description="Choose a plain-language guide, the full paper or the separately scoped development records."
      />
      <section className="section">
        <div className="container">
          {groups.map((group) => (
            <section className="resource-section" key={group.title}>
              <div>
                <Eyebrow>EXPLORE RLDCOIN</Eyebrow>
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
              Published documents retain their own dates and scope. The current
              manuscript’s publication record binds its exact files. Earlier
              revisions remain preserved in source history. Implementation
              results and independent qualification need their own evidence.
            </p>
            <p>Website content reviewed {CONTENT_REVIEW_DATE}.</p>
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
        title="Questions before the long journey."
        description="Local payments, RLD issuance, preparation, recovery and the current development stage."
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
            The current design does not promise anonymous payments. Recipient
            identities, current monetary data and route or timing observations
            may reveal participants. Compact execution receipts do not by
            themselves establish privacy; acceptance covers summarize exposure
            rather than provide an anonymity guarantee. Encryption cannot erase
            information already disclosed. Read{" "}
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
