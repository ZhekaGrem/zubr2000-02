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
import Reveal from "@/app/components/Reveal/Reveal";
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

const FEATURES = [
  { titleKey: "feat1_title", bodyKey: "feat1_body", image: "/oak-lumber-01.webp" },
  { titleKey: "feat2_title", bodyKey: "feat2_body", image: "/photo_product_7.webp" },
  { titleKey: "feat3_title", bodyKey: "feat3_body", image: "/pack-product.webp" },
];

function Home() {
  const t = useTranslations("Index");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getData().then(setBlogData);
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/photo_tittl_№1.1.webp"
          alt={t("home_h1")}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroBody}>
          <div className={styles.heroInner}>
            <div className={styles.heroEyebrow}>ZUBR-2000</div>
            <h1 className={styles.heroTitle}>{t("home_h1")}</h1>
            <p className={styles.heroLead}>{t("hero_sub")}</p>
            <div className={styles.heroCtas}>
              <Link href="/contact#contact_name" className={styles.btnPrimary}>
                {t("writeus")}
              </Link>
              <Link href="/products" className={styles.btnGhost}>
                {t("product")} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <Metrics />
      </Reveal>

      <Reveal as="section" className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutCaps}>{t("aboutus")}</div>
          <p className={styles.aboutLead}>{t("title1")}</p>
          <p className={styles.aboutBody}>{t("title6")}</p>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.features}>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <article key={f.titleKey} className={styles.featureCard}>
              <div className={styles.featureImg}>
                <Image
                  src={f.image}
                  alt={t(f.titleKey)}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className={styles.featureTitle}>{t(f.titleKey)}</h3>
              <p className={styles.featureBody}>{t(f.bodyKey)}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <section className={styles.species}>
        <Reveal>
          <div className={styles.sectionCaps}>{t("catalogCaps")}</div>
          <h2 className={styles.sectionHeading}>{t("ourproduct")}</h2>
          <p className={styles.sectionHint}>{t("catalogHint")}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.speciesGrid}>
            {SPECIES.map((s) => (
              <Link key={s.key} href={s.href} className={styles.speciesCard}>
                <div className={styles.speciesImage}>
                  <Image src={s.image} alt={t(s.key)} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.speciesPanel}>
                  <div className={styles.speciesText}>
                    <div className={styles.speciesLatin}>{s.latin}</div>
                    <div className={styles.speciesName}>{t(s.key)}</div>
                    <div className={styles.speciesCta}>{t("read")} →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className={styles.trust}>
        <div className={styles.trustInner}>
          <div className={styles.trustText}>
            <div className={styles.trustCaps}>{t("certificatesCaps")}</div>
            <div className={styles.trustMarks}>
              {/* FSC наразі немає — тимчасово прибрано
              <span className={styles.trustMark}>FSC®</span>
              <span className={styles.trustDot} aria-hidden>·</span>
              */}
              <span className={styles.trustMark}>Trade Leaders&rsquo; Club</span>
              <span className={styles.trustDot} aria-hidden>·</span>
              <span className={styles.trustMark}>FORDAQ</span>
            </div>
          </div>
          <Link href="/aboutus/certificates" className={styles.trustLink}>
            {t("certificates")} →
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <Flexibility />
      </Reveal>

      <Suspense fallback={<Loading />}>
        <NewsList data={blogData} />
      </Suspense>
    </>
  );
}

export default Home;
