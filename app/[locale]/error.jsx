"use client";

import { useTranslations } from "next-intl";
import Button from "@/app/UI/button/button";

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

// Error boundary for runtime errors within a locale segment. Must be a client
// component (Next.js requirement). The next-intl provider lives in the parent
// layout, which stays mounted when a child throws, so t() is available here.
export default function Error({ error, reset }) {
  const t = useTranslations("Index");
  return (
    <section style={wrap}>
      <h1 style={{ margin: 0, fontSize: "clamp(1.25rem, 4vw, 2rem)", color: "var(--color-text)" }}>
        {t("error.title")}
      </h1>
      <p style={{ margin: 0, maxWidth: "42ch", color: "var(--color-text-muted)" }}>
        {t("error.text")}
      </p>
      <div style={{ marginTop: "1rem" }}>
        <Button title_button={t("error.retry")} onClick={() => reset()} />
      </div>
    </section>
  );
}
