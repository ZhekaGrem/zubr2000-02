"use client";
import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/component/footer.module.css";

function Footer() {
  const t = useTranslations("Index");
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>{t("home")}</Link>
          <Link href="/aboutus" className={styles.link}>{t("aboutus")}</Link>
          <Link href="/products" className={styles.link}>{t("product")}</Link>
          <Link href="/contact" className={styles.link}>{t("contact")}</Link>
        </nav>
      </div>
    </div>
  );
}

export default React.memo(Footer);
