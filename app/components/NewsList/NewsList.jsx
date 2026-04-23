"use client";
import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import styles from "./NewsList.module.css";

function formatDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  return d.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function NewsList({ data = [] }) {
  const t = useTranslations("Index");

  if (!data.length) return null;

  return (
    <section className={styles.news}>
      <div className={styles.head}>
        <div>
          <div className={styles.caps}>{t("newsCaps")}</div>
          <h2 className={styles.heading}>{t("news")}</h2>
        </div>
        <Link href="/aboutus/news" className={styles.seeAll}>
          {t("newsAll")} →
        </Link>
      </div>
      <ul className={styles.list}>
        {data.slice(0, 6).map((post) => (
          <li key={post._id || post.slug?.current} className={styles.item}>
            <Link href={`/aboutus/news/${post.slug?.current || ""}`} className={styles.itemLink}>
              <div className={styles.itemMain}>
                <div className={styles.itemTitle}>{post.title}</div>
                {post.category && <div className={styles.itemCategory}>{post.category}</div>}
              </div>
              <div className={styles.itemDate}>{formatDate(post.publication_data)}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewsList;
