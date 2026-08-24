import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#050505",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: "0.2em",
          color: "#71717a",
        }}
      >
        <span>CAELUM // PORTFOLIO</span>
        <span>2026</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 74,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          DREW KYUNGJIN PARK
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            letterSpacing: "0.14em",
            color: "#a1a1aa",
          }}
        >
          AUTONOMOUS SYSTEMS // UAVS // ROBOTICS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "1px solid #27272a",
          paddingTop: 28,
        }}
      >
        <span
          style={{
            fontSize: 18,
            letterSpacing: "0.16em",
            color: "#71717a",
          }}
        >
          SOFTWARE // FLIGHT // SYSTEMS
        </span>

        <span
          style={{
            fontSize: 22,
            letterSpacing: "0.08em",
          }}
        >
          drewpark.dev
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
