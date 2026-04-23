"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import styles from "@/app/styles/page/aboutus.module.css";

const PRINCIPLES = ["aboutus-message3", "aboutus-message4", "aboutus-message5", "aboutus-message6", "aboutus-message7"];
const MANUFACTURING = ["aboutus-message11", "aboutus-message12", "aboutus-message13", "aboutus-message14", "aboutus-message15", "aboutus-message16"];
const QUALITY = ["aboutus-message17", "aboutus-message18", "aboutus-message19", "aboutus-message20"];

function AboutUs() {
  const t = useTranslations("Index");

  return (
    <>
      <PageIntro
        title={t("aboutus")}
        lead={t("aboutus-message1")}
        imageSrc="/photo_tittl_№2.webp"
      />

      <section className={styles.principles}>
        <h2 className={styles.sectionHeading}>{t("aboutus-message2")}</h2>
        <ul className={styles.principleList}>
          {PRINCIPLES.map((key, i) => (
            <li key={key} className={styles.principleItem}>
              <span className={styles.principleIndex}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.principleBody}>{t(key)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.paragraphs}>
          <p>{t("aboutus-message8")}</p>
          <p>{t("aboutus-message9")}</p>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardKind}>{t("certificates")}</div>
          <ul className={styles.cardList}>
            <li className={styles.cardRow}>Trade Leaders</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardKind}>{t("manufacturing")}</div>
          <ul className={styles.cardList}>
            {MANUFACTURING.map((k) => <li key={k} className={styles.cardRow}>{t(k)}</li>)}
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardKind}>{t("quality")}</div>
          <ul className={styles.cardList}>
            <li className={styles.cardRow}>{t(QUALITY[0])}</li>
            <li className={styles.cardRow}>{t(QUALITY[1])}</li>
            <li className={styles.cardRow}>{t(QUALITY[2])} {t(QUALITY[3])}</li>
          </ul>
        </div>
      </section>

      <section className={styles.outro}>
        <p>{t("aboutus-message10")}</p>
      </section>
    </>
  );
}

export default AboutUs;
