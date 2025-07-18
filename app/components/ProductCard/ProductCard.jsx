import React from "react";
import Image from "next/image";
import Link from "next-intl/link";
import styles from "@/app/styles/component/productCard.module.css";

const ProductCard = ({ 
  image, 
  title, 
  subtitle, 
  link, 
  linkText,
  badge,
  className = "" 
}) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <Link href={link} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className={styles.image}
            loading="lazy"
          />
          {badge && (
            <span className={styles.badge}>{badge}</span>
          )}
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{title}</h3>
              {subtitle && (
                <p className={styles.overlaySubtitle}>{subtitle}</p>
              )}
              <span className={styles.linkButton}>
                {linkText}
                <svg 
                  className={styles.arrow} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    d="M6 10h8m0 0l-3-3m3 3l-3 3" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default React.memo(ProductCard);