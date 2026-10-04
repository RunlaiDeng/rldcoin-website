import { ArrowUpRight } from "lucide-react";
import { TESTNET, REGIONAL_CYCLE, CONTENT_REVIEW_DATE } from "@/lib/site";

export function NetworkStatusPanel() {
  return (
    <section
      className="live-panel"
      aria-label="Network development and qualification status"
    >
      <div className="live-panel-top">
        <div>
          <span className="eyebrow plain">EARTH / VALUE-FREE TESTNET</span>
          <h2>
            No-value research.
            <br />
            Qualification continues.
          </h2>
        </div>
        <div className="live-badge is-pending">
          <span className="status-dot" />
          No active mainnet
        </div>
      </div>
      <div className="live-metrics">
        <div>
          <span>Current network</span>
          <strong>Testnet</strong>
          <small>Public fixtures for development and qualification</small>
        </div>
        <div>
          <span>Protocol qualification</span>
          <strong>In progress</strong>
          <small>Independent acceptance remains required</small>
        </div>
        <div>
          <span>New mainnet</span>
          <strong>Pending</strong>
          <small>Fresh genesis after qualification</small>
        </div>
        <div>
          <span>Test currency</span>
          <strong>No value</strong>
          <small>Test keys and balances never become mainnet assets</small>
        </div>
      </div>
      <dl className="telemetry-details">
        <div>
          <dt>Fresh testnet</dt>
          <dd>
            Published Linux/macOS replay and restart evidence is under one
            owner. The linked status is operator telemetry, not independent
            verification or a guarantee of current availability.
          </dd>
        </div>
        <div>
          <dt>Bounded ground evidence</dt>
          <dd>
            The Earth testnet and regional ground candidates have distinct
            source identities and evidence scopes. Fixture results do not
            establish stable autonomous cross-region service.
          </dd>
        </div>
        <div>
          <dt>Historical v16 regional candidate</dt>
          <dd>
            Twelve local nodes completed Earth–Proxima–Andromeda–Earth, with
            every Earth node stopped during onward and return exports. Exact
            frozen-source reproduction preserves recipient maturity and all 15
            conservation checks. The archive candidate also preserves exact
            custody across three process-crash boundaries. Same host and
            controller; power loss and physical routes remain unqualified.
          </dd>
        </div>
        <div>
          <dt>Release conditions</dt>
          <dd>
            Complete applicable A–G and I1–I12 acceptance, independent review
            and custody, wallet recovery, exact signed zero-issuance genesis and
            verified deployment. Physical routes require separate evidence.
          </dd>
        </div>
      </dl>
      <div className="live-panel-bottom">
        <p>
          Content reviewed {CONTENT_REVIEW_DATE}. This is a development summary,
          not a live availability monitor.
        </p>
        <a href={TESTNET}>
          Testnet code &amp; evidence{" "}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a href="https://api.rldcoin.com/v1/testnet/earth/status">
          Testnet status <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a href={REGIONAL_CYCLE}>
          Three-region evidence <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
