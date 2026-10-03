"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { Expand, X, ZoomIn, ZoomOut } from "lucide-react";
import styles from "./diagrams.module.css";

const titles: Record<string, string> = {
  transaction: "Signature & value",
  blocks: "Connected state transitions",
  channel: "A payment channel",
  "export-tree": "An authenticated export",
  "cross-zone": "Across the Zone boundary",
  "relay-networks": "A network of networks",
  "contact-silence": "What silence can mean",
  privacy: "Public value, observable links",
  "pow-risk": "An idealized risk model",
};

export function TechnicalFigure({
  name,
  height,
  caption,
}: {
  name: string;
  height: number;
  caption: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(1);
  const id = useId(),
    number = caption.match(/^Figure (\d+)\./)?.[1] ?? "";
  const title = titles[name],
    src = `/diagrams/${name}.svg`;
  return (
    <figure className={styles.technicalFrame}>
      <div className={styles.technicalHeader}>
        <span>FIGURE {number.padStart(2, "0")}</span>
        <span>{title}</span>
      </div>
      <button
        type="button"
        className={styles.figureOpen}
        aria-label={`Open figure ${number}: ${title}`}
        onClick={() => {
          setZoom(1);
          dialog.current?.showModal();
        }}
      >
        <Image
          src={src}
          alt={caption}
          width={470}
          height={height}
          unoptimized
        />
        <span className={styles.expandMark}>
          <Expand size={15} aria-hidden="true" />
        </span>
      </button>
      <figcaption>
        {caption}
        <a href={src} target="_blank" rel="noopener noreferrer">
          Open SVG
        </a>
      </figcaption>
      <dialog
        ref={dialog}
        className={styles.figureDialog}
        aria-labelledby={`${id}-title`}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.figureDialogHead}>
          <div>
            <span className={styles.overline}>
              FIGURE {number.padStart(2, "0")} / SVG
            </span>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          <div className={styles.zoomControls}>
            <button
              type="button"
              aria-label="Zoom out"
              disabled={zoom <= 1}
              onClick={() => setZoom(Math.max(1, zoom - 0.25))}
            >
              <ZoomOut size={18} aria-hidden="true" />
            </button>
            <span aria-live="polite">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              aria-label="Zoom in"
              disabled={zoom >= 2.5}
              onClick={() => setZoom(Math.min(2.5, zoom + 0.25))}
            >
              <ZoomIn size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Close figure"
              onClick={() => dialog.current?.close()}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className={styles.figureDialogCanvas}>
          <Image
            src={src}
            alt={caption}
            width={470}
            height={height}
            style={{ width: `${zoom * 100}%`, height: "auto" }}
            unoptimized
          />
        </div>
        <p className={styles.figureDialogCaption}>{caption}</p>
      </dialog>
    </figure>
  );
}
