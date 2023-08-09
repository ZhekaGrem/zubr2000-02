"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/aboutus.module.css";

function AboutUs() {
  const t = useTranslations("Index");

  return (
    <>
      <section>
        <div className={`${styles.container} `}>
          <div className={styles.row}>
            <div className={styles.wi__41}>
              <div className={`${styles.big__title} ${styles.section__title} `}>
                <span>{t("aboutus")}</span>
              </div>

              <p>
              {t("aboutus-message1")}
              </p>

              <h3>{t("aboutus-message2")}</h3>
              <ul className={`${styles.list}`}>
                <li>{t("aboutus-message3")} </li>
                <li>{t("aboutus-message4")}</li>
                <li>{t("aboutus-message5")}</li>
                <li>{t("aboutus-message6")}</li>
                <li>{t("aboutus-message7")}
                </li>
              </ul>
              <p>
              {t("aboutus-message8")}
              </p>
              <p>
              {t("aboutus-message9")}
              </p>
            </div>
            <div className={`${styles.container} ${styles.mini__block}`}>
              <div className={`${styles.pricing__plan}`}>
                <div className={`${styles.plan__title}`}><span>{t('certificates')}</span></div>
                <ul className={`${styles.list}`}>
                  <li>FSC</li>
                  <li>Trade Leaders</li>
                </ul>
              </div>
            </div>
            <div className={`${styles.container} ${styles.mini__block}`}>
              <div className={`${styles.pricing__plan}`}>
                <div className={`${styles.plan__title}`}>
                  <span>{t('manufacturing')}</span>
                </div>
                <ul className={`${styles.list}`}>
                  <li>{t("aboutus-message11")}</li>
                  <li>{t("aboutus-message12")}</li>
                  <li>{t("aboutus-message13")}</li>
                  <li>{t("aboutus-message14")}</li>
                  <li>{t("aboutus-message15")}</li>
                  <li>{t("aboutus-message16")}</li>
                </ul>
              </div>
            </div>
            <div className={`${styles.container} ${styles.mini__block}`}>
              <div className={`${styles.pricing__plan}`}>
                <div className={`${styles.plan__title}`}><span>{t('quality')}</span></div>
                <ul className={`${styles.list}`}>
                  <li>{t("aboutus-message17")}</li>
                  <li>{t("aboutus-message18")}</li>
                  <li>{t("aboutus-message19")} <br /> {t("aboutus-message20")}</li>

                  
                </ul>
              </div>
            </div>

            <div className={styles.wi__41}>
              <p>{t("aboutus-message10")}
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
