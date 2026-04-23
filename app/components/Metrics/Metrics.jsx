import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Metrics.module.css";

const KEYS = ["years", "species", "moisture", "custom"];

function Metrics() {
  const t = useTranslations("Index");
  return (
    <section className={styles.metrics}>
      {KEYS.map((k) => (
        <div key={k} className={styles.item}>
          <div className={styles.value}>{t(`metric.${k}.value`)}</div>
          <div className={styles.label}>{t(`metric.${k}.label`)}</div>
        </div>
      ))}
    </section>
  );
}

export default Metrics;
