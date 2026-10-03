import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./ui";
import { TESTNET, REPOSITORY, WEBSITE_REPOSITORY } from "@/lib/site";

const columns = [
  [
    "Discover",
    [
      ["About Rldcoin", "/about"],
      ["How it works", "/how-it-works"],
      ["For individuals", "/individuals"],
      ["Future applications", "/applications"],
      ["White paper", "/whitepaper"],
    ],
  ],
  [
    "Resources",
    [
      ["Get started", "/get-started"],
      ["For developers", "/developers"],
      ["Research", "/research"],
      ["FAQ", "/faq"],
      ["Testnet source & evidence", TESTNET],
    ],
  ],
  [
    "The network",
    [
      ["Network & qualification", "/network"],
      ["Nodes & relays", "/node-network"],
      ["Roadmap", "/roadmap"],
      ["Protocol records", REPOSITORY],
    ],
  ],
  [
    "Participate",
    [
      ["Community forum", "https://forum.rldcoin.com/"],
      ["Reproduce public v26", "/developers#reproduce-v26"],
      ["Participation & disclosure", "/developers#participate"],
      ["Improve this website", WEBSITE_REPOSITORY],
      ["Resource library", "/resources"],
    ],
  ],
] as const;
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="Rldcoin home">
              <Logo />
            </Link>
            <p>
              Interstellar peer-to-peer payments.
              <br />
              For humanity’s future.
            </p>
            <span className="footer-coordinates">
              EARTH · SOL SYSTEM · MILKY WAY
            </span>
          </div>
          <div className="footer-columns">
            {columns.map(([title, links]) => (
              <div key={title}>
                <h2>{title}</h2>
                {links.map(([name, href]) => (
                  <Link href={href} key={name}>
                    {name}
                    {href.startsWith("https:") && (
                      <ArrowUpRight size={11} aria-hidden="true" />
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-stage">
          <span className="status-dot" />
          <p>
            Value-free testnet · New mainnet pending · Physical interstellar
            routes unqualified.
          </p>
          <Link href="/network">
            View status <ArrowRightSmall />
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Rldcoin. Open source. A shared future.</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/media-sources">Media sources</Link>
            <span>English</span>
            <span className="footer-wordmark">RLD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
function ArrowRightSmall() {
  return <span aria-hidden="true">↗</span>;
}
