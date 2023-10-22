"use client";

import React from "react";
import styles from "@/app/styles/lumber.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Lumber() {
  const t = useTranslations("Index");
  return (
    <>
      <section id="modrina__01">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.section__title}>
              <span>
                {t("modrina")} {t("terraceboard")} 21-30 * 123-500 mm
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} `}>
              <h4>{t("sort")} А</h4>
              <p>{t("products-title-01")}</p>
              <h4>{t("sort")} В</h4>
              <p>{t("products-title-02-ash")} </p>
              <div className={styles.table__cell__2}>
                {t("quality-title-27")} mm
              </div>
              <div className={styles.table}>
                <div className={styles.table__row}>
                  <div className={styles.table__cell}>
                    {t("products-title-07")}
                  </div>
                  <div className={styles.table__cell}>
                    {t("quality-title-48")}
                  </div>
                  <div className={styles.table__cell}>
                    {t("quality-title-35")}
                  </div>
                </div>
                <div className={styles.table__row}>
                  <div className={styles.table__cell}>21-30</div>
                  <div className={styles.table__cell}>123-500</div>
                  <div className={styles.table__cell}>500-3000</div>
                </div>
              </div>
              <div className={styles.table__cell__3}>
                Certificate code FSC 100% - NC-COC-024736
              </div>
            </div>

            <div className={styles.col}>
              <Image
                className={styles.adaptive__img}
                src="/modrina-lumber-01.webp"
                alt="oak lumber 1"
                width={500}
                height={300}
              />
              <Image
                className={styles.adaptive__img}
                src="/modrina-lumber-03.webp"
                alt="oak lumber 1"
                width={500}
                height={300}
              />
              <Image
                className={styles.adaptive__img}
                src="/modrina-lumber-06.webp"
                alt="oak lumber 1"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="modrina__02">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.section__title}>
              <span>
                {t("modrina")} {t("basket")} 400-700 * 400-500 * 285-375 mm
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} `}>
              <h4>{t("sort")} А</h4>
              <p>{t("products-title-01")}</p>
              <h4>{t("sort")} В</h4>
              <p>{t("products-title-02-ash")} </p>
              <div className={styles.table__cell__2}>
                {t("quality-title-27")} mm
              </div>
              <div className={styles.table}>
                <div className={styles.table__row}>
                  <div className={styles.table__cell}>
                    {t("products-title-07")}
                  </div>
                  <div className={styles.table__cell}>
                    {t("quality-title-48")}
                  </div>
                  <div className={styles.table__cell}>
                    {t("quality-title-35")}
                  </div>
                </div>
                <div className={styles.table__row}>
                  <div className={styles.table__cell}>
                    <p>285</p>
                    <p>375</p>
                    <p>285</p>
                  </div>
                  <div className={styles.table__cell}>
                    <p>400</p>
                    <p>500</p>
                    <p>312</p>
                  </div>
                  <div className={styles.table__cell}>
                    <p>400</p>
                    <p>500</p>
                    <p>700</p>
                  </div>
                </div>
              </div>
              <div className={styles.table__cell__3}>
                Certificate code FSC 100% - NC-COC-024736
              </div>
            </div>

            <div className={styles.col}>
              <Image
                className={styles.adaptive__img}
                src="/modrina-lumber-05.webp"
                alt="oak lumber 1"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lumber;
