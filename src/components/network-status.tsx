import { ArrowUpRight } from "lucide-react";
import { TESTNET, CONTENT_REVIEW_DATE } from "@/lib/site";

export function NetworkStatusPanel() {
  return (
    <section className="live-panel" aria-label="Network development summary">
      <div className="live-panel-top">
        <div>
          <span className="eyebrow plain">DEVELOPMENT / NO MONETARY VALUE</span>
          <h2>No mainnet has launched.</h2>
        </div>
        <div className="live-badge is-pending">Testnet only</div>
      </div>
      <div className="live-metrics">
        <div>
          <span>Test assets</span>
          <strong>No value</strong>
          <small>Never become mainnet balances or authority</small>
        </div>
        <div>
          <span>Protocol acceptance</span>
          <strong>Incomplete</strong>
          <small>Independent qualification remains required</small>
        </div>
        <div>
          <span>Ground candidates</span>
          <strong>Separate scopes</strong>
          <small>Exact source and fault assumptions matter</small>
        </div>
        <div>
          <span>Physical routes</span>
          <strong>Unqualified</strong>
          <small>Illustrations do not establish operating links</small>
        </div>
      </div>
      <p className="status-scope">
        The Earth testnet and regional ground candidates have distinct
        identities and evidence scopes. Same-host or same-controller results do
        not establish independent operation, custody or sustained service.
      </p>
      <div className="live-panel-bottom">
        <p>
          Content reviewed {CONTENT_REVIEW_DATE}. Live telemetry is not fetched
          here; this summary cannot establish current availability. External
          status may be stale or unavailable and is an operator observation.
        </p>
        <a href={TESTNET}>
          Testnet guide <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a href="https://api.rldcoin.com/v1/testnet/earth/status">
          Operator telemetry <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
