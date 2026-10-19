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
  "runlai (RLD) payments with local settlement and asynchronous transfer of exclusive spend authority. Explore the interstellar architecture and its trust and recovery rules. No mainnet has launched.",
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
              "An interstellar runlai (RLD) payment architecture with local settlement and destination-bound transfer of spend authority. Research only; no mainnet or physical stellar service is qualified.",
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
            One native currency: runlai (RLD). Settle locally and carry
            certified payments between worlds through successive contacts.
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
              Pay in runlai (RLD) while distant worlds are offline. Principal
              and protocol fees use the same currency across every domain.
              Cross-domain payment first surrenders source spending authority,
              then creates one destination claim under explicit trust rules.
            </p>
          </div>
          <div className="home-basics">
            {[
              {
                icon: KeyRound,
                title: "Settle locally",
                text: "A community finalizes payments through its accepted local validator rules. Reconnection does not itself overwrite its history; quorum, key and provenance assumptions remain essential.",
              },
              {
                icon: Globe2,
                title: "One home at a time",
                text: "The source removes exported value from spendability before releasing a recipient-bound certificate. The destination records one import or one permanent rejection, preventing duplicate credit under the stated assumptions.",
              },
              {
                icon: Code2,
                title: "Interstellar carriage",
                text: "Carriers move authenticated evidence through delayed or one-way contacts. After a final import, the recipient can pay locally without a return message. Missing receipts never authorize a source refund.",
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
              The payment mechanism, authority boundaries and security
              assumptions explained together.
            </p>
          </div>
          <div className="prose">
            <p>
              Follow exclusive spend authority from source export to one-time
              import and onward payment. The paper gives a conservation argument
              and explains permanent rejection, recovery, provenance and the
              cost of value stranded between worlds.
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
              The new paper is a research architecture. Existing source,
              testnets and ground candidates have separate identities and no
              monetary value.
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
