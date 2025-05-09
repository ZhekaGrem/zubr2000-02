"use client";

import React from "react";
import styles from "@/app/styles/page/lumber.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Lumber() {
  const t = useTranslations("Index");
  return (
    <>
      <section id="birch__01">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.section__title}>
              <span>
                {t("birch")} {t("beam")} 36/52 * 52 ММ
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} `}>
              <h4>{t("sort")} А</h4>
              <p>{t("products-title-01")}</p>
              <h4>{t("sort")} AA/AB</h4>
              <p>{t("products-title-03")}</p>

              <h4>{t("sort")} В</h4>
              <p>{t("products-title-02-birch")} </p>
              <h4>{t("sort")} С</h4>
              <p>{t("products-title-05")} </p>
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
                  <div className={styles.table__cell}>36/52</div>
                  <div className={styles.table__cell}>52</div>
                  <div className={styles.table__cell}>500-3200</div>
                </div>
              </div>
              {/* <div className={styles.table__cell__3}>
                Certificate code FSC 100% - NC-COC-024736
              </div> */}
            </div>

            <div className={styles.col}>
              <Image
                className={styles.adaptive__img}
                src="/birch-lumber-03.webp"
                alt="birch lumber 1"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section id="birch__02" >
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>{t('birch')} {t('beam')} 54 * 110 ММ</span>
					
				</div>
			</div>

			<div className={styles.row}>
				<div className={`${styles.col} `}>
					<h4>{t('sort')} АA/AB</h4>
					<p >
					{t('products-title-03')}
					</p>
					<h4>{t('sort')} В</h4>
					<p >
					{t('products-title-04')}	</p>
					<h4>{t('sort')} С</h4>
					<p >
					{t('products-title-05')}	</p>
<div className={styles.table__cell__2}>{t('quality-title-27')}</div>
<div className={styles.table}>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>{t('products-title-07')}</div>
    <div className={styles.table__cell}>{t('quality-title-48')}</div>
    <div className={styles.table__cell}>{t('quality-title-35')}</div>
  </div>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>220-750
	<p>222-2222</p>
	<p>222-2222</p>
	<p>222-2222</p>
	</div>
  </div>
</div>
  <div className={styles.table__cell__3}>Certificate code FSC 100% - NC-COC-024736</div>
				</div>

				<div className={styles.col}>
                <Image  className={styles.adaptive__img} src="/birch-lumber-01.webp" alt="birch lumber 1" width={500} height={300} />

				</div>
			</div>
		</div>
                   </section> */}
    </>
  );
}

export default Lumber;
