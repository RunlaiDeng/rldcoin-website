"use client";

import { useId, useState } from "react";
import { Check, Fingerprint, LockKeyhole, Radio } from "lucide-react";
import styles from "./diagrams.module.css";

const steps = [
  {
    title: "Lock at the source",
    label: "01 / SOURCE AUTHORIZATION",
    text: "The sender authorizes an export that removes the asset from local spending. In the Earth reference profile, a source checkpoint needs 12 confirmations including its block and all four finality signatures.",
    icon: LockKeyhole,
  },
  {
    title: "Carry the proof",
    label: "02 / SUCCESSIVE CONTACTS",
    text: "Signed evidence travels through available relays. Each relay can retain it across a contact gap. A transport acknowledgment establishes delivery, not payment finality.",
    icon: Radio,
  },
  {
    title: "Verify and receive",
    label: "03 / LOCAL ACCEPTANCE",
    text: "The destination verifies the source proof and rejects duplicate imports. In the Earth reference profile, the recipient can spend at the import height plus six blocks. That maturity rule is separate from destination finality.",
    icon: Fingerprint,
  },
  {
    title: "Return the receipt",
    label: "04 / RETURNED INFORMATION",
    text: "A ledger receipt provides evidence of destination import. It carries information back, not currency. Missing receipts and elapsed time never authorize a refund or release the source export.",
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
  const source = mobile ? { x: 165, y: 104 } : { x: 180, y: 178 };
  const relay = mobile ? { x: 165, y: 290 } : { x: 510, y: 178 };
  const dest = mobile ? { x: 165, y: 476 } : { x: 840, y: 178 };
  const line = mobile ? "M165 104V476" : "M180 178H840";
  const back = mobile ? "M112 476H40V104H112" : "M840 224V316H180V224";
  return (
    <svg
      className={`${styles.transferMap} ${mobile ? styles.mobileTransferMap : styles.desktopTransferMap}`}
      viewBox={mobile ? "0 0 330 610" : "0 0 1020 380"}
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
        height={mobile ? 610 : 380}
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
                ? "Source Zone"
                : i === 1
                  ? "Relay contacts"
                  : "Destination Zone"}
            </text>
            <text
              y={i === 1 ? 99 : 115}
              textAnchor="middle"
              className={styles.transferSub}
            >
              {i === 0
                ? selected === 0
                  ? "Authorize and lock"
                  : "Export remains locked"
                : i === 1
                  ? "Store · carry · forward"
                  : selected >= 2
                    ? "Unique import + maturity"
                    : "Await verified evidence"}
            </text>
            <text
              y={i === 1 ? -68 : -85}
              textAnchor="middle"
              className={styles.transferKicker}
            >
              {i === 0
                ? "LOCAL CONSENSUS"
                : i === 1
                  ? "ASYNCHRONOUS TRANSPORT"
                  : "LOCAL CONSENSUS"}
            </text>
          </g>
        );
      })}
      {selected === 1 && (
        <g transform={`translate(${mobile ? 165 : 675},${mobile ? 389 : 178})`}>
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
        <g transform={`translate(${mobile ? 40 : 510},${mobile ? 285 : 316})`}>
          <circle r="15" fill="#fbf4e9" stroke="#b58d57" />
          <path
            d="M-6 0l4 4 8-9"
            stroke="#a77c44"
            fill="none"
            strokeWidth="1.5"
          />
          {!mobile && (
            <text y="28" textAnchor="middle" className={styles.transferSub}>
              Receipt: information, not returned value
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
          <span>White paper reference profile · explanatory model</span>
        </div>
        <TransferMap selected={selected} mobile={false} />
        <TransferMap selected={selected} mobile />
      </div>
      <div
        className={styles.transferTabs}
        role="tablist"
        aria-label="Stages of a cross-Zone transfer"
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
        This figure explains the intended evidence lifecycle. Onward transfer
        requires a new export protected by recognized local finality; returning
        value is a new export and import. A returned receipt never releases the
        first debit. Full protocol and physical-route qualification remain open.
      </p>
    </div>
  );
}
