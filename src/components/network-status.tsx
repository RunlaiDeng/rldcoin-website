"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, ArrowUpRight, RefreshCw } from "lucide-react";
import {
  networkHealth,
  formatRld,
  parseNetworkStatus,
  type NetworkStatus,
} from "@/lib/network";
import { POW_STATUS } from "@/lib/site";

const date = (v: number) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(v * 1000)) + " UTC";
export function NetworkStatusPanel() {
  const [data, setData] = useState<NetworkStatus | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState<number | null>(null);
  const refresh = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    try {
      const response = await fetch("/api/network", {
        cache: "no-store",
        signal: signal
          ? AbortSignal.any([signal, AbortSignal.timeout(10000)])
          : AbortSignal.timeout(10000),
      });
      if (!response.ok) throw new Error("Status unavailable");
      const body = await response.json();
      const next = parseNetworkStatus(body.data);
      setData((previous) =>
        previous && previous.observed_at_unix > next.observed_at_unix
          ? previous
          : next,
      );
      setError(false);
    } catch {
      if (!signal?.aborted) setError(true);
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
        setNow(Date.now());
      }
    }
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    void refresh(controller.signal);
    const interval = setInterval(() => {
      setNow(Date.now());
      if (document.visibilityState === "visible")
        void refresh(controller.signal);
    }, 30_000);
    function visible() {
      if (document.visibilityState === "visible")
        void refresh(controller.signal);
    }
    document.addEventListener("visibilitychange", visible);
    return () => {
      controller.abort();
      clearInterval(interval);
      document.removeEventListener("visibilitychange", visible);
    };
  }, [refresh]);
  const health = data && now ? networkHealth(data, now) : null;
  const isRunning = health === "running" && !error;
  const label = error
    ? "Update unavailable"
    : health === "running"
      ? "Automatic mining active"
      : health === "stale"
        ? "Status is out of date"
        : health === "stopped"
          ? "Mining not reporting active"
          : "Checking public status";
  return (
    <section className="live-panel" aria-label="Earth network status">
      <div className="live-panel-top">
        <div>
          <span className="eyebrow plain">EARTH ZONE / PUBLIC TELEMETRY</span>
          <h2>
            One beginning.
            <br />A permanent identity.
          </h2>
        </div>
        <div
          className={`live-badge ${isRunning ? "is-live" : "is-pending"}`}
          aria-live="polite"
        >
          <span className="status-dot" />
          {label}
        </div>
      </div>
      <div className="live-metrics">
        <div>
          <span>Chain height</span>
          <strong>
            {data ? BigInt(data.height).toLocaleString("en-US") : "—"}
          </strong>
          <small>Selected branch · probabilistic confirmation</small>
        </div>
        <div>
          <span>Target block interval</span>
          <strong>
            10<em> min</em>
          </strong>
          <small>Actual discovery time varies</small>
        </div>
        <div>
          <span>Issued RLD</span>
          <strong>{data ? formatRld(data.emitted_runlai) : "—"}</strong>
          <small>Includes rewards awaiting maturity</small>
        </div>
        <div>
          <span>Node hash rate</span>
          <strong>
            {data
              ? data.average_hashes_per_second.toLocaleString("en-US")
              : "—"}
            <em>{data ? " H/s" : ""}</em>
          </strong>
          <small>Average since this node started</small>
        </div>
      </div>
      {data && (
        <dl className="telemetry-details">
          <div>
            <dt>Observed by this node</dt>
            <dd>{date(data.observed_at_unix)}</dd>
          </div>
          <div>
            <dt>Latest hashing progress</dt>
            <dd>
              {data.last_hash_at_unix
                ? date(data.last_hash_at_unix)
                : "Not reported"}
            </dd>
          </div>
          <div>
            <dt>Unissued reserve</dt>
            <dd>{formatRld(data.unissued_runlai)} RLD</dd>
          </div>
          <div>
            <dt>Mining operation</dt>
            <dd>No scheduled expiry · owner can stop the node</dd>
          </div>
          <div>
            <dt>Cross-region transfers</dt>
            <dd>Under development · not enabled</dd>
          </div>
          <div>
            <dt>Reported state root</dt>
            <dd className="hash">{data.state_root}</dd>
          </div>
        </dl>
      )}
      {(error || health === "stale") && (
        <p className="status-warning" role="status">
          {error
            ? "We could not refresh the public feed. Figures above retain their original observation time and do not confirm current operation."
            : "This observation is too old to confirm current mining. Inspect the public feed for more detail."}
        </p>
      )}
      <div className="live-panel-bottom">
        <p>
          <Activity size={15} aria-hidden="true" />
          Operator-reported data · refreshes every 30 seconds
        </p>
        <div>
          <button
            className="refresh-button"
            disabled={loading}
            onClick={() => void refresh()}
          >
            <RefreshCw
              size={14}
              className={loading ? "is-spinning" : ""}
              aria-hidden="true"
            />
            {loading ? "Refreshing" : "Refresh"}
          </button>
          <a href={POW_STATUS}>
            View source
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
