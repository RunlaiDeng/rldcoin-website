"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const scenes = [
  {
    name: "Earth / ISS",
    detail: "Earth from the ISS · continuous camera footage",
    video: "/videos/earth-iss-day.mp4",
    poster: "/images/earth-iss-day.jpg",
    source:
      "https://commons.wikimedia.org/wiki/File:Earth_Views_from_the_International_Space_Station.webm",
    className: "earth",
  },
  {
    name: "Jupiter / Voyager 1",
    detail: "Jupiter · Voyager 1 photographs · time lapse",
    video: "/videos/voyager-jupiter.mp4",
    poster: "/images/voyager-jupiter.jpg",
    source: "https://science.nasa.gov/resource/voyager-blue-movie/",
    className: "jupiter",
  },
  {
    name: "Mars / Perseverance",
    detail: "Mars · Perseverance rover · real camera video",
    video: "/videos/mars-horizon.mp4",
    poster: "/images/mars-horizon.jpg",
    source:
      "https://commons.wikimedia.org/wiki/File:Perseverance%27s_Mastcam-Z_Video_of_Ingenuity_Hovering.webm",
    className: "mars",
  },
  {
    name: "Earth / Aurora",
    detail: "Earth aurora · ISS photographs · time lapse",
    video: "/videos/earth-iss-aurora.mp4",
    poster: "/images/earth-iss-aurora.jpg",
    source:
      "https://commons.wikimedia.org/wiki/File:Earth_Illuminated-_ISS_Time-lapse_Photography.webm",
    className: "aurora",
  },
] as const;

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const hero = useRef<HTMLDivElement | null>(null);
  const transition = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(0);

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
    if (!hero.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!motionEnabled || !visible) {
      videos.current.forEach((video) => video?.pause());
      return;
    }
    void videos.current[active]?.play().catch(() => undefined);
  }, [active, motionEnabled, visible]);

  useEffect(
    () => () => {
      if (transition.current) clearTimeout(transition.current);
    },
    [],
  );

  const showScene = useCallback(
    async (index: number) => {
      if (index === activeRef.current) return;
      if (transition.current) clearTimeout(transition.current);
      const outgoing = videos.current[activeRef.current];
      const incoming = videos.current[index];
      if (motionEnabled && visible && incoming) {
        incoming.currentTime = 0;
        try {
          await incoming.play();
        } catch {
          // The matching photograph remains visible if autoplay is blocked.
        }
      }
      activeRef.current = index;
      setActive(index);
      transition.current = setTimeout(() => outgoing?.pause(), 950);
    },
    [motionEnabled, visible],
  );

  return (
    <>
      <div className="cinematic-media" ref={hero}>
        {scenes.map((scene, index) => (
          <div
            className={`cinematic-scene cinematic-scene-${scene.className}${active === index ? " is-active" : ""}`}
            key={scene.name}
            aria-hidden="true"
          >
            <Image
              className="cinematic-image"
              src={scene.poster}
              alt=""
              fill
              sizes="100vw"
              preload={index === 0}
            />
            {motionEnabled && (
              <video
                ref={(element) => {
                  videos.current[index] = element;
                }}
                className="cinematic-video"
                src={scene.video}
                poster={scene.poster}
                muted
                playsInline
                preload={
                  index === active || index === (active + 1) % scenes.length
                    ? "auto"
                    : "none"
                }
                disablePictureInPicture
                onEnded={() => {
                  if (activeRef.current === index && visible) {
                    void showScene((index + 1) % scenes.length);
                  }
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="cinematic-scene-controls">
        <div
          className="cinematic-scene-tabs"
          aria-label="Real planetary footage"
        >
          {scenes.map((scene, index) => (
            <button
              type="button"
              key={scene.name}
              className={active === index ? "is-active" : ""}
              aria-pressed={active === index}
              onClick={() => void showScene(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {scene.name}
            </button>
          ))}
        </div>
        <a href={scenes[active].source} target="_blank" rel="noreferrer">
          {scenes[active].detail} ↗
        </a>
      </div>
    </>
  );
}
