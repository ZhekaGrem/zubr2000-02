"use client";
import React from "react";
import styles from "@/app/styles/page/lumber.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Lumber() {
  const t = useTranslations("Index");
  return (
    <>
      <section id="ash__01">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.section__title}>
              <span>
                {t("ash")} {t("board")} 30-54 * 54-315 mm
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
                  <div className={styles.table__cell}>30-54 </div>
                  <div className={styles.table__cell}>54-315</div>
                  <div className={styles.table__cell}>220-4000</div>
                </div>
              </div>
              <div className={styles.table__cell__3}>
                Certificate code FSC 100% - NC-COC-024736
              </div>
            </div>
            <div className={styles.col}>
              <Image
                className={styles.adaptive__img}
                src="/ash-lumber-03.webp"
                width={500}
                alt="ash lumber 1"
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section id="ash__02" >
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>{t('ash')} {t('beam')} 54 * 110 mm</span>
					
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
<div className={styles.table__cell__2}>{t('quality-title-27')} mm</div>
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
                <Image className={styles.adaptive__img} src="/ash-lumber-01.webp" alt="ash lumber 2" width={500} height={300} />

				</div>
			</div>
		</div>
                   </section> */}
    </>
  );
}

export default Lumber;
