import Link from "next/link";
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
import { InterstellarPaymentArt } from "@/components/orbit-art";
import { TransferExplorer } from "@/components/transfer-explorer";
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
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>BUILDING PEER-TO-PEER PAYMENTS</Eyebrow>
            <h1>
              Payments for
              <br />
              humanity’s
              <br />
              <span>interstellar future.</span>
            </h1>
            <p>
              Humanity will go further.
              <br />
              Payments should be able to follow.
            </p>
            <p className="hero-description">
              Rldcoin’s goal is peer-to-peer payments for humanity across star
              systems. Earth mining and local transfers come first; interstellar
              routes are not live yet.
            </p>
            <div className="hero-actions">
              <Button href="/get-started">Discover Rldcoin</Button>
              <Link className="hero-secondary" href="/how-it-works">
                How it works
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <a className="scroll-cue" href="#introduction">
              <span>
                <ArrowDown size={15} aria-hidden="true" />
              </span>
              A shared future starts here
            </a>
          </div>
          <InterstellarPaymentArt />
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
                A bigger world.
                <br />A different starting point.
              </h2>
            </div>
            <p>
              The next chapter of human connection may span more than one
              planet. We’re building the foundations for a payment system that
              respects distance, delay, and the people on either side.
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
