import { designTopics, routeTopics } from "@/lib/whitepaper-design";
import { Eyebrow, TextLink } from "./ui";

export function WhitepaperAlignment({ topic }: { topic: string }) {
  const topics = routeTopics[topic];
  if (!topics) return null;
  return (
    <section
      className="section soft-section"
      aria-label="Final white paper requirements"
    >
      <div className="container narrow prose">
        <Eyebrow>FINAL WHITE PAPER / TARGET REQUIREMENTS</Eyebrow>
        <p>
          These are adopted design obligations. Current ground experiments do
          not establish their complete implementation or qualification.
        </p>
        {topics.map((key) => {
          const item = designTopics[key];
          return (
            <section className="guide-chapter" id={item.id} key={key}>
              <h2>{item.title}</h2>
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          );
        })}
        <div className="guide-next-links">
          <TextLink href="/whitepaper#18-normative-architecture-and-transition-rules">
            Normative architecture
          </TextLink>
          <TextLink href="/whitepaper#19-risk-register-and-falsifiable-controls">
            Risk register
          </TextLink>
          <TextLink href="/whitepaper#20-conformance-and-authenticated-adoption">
            Acceptance gates
          </TextLink>
        </div>
      </div>
    </section>
  );
}
