"use client";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { client } from "@/app/_lib/sanity";
import Loading from "@/app/[locale]/loading";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Metrics from "@/app/components/Metrics/Metrics";
import Flexibility from "@/app/components/Flexibility/Flexibility";
import NewsList from "@/app/components/NewsList/NewsList";
import styles from "@/app/styles/page/page.module.css";

async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  return client.fetch(query);
}

const SPECIES = [
  { key: "oak", href: "/products/oak-lumber", latin: "Quercus robur", image: "/oak-lumber-03.webp" },
  { key: "ash", href: "/products/ash-lumber", latin: "Fraxinus excelsior", image: "/ash-lumber-03.webp" },
  { key: "birch", href: "/products/birch-lumber", latin: "Betula pendula", image: "/birch-lumber-03.webp" },
  { key: "modrina", href: "/products/modrina-lumber", latin: "Larix decidua", image: "/modrina-lumber-03.webp" },
];

function Home() {
  const t = useTranslations("Index");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getData().then(setBlogData);
  }, []);

  return (
    <>
      <PageIntro
        caps="Zubr2000"
        title={t("aboutus")}
        lead={[t("title1"), t("title6")].join(" ")}
        imageSrc="/photo_tittl_№1.1.webp"
        imageAlt={t("aboutus")}
        imagePriority
      />

      <Metrics />

      <section className={styles.species}>
        <div className={styles.sectionCaps}>{t("catalogCaps")}</div>
        <h2 className={styles.sectionHeading}>{t("ourproduct")}</h2>
        <p className={styles.sectionHint}>{t("catalogHint")}</p>
        <div className={styles.speciesGrid}>
          {SPECIES.map((s) => (
            <Link key={s.key} href={s.href} className={styles.speciesCard}>
              <div className={styles.speciesText}>
                <div className={styles.speciesLatin}>{s.latin}</div>
                <div className={styles.speciesName}>{t(s.key)}</div>
                <div className={styles.speciesCta}>{t("read")} →</div>
              </div>
              <div className={styles.speciesImage}>
                <Image src={s.image} alt={t(s.key)} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Flexibility />

      <Suspense fallback={<Loading />}>
        <NewsList data={blogData} />
      </Suspense>
    </>
  );
}

export default Home;
