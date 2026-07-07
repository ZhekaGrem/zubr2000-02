"use client";

import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const wrap = {
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "1rem",
  padding: "5rem 1.5rem",
};

const code = {
  margin: 0,
  fontFamily: "var(--font-display)",
  fontSize: "clamp(4rem, 14vw, 9rem)",
  fontWeight: 600,
  lineHeight: 1,
  color: "var(--color-primary)",
};

const link = {
  display: "inline-block",
  marginTop: "1.5rem",
  padding: "0.85rem 1.9rem",
  borderRadius: "999px",
  background: "var(--color-primary)",
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
};

// Localized 404. Rendered inside app/[locale]/layout.jsx, so it inherits the
// Navbar, Footer and next-intl messages automatically.
export default function NotFound() {
  const t = useTranslations("Index");
  return (
    <section style={wrap}>
      <p style={code}>404</p>
      <h1 style={{ margin: 0, fontSize: "clamp(1.25rem, 4vw, 2rem)", color: "var(--color-text)" }}>
        {t("notFound.title")}
      </h1>
      <p style={{ margin: 0, maxWidth: "42ch", color: "var(--color-text-muted)" }}>
        {t("notFound.text")}
      </p>
      <Link href="/" style={link}>
        {t("notFound.back")}
      </Link>
    </section>
  );
}
