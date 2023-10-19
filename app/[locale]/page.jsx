"use client";
import Link from "next-intl/link";
import styles from "@/app/styles/page.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import MiniBlog from "../components/miniblog/MiniBlog";
import { client } from "@/app/lib/sanity";
import Button from "@/app/UI/button/button";

async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  const data = await client.fetch(query);
  return data;
}

export default function Home() {
  const t = useTranslations("Index");
  const [isActive, setIsActive] = useState(false);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setBlogData(data);
    }
    fetchData();
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={styles.content}>
        <section className={`${styles.container} `}>
          <div className={styles.block}>
         
            <div className={`${styles.col} `}>
              <div className={`${styles.row}  `}>
                <div className={styles.section__title}>
                  <span>{t("aboutus")}</span>
                </div>
                <p>{t("title1")}</p>
                <p>{t("title2")}</p>
                <p>{t("title3")}</p>
              </div>
            </div>
          <div className={`${styles.col__5} ${styles.col__6}`}>
              <div className={styles.row}>
                <Image
                  className={styles.info__img}
                  src="/new-title.webp"
                  width={800}
                  height={800}
                  alt="lumber sales zubr2000 Ukranian зубр2000 продаж пиломатеріали Україна"
                  loading="eager"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.container}`}>
          <div className={styles.block}>
            <div className={styles.section__title}>
              <span>{t("news")}</span>
              <MiniBlog data={blogData} />
            </div>
          </div>
          
        </section>

        <section className={`${styles.container} `}>
          <div className={styles.block}>
          <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                  alt="lumber sales zubr2000 Ukranian зубр2000 продаж пиломатеріали Україна"
                  className={styles.info__img}
                  src="/photo_product_0.webp"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div className={`${styles.col} ${styles.production__us} `}>
              
              <div className={`${styles.row} `}>
                
                <div className={styles.section__title}>
                  <span>{t("ourproduct")}</span>
                </div>
                <ul className={`${styles.list}`}>
                  <li>
                    <Link
                      rel="preload"
                      href="/aboutus/certificates"
                      className={styles.navbar__link}
                    >
                      {t("certificates")}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      rel="preload"
                      href="/aboutus/quality-standarts"
                      className={styles.navbar__link}
                    >
                      {t("quality")}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      rel="preload"
                      href="/aboutus/manufacturing-process"
                      className={styles.navbar__link}
                    >
                      {t("manufacturing")}
                    </Link>{" "}
                  </li>
                </ul>
                <ul className={`${styles.list}`}>
                  <li>
                    {" "}
                    <Link
                      rel="preload"
                      href="/products/oak-lumber"
                      className={styles.navbar__link}
                    >
                      {t("oak")}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      rel="preload"
                      href="/products/ash-lumber"
                      className={styles.navbar__link}
                    >
                      {t("ash")}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      rel="preload"
                      href="/products/birch-lumber"
                      className={styles.navbar__link}
                    >
                      {t("birch")}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      rel="preload"
                      href="/products/modrina-lumber"
                      className={styles.navbar__link}
                    >
                      {t("modrina")}
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
           
          </div>
        </section>
        <section className={`${styles.container}`}>
          <div className={styles.block}>
            
            <div className={`${styles.col} `}>
              <div className={`${styles.row} ${styles.test} `}>
                <div className={styles.section__title}>
                  <span>{t("contactus")}</span>
                </div>
                <ul className={styles.section__title__us}>
                  <p>{t("manager")}:+38 097 136-20-00 </p>
                  <p>{t("director")}:+38 067 674-58-43 </p>
                  <li>
                    <a rel="preload" href="mailto:zubrzubr2000@gmail.com ">
                      zubrzubr2000@gmail.com{" "}
                    </a>
                  </li>
                  <li>
                    <a rel="preload" href="mailto:gremroman@gmail.com">
                      gremroman@gmail.com
                    </a>
                  </li>
                  <li>
                    <a rel="preload" href="mailto:grem_roman@icloud.com">
                      grem_roman@icloud.com{" "}
                    </a>
                  </li>
                  <Link
                    rel="preload"
                    onClick={handleClick}
                    href="/contact#contact_name"
                  >
                    <Button title_button={t("writeus")} />
                  </Link>
                </ul>
              </div>
            </div>
              <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                  alt="lumber sales zubr2000 Ukranian зубр2000 продаж пиломатеріали Україна"
                  className={styles.info__img}
                  src="/photo_product_2.webp"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
