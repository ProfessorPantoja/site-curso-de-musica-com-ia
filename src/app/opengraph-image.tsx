import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.marca} — ${site.tagline}`;
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
          padding: "90px",
          background: "#faf7f2",
          color: "#2b2a28",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 28,
            color: "#b06a3f",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "#34507a",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            ♪
          </span>
          {site.marca}
        </div>
        <div
          style={{
            fontSize: 70,
            fontWeight: 600,
            lineHeight: 1.1,
            marginTop: 28,
            maxWidth: 980,
            color: "#2b2a28",
          }}
        >
          Dê a quem você ama uma música que só você poderia criar.
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#6c665c",
            marginTop: 32,
            maxWidth: 900,
            fontFamily: "sans-serif",
          }}
        >
          {`Curso intensivo de ${site.oferta.duracao} · do zero · com inteligência artificial.`}
        </div>
      </div>
    ),
    { ...size },
  );
}
