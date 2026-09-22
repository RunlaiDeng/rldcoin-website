"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Fingerprint,
  LockKeyhole,
  Radio,
  Send,
} from "lucide-react";

const steps = [
  {
    title: "Lock at the source",
    label: "01 / SOURCE",
    text: "The sender authorizes a transfer. The source Zone finalizes it and locks the asset, so it cannot be spent there again.",
    icon: LockKeyhole,
  },
  {
    title: "Carry the proof",
    label: "02 / IN TRANSIT",
    text: "A proof bound to the destination travels through relays, delay-tolerant networks, or carried media. Communication can take time.",
    icon: Radio,
  },
  {
    title: "Verify and receive",
    label: "03 / DESTINATION",
    text: "The destination checks finality, history, and transfer validity. Only a finalized import makes the asset spendable there.",
    icon: Fingerprint,
  },
  {
    title: "Return the receipt",
    label: "04 / RECEIPT",
    text: "A receipt travels back asynchronously to close the source-side record. Time alone never authorizes a second spend.",
    icon: Check,
  },
];
export function TransferExplorer() {
  const [selected, setSelected] = useState(0);
  const active = steps[selected];
  const Icon = active.icon;
  return (
    <div className="transfer-explorer">
      <div
        className="transfer-tabs"
        role="tablist"
        aria-label="Stages of a cross-Zone transfer"
      >
        {steps.map((step, index) => (
          <button
            key={step.title}
            id={`transfer-tab-${index}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls="transfer-panel"
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
                document.getElementById(`transfer-tab-${next}`)?.focus();
              }
            }}
          >
            <span>0{index + 1}</span>
            {step.title}
          </button>
        ))}
      </div>
      <div
        className="transfer-panel"
        role="tabpanel"
        id="transfer-panel"
        aria-labelledby={`transfer-tab-${selected}`}
      >
        <div className="transfer-diagram" aria-hidden="true">
          <div className={`zone-node ${selected === 0 ? "active" : ""}`}>
            <span className="mini-globe">◎</span>
            <strong>Source Zone</strong>
            <small>
              {selected === 0 ? "Locking the asset" : "Asset locked"}
            </small>
          </div>
          <div className={`proof-path ${selected === 3 ? "proof-return" : ""}`}>
            <span />
            <div className="proof-icon">
              {selected === 3 ? <Check size={21} /> : <Send size={21} />}
            </div>
            <span />
            <ArrowRight size={15} />
          </div>
          <div className={`zone-node ${selected >= 2 ? "active" : ""}`}>
            <span className="mini-globe destination">◎</span>
            <strong>Destination Zone</strong>
            <small>
              {selected >= 2 ? "Import finalized" : "Awaiting the proof"}
            </small>
          </div>
        </div>
        <div className="transfer-explanation">
          <Icon size={22} aria-hidden="true" />
          <div>
            <span className="eyebrow plain">{active.label}</span>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
          </div>
        </div>
      </div>
      <p className="diagram-caption">
        Explore the intended transfer lifecycle. This diagram does not submit a
        transaction.
      </p>
    </div>
  );
}
