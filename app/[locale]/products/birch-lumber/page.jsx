"use client";
import React from "react";
import styles from "@/app/styles/page/lumber.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/app/UI/button/button";
import Link from "next-intl/link";

const birchProducts = [
  {
    id: "birch__01",
    title: "beam",
    dimensions: "36/52 × 52 mm",
    image: "/birch-lumber-03.webp",
    sorts: [
      { grade: "A", description: "products-title-01" },
      { grade: "AA/AB", description: "products-title-03" },
      { grade: "B", description: "products-title-02-birch" },
      { grade: "C", description: "products-title-05" }
    ],
    specifications: {
      thickness: "36/52",
      width: "52",
      length: "500-3200"
    }
  }
];

function BirchLumber() {
  const t = useTranslations("Index");

  return (
    <div className={styles.lumberPage}>
      {/* Hero Section */}
      {/* <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t('birch')} {t('lumber')}</h1>
          <p className={styles.heroDescription}>{t('product_birch')}</p>
        </div>
      </section> */}

      {/* Products */}
      {birchProducts.map((product, index) => (
        <section key={product.id} id={product.id} className={styles.productSection}>
          <div className={styles.container}>
            <div className={`${styles.productGrid} ${index % 2 === 1 ? styles.reverse : ''}`}>
              {/* Content Column */}
              <div className={styles.contentColumn}>
                <h2 className={styles.productTitle}>
                  {t('birch')} {t(product.title)} 
                  <span className={styles.dimensions}>{product.dimensions}</span>
                </h2>

                {/* Grades */}
                <div className={styles.grades}>
                  {product.sorts.map((sort) => (
                    <div key={sort.grade} className={styles.gradeItem}>
                      <h3 className={styles.gradeTitle}>{t("sort")} {sort.grade}</h3>
                      <p className={styles.gradeDescription}>{t(sort.description)}</p>
                    </div>
                  ))}
                </div>

                {/* Specifications Table */}
                <div className={styles.specifications}>
                  <h3 className={styles.specsTitle}>{t("quality-title-27")} mm</h3>
                  <div className={styles.specsTable}>
                    <div className={styles.specsRow}>
                      <div className={styles.specsHeader}>{t("products-title-07")}</div>
                      <div className={styles.specsHeader}>{t("quality-title-48")}</div>
                      <div className={styles.specsHeader}>{t("quality-title-35")}</div>
                    </div>
                    <div className={styles.specsRow}>
                      <div className={styles.specsCell}>{product.specifications.thickness}</div>
                      <div className={styles.specsCell}>{product.specifications.width}</div>
                      <div className={styles.specsCell}>{product.specifications.length}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
               
              </div>

              {/* Image Column */}
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={product.image}
                    alt={`${t('birch')} ${t(product.title)}`}
                    width={600}
                    height={400}
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default BirchLumber;