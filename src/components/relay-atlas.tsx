"use client";

import { useId, type KeyboardEvent } from "react";
import styles from "./diagrams.module.css";

export const relayNetworks = [
  {
    name: "Earth",
    kind: "Planetary network",
    text: "A community starts locally. Its nodes exchange information with an adjacent relay when a real contact is available.",
    role: "Local origin",
    icon: "earth",
    x: 170,
    y: 260,
    mx: 110,
    my: 120,
  },
  {
    name: "Deep-space station",
    kind: "Habitat network",
    text: "A station connects its own local network to neighboring networks. It can keep signed evidence while the next contact is unavailable.",
    role: "Stationary relay",
    icon: "station",
    x: 375,
    y: 365,
    mx: 240,
    my: 285,
  },
  {
    name: "Proxima Centauri",
    kind: "Stellar network",
    text: "A distant community verifies its own ledger. Its relay can forward evidence without importing the asset or becoming an Earth consensus signer.",
    role: "Regional relay",
    icon: "star",
    x: 580,
    y: 260,
    mx: 110,
    my: 450,
  },
  {
    name: "Carrier vessel",
    kind: "Moving network",
    text: "A mobile habitat brings its local network with it. Stored evidence can move between contacts as the vessel follows a real journey.",
    role: "Mobile relay",
    icon: "carrier",
    x: 785,
    y: 365,
    mx: 240,
    my: 615,
  },
  {
    name: "Andromeda",
    kind: "Galactic community",
    text: "The destination receives evidence through a succession of contacts. Its ledger must separately verify the source, uniqueness and acceptance rules.",
    role: "Local destination",
    icon: "galaxy",
    x: 990,
    y: 260,
    mx: 110,
    my: 780,
  },
] as const;

export type AtlasLayer = "networks" | "contacts" | "journey";

function RelayGlyph({ kind }: { kind: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "earth":
      return (
        <g {...common}>
          <circle r="17" />
          <ellipse rx="7" ry="17" />
          <path d="M-16-6h32M-16 6h32M0-17v34" />
        </g>
      );
    case "station":
      return (
        <g {...common}>
          <path d="M-6-6h12v12H-6zM-6-2h-16v-8h12v20h-12V2h16M6-2h16v-8H10v20h12V2H6M-2-6v-12h4v12M-2 6v12h4V6" />
          <circle r="2" />
        </g>
      );
    case "star":
      return (
        <g {...common}>
          <circle r="5" />
          <circle r="15" strokeDasharray="1 5" />
          <path d="M0-24v8M0 16v8M-24 0h8M16 0h8M-17-17l6 6M11 11l6 6M-17 17l6-6M11-11l6-6" />
        </g>
      );
    case "carrier":
      return (
        <g {...common}>
          <path d="M-25 0l30-8 20 8-20 8zM-12 0H8M4-8v16M12-5v10M-12-4l-2-8M-12 4l-2 8" />
          <path d="M-27-4h-5M-27 4h-8" opacity=".6" />
        </g>
      );
    default:
      return (
        <g {...common}>
          <ellipse rx="23" ry="9" transform="rotate(-28)" />
          <ellipse rx="16" ry="5" transform="rotate(-28)" />
          <circle r="3" />
          <path d="M-18 14l-5 4M18-14l5-4" />
        </g>
      );
  }
}

