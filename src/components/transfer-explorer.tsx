"use client";

import { useId, useState } from "react";
import { Check, Fingerprint, LockKeyhole, Radio } from "lucide-react";
import styles from "./diagrams.module.css";

const steps = [
  {
    title: "Finalize source export",
    label: "01 / SURRENDER SOURCE AUTHORITY",
    text: "The owner signs exact asset, destination, recipient, principal and fees. The source domain atomically consumes local inputs and finalizes one export. An owner signature or a wallet reservation alone cannot create a destination claim.",
    icon: LockKeyhole,
  },
  {
    title: "Carry the certificate",
    label: "02 / SUCCESSIVE CONTACTS",
    text: "Carriers retain the exact ticket, source commit proof and authenticated configuration material. Sender and recipient need not be online together. Duplicate delivery and custody receipts create no additional balance.",
    icon: Radio,
  },
  {
    title: "Import and spend",
    label: "03 / ONE DESTINATION DECISION",
    text: "The destination verifies its accepted source and provenance, records Imported once and creates the recipient's local output atomically. The recipient can then pay locally without a reply to the source. Finality remains conditional on the accepted authority assumptions.",
    icon: Fingerprint,
  },
  {
    title: "Recover on rejection",
    label: "04 / POSITIVE REJECTION EVIDENCE",
    text: "The destination may instead finalize a permanent Rejected decision that excludes import. Its authenticated proof allows one source recovery under the original owner's rule. Silence and local timeouts cannot refund; an unavailable destination can strand exported value.",
    icon: Check,
  },
];

