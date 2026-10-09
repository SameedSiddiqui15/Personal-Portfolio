import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} · Frontend Engineer (Angular, Next.js, TypeScript)`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#08090d",
          backgroundImage: "radial-gradient(ellipse at 75% 20%, rgba(242,181,68,0.28), transparent 55%)",
          color: "#eceef3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#f2b544",
              color: "#1a1206",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            SS
          </div>
          <div style={{ fontSize: 30, color: "#9097a8" }}>{`${profile.availability} · Karachi, PK`}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 40, marginTop: 20, color: "#f2b544" }}>Frontend Engineer</div>
          <div style={{ fontSize: 32, marginTop: 10, color: "#9097a8" }}>Angular · Next.js · React · TypeScript</div>
        </div>
      </div>
    ),
    size,
  );
}
