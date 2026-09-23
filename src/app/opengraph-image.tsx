import { ImageResponse } from "next/og";

export const alt =
  "Rldcoin — payments for humanity’s interstellar future, illustrated between Earth and a future world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5f8f7",
        color: "#102d3b",
        padding: "62px 72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
        rldcoin<span style={{ color: "#c98b48" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 65,
          letterSpacing: "-3px",
          fontWeight: 700,
          lineHeight: 1.05,
        }}
      >
        <span>Payments for</span>
        <span>humanity’s</span>
        <span style={{ color: "#557784" }}>interstellar future.</span>
      </div>
      <div style={{ display: "flex", fontSize: 20, color: "#506773" }}>
        Building peer-to-peer payments across future star systems.
      </div>
      <svg
        width="465"
        height="520"
        viewBox="0 0 465 520"
        style={{ position: "absolute", right: -5, top: 35 }}
        aria-hidden="true"
      >
        <circle
          cx="209"
          cy="322"
          r="166"
          fill="none"
          stroke="#c9d9dc"
          strokeWidth="2"
        />
        <circle
          cx="209"
          cy="322"
          r="126"
          fill="#a8c4c8"
          stroke="#e1eaea"
          strokeWidth="8"
        />
        <path
          d="M95 290C156 228 200 245 246 278S292 332 335 300"
          fill="none"
          stroke="#648891"
          strokeWidth="15"
          opacity=".6"
        />
        <path
          d="M100 366C150 338 180 365 222 393S287 408 328 380"
          fill="none"
          stroke="#648891"
          strokeWidth="18"
          opacity=".55"
        />
        <circle
          cx="351"
          cy="124"
          r="99"
          fill="none"
          stroke="#ddc9ad"
          strokeWidth="2"
        />
        <circle
          cx="351"
          cy="124"
          r="69"
          fill="#d9b991"
          stroke="#eee3d4"
          strokeWidth="6"
        />
        <path
          d="M287 112C319 96 340 105 360 116S399 132 420 115"
          fill="none"
          stroke="#fff3df"
          strokeWidth="8"
          opacity=".5"
        />
        <path
          d="M305 255C329 214 338 196 340 193"
          fill="none"
          stroke="#c98b48"
          strokeWidth="4"
          strokeDasharray="5 9"
          strokeLinecap="round"
        />
        <circle
          cx="325"
          cy="224"
          r="21"
          fill="#fffaf2"
          stroke="#c98b48"
          strokeWidth="2"
        />
        <path
          d="M319 234V214H327C335 214 335 224 327 224H319M326 224L333 234"
          fill="none"
          stroke="#9f703f"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="305" cy="255" r="5" fill="#c98b48" />
        <circle cx="340" cy="193" r="5" fill="#c98b48" />
      </svg>
    </div>,
    { ...size },
  );
}
