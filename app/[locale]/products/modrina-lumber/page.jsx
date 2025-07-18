"use client";
import React from "react";
import styles from "@/app/styles/page/lumber.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/app/UI/button/button";
import Link from "next-intl/link";

const modrinaProducts = [
  {
    id: "modrina__01",
    title: "terraceboard",
    dimensions: "21-30 × 123-500 mm",
    images: [
      "/modrina-lumber-01.webp",
      "/modrina-lumber-03.webp",
      "/modrina-lumber-06.webp"
    ],
    sorts: [
      { grade: "A", description: "products-title-01" },
      { grade: "B", description: "products-title-02-ash" }
    ],
    specifications: {
      thickness: "21-30",
      width: "123-500",
      length: "500-3000"
    }
  },
  {
    id: "modrina__02",
    title: "basket",
    dimensions: "400-700 × 400-500 × 285-375 mm",
    images: ["/modrina-lumber-05.webp"],
    sorts: [
      { grade: "A", description: "products-title-01" },
      { grade: "B", description: "products-title-02-ash" }
    ],
    specifications: {
      height: ["285", "375", "285"],
      width: ["400", "500", "312"],
      length: ["400", "500", "700"]
    },
    isBasket: true
  }
];

function ModrinaLumber() {
  const t = useTranslations("Index");

  return (
    <div className={styles.lumberPage}>
      {/* Hero Section */}
      {/* <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t('modrina')} {t('lumber')}</h1>
          <p className={styles.heroDescription}>{t('product_modrina')}</p>
        </div>
      </section> */}

      {/* Products */}
      {modrinaProducts.map((product, index) => (
        <section key={product.id} id={product.id} className={styles.productSection}>
          <div className={styles.container}>
            <div className={`${styles.productGrid} ${index % 2 === 1 ? styles.reverse : ''}`}>
              {/* Content Column */}
              <div className={styles.contentColumn}>
                <h2 className={styles.productTitle}>
                  {t('modrina')} {t(product.title)} 
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
                      <div className={styles.specsHeader}>
                        {product.isBasket ? t("quality-title-35") : t("products-title-07")}
                      </div>
                      <div className={styles.specsHeader}>{t("quality-title-48")}</div>
                      <div className={styles.specsHeader}>
                        {product.isBasket ? t("products-title-07") : t("quality-title-35")}
                      </div>
                    </div>
                    {product.isBasket ? (
                      product.specifications.height.map((_, idx) => (
                        <div key={idx} className={styles.specsRow}>
                          <div className={styles.specsCell}>{product.specifications.length[idx]}</div>
                          <div className={styles.specsCell}>{product.specifications.width[idx]}</div>
                          <div className={styles.specsCell}>{product.specifications.height[idx]}</div>
                        </div>
                      ))
                    ) : (
                      <div className={styles.specsRow}>
                        <div className={styles.specsCell}>{product.specifications.thickness}</div>
                        <div className={styles.specsCell}>{product.specifications.width}</div>
                        <div className={styles.specsCell}>{product.specifications.length}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
               
              </div>

              {/* Image Column */}
              <div className={styles.imageColumn}>
                {product.images.map((image, idx) => (
                  <div key={idx} className={styles.imageWrapper}>
                    <Image
                      className={styles.productImage}
                      src={image}
                      alt={`${t('modrina')} ${t(product.title)} ${idx + 1}`}
                      width={600}
                      height={400}
                      quality={90}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ModrinaLumber;