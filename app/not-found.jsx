import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"], weight: ["400", "600"] });

// Global not-found for unmatched routes. This sits outside the [locale]
// segment, so it has no next-intl context. It renders its own minimal HTML
// document (there is no app/layout.jsx). Next.js returns a correct HTTP 404.
export const metadata = {
  title: "Page not found | ZUBR-2000",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={font.className}>
      <body style={{ margin: 0, background: "#F4F4F2", color: "#1A1A1E" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1rem",
            padding: "3rem 1.5rem",
          }}
        >
          <p style={{ margin: 0, fontSize: "clamp(4rem, 14vw, 9rem)", fontWeight: 600, lineHeight: 1, color: "#8CA600" }}>
            404
          </p>
          <h1 style={{ margin: 0, fontSize: "clamp(1.25rem, 4vw, 2rem)" }}>Page not found</h1>
          <p style={{ margin: 0, maxWidth: "42ch", color: "#4A4A52" }}>
            This page doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              padding: "0.85rem 1.9rem",
              borderRadius: "999px",
              background: "#8CA600",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Back to home
          </a>
        </main>
      </body>
    </html>
  );
}
