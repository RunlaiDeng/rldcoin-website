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
  "Open mining, fast local payment design and authenticated interstellar carriage. Follow payment from authorization to receipt, onward spending and delayed reconciliation. No mainnet has launched.",
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
              "A peer-to-peer payment design combining open mining, local fast states and delayed interstellar carriage. No mainnet or physical interstellar service is qualified.",
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
            Open mining. Fast local payment design. Signed payments carried
            between worlds through successive contacts.
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
              One currency, independently verified. Local interaction and
              interstellar delivery follow different clocks, while ownership,
              miner fees and conservation follow the same rules.
            </p>
          </div>
          <div className="home-basics">
            {[
              {
                icon: KeyRound,
                title: "Open mining",
                text: "Ordinary computers can validate and attempt proof of work without a founder service or compulsory pool. Participation is open; income and profitable CPU mining are not guaranteed.",
              },
              {
                icon: Globe2,
                title: "Fast local interaction",
                text: "The proposed fast layer exchanges signed claims against locked funds, with a positive miner fee for every payment. Safe enforcement and exit are essential; its speed and capacity remain design targets.",
              },
              {
                icon: Code2,
                title: "Interstellar carriage",
                text: "Relays carry the exact signed payment and verification history through one-way or delayed contacts. The recipient verifies inclusion before spending onward; a return message is optional and later reorganization remains possible.",
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
              The payment mechanism, miner incentives and security assumptions
              explained together.
            </p>
          </div>
          <div className="prose">
            <p>
              Follow a payment from Earth to a distant recipient: authorize,
              retain, relay, verify and spend onward. The paper explains offline
              participants, missing receipts, conflicting histories and why
              local speed cannot remove stellar communication delay.
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
