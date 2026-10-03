import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Globe2,
  KeyRound,
  Users,
} from "lucide-react";
import { Button, Eyebrow, TextLink } from "@/components/ui";
import { HeroVideo } from "@/components/hero-video";
import { RelayAtlasPreview } from "@/components/relay-atlas";
import { pageMetadata, SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "An interstellar peer-to-peer payment system for humanity’s future",
  "Rldcoin is building an interstellar peer-to-peer payment system for the future of humanity. Discover the vision, explore the value-free Earth testnet, and get involved.",
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
              "An interstellar peer-to-peer payment system being developed for the future of humanity.",
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
            Rldcoin is building an interstellar peer-to-peer payment system for
            the future of humanity.
          </p>
          <div className="cinematic-actions">
            <Link className="cinematic-button" href="/get-started">
              Get started with Rldcoin{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a className="cinematic-text-link" href="#what-is-rldcoin">
              What is Rldcoin? <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="home-reality">
            Research prototypes and a value-free Earth testnet today.
            Interstellar payments are a future goal.
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
              <Eyebrow>MEET RLDCOIN</Eyebrow>
              <h2 id="home-introduction-title">
                A payment network.
                <br />A bigger ambition.
              </h2>
            </div>
            <p>
              Rldcoin’s purpose is to let future human communities transfer
              value directly across star systems. Development begins on Earth,
              exploring how ownership and transfers can endure long distances
              and communication delays. Each new node should discover reachable
              neighbors and extend the path through them.
            </p>
          </div>
          <div className="home-basics">
            {[
              {
                icon: KeyRound,
                title: "Payments you authorize",
                text: "Your signing keys authorize a payment. Learning how to protect them is the first step toward controlling your funds.",
              },
              {
                icon: Code2,
                title: "Rules you can inspect",
                text: "The software and network rules are public. Developers and node operators can inspect the code and verify the ledger.",
              },
              {
                icon: Globe2,
                title: "Communities come first",
                text: "The target keeps local payments working during remote disconnection, with conserved value carried onward or returned through available contacts.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={27} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <TextLink href="/how-it-works">Discover how it works</TextLink>
          <p>
            <TextLink href="/node-network">
              Explore nodes and multi-hop relays
            </TextLink>
          </p>
        </div>
      </section>
      <section className="section home-paths" id="start">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>EXPLORE YOUR WAY</Eyebrow>
              <h2>
                Where would you
                <br />
                like to start?
              </h2>
            </div>
            <p>
              Learn the essentials, build on the open source, or join the people
              shaping the project.
            </p>
          </div>
          <div className="path-grid">
            {[
              {
                icon: BookOpen,
                n: "01",
                title: "For individuals",
                text: "Understand ownership, discover what is available today, and learn what to know before a first payment.",
                href: "/individuals",
                link: "Learn the essentials",
              },
              {
                icon: Code2,
                n: "02",
                title: "For developers",
                text: "Explore testnet source, reproduce a ground result, or contribute to the mandatory protocol requirements.",
                href: "/developers",
                link: "Start building",
              },
              {
                icon: Users,
                n: "03",
                title: "Join the discussion",
                text: "Share a reproducible result or a concrete question in Nodes & Development. Start with the participation guide.",
                href: "/developers#participate",
                link: "How to participate",
              },
            ].map(({ icon: Icon, n, title, text, href, link }) => (
              <article className="path-card" key={n}>
                <div className="path-top">
                  <Icon size={29} strokeWidth={1.4} aria-hidden="true" />
                  <span>{n}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <TextLink href={href}>{link}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section home-relay-atlas">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>THE NETWORK BEYOND A NETWORK</Eyebrow>
              <h2>
                One community.
                <br />
                Then another.
              </h2>
            </div>
            <p>
              A planet, a station, a moving habitat. Each has a local network.
              Neighboring relays could connect them into a path that grows with
              every new contact.
            </p>
          </div>
          <RelayAtlasPreview />
          <div className="atlas-section-link">
            <TextLink href="/node-network">
              Explore the interactive relay atlas
            </TextLink>
            <span>Future concept · ground prototype available</span>
          </div>
        </div>
      </section>
      <section className="section home-progress">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>STARTING HERE, LOOKING AHEAD</Eyebrow>
              <h2>
                Earth is the
                <br />
                first chapter.
              </h2>
            </div>
            <p>
              Rldcoin is early in its journey. Here is what exists today and
              what the project is working toward.
            </p>
          </div>
          <div className="progress-grid">
            <article>
              <span className="progress-label">TODAY</span>
              <h3>The Earth network</h3>
              <p>
                The existing Earth testnet uses public fixture keys and currency
                with no monetary value. It is separate from the ground
                candidates. A mainnet has not launched.
              </p>
              <TextLink href="/network">Explore the network</TextLink>
            </article>
            <article>
              <span className="progress-label">PUBLIC GROUND CANDIDATE</span>
              <h3>Reproduce revision 26</h3>
              <p>
                Inspect page-by-page payment history, reviewed wallet inputs,
                fresh-directory ledger recovery and finite network evidence.
                Long-history execution, independent operation and physical
                routes remain open.
              </p>
              <TextLink href="/developers#reproduce-v26">
                Start reproducing
              </TextLink>
            </article>
            <article>
              <span className="progress-label">THE LONG-TERM VISION</span>
              <h3>A future beyond Earth</h3>
              <p>
                Human communities may one day live in habitats, aboard
                spacecraft, and around distant stars. Rldcoin explores how
                payments could work between them.
              </p>
              <TextLink href="/applications">
                Explore the possibilities
              </TextLink>
            </article>
          </div>
        </div>
      </section>
      <section className="home-next-step">
        <div className="container">
          <div>
            <Eyebrow light>YOUR NEXT STEP</Eyebrow>
            <h2>Get to know Rldcoin.</h2>
            <p>Start with the basics. Find your place in the project.</p>
          </div>
          <Button href="/get-started" light>
            Get started
          </Button>
        </div>
      </section>
      <div className="home-further-reading">
        <div className="container">
          <p>Looking for the technical detail?</p>
          <div>
            <TextLink href="/whitepaper">Read the white paper</TextLink>
            <TextLink href="/research">Explore the research</TextLink>
          </div>
        </div>
      </div>
    </>
  );
}
