"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/page/news.module.css";
import { client } from "@/app/_lib/sanity";
import NewsBlog from "@/app/components/newsblog/NewsBlog";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";

async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  const data = await client.fetch(query);
  return data;
}

export default function News() {
  const t = useTranslations("Index");
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setBlogData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <PageIntro caps="2.4" title={t("news")} />
      <section className={styles.body}>
        <div className={styles.App}>
          <div className={styles.blog__container}>
            <NewsBlog data={blogData} />
          </div>
        </div>
      </section>
    </>
  );
}
