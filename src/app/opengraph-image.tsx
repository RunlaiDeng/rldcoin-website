import { ImageResponse } from "next/og";
export const alt = "Rldcoin — A peer-to-peer future beyond Earth";
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
        background: "#f5f6f3",
        color: "#102d3b",
        padding: "64px 75px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
        rldcoin<span style={{ color: "#c98b48" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 83,
          letterSpacing: "-4px",
          fontWeight: 700,
          lineHeight: 1.06,
        }}
      >
        <span>For a future</span>
        <span>beyond Earth.</span>
      </div>
      <div style={{ display: "flex", fontSize: 23, color: "#506773" }}>
        A peer-to-peer transfer system for humanity’s interstellar future.
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: -150,
          top: 40,
          width: 560,
          height: 560,
          borderRadius: "50%",
          border: "1px solid #c4d1d4",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 390,
            height: 390,
            margin: 84,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #dce8e8, #5b7d85)",
            border: "16px solid #e4ebeb",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
