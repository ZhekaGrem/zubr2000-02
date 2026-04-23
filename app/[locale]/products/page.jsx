"use client";
import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import styles from "@/app/styles/page/products.module.css";

const SPECIES = [
  { key: "oak", href: "/products/oak-lumber", latin: "Quercus robur", image: "/oak-lumber-03.webp" },
  { key: "ash", href: "/products/ash-lumber", latin: "Fraxinus excelsior", image: "/ash-lumber-03.webp" },
  { key: "birch", href: "/products/birch-lumber", latin: "Betula pendula", image: "/birch-lumber-03.webp" },
  { key: "modrina", href: "/products/modrina-lumber", latin: "Larix decidua", image: "/modrina-lumber-03.webp" },
];

function ProductsPage() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        caps={t("catalogCaps")}
        title={t("product")}
        lead={t("title5")}
      />

      <section className={styles.list}>
        {SPECIES.map((s) => (
          <Link key={s.key} href={s.href} className={styles.card}>
            <div className={styles.text}>
              <div className={styles.latin}>{s.latin}</div>
              <h2 className={styles.name}>{t(s.key)}</h2>
              <div className={styles.chips}>
                <span className={styles.chipStock}>{t("aboutus-message18")}</span>
              </div>
              <div className={styles.cta}>{t("read")} →</div>
            </div>
            <div className={styles.image}>
              <Image src={s.image} alt={t(s.key)} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default ProductsPage;
