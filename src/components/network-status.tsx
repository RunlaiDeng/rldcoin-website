"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, ArrowUpRight, RefreshCw } from "lucide-react";
import {
  networkHealth,
  parseNetworkStatus,
  type NetworkStatus,
} from "@/lib/network";
import { GENESIS } from "@/lib/site";

const date = (v: string) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(v)) + " UTC";
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
        previous &&
        Date.parse(previous.observed_at) > Date.parse(next.observed_at)
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
      ? "Heartbeat running"
      : health === "expired"
        ? "Authorization expired"
        : health === "stale"
          ? "Status is out of date"
          : health === "stopped"
            ? "Network not reporting running"
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
          <span>Finalized height</span>
          <strong>
            {data?.height != null ? data.height.toLocaleString("en-US") : "—"}
          </strong>
          <small>
            {data?.height != null
              ? "Last reported by the operator"
              : data
                ? "Not reported in this observation"
                : "Waiting for public data"}
          </small>
        </div>
        <div>
          <span>Heartbeat interval</span>
          <strong>
            {data ? `${data.heartbeat_interval_seconds / 60}` : "—"}
            <em>{data ? " min" : ""}</em>
          </strong>
          <small>Consensus heartbeat</small>
        </div>
        <div>
          <span>Controlling owners</span>
          <strong>{data ? data.control_group_count : "—"}</strong>
          <small>Independent operators are a later milestone</small>
        </div>
        <div>
          <span>Payment phase</span>
          <strong className="metric-word">
            {data
              ? data.value_cap === "VALUE_CAP_0"
                ? "Zero value"
                : "Review status"
              : "—"}
          </strong>
          <small>
            {data
              ? `Rewards ${data.reward_issuance_enabled ? "reported enabled · review release" : "not enabled"}`
              : "Status has not been loaded"}
          </small>
        </div>
      </div>
      {data && (
        <dl className="telemetry-details">
          <div>
            <dt>Last reported operator state</dt>
            <dd>{data.state}</dd>
          </div>
          <div>
            <dt>Observed by the operator</dt>
            <dd>{date(data.observed_at)}</dd>
          </div>
          <div>
            <dt>Last full verification</dt>
            <dd>
              {data.last_full_verification_at
                ? date(data.last_full_verification_at)
                : "Not reported"}
            </dd>
          </div>
          <div>
            <dt>Software-key authorization ends</dt>
            <dd>{date(data.software_key_expires_at)}</dd>
          </div>
          <div>
            <dt>Reported state root</dt>
            <dd className="hash">{data.state_root ?? "Not reported"}</dd>
          </div>
        </dl>
      )}
      {(error || health === "stale" || health === "expired") && (
        <p className="status-warning" role="status">
          {error
            ? "We could not refresh the public feed. Any figures above are the last received observation, not confirmation that the network is running."
            : health === "expired"
              ? "The reported software-key authorization has expired. A new authorization must be reviewed before treating the network as active."
              : "The observation or full verification is too old to confirm current operation. Inspect the public feed for more detail."}
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
          <a href={`${GENESIS}status.json`}>
            View source
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
