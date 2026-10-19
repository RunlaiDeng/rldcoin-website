import { readFileSync } from "node:fs";
import { join } from "node:path";
import { TechnicalFigure } from "@/components/technical-figure";
import { Download } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Interstellar peer-to-peer payments white paper",
  "runlai (RLD), capped at 21 million: recursive execution receipts, advance receiving capacity, one-time import and conserved public-work issuance.",
  "/whitepaper",
);

const source = readFileSync(
  join(process.cwd(), "public/documents/rldcoin-whitepaper.md"),
  "utf8",
);
const publicationDate = source.split("\n")[5].trim().toUpperCase();
const blocks = source.trim().split(/\n\s*\n/);
const sections = blocks
  .filter((block) => block.startsWith("## "))
  .map((block) => block.slice(3).trim());
const figureHeights: Record<string, number> = {
  "authority-transfer": 404,
  "issuance-strands": 294,
};

function idFor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|https:\/\/\S+)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**"))
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      if (part.startsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
      if (part.startsWith("https://"))
        return (
          <a href={part} key={index}>
            {part}
          </a>
        );
      return part;
    });
}

export default function Whitepaper() {
  return (
    <div className="whitepaper-document">
      <section className="whitepaper-hero">
        <div className="container narrow">
          <p className="eyebrow plain">TECHNICAL PAPER · {publicationDate}</p>
          <h1>{source.split("\n")[0].replace(/^# /, "")}</h1>
          <p className="whitepaper-byline">
            Runlai Deng ·{" "}
            <a href="mailto:dengrunlai@gmail.com">dengrunlai@gmail.com</a> ·
            www.rldcoin.com
          </p>
          <div className="whitepaper-actions">
            <a className="button" href="/documents/rldcoin-whitepaper.pdf">
              <Download size={17} aria-hidden="true" /> Download PDF
            </a>
            <a href="/documents/rldcoin-whitepaper.md">Read source Markdown</a>
          </div>
          <p className="whitepaper-context">
            A payment system for separated worlds: one RLD currency, local
            settlement and prepared transfers between authoritative homes. The
            paper develops its 21 million cap, public issuance work, independent
            cancel-or-release controllers, execution proofs and explicit
            acceptance policies, together with their assumptions and limits.
          </p>
        </div>
      </section>
      <div className="container whitepaper-layout">
        <nav className="whitepaper-contents" aria-label="Paper contents">
          <span>CONTENTS</span>
          {sections.map((title) => (
            <a href={`#${idFor(title)}`} key={title}>
              {title}
            </a>
          ))}
        </nav>
        <details className="whitepaper-mobile-contents">
          <summary>Contents · {sections.length} entries</summary>
          <nav aria-label="Paper contents on mobile">
            {sections.map((title) => (
              <a href={`#${idFor(title)}`} key={title}>
                {title}
              </a>
            ))}
          </nav>
        </details>
        <article className="whitepaper-paper">
          {blocks.slice(3).map((block, index) => {
            if (block.startsWith("## ")) {
              const title = block.slice(3).trim();
              return (
                <h2 id={idFor(title)} key={index}>
                  {title}
                </h2>
              );
            }
            if (block.startsWith("![")) {
              const match = block.match(
                /^!\[(.*?)\]\(\/diagrams\/([a-z-]+)\.svg\)$/,
              );
              if (!match)
                throw new Error(`Unsupported white paper figure: ${block}`);
              const name = match[2];
              if (!figureHeights[name])
                throw new Error(`Unknown white paper figure: ${name}`);
              return (
                <TechnicalFigure
                  key={index}
                  name={name}
                  height={figureHeights[name]}
                  caption={match[1]}
                />
              );
            }
            if (block.startsWith("```text\n") && block.endsWith("\n```")) {
              return (
                <pre key={index} className="whitepaper-code">
                  <code>{block.slice(8, -4).trim()}</code>
                </pre>
              );
            }
            return <p key={index}>{inline(block.replace(/\n/g, " "))}</p>;
          })}
        </article>
      </div>
    </div>
  );
}
