import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button, Eyebrow, Note, PageHero, TextLink } from "./ui";
import { learning } from "@/lib/learning";
import { CONTENT_REVIEW_DATE, WHITEPAPER_VERSION } from "@/lib/site";

export function LearningPage({ slug }: { slug: string }) {
  const guide = learning[slug];
  if (!guide) throw new Error(`Unknown learning page: ${slug}`);
  return (
    <>
      <PageHero
        eyebrow={guide.eyebrow}
        title={guide.title}
        description={guide.description}
      />
      <section className="section guide-section">
        <div className="container guide-layout">
          <nav className="guide-contents" aria-label="On this page">
            <Eyebrow>On this page</Eyebrow>
            {guide.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
            <Link className="guide-paper-link" href="/whitepaper">
              <BookOpen size={18} aria-hidden="true" />
              White paper {WHITEPAPER_VERSION}
            </Link>
          </nav>
          <div className="guide-body">
            <p className="updated-label">
              CONTENT REVIEWED / {CONTENT_REVIEW_DATE.toUpperCase()}
            </p>
            <Note title="Current development phase">{guide.context}</Note>
            {guide.sections.map((section) => (
              <section
                className="guide-chapter prose"
                id={section.id}
                key={section.id}
              >
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.terms && (
                  <dl className="vocabulary-list">
                    {section.terms.map(([term, definition]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{definition}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </section>
            ))}
            <aside
              className="guide-sources"
              aria-label="Further reading and evidence"
            >
              <Eyebrow>Read the source</Eyebrow>
              <p>
                Based on white paper {WHITEPAPER_VERSION}, especially its
                implementation reading guide and mandatory acceptance contract.
                Published experiments have their own source and scope.
              </p>
              <ul>
                {guide.references.map(([label, href]) => (
                  <li key={href}>
                    <TextLink href={href}>{label}</TextLink>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section className="section soft-section guide-next">
        <div className="container">
          <Eyebrow>Continue exploring</Eyebrow>
          <h2>Your next step.</h2>
          <div className="guide-next-links">
            {guide.next.map(([label, href]) => (
              <Button key={href} href={href} secondary>
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
