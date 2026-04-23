"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import EditorialRow from "@/app/components/EditorialRow/EditorialRow";
import styles from "@/app/styles/page/manufacturing-process.module.css";

const STEPS = [
  { images: [{ src: "/photo_product_3.webp", alt: "" }], titleKey: "aboutus-message11", bodyKey: "manufacturing_process_02" },
  { images: [{ src: "/photo_product_4.webp", alt: "" }], titleKey: "aboutus-message12", bodyKey: "manufacturing_process_03" },
  { images: [
      { src: "/photo_product_5_1.webp", alt: "" },
      { src: "/photo_product_5_2.webp", alt: "" },
      { src: "/photo_product_5_3.webp", alt: "" },
    ], titleKey: "aboutus-message13", bodyKey: "manufacturing_process_04" },
  { images: [{ src: "/photo_product_7.webp", alt: "" }], titleKey: "aboutus-message14", bodyKey: "manufacturing_process_05" },
  { images: [{ src: "/pack-product.webp", alt: "" }], titleKey: "aboutus-message15", bodyKey: "manufacturing_process_06" },
  { images: [{ src: "/photo_product_6.webp", alt: "" }], titleKey: "aboutus-message16", bodyKey: "manufacturing_process_07" },
];

function ManufacturingProcess() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        title={t("manufacturing")}
        lead={t("manufacturing_process_01")}
        imageSrc="/manufacturing_hero.png"
        imageAlt={t("manufacturing")}
      />

      <section className={styles.rows}>
        {STEPS.map((s, i) => (
          <EditorialRow
            key={i}
            index={i + 1}
            reverse={i % 2 === 1}
            images={s.images}
            title={t(s.titleKey)}
            body={t(s.bodyKey)}
          />
        ))}
      </section>

      <section className={styles.outro}>
        <h2>{t("manufacturing_process_08")}</h2>
        <p>{t("manufacturing_process_09")}</p>
      </section>
    </>
  );
}

export default ManufacturingProcess;
