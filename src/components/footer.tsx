import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./ui";
import {
  REPOSITORY,
  WEBSITE_REPOSITORY,
  CONTENT_REVIEW_DATE,
} from "@/lib/site";

const columns = [
  [
    "Learn",
    [
      ["About Rldcoin", "/about"],
      ["How it works", "/how-it-works"],
      ["Nodes & relays", "/node-network"],
      ["Safety & limits", "/you-need-to-know"],
      ["FAQ", "/faq"],
    ],
  ],
  [
    "Read",
    [
      ["White paper", "/whitepaper"],
      ["Download PDF", "/documents/rldcoin-whitepaper.pdf"],
      ["Documents & source", "/resources"],
      ["Network & development", "/network"],
    ],
  ],
  [
    "Contribute",
    [
      ["Develop Rldcoin", "/developers"],
      ["Protocol source", REPOSITORY],
      ["Website source", WEBSITE_REPOSITORY],
      ["Community forum", "https://forum.rldcoin.com/"],
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
              A peer-to-peer payment design
              <br />
              for humanity’s interstellar future.
            </p>
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
          <p>
            No-value testnets · No mainnet · Content reviewed{" "}
            {CONTENT_REVIEW_DATE}.
          </p>
          <Link href="/network">
            Development scope <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Rldcoin.</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/media-sources">Media sources</Link>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
