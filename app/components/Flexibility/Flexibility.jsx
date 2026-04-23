import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Flexibility.module.css";

const ITEMS = ["item1", "item2", "item3", "item4"];
const TAGS = ["tag1", "tag2", "tag3", "tag4", "tag5"];

function Flexibility() {
  const t = useTranslations("Index");
  return (
    <section className={styles.flex}>
      <div className={styles.caps}>{t("flexibility.caps")}</div>
      <div className={styles.top}>
        <div className={styles.textCol}>
          <h2 className={styles.title}>{t("flexibility.title")}</h2>
          <p className={styles.intro}>{t("flexibility.intro")}</p>
        </div>
        <div className={styles.grid}>
          {ITEMS.map((i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTitle}>{t(`flexibility.${i}.title`)}</div>
              <div className={styles.cardSpec}>{t(`flexibility.${i}.spec`)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tags}>
        {TAGS.map((k) => (
          <span key={k} className={styles.tag}>{t(`flexibility.${k}`)}</span>
        ))}
      </div>
    </section>
  );
}

export default Flexibility;
