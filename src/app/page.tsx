import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Fingerprint,
  Globe2,
  KeyRound,
  Orbit,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button, Eyebrow, TextLink } from "@/components/ui";
import { TransferExplorer } from "@/components/transfer-explorer";
import { HeroVideo } from "@/components/hero-video";
import { faqs, pageMetadata, SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Building peer-to-peer payments for the interstellar future",
  "Rldcoin’s goal is peer-to-peer payments between future human communities across star systems. Earth mining and local transfers are the first step; interstellar routes are not live.",
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
              "Building peer-to-peer payments between future human communities across star systems.",
          }),
        }}
      />
      <section className="cinematic-hero" aria-labelledby="home-mission-title">
        <Image
          className="cinematic-image cinematic-earth-image"
          src="/images/earth-horizon-concept.png"
          alt="Concept image of Earth from orbit, with a small future habitat against the vastness of space"
          fill
          sizes="100vw"
          preload
        />
        <HeroVideo />
        <div className="cinematic-shade" aria-hidden="true" />
        <div className="container cinematic-hero-content">
          <p className="cinematic-kicker">A MISSION FOR HUMANITY’S FUTURE</p>
          <h1 id="home-mission-title">
            Payments for
            <br />
            humanity’s
            <br />
            <span>interstellar future.</span>
          </h1>
          <p className="cinematic-lead">
            The future may span star systems. People will need a way to exchange
            value across distance and time.
          </p>
          <div className="cinematic-actions">
            <Link className="cinematic-button" href="/about">
              Explore the mission
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="cinematic-text-link" href="/network">
              The Earth network
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="cinematic-status">
            EARTH MINING AND LOCAL TRANSFERS TODAY
            <span aria-hidden="true">/</span>
            INTERSTELLAR ROUTES ARE NOT LIVE
          </p>
        </div>
        <a className="cinematic-scroll" href="#mission">
          <span>Discover the vision</span>
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>
      <section className="mission-statement" id="mission">
        <div className="container mission-statement-inner">
          <p className="mission-number">01 / WHY WE BUILD</p>
          <h2>
            A future across the stars needs a way for people to pay each other.
          </h2>
          <p>
            Rldcoin is building the foundations for peer-to-peer payments
            between future human communities. Ownership, verifiable history, and
            communication delay shape the work from the beginning.
          </p>
          <Link href="/how-it-works">
            Understand the design
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <div className="principle-strip">
        <div className="container">
          <div>
            <KeyRound aria-hidden="true" />
            <span>
              Your keys.<strong>Your ownership.</strong>
            </span>
          </div>
          <div>
            <Globe2 aria-hidden="true" />
            <span>
              Local consensus.<strong>Independent regions.</strong>
            </span>
          </div>
          <div>
            <Radio aria-hidden="true" />
            <span>
              Across distance.<strong>Through time.</strong>
            </span>
          </div>
        </div>
      </div>
      <section className="section" id="introduction">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>MEET RLDCOIN</Eyebrow>
              <h2>
                The mission starts
                <br />
                with people.
              </h2>
            </div>
            <p>
              Understand the idea, inspect the work, and help build what comes
              next. The permanent Earth network is the first step toward a much
              longer journey.
            </p>
          </div>
          <div className="audience-grid">
            {[
              {
                icon: Users,
                number: "01",
                title: "For individuals",
                text: "Understand a future where your assets move with you, wherever life takes you.",
                href: "/individuals",
                link: "Explore ownership",
              },
              {
                icon: Code2,
                number: "02",
                title: "For developers",
                text: "Explore the protocol, inspect the evidence, and help build the foundations.",
                href: "/developers",
                link: "Start building",
              },
              {
                icon: Orbit,
                number: "03",
                title: "For a wider world",
                text: "From communities on Earth to habitats and settlements beyond it.",
                href: "/applications",
                link: "See the possibilities",
              },
            ].map(({ icon: Icon, ...card }) => (
              <Link className="audience-card" href={card.href} key={card.title}>
                <div className="card-top">
                  <Icon size={30} strokeWidth={1.4} aria-hidden="true" />
                  <span>{card.number}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="card-link">
                  {card.link}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="cinematic-chapter" aria-labelledby="horizon-title">
        <Image
          className="cinematic-image cinematic-frontier-image"
          src="/images/future-settlement-concept.png"
          alt="Concept image of two people beside a small habitat on a distant world at dawn"
          fill
          sizes="100vw"
        />
        <div
          className="cinematic-shade cinematic-chapter-shade"
          aria-hidden="true"
        />
        <div className="container cinematic-chapter-content">
          <p className="cinematic-kicker">02 / THE HORIZON</p>
          <h2 id="horizon-title">
            Wherever humanity goes,
            <br />
            value should be able to follow.
          </h2>
          <p>
            Building for this future starts on Earth. Transfers between star
            systems remain a goal, and every route will need evidence that can
            survive distance and delay.
          </p>
          <Link className="cinematic-button" href="/roadmap">
            Follow the roadmap
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <span className="cinematic-concept-note">
            FUTURE SCENARIO · CONCEPT IMAGE
          </span>
        </div>
      </section>
      <section className="architecture-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow light>DESIGNED AROUND DISTANCE</Eyebrow>
              <h2>
                Think locally.
                <br />
                Transfer beyond.
              </h2>
            </div>
            <div>
              <p>
                A single conversation cannot happen instantly across
                light-years. Rldcoin separates local confirmation from
                communication between regions, called Zones.
              </p>
              <TextLink href="/how-it-works">
                Understand the architecture
              </TextLink>
            </div>
          </div>
          <TransferExplorer />
        </div>
      </section>
      <section className="section foundations">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>PRINCIPLES THAT TRAVEL</Eyebrow>
              <h2>
                Distance changes.
                <br />
                The fundamentals don’t.
              </h2>
            </div>
            <p>
              The same asset should never be spendable in two places. Ownership,
              evidence, and a fixed supply are the foundation of every future
              route.
            </p>
          </div>
          <div className="feature-grid">
            {[
              {
                icon: KeyRound,
                title: "Ownership by authorization",
                text: "Owners control their keys. Transfers require their authorization, wherever the journey begins.",
              },
              {
                icon: Fingerprint,
                title: "Evidence before acceptance",
                text: "A destination verifies a transfer’s history and finality before making an asset spendable.",
              },
              {
                icon: ShieldCheck,
                title: "One conserved supply",
                text: "Moving between Zones changes an asset’s location. It does not multiply the supply.",
              },
              {
                icon: Radio,
                title: "Built for interrupted contact",
                text: "Explicit transfer states preserve what is known while the next message is still on its way.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div className="feature" key={title}>
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="section-footnote">
            Architecture goals guide development. Operational interstellar
            routes are future work.
          </p>
        </div>
      </section>
      <section className="earth-section">
        <div className="container earth-grid">
          <div>
            <Eyebrow>THE FIRST CHAPTER</Eyebrow>
            <h2>
              Every journey
              <br />
              starts somewhere.
            </h2>
            <p>
              Ours starts on Earth. The permanent genesis was established on
              September 22, 2026 — a published identity and a history to build
              upon.
            </p>
            <Button href="/network">Explore the Earth network</Button>
          </div>
          <div className="genesis-card">
            <div className="genesis-card-header">
              <span className="status-dot" />
              <span>PERMANENT GENESIS</span>
              <span>01</span>
            </div>
            <div className="genesis-card-main">
              <Globe2 size={54} strokeWidth={1} aria-hidden="true" />
              <h3>Earth Zone</h3>
              <p>RLDCOIN / SOL SYSTEM</p>
            </div>
            <div className="genesis-card-rows">
              <div>
                <span>Established</span>
                <strong>22 September 2026</strong>
              </div>
              <div>
                <span>Current consensus</span>
                <strong>Regional proof of work</strong>
              </div>
              <div>
                <span>Payments & rewards</span>
                <strong>Mining & local transfers</strong>
              </div>
              <div>
                <span>Controlling owners</span>
                <strong>One</strong>
              </div>
            </div>
            <Link href="/network">
              Inspect the identity & live status
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-preview">
          <div>
            <Eyebrow>A LITTLE CLARITY</Eyebrow>
            <h2>
              Good questions.
              <br />
              Clear answers.
            </h2>
            <TextLink href="/faq">All frequently asked questions</TextLink>
          </div>
          <div className="faq-list">
            {[faqs[1], faqs[2], faqs[3], faqs[8]].map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="join-star" aria-hidden="true">
            ✳
          </div>
          <Eyebrow>AN OPEN INVITATION</Eyebrow>
          <h2>
            The future is a long journey.
            <br />
            Help shape its first steps.
          </h2>
          <p>Read. Verify. Ask questions. Build with us.</p>
          <div className="hero-actions">
            <Button href="/developers">Explore the project</Button>
            <Button href="https://forum.rldcoin.com/" secondary>
              Join the conversation
            </Button>
          </div>
          <div className="join-note">
            <Check size={14} aria-hidden="true" />
            Open source · No token sale on this website
          </div>
        </div>
      </section>
    </>
  );
}
