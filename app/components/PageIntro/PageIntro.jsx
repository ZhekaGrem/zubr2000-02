import React from "react";
import Image from "next/image";
import Link from "next-intl/link";
import styles from "./PageIntro.module.css";

/**
 * Канонічний hero сайту. 3 санкціоновані варіації (див. DESIGN.md → page-hero):
 *  - "editorial" (default): повнокадрове фото + overlay, білий текст. Контент/маркетинг.
 *  - "split": текст-панель (темна) + контейнерне фото праворуч. «Текст + один візуал».
 *  - "minimal": без фото, світлий фон + акцентна лінія. Сторінки-дані (таблиці/список).
 * Спільне для всіх: лівобічність, eyebrow (caps) → серіф-заголовок → lead.
 */
function PageIntro({
  variant = "editorial",
  caps,
  title,
  lead,
  imageSrc,
  imageAlt,
  imagePriority = false,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
}) {
  const Text = (
    <div className={styles.text}>
      {caps && <div className={styles.caps}>{caps}</div>}
      <h1 className={styles.title}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
      {(ctaLabel || ctaSecondaryLabel) && (
        <div className={styles.ctaRow}>
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className={styles.ctaPrimary}>
              {ctaLabel}
            </Link>
          )}
          {ctaSecondaryLabel && ctaSecondaryHref && (
            <Link href={ctaSecondaryHref} className={styles.ctaSecondary}>
              {ctaSecondaryLabel} →
            </Link>
          )}
        </div>
      )}
    </div>
  );

  if (variant === "minimal") {
    return (
      <section className={`${styles.intro} ${styles.minimal}`}>
        <div className={styles.container}>
          {Text}
          <div className={styles.accent} aria-hidden />
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className={`${styles.intro} ${styles.split}`}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            <div className={styles.splitText}>{Text}</div>
            <div className={styles.splitMedia}>
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={imagePriority}
                  className={styles.image}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // editorial (default)
  return (
    <section className={`${styles.intro} ${styles.hasImage}`}>
      {imageSrc && (
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            sizes="100vw"
            priority={imagePriority}
            className={styles.image}
          />
          <div className={styles.overlay} />
        </div>
      )}
      <div className={styles.container}>{Text}</div>
    </section>
  );
}

export default PageIntro;
