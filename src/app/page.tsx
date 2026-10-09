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
  "Peer-to-peer payments across delayed regions",
  "Rldcoin is a peer-to-peer payment design for humanity’s interstellar future. Learn the architecture, read the white paper and explore development source. No mainnet has launched.",
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
              "A peer-to-peer payment design across delayed regions. Development uses no-value testnets; no mainnet or physical interstellar service is qualified.",
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
            A payment design for communities separated by long or intermittent
            communication.
          </p>
          <div className="cinematic-actions">
            <Link className="cinematic-button" href="/about">
              Meet Rldcoin <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="cinematic-text-link" href="/how-it-works">
              How it works <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="cinematic-text-link" href="/whitepaper">
              Read the white paper <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="home-reality">
            No-value testnets today. No mainnet or operational interstellar
            payment route.
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
              <Eyebrow>THE DESIGN</Eyebrow>
              <h2 id="home-introduction-title">
                Local payments.
                <br />
                Connections that reach farther.
              </h2>
            </div>
            <p>
              The white paper sets out a single currency across independently
              validating regional ledgers. These are required capabilities, with
              explicit conditions for safety, delivery and continued operation.
            </p>
          </div>
          <div className="home-basics">
            {[
              {
                icon: KeyRound,
                title: "Authorized by the owner",
                text: "Payments require valid authority, mature inputs and exact accounting. Copying a record does not create a second spendable balance.",
              },
              {
                icon: Globe2,
                title: "Verified in each region",
                text: "The local-payment target is p95 ≤ 3 seconds and p99 ≤ 5 seconds under declared normal network and load, without waiting for distant regions. This is not yet demonstrated; local quorum and custody assumptions still apply.",
              },
              {
                icon: Code2,
                title: "Carried with evidence",
                text: "Neighboring nodes should discover and relay by default. The destination verifies source finality and history before a unique import becomes spendable.",
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
            Explore the payment lifecycle
          </TextLink>
        </div>
      </section>
      <section className="section soft-section home-paper">
        <div className="container two-column">
          <div>
            <Eyebrow>WHITE PAPER</Eyebrow>
            <h2>
              A payment system
              <br />
              across delayed regions.
            </h2>
            <p className="section-lead">
              The architecture, risk controls and acceptance conditions in one
              specification.
            </p>
          </div>
          <div className="prose">
            <p>
              Regional finality, conserved onward and return value, durable
              relay, key succession and archive renewal must work together.
              Communication still takes time; a transport receipt is not ledger
              acceptance.
            </p>
            <div className="guide-next-links">
              <Button href="/whitepaper">Read online</Button>
              <Button href="/documents/rldcoin-whitepaper.pdf" secondary>
                Download PDF
              </Button>
            </div>
            <p>
              <TextLink href="/you-need-to-know">
                Understand the safety boundaries
              </TextLink>
            </p>
          </div>
        </div>
      </section>
      <section className="section home-progress">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>OPEN DEVELOPMENT</Eyebrow>
              <h2>
                Inspect the work.
                <br />
                Understand its scope.
              </h2>
            </div>
            <p>
              The design, implementation and qualification are distinct. Current
              testnets and ground candidates have no monetary value.
            </p>
          </div>
          <div className="progress-grid">
            <article>
              <h3>Development status</h3>
              <p>
                No mainnet has launched. Independent operation, custody, full
                protocol acceptance and physical routes require their own
                evidence.
              </p>
              <TextLink href="/network">Network &amp; development</TextLink>
            </article>
            <article>
              <h3>Protocol source</h3>
              <p>
                Review the implementation and the repository’s own build, test
                and contribution instructions.
              </p>
              <TextLink href={REPOSITORY}>Browse the source</TextLink>
            </article>
            <article>
              <h3>Take part</h3>
              <p>
                Help with protocol review, implementation, testing or clear
                documentation. Keep experiments isolated from valuable assets.
              </p>
              <TextLink href="/developers">Developer resources</TextLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
