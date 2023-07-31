"use client";
import Link from "next-intl/link";
import styles from "@/app/styles/page.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import MiniBlog from "../components/miniblog/MiniBlog"
import { client } from "@/app/lib/sanity";




async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  const data = await client.fetch(query);
  return data;
}

export default  function Home() { 
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
        

        <section className={`${styles.container} ${styles.test}`}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                  className={styles.info__img}
                  src="/photo_director_2.jpg"
                  width={600}
                  height={600}
                  alt="ясен"
                />
              </div>
            </div>
            <div className={`${styles.col} `}>
              <div className={`${styles.row} ${styles.test} `}>
                <div className={styles.section__title}>
                  <span>{t("aboutus")}</span>
                </div>
                <p>{t("title1")}</p>
                <p>{t("title2")}</p>
                <p>{t("title3")}</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.container} ${styles.test}`}>
          <div className={styles.block}>
                <div className={styles.section__title}>
                  <span>News</span>
                  <MiniBlog data={blogData}/>
                </div>
                </div>
        </section>
        
        <section className={`${styles.container} ${styles.test}`}>
          <div className={styles.block}>
            <div className={`${styles.col} `}>
              <div className={`${styles.row} ${styles.test} `}>
                <div className={styles.section__title}>
                  <span>Наша продукція</span>
                </div>
						<ul className={`${styles.list}`}>
            <Link    rel="preload"   href="/aboutus/certificates"
                    className={styles.navbar__link}>
                      <li>Сертиікати</li>
              </Link>
            <Link    rel="preload"    href="/aboutus/quality-standarts"
                    className={styles.navbar__link}>
                      <li>Стандарти якості</li>
              </Link>
            <Link    rel="preload"  href="/aboutus/manufacturing-process"
                    className={styles.navbar__link}>
                      <li>Процес виробництва</li>
              </Link>
						</ul>
						<ul className={`${styles.list}`}>
							
              <Link    rel="preload" href="/products/birch-lumber"
                    className={styles.navbar__link}>
                      <li>Береза</li>
              </Link>
              <Link    rel="preload" href="/products/oak-lumber"
                    className={styles.navbar__link}>
                      <li>Дуб</li>
              </Link>
              <Link    rel="preload" href="/products/ash-lumber"
                    className={styles.navbar__link}>
                      <li>Ясен</li>
              </Link>
						</ul>
              </div>
            </div>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                alt="product"
                  className={styles.info__img}
                  src="/photo_product_1.jpg"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.container} ${styles.test}`}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                alt="product"
                  className={styles.info__img}
                  src="/photo_product_2.jpg"
                  width={400}
                  height={400}
                  
                />
              </div>
            </div>
            <div className={`${styles.col} `}>
              <div className={`${styles.row} ${styles.test} `}>
                <div className={styles.section__title}>
                  <span>Звязатись з нами</span>
                </div>

                <ul>
                  <div className={styles.section__title}>
                    <span>CONTACT US</span>
                  </div>
                  <p>Director:+38 067 674-58-43 </p>
                  <p>Manager:+38 097 136-20-00 </p>

                  <li>
                    <Link    rel="preload" href="mailto:gremroman@gmail.com">gremroman@gmail.com</Link>
                  </li>
                  <li>
                    <Link    rel="preload" href="mailto:grem_roman@icloud.com">
                      grem_roman@icloud.com{" "}
                    </Link>
                  </li>
                  <li>
                    <Link    rel="preload" href="mailto:zubrzubr2000@gmail.com ">
                      zubrzubr2000@gmail.com{" "}
                    </Link>
                  </li>
                    <Link    rel="preload"
                      onClick={handleClick}
                      href="/contact#contact"
                    >
                  <button className={styles.button__us}role="button">
                      Написати нам
                  </button>
                    </Link>
                </ul>

                <ul >
                  {" "}
                      <div className={styles.section__title}> <span>FORDAQ.COM</span></div>
                  <li className={styles.img__section__title}>
                    <Link    rel="preload" href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html">
                      <Image
                      alt="fordack"
                        src="/fordaq-logo-02.webp"
                        width={150}
                        height={70}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