function TransferMap({
  selected,
  mobile,
}: {
  selected: number;
  mobile: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const source = mobile ? { x: 165, y: 110 } : { x: 180, y: 178 };
  const relay = mobile ? { x: 165, y: 330 } : { x: 510, y: 178 };
  const dest = mobile ? { x: 165, y: 550 } : { x: 840, y: 178 };
  const line = mobile ? "M165 110V550" : "M180 178H840";
  const back = mobile ? "M112 550H40V110H112" : "M840 224V316H180V224";
  return (
    <svg
      className={`${styles.transferMap} ${mobile ? styles.mobileTransferMap : styles.desktopTransferMap}`}
      viewBox={mobile ? "0 0 330 690" : "0 0 1020 380"}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`${id}-grid`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r=".6" fill="#a8bcc7" opacity=".5" />
        </pattern>
        <marker
          id={`${id}-arrow`}
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0 0L6 3L0 6" fill="none" stroke="#648c9e" strokeWidth="1" />
        </marker>
      </defs>
      <rect
        width={mobile ? 330 : 1020}
        height={mobile ? 690 : 380}
        fill={`url(#${id}-grid)`}
      />
      <path
        d={line}
        className={`${styles.journeyLine} ${selected === 0 ? styles.journeyPending : ""}`}
        markerEnd={`url(#${id}-arrow)`}
      />
      {selected === 3 && <path d={back} className={styles.returnLine} />}
      {[source, relay, dest].map((p, i) => {
        const active =
          i === 0 ? selected === 0 : i === 1 ? selected === 1 : selected >= 2;
        return (
          <g key={i} transform={`translate(${p.x},${p.y})`}>
            <circle
              r={i === 1 ? 49 : 65}
              fill="none"
              stroke="#bfd0d9"
              strokeWidth=".8"
              strokeDasharray={i === 1 ? "2 5" : undefined}
            />
            <circle
              r={i === 1 ? 38 : 53}
              fill={active ? "#e3edf1" : "#f8fbfc"}
              stroke={active ? "#3b738b" : "#a8bfcb"}
            />
            <g
              fill="none"
              stroke={active ? "#245d76" : "#789bab"}
              strokeWidth="1.2"
            >
              {i === 1 ? (
                <>
                  <path d="M-16 4a18 18 0 0 1 32 0M-11 7a12 12 0 0 1 22 0M-6 10a6 6 0 0 1 12 0" />
                  <circle cy="15" r="2" />
                  <path d="M-9-14h18v11H-9zM-5-9h10" />
                </>
              ) : (
                <>
                  <circle cy="-5" r="23" />
                  <ellipse cy="-5" rx="9" ry="23" />
                  <path d="M-22-12h44M-22 2h44M0-28v46" />
                  {i === 0 ? (
                    <path d="M-9 24v-7a9 9 0 0 1 18 0v7M-13 24h26v15h-26z" />
                  ) : (
                    <path d="M-11 29l8 8 16-19" />
                  )}
                </>
              )}
            </g>
            <text
              y={i === 1 ? 77 : 93}
              textAnchor="middle"
              className={styles.transferTitle}
            >
              {i === 0
                ? "Source domain"
                : i === 1
                  ? "Relay contacts"
                  : "Destination domain"}
            </text>
            <text
              y={i === 1 ? 99 : 115}
              textAnchor="middle"
              className={styles.transferSub}
            >
              {i === 0
                ? selected === 0
                  ? "Commit export"
                  : "Export removes local rights"
                : i === 1
                  ? "Store · carry · forward"
                  : selected >= 2
                    ? selected === 3
                      ? "Certified rejection"
                      : "Import exactly once"
                    : "Await verified evidence"}
            </text>
            <text
              y={i === 1 ? -68 : -85}
              textAnchor="middle"
              className={styles.transferKicker}
            >
              {i === 0
                ? "LOCAL SETTLEMENT"
                : i === 1
                  ? "ASYNCHRONOUS TRANSPORT"
                  : "LOCAL SETTLEMENT"}
            </text>
          </g>
        );
      })}
      {selected === 1 && (
        <g transform={`translate(${mobile ? 165 : 675},${mobile ? 440 : 178})`}>
          <rect
            x="-23"
            y="-17"
            width="46"
            height="34"
            rx="5"
            fill="#fbf4e9"
            stroke="#b58d57"
          />
          <path
            d="M-10-4h20M-10 1h14M-10 6h8"
            stroke="#a77c44"
            strokeWidth="1.2"
          />
          <text
            x={mobile ? 45 : 0}
            y={mobile ? 5 : -29}
            textAnchor={mobile ? "start" : "middle"}
            className={styles.transferBadge}
          >
            Proof
          </text>
        </g>
      )}
      {selected === 3 && (
        <g transform={`translate(${mobile ? 40 : 510},${mobile ? 330 : 316})`}>
          <circle r="15" fill="#fbf4e9" stroke="#b58d57" />
          <path
            d="M-6 0l4 4 8-9"
            stroke="#a77c44"
            fill="none"
            strokeWidth="1.5"
          />
          {!mobile && (
            <text y="28" textAnchor="middle" className={styles.transferSub}>
              Rejection proof: recovery, not a timeout
            </text>
          )}
        </g>
      )}
    </svg>
  );
}

export function TransferExplorer() {
  const [selected, setSelected] = useState(0),
    id = useId(),
    active = steps[selected],
    Icon = active.icon;
  return (
    <div className={styles.transfer}>
      <div className={styles.transferFigure}>
        <div className={styles.transferFigureTop}>
          <span className={styles.overline}>EVIDENCE JOURNEY / 02</span>
          <span>Target design · explanatory model</span>
        </div>
        <TransferMap selected={selected} mobile={false} />
        <TransferMap selected={selected} mobile />
      </div>
      <div
        className={styles.transferTabs}
        role="tablist"
        aria-label="Stages of an interstellar payment"
      >
        {steps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            id={`${id}-tab-${index}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls={`${id}-panel`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(e) => {
              const next =
                e.key === "ArrowRight"
                  ? (selected + 1) % 4
                  : e.key === "ArrowLeft"
                    ? (selected + 3) % 4
                    : e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 3
                        : null;
              if (next !== null) {
                e.preventDefault();
                setSelected(next);
                document.getElementById(`${id}-tab-${next}`)?.focus();
              }
            }}
          >
            <span>0{index + 1}</span>
            {step.title}
          </button>
        ))}
      </div>
      <div
        className={styles.transferExplanation}
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${selected}`}
      >
        <Icon size={22} aria-hidden="true" />
        <div>
          <span className={styles.overline}>{active.label}</span>
          <h3>{active.title}</h3>
          <p>{active.text}</p>
        </div>
      </div>
      <p className={styles.transferCaption}>
        This figure explains the proposed authority-transfer lifecycle. Import
        and permanent rejection are alternative destination decisions, not
        sequential steps. Recovery requires rejection evidence. A carriage
        receipt grants no balance, and physical-route qualification remains
        separate.
      </p>
    </div>
  );
}
