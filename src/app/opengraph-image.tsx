import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.nome} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b0614 0%, #1a0b2e 50%, #2d0a4e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 30,
            color: "#c4b5fd",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          <span style={{ fontSize: 44 }}>🎵</span>
          {site.nome.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 30,
            maxWidth: 980,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a78bca",
            marginTop: 36,
            maxWidth: 900,
          }}
        >
          Do zero ao seu primeiro hit — sem precisar de teoria musical.
        </div>
      </div>
    ),
    { ...size },
  );
}
