import {
  CURRENT_CYCLE,
  CURRENT_FAULT,
  CURRENT_RUNTIME,
  CONTENT_REVIEW_DATE,
  PUBLIC_RESEARCH,
} from "@/lib/site";
import { Eyebrow, TextLink } from "./ui";

export function PublicEvidence() {
  return (
    <section
      className="section evidence-section"
      id="published-evidence"
      aria-labelledby="evidence-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow>
              PUBLIC EVIDENCE / {CONTENT_REVIEW_DATE.toUpperCase()}
            </Eyebrow>
            <h2 id="evidence-title">Read the result and its limits.</h2>
          </div>
          <p>
            These reviewed public observations use the same pinned v53 runtime.
            Ordinary-cycle success and the subsequent failed fault scope are
            separate results. Newer local work is outside this publication
            snapshot.
          </p>
        </div>
        <div className="evidence-grid">
          <article>
            <span className="evidence-label">v54 · ORDINARY CYCLE PASSED</span>
            <h3>Value went onward and returned.</h3>
            <p>
              Twelve local nodes completed Earth–Proxima–Andromeda–Earth while
              Earth was stopped during the remote legs. Native replay
              authenticated all twelve journals and recipient observations;
              issued 300 = liquid 300 + unresolved exports 0.
            </p>
            <TextLink href={CURRENT_CYCLE}>
              Read the exact cycle report
            </TextLink>
          </article>
          <article>
            <span className="evidence-label evidence-label-failed">
              v55 · FINITE FAULT SCOPE FAILED
            </span>
            <h3>The new import missed its deadline.</h3>
            <p>
              After contact restoration, the new export was not imported at
              Proxima height 12 within the declared window. Separate stopped
              authentication preserved the original owner requests and private
              state. It neither recovered the run nor changed the failure.
            </p>
            <TextLink href={CURRENT_FAULT}>
              Read the failure and stopped checks
            </TextLink>
          </article>
        </div>
        <div className="evidence-footnote">
          <p>
            Same host and controller, no monetary value. These results do not
            qualify sustained BFT service, independent custody, long history,
            physical routes or all I1–I12.
          </p>
          <div>
            <TextLink href={CURRENT_RUNTIME}>Pinned runtime & source</TextLink>
            <TextLink href={PUBLIC_RESEARCH}>Public research archive</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
