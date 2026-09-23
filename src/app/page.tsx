import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Orbit,
} from "lucide-react";
import { Button, Eyebrow } from "@/components/ui";
import { HeroVideo } from "@/components/hero-video";
import { AmbientVideo } from "@/components/ambient-video";
import { pageMetadata, SITE } from "@/lib/site";

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
            <Link className="cinematic-text-link" href="/get-started">
              Start on Earth
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
        <AmbientVideo
          src="/videos/earth-iss-clouds.mp4"
          poster="/images/earth-iss-clouds.jpg"
        />
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
          <Link href="/applications">
            Explore future communities
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section
        className="transfer-vision"
        aria-labelledby="transfer-vision-title"
      >
        <AmbientVideo
          src="/videos/earth-iss-aurora.mp4"
          poster="/images/earth-iss-aurora.jpg"
        />
        <div className="container transfer-vision-grid">
          <div className="transfer-vision-copy">
            <p className="cinematic-kicker">02 / THE PAYMENT VISION</p>
            <h2 id="transfer-vision-title">A payment across star systems.</h2>
            <p>
              One person sends locally. A signed proof travels across the
              communication gap. A future community verifies it before value can
              be received.
            </p>
            <Link className="cinematic-button" href="/how-it-works">
              Explore the design
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div
            className="transfer-route"
            role="img"
            aria-label="Future concept: a person on Earth sends a signed payment proof across the distance to a human community in another star system, where it is verified before receipt"
          >
            <div className="transfer-route-header">
              <span>INTERSTELLAR PAYMENT / FUTURE CONCEPT</span>
              <span>NOT LIVE</span>
            </div>
            <div className="transfer-route-stages">
              <div className="transfer-route-stage">
                <span className="transfer-route-symbol">
                  <Globe2 size={43} strokeWidth={1} aria-hidden="true" />
                </span>
                <span className="transfer-route-step">01 / ORIGIN</span>
                <strong>Earth</strong>
                <span>A person signs locally</span>
              </div>
              <div className="transfer-route-distance">
                <span className="transfer-route-track" />
                <span>Signed proof crosses the delay</span>
              </div>
              <div className="transfer-route-stage">
                <span className="transfer-route-symbol">
                  <Orbit size={43} strokeWidth={1} aria-hidden="true" />
                </span>
                <span className="transfer-route-step">02 / DESTINATION</span>
                <strong>Another star system</strong>
                <span>Proof is verified before receipt</span>
              </div>
            </div>
            <p>Distance changes the timing. Evidence still has to arrive.</p>
          </div>
        </div>
      </section>
      <section className="earth-section">
        <AmbientVideo
          src="/videos/earth-iss-day.mp4"
          poster="/images/earth-iss-day.jpg"
        />
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
            <Button href="/network" light>
              Explore the Earth network
            </Button>
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
      <section className="join-section">
        <AmbientVideo
          src="/videos/mars-horizon.mp4"
          poster="/images/mars-horizon.jpg"
        />
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