export function RelayNetworkArt({
  layer = "contacts",
  selected = -1,
  interrupted = false,
  onSelect,
}: {
  layer?: AtlasLayer;
  selected?: number;
  interrupted?: boolean;
  onSelect?: (index: number) => void;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <>
      {[false, true].map((mobile) => {
        const prefix = `${id}-${mobile ? "mobile" : "desktop"}`;
        const width = mobile ? 350 : 1160,
          height = mobile ? 900 : 620,
          radius = mobile ? 108 : 146;
        const points = relayNetworks.map((n) => ({
          x: mobile ? n.mx : n.x,
          y: mobile ? n.my : n.y,
        }));
        return (
          <svg
            key={prefix}
            className={mobile ? styles.mobileMap : styles.desktopMap}
            viewBox={`0 0 ${width} ${height}`}
            role={onSelect ? "group" : "img"}
            aria-labelledby={`${prefix}-title ${prefix}-desc`}
          >
            <title id={`${prefix}-title`}>
              Five local networks connected through neighboring relays
            </title>
            <desc id={`${prefix}-desc`}>
              Concept: Earth, a deep-space station, Proxima Centauri, a carrier
              vessel and an Andromeda community each contain a local network.
              Neighboring relays extend the path. Circles represent networks,
              not physical signal range. Positions and travel times are not to
              scale.
              {interrupted
                ? " The station contact is paused and evidence stays queued."
                : ""}
            </desc>
            <defs>
              <pattern
                id={`${prefix}-grid`}
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r=".65" fill="#9fb4c1" opacity=".2" />
              </pattern>
              <radialGradient id={`${prefix}-field`}>
                <stop stopColor="#93b4c4" stopOpacity=".085" />
                <stop offset=".72" stopColor="#93b4c4" stopOpacity=".04" />
                <stop offset="1" stopColor="#93b4c4" stopOpacity=".01" />
              </radialGradient>
              <radialGradient id={`${prefix}-core`} cx="35%" cy="20%">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#f6fafb" />
              </radialGradient>
            </defs>
            <rect width={width} height={height} fill={`url(#${prefix}-grid)`} />
            {!mobile && (
              <g className={styles.mapCoordinate}>
                <text x="28" y="35">
                  LOCAL NETWORKS / ADJACENT CONTACTS
                </text>
                <text x="1132" y="35" textAnchor="end">
                  SCHEMATIC · NOT TO SCALE
                </text>
                <path d="M28 50h34M28 50v20M1132 50h-34M1132 50v20M28 568h34M28 568v-20M1132 568h-34M1132 568v-20" />
                <text x="28" y="596">
                  A PATH GROWS ONE CONTACT AT A TIME
                </text>
                <text x="1132" y="596" textAnchor="end">
                  RLD / CONCEPT ATLAS
                </text>
              </g>
            )}
            {points.map((p, i) => (
              <g
                key={`field-${i}`}
                className={`${styles.networkField} ${interrupted && i === 1 ? styles.interruptedField : ""}`}
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={radius}
                  fill={`url(#${prefix}-field)`}
                  stroke={selected === i ? "#547f98" : "#8caaba"}
                  strokeOpacity={selected === i ? 1 : 0.5}
                  strokeWidth={selected === i ? 1.3 : 0.8}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={radius - 10}
                  fill="none"
                  stroke="#8caaba"
                  strokeOpacity=".15"
                  strokeDasharray="1 7"
                />
              </g>
            ))}
            {layer !== "networks" &&
              points.slice(0, -1).map((p, i) => {
                const next = points[i + 1],
                  broken = interrupted && (i === 0 || i === 1);
                const d = `M${p.x} ${p.y}L${next.x} ${next.y}`;
                return (
                  <g
                    key={`route-${i}`}
                    className={`${broken ? styles.brokenContact : styles.contact} ${layer === "journey" && !interrupted ? styles.highlightRoute : ""}`}
                  >
                    <path d={d} className={styles.contactUnderlay} />
                    <path d={d} className={styles.contactLine} />
                    {layer === "journey" && !interrupted && (
                      <path
                        key={`${layer}-${interrupted}`}
                        d={d}
                        className={styles.evidenceTrace}
                        style={{ animationDelay: `${i * 0.7}s` }}
                      />
                    )}
                    <g
                      transform={`translate(${(p.x + next.x) / 2},${(p.y + next.y) / 2})`}
                    >
                      <circle
                        r="7"
                        fill="#ffffff"
                        stroke={broken ? "#ab8050" : "#7196aa"}
                        strokeWidth="1"
                      />
                      {broken ? (
                        <path
                          d="M-2-3v6M2-3v6"
                          stroke="#ab8050"
                          strokeWidth="1.5"
                        />
                      ) : (
                        <circle r="2" fill="#527e95" />
                      )}
                    </g>
                  </g>
                );
              })}
            {points.map((p, i) => {
              const satelliteRadius = mobile ? 71 : 97,
                angles = [-160, -110, -55, -15, 170];
              return (
                <g key={`network-${i}`} transform={`translate(${p.x},${p.y})`}>
                  <g className={styles.localNetwork}>
                    {angles.map((angle, k) => {
                      // Trigonometric last bits differ between JS engines; SVG attributes must hydrate identically.
                      const a = ((angle + i * 7) * Math.PI) / 180,
                        x = Number((Math.cos(a) * satelliteRadius).toFixed(3)),
                        y = Number((Math.sin(a) * satelliteRadius).toFixed(3));
                      return (
                        <g key={k}>
                          <path d={`M0 0L${x} ${y}`} />
                          <circle cx={x} cy={y} r={k === 2 ? 4.2 : 3} />
                          <circle
                            cx={x}
                            cy={y}
                            r="8"
                            fill="none"
                            strokeOpacity=".22"
                          />
                        </g>
                      );
                    })}
                  </g>
                  <g
                    className={`${styles.relayCore} ${selected === i ? styles.selectedCore : ""}`}
                    {...(onSelect
                      ? {
                          role: "button",
                          tabIndex: 0,
                          "aria-label": `Explore ${relayNetworks[i].name}`,
                          "aria-pressed": selected === i,
                          onClick: () => onSelect(i),
                          onKeyDown: (e: KeyboardEvent<SVGGElement>) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              onSelect(i);
                            }
                          },
                        }
                      : {})}
                  >
                    <circle
                      r={mobile ? 34 : 39}
                      fill={`url(#${prefix}-core)`}
                      stroke={interrupted && i === 1 ? "#ab8050" : "#799aac"}
                      strokeOpacity=".7"
                    />
                    <circle r={mobile ? 39 : 45} className={styles.coreHalo} />
                    <RelayGlyph kind={relayNetworks[i].icon} />
                    <circle r="48" fill="transparent" stroke="none" />
                  </g>
                  <text
                    y={mobile ? 58 : 66}
                    textAnchor="middle"
                    className={styles.networkName}
                  >
                    {relayNetworks[i].name}
                  </text>
                  <text
                    y={mobile ? 76 : 89}
                    textAnchor="middle"
                    className={styles.networkKind}
                  >
                    {interrupted && i === 1
                      ? "CONTACT PAUSED · EVIDENCE HELD"
                      : relayNetworks[i].kind.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        );
      })}
    </>
  );
}

export function RelayAtlasPreview() {
  return (
    <figure className={`${styles.atlas} ${styles.preview}`}>
      <div className={styles.atlasHeading}>
        <span className={styles.overline}>THE CONNECTION PATTERN</span>
        <span className={styles.conceptTag}>Future concept</span>
      </div>
      <RelayNetworkArt />
      <figcaption className={styles.atlasCaption}>
        Each circle is a local network. Neighboring relays connect the networks,
        one contact at a time. Schematic positions; circles are not signal
        ranges.
      </figcaption>
    </figure>
  );
}
