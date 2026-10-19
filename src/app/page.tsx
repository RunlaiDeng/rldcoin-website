import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  KeyRound,
} from "lucide-react";
import { Button, Eyebrow, TextLink } from "@/components/ui";
import { HeroVideo } from "@/components/hero-video";
import { pageMetadata, REPOSITORY, SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Interstellar peer-to-peer payments",
  "One currency for separated worlds. Explore Rldcoin’s local settlement, prepared interstellar payments and 21 million RLD issuance design.",
  "/",
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Rldcoin",
            url: SITE,
            inLanguage: "en",
            description:
              "A research construction for interstellar peer-to-peer payments in runlai (RLD), with local settlement and prepared transfers between separated communities.",
          }),
        }}
      />
      <section
        className="cinematic-hero home-horizon"
        aria-labelledby="home-mission-title"
      >
        <HeroVideo />
        <div className="cinematic-shade" aria-hidden="true" />
        <div className="container cinematic-hero-content">
          <p className="cinematic-kicker">
            RLDCOIN / FOR THE FUTURE OF HUMANITY
          </p>
          <h1 id="home-mission-title">
            Interstellar peer-to-peer payments.
            <br />
            <span>For humanity’s future.</span>
          </h1>
          <p className="cinematic-lead">
            One currency for separated worlds. Settle nearby in runlai (RLD).
            Carry verified payments farther when contact becomes possible.
          </p>
          <div className="cinematic-actions">
            <Link className="cinematic-button" href="/about">
              Meet Rldcoin <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="cinematic-text-link" href="/how-it-works">
              Follow a payment <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="cinematic-text-link" href="/whitepaper">
              Read the white paper <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="home-reality">
            Research construction · No active mainnet · Existing test assets
            have no monetary value
          </p>
        </div>
      </section>
      <section
        className="section home-introduction"
        id="what-is-rldcoin"
        aria-labelledby="home-introduction-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>THE IDEA</Eyebrow>
              <h2 id="home-introduction-title">
                A local purchase should not
                <br />
                wait for a distant world.
              </h2>
            </div>
            <p>
              Communication across space is delayed and intermittent. Rldcoin
              gives each balance one authoritative home: local communities
              settle distinct funds locally, then move exact payments between
              homes without copying the spending right.
            </p>
          </div>
          <div className="home-basics">
            {[
              {
                icon: KeyRound,
                title: "Settle where you are",
                text: "Owners authorize exact payments. An accepted local quorum orders them. Communities with locally homed funds can trade during isolation while their own quorum and resources remain available.",
              },
              {
                icon: Globe2,
                title: "Prepare to send farther",
                text: "Arrange receiving capacity before choosing future inputs. Prepare exact funds locally; an independent controller cancels or releases while other local settlement continues.",
              },
              {
                icon: Code2,
                title: "Receive, then keep trading",
                text: "A complete released payment travels through real contacts. After verification and one-time import, the recipient can spend locally without a message returning to the source.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={27} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <TextLink href="/how-it-works">
            Explore preparation, release and receipt
          </TextLink>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>RUNLAI / RLD</Eyebrow>
              <h2>
                One currency.
                <br />A finite beginning.
              </h2>
            </div>
            <p>
              Payments, fees and native services use RLD under one monetary
              identity. Moving between domains neither wraps the currency nor
              creates another supply.
            </p>
          </div>
          <div className="progress-grid">
            <article>
              <h3>21 million RLD</h3>
              <p>
                The proposed lifetime cap. Public work consumes unique issuance
                slots once; new domains cannot enlarge the budget.
              </p>
            </article>
            <article>
              <h3>Zero initial allocation</h3>
              <p>
                No spendable genesis, founder reserve, investor, treasury or
                validator allocation.
              </p>
            </article>
            <article>
              <h3>Public issuance work</h3>
              <p>
                Installed grants support local Mint work without prior RLD or a
                compulsory pool. Work distributes issuance; it does not grant
                consensus votes.
              </p>
            </article>
          </div>
          <TextLink href="/rld">Read the issuance and fee rules</TextLink>
        </div>
      </section>
      <section className="section home-paper">
        <div className="container two-column">
          <div>
            <Eyebrow>THE WHITE PAPER</Eyebrow>
            <h2>
              A mechanism for
              <br />
              the long journey.
            </h2>
            <p className="section-lead">
              Money, local authority, prepared transfers and the conditions that
              keep them meaningful.
            </p>
          </div>
          <div className="prose">
            <p>
              The paper follows a payment from owner authorization to
              independent verification and destination receipt. It explains
              finite receiving capacity, cancel-or-release controllers,
              public-work issuance, accepted authority exposure and durable
              carriage.
            </p>
            <p>
              Distance, authority failure and missing data remain explicit.
              Before release, certified cancellation can return prepared escrow.
              After release, only permanent destination rejection permits
              recovery; silence cannot refund a payment.
            </p>
            <div className="guide-next-links">
              <Button href="/whitepaper">Read online</Button>
              <Button href="/documents/rldcoin-whitepaper.pdf" secondary>
                Download PDF
              </Button>
            </div>
            <p>
              <TextLink href="/you-need-to-know">
                Understand the assumptions and limits
              </TextLink>
            </p>
          </div>
        </div>
      </section>
      <section className="section soft-section home-progress">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>OPEN DEVELOPMENT</Eyebrow>
              <h2>
                Read the design.
                <br />
                Inspect what exists.
              </h2>
            </div>
            <p>
              The current paper is a research construction. Executable
              implementation, measured performance and independent security need
              their own evidence. Existing no-value candidates keep their
              separate scope.
            </p>
          </div>
          <div className="progress-grid">
            <article>
              <h3>Development stage</h3>
              <p>
                No mainnet or operational interstellar payment route is
                established. Read the distinction between publication,
                implementation and qualification.
              </p>
              <TextLink href="/network">Network &amp; development</TextLink>
            </article>
            <article>
              <h3>Source and review</h3>
              <p>
                Inspect the node implementation and its source-specific
                requirements, limits and development records.
              </p>
              <TextLink href={REPOSITORY}>Browse protocol source</TextLink>
            </article>
            <article>
              <h3>Build with us</h3>
              <p>
                Contribute mechanism review, implementation or clear
                documentation. Tie each claim to the exact work it describes.
              </p>
              <TextLink href="/developers">Developer resources</TextLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
