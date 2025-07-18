"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/page/products.module.css";
import ProductCard from "@/app/components/ProductCard/ProductCard";

// Дані продуктів винесені в константу для кращої організації
const productData = {
  oak: {
    title: "oak",
    description: "product_oak",
    products: [
      {
        id: "oak-board",
        image: { src: "/oak-lumber-01.webp", alt: "Oak board lumber" },
        title: "board",
        subtitle: "54 × 110 mm",
        link: "/products/oak-lumber#oak__02",
        badge: null
      },
      {
        id: "oak-beam",
        image: { src: "/oak-lumber-02.webp", alt: "Oak beam lumber" },
        title: "beam", 
        subtitle: "22-54 × 54-315 mm",
        link: "/products/oak-lumber#oak__01",
        badge: null
      },
      {
        id: "oak-curved",
        image: { src: "/oak-lumber-03.webp", alt: "Oak curved elements" },
        title: "curvedelements",
        subtitle: "22-54 × 54-315 mm",
        link: "/products/oak-lumber#oak__03",
        badge: null
      }
    ]
  },
  ash: {
    title: "ash",
    description: "product_ash",
    products: [
      {
        id: "ash-board",
        image: { src: "/ash-lumber-03.webp", alt: "Ash board lumber" },
        title: "board",
        subtitle: "26-55 × 76-315 mm",
        link: "/products/ash-lumber#ash__01",
        badge: null
      }
    ]
  },
  birch: {
    title: "birch",
    description: "product_birch",
    products: [
      {
        id: "birch-beam",
        image: { src: "/birch-lumber-03.webp", alt: "Birch beam lumber" },
        title: "beam",
        subtitle: "36/52 × 52 mm",
        link: "/products/birch-lumber#birch__01",
        badge: null
      }
    ]
  },
  modrina: {
    title: "modrina",
    description: "product_modrina",
    products: [
      {
        id: "modrina-terrace",
        image: { src: "/modrina-lumber-01.webp", alt: "Modrina terrace board" },
        title: "terraceboard",
        subtitle: "21-30 × 123-500 mm",
        link: "/products/modrina-lumber#modrina__01",
        badge: "NEW"
      },
      {
        id: "modrina-basket",
        image: { src: "/modrina-lumber-05.webp", alt: "Modrina basket" },
        title: "basket",
        subtitle: "285-375 × 312-500 mm",
        link: "/products/modrina-lumber#modrina__03",
        badge: null
      }
    ]
  }
};

function Products() {
  const t = useTranslations("Index");

  return (
    <div className={styles.pageContainer}>
      {Object.entries(productData).map(([key, category]) => (
        <section key={key} id={key} className={styles.categorySection}>
          <div className={styles.container}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>
                {t(category.title)}
              </h2>
              <p className={styles.categoryDescription}>
                {t(category.description)}
              </p>
            </div>

            <div className={styles.productsGrid}>
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={t(product.title)}
                  subtitle={product.subtitle}
                  link={product.link}
                  linkText={t("open")}
                  badge={product.badge}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;