"use client";
import React from "react";
import Link from "next-intl/link";
import styles from "./test.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/app/lib/sanity";
import MiniBlog from "@/app/components/miniblog/MiniBlog";
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
        <section className={`${styles.right1} `}>
          <div className={styles.title}>
            <span>{t("aboutus")}</span>
          </div>
          <p>{t("title1")}</p>
          <p>{t("title2")}</p>
          <p>{t("title3")}</p>
        </section>
        <section className={`${styles.left1}`}>
          <Image
            className={`${styles.img} `}
            src="/photo_tittl_№1.1.webp"
            width={550}
            height={400}
            alt="lumber sales zubr2000 Ukranian зубр2000 продаж пиломатеріали Україна"
            loading="eager"
            priority={true}
            style={{}}
          />
        </section>
        <section className={`${styles.news}`}>
          <div className={styles.title}>
            <span>{t("news")}</span>
            <MiniBlog data={blogData} />
          </div>
        </section>

        <section className={styles.right2}>
          <Image
            alt="lumber sales zubr2000 Ukranian зубр2000 продаж пиломатеріали Україна"
            className={styles.img}
            src="/photo_tittl_№2.webp"
            width={550}
            height={400}
          />
        </section>
        <section className={`${styles.left2} `}>
          <div className={styles.title}>
            <span>{t("ourproduct")}</span>
          </div>
          <div className={`${styles.block}`}>

          
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
              <Link
                rel="preload"
                href="/aboutus/quality-standarts"
                className={styles.navbar__link}
              >
                {t("quality")}
              </Link>
            </li>
            <li>
              <Link
                rel="preload"
                href="/aboutus/manufacturing-process"
                className={styles.navbar__link}
              >
                {t("manufacturing")}
              </Link>
            </li>
          </ul>
          
          <ul className={`${styles.list2}`}>
            <li>
              <Link
                rel="preload"
                href="/products/oak-lumber"
                className={styles.navbar__link}
              >
                {t("oak")}
              </Link>
            </li>
            <li>
              <Link
                rel="preload"
                href="/products/ash-lumber"
                className={styles.navbar__link}
              >
                {t("ash")}
              </Link>
            </li>
            <li>
              <Link
                rel="preload"
                href="/products/birch-lumber"
                className={styles.navbar__link}
              >
                {t("birch")}
              </Link>
            </li>
            <li>
              <Link
                rel="preload"
                href="/products/modrina-lumber"
                className={styles.navbar__link}
              >
                {t("modrina")}
              </Link>
            </li>
          </ul>
          </div >
        </section>

        <section className={`${styles.right3}`}>
         
           
              
                <div className={styles.title}>
                  <span>{t("contactus")}</span>
                </div>
                <ul className={styles.section__title__us}>
                  <li>
                    <strong>{t("manager")} : </strong>+38 097 136-20-00
                  </li>
                  <li>
                    <strong>{t("director")} : </strong>+38 067 674-58-43
                  </li>
                  <li>
                    <strong>Email : </strong>
                    <a rel="preload" href="mailto:zubrzubr2000@gmail.com ">
                      zubrzubr2000@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Email : </strong>
                    <a rel="preload" href="mailto:gremroman@gmail.com">
                      gremroman@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Email : </strong>
                    <a
                      className={styles.link_style}
                      rel="preload"
                      href="mailto:grem_roman@icloud.com"
                    >
                      grem_roman@icloud.com
                    </a>
                  </li>
                </ul>
             
              <div className={styles.btnblock}>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/contact#contact_name"
                >
                  <Button className={styles.link_button} title_button={t("writeus")} />
                </Link>
              </div>
            
            
          
        </section>
        <section className={`${styles.left3} `}>
          <Image
            alt="lumber sales zubr2000 Ukranian зубр2000 продаж пиломатеріали Україна"
            className={styles.img}
            src="/photo_product_2.webp"
            width={550}
            height={400}
          />
        </section>
      </div>
    </>
  );
}
