"use client";
import Link from "next-intl/link";
import styles from "@/app/styles/page.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import MiniBlog from "../components/miniblog/MiniBlog"
import Slider from "../components/Slider/Slider"

export default  function Home() {
  const t = useTranslations("Index");
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  





  return (
    <>
    <Slider/>
      <div className={styles.content}>
        

        <section className={`${styles.container} ${styles.test}`}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={400}
                  height={400}
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
                  <MiniBlog/>
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
            <Link   href="/products/lumber"
                    className={styles.navbar__link}>
                      <li>Сертиікати</li>
              </Link>
            <Link   href="/products/lumber"
                    className={styles.navbar__link}>
                      <li>Стандарти якості</li>
              </Link>
            <Link href="/products/lumber"
                    className={styles.navbar__link}>
                      <li>Процес виробництва</li>
              </Link>
						</ul>
						<ul className={`${styles.list}`}>
							
              <Link href="/products/lumber"
                    className={styles.navbar__link}>
                      <li>Береза</li>
              </Link>
              <Link href="/products/lumber"
                    className={styles.navbar__link}>
                      <li>Дуб</li>
              </Link>
              <Link href="/products/lumber"
                    className={styles.navbar__link}>
                      <li>Ясен</li>
              </Link>
						</ul>
              </div>
            </div>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                alt="ясен"
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={400}
                  height={400}
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
                alt="ясен"
                  className={styles.info__img}
                  src="/test02.jpg"
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
                  <div>
                    <h1>CONTACT US</h1>
                  </div>
                  <p>Manager:+38 097 136-20-00 </p>
                  <p>Director:+38 067 674-58-43 </p>

                  <li>
                    <a href="mailto:gremroman@gmail.com">gremroman@gmail.com</a>
                  </li>
                  <li>
                    <a href="mailto:grem_roman@icloud.com">
                      grem_roman@icloud.com{" "}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:zubrzubr2000@gmail.com ">
                      zubrzubr2000@gmail.com{" "}
                    </a>
                  </li>
                  <button>
                    <Link
                      onClick={handleClick}
                      href="/contact"
                      className={styles.navbar__link}
                    >
                      Написати нам
                    </Link>
                  </button>
                </ul>

                <ul>
                  {" "}
                  <li>
                    <Link href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html">
                      <h1>FORDAQ.COM</h1>
                      <Image
                      alt="fordack"
                        src="/fordack-logo.webp"
                        width={120}
                        height={108}
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
