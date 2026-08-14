import { ImageResponse } from "next/og"
import config from "@/config"

export const runtime = "edge"
export const alt = config.social.imageAlt
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export default function OpenGraphImage() {

  

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: `linear-gradient(135deg, ${config.brand.primary} 0%, #5a1429 55%, #3d0e1c 100%)`,
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
backgroundSize: "48px 48px",
            opacity: 0.35,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.08)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <svg viewBox="0 0 24 24" width="54" height="54" fill="none">
              <path
                d="M3.5 12 H7 L10.5 18 L15.5 6 H20.5"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 42,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {config.app.name}
          </div>
        </div>

        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 920,
            marginBottom: 28,
            position: "relative",
          }}
        >
          {config.social.title}
        </div>

        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 30,
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 900,
            position: "relative",
          }}
        >
          {config.social.description}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontFamily: "Arial, sans-serif",
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {config.app.domain}
        </div>
      </div>
    ),
    {
      ...size,
      
    }
  )
}
