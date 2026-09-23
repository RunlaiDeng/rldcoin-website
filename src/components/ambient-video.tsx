"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AmbientVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function AmbientVideo({
  src,
  poster,
  className = "",
}: AmbientVideoProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const video = useRef<HTMLVideoElement | null>(null);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [nearby, setNearby] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () =>
      setMotionEnabled(!motion.matches && !connection?.saveData);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!container.current) return;
    const nearObserver = new IntersectionObserver(
      ([entry]) => setNearby(entry.isIntersecting),
      { rootMargin: "400px" },
    );
    const visibleObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    nearObserver.observe(container.current);
    visibleObserver.observe(container.current);
    return () => {
      nearObserver.disconnect();
      visibleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (motionEnabled && nearby && visible) {
      void video.current?.play().catch(() => undefined);
    } else {
      video.current?.pause();
    }
  }, [motionEnabled, nearby, visible]);

  return (
    <div
      className={`ambient-video ${className}`}
      ref={container}
      aria-hidden="true"
    >
      <Image src={poster} alt="" fill sizes="100vw" />
      {motionEnabled && nearby && (
        <video
          ref={video}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          onCanPlay={() => {
            if (visible) void video.current?.play().catch(() => undefined);
          }}
        />
      )}
    </div>
  );
}
