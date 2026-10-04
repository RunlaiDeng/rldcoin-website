"use client";

import { useId, useState } from "react";
import { ArrowRight, Pause, Play, Radio, RotateCcw } from "lucide-react";
import { RelayNetworkArt, relayNetworks, type AtlasLayer } from "./relay-atlas";
import styles from "./diagrams.module.css";

const layers: { id: AtlasLayer; label: string }[] = [
  { id: "networks", label: "Local networks" },
  { id: "contacts", label: "Connect the relays" },
  { id: "journey", label: "Follow the evidence" },
];

export function NodeMeshExplorer() {
  const [layer, setLayer] = useState<AtlasLayer>("contacts");
  const [selected, setSelected] = useState(0);
  const [interrupted, setInterrupted] = useState(false);
  const id = useId(),
    network = relayNetworks[selected];
  return (
    <div className={styles.explorer}>
      <div className={styles.atlas}>
        <div className={styles.atlasHeading}>
          <div>
            <span className={styles.overline}>RELAY ATLAS / 01</span>
            <h2>
              Local networks.
              <br />
              An expanding reach.
            </h2>
          </div>
          <span className={styles.conceptTag}>Interactive concept</span>
        </div>
        <div
          className={styles.layerTabs}
          role="tablist"
          aria-label="Explore the relay network"
        >
          {layers.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-controls={`${id}-map`}
              aria-selected={layer === item.id}
              tabIndex={layer === item.id ? 0 : -1}
              onClick={() => setLayer(item.id)}
              onKeyDown={(e) => {
                const current = layers.findIndex((l) => l.id === layer);
                const next =
                  e.key === "ArrowRight"
                    ? (current + 1) % 3
                    : e.key === "ArrowLeft"
                      ? (current + 2) % 3
                      : e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 2
                          : null;
                if (next !== null) {
                  e.preventDefault();
                  setLayer(layers[next].id);
                  document.getElementById(`${id}-tab-${next}`)?.focus();
                }
              }}
            >
              <span>0{i + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
        <div
          id={`${id}-map`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${layers.findIndex((l) => l.id === layer)}`}
        >
          <RelayNetworkArt
            layer={layer}
            selected={selected}
            interrupted={interrupted}
            onSelect={setSelected}
          />
        </div>
        <div className={styles.atlasLegend} aria-label="Diagram legend">
          <span>
            <i className={styles.fieldKey} />
            Local network
          </span>
          <span>
            <i className={styles.relayKey} />
            Relay node
          </span>
          <span>
            <i className={styles.contactKey} />
            Neighbor contact
          </span>
          <span>
            <i className={styles.evidenceKey} />
            Signed evidence
          </span>
        </div>
        <div className={styles.atlasTools}>
          <p aria-live="polite">
            <Radio size={15} aria-hidden="true" />
            {interrupted
              ? "Concept: contact paused; admitted evidence stays under its custody contract."
              : layer === "networks"
                ? "Every network begins with its own community."
                : layer === "journey"
                  ? "Evidence follows successive contacts toward its destination."
                  : "Adjacent relays extend the path beyond a single network."}
          </p>
          <button
            type="button"
            className={styles.relayToggle}
            aria-pressed={interrupted}
            onClick={() => {
              setInterrupted(!interrupted);
              if (layer === "networks") setLayer("contacts");
            }}
          >
            {interrupted ? (
              <Play size={14} aria-hidden="true" />
            ) : (
              <Pause size={14} aria-hidden="true" />
            )}
            {interrupted ? "Restore station contact" : "Pause station contact"}
          </button>
        </div>
      </div>
      <div className={styles.inspector}>
        <div
          className={styles.networkPicker}
          aria-label="Choose a local network"
        >
          {relayNetworks.map((n, i) => (
            <button
              key={n.name}
              type="button"
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <span>0{i + 1}</span>
              {n.name}
            </button>
          ))}
        </div>
        <div className={styles.networkDetail} aria-live="polite">
          <div>
            <span className={styles.overline}>{network.role}</span>
            <h3>{network.name}</h3>
          </div>
          <p>{network.text}</p>
          <span className={styles.detailArrow} aria-hidden="true">
            <ArrowRight size={24} strokeWidth={1} />
          </span>
        </div>
      </div>
      <div className={styles.figureNote}>
        <p>
          Circles represent local networks, not signal range. Geometry and
          animation illustrate a connection pattern, not distance or travel
          time. A carrier follows real travel and contact opportunities.
        </p>
        <button
          type="button"
          onClick={() => {
            setLayer("contacts");
            setSelected(0);
            setInterrupted(false);
          }}
        >
          <RotateCcw size={13} aria-hidden="true" />
          Reset view
        </button>
      </div>
    </div>
  );
}
