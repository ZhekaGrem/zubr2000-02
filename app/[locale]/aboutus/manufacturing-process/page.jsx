'use client'
import React from "react";
import styles from "@/app/styles/manufacturing-process.module.css";
import Image from "next/image";
import { useTranslations } from 'next-intl';


function Certificates() {
  const t = useTranslations("Index");


  return (
    <>
      <div className={styles.manual__content}>
        <div className={styles.manual__title}>
          <ul className={styles.manual__title__mini}>
            <li>
              <div className={`${styles.big__title}`}>{t('manufacturing')}</div>
              <p>
              {t("manufacturing_process_01")}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div  >
                <Image
                className={styles.info__img}
                  src="/photo_product_3.webp"
                  width={450}
                  height={300}
                  alt="imag3"
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                  <span>{t("aboutus-message11")}</span>
                <div className={styles.section__title}>
                </div>
                <p>{t("manufacturing_process_02")}</p>
              
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div  >
                <Image
                 className={styles.info__img}
                  alt="imag3"
                  src="/photo_product_4.webp"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                  <span>{t("aboutus-message12")}</span>
                <div className={styles.section__title}>
                </div>
                <p>
                {t("manufacturing_process_03")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div  >
                <Image
                className={styles.info__img}
                  alt="imag3"
                  src="/photo_product_5_1.webp"
                  width={450}
                  height={300}
                />
              </div>
              <div  >
                <Image
                className={styles.info__img}
                  alt="imag3"
                  src="/photo_product_5_2.webp"
                  width={450}
                  height={300}
                />
              </div>
              <div  >
                <Image
                className={styles.info__img}
                  alt="imag3"
                  src="/photo_product_5_3.webp"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                  <span>{t("aboutus-message13")}</span>
                <div className={styles.section__title}>
                </div>
                <p>{t("manufacturing_process_04")}</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.text__block}>
                <Image
                className={styles.info__img}
                  alt="img4"
                  src="/photo_product_7.webp"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                  <span>{t("aboutus-message14")}</span>
                <div className={styles.section__title}>
                </div>
                <p>
                {t("manufacturing_process_05")}
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div  >
                <Image
                className={styles.info__img}
                  src="/pack-product.webp"
                  width={450}
                  alt="imag3"
                  height={300}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.text__block}>
              <div className={styles.text__block}>
                  <span>{t("aboutus-message15")}</span>
                <div className={styles.section__title}>
                </div>
                <p>{t("manufacturing_process_06")}</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div  >
                <Image
                className={styles.info__img}
                  src="/photo_product_6.webp"
                  width={450}
                  alt="img4"
                  height={300}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                  <span>{t("aboutus-message16")} </span>
                <div className={styles.section__title}>
				  
                </div>
                <p>{t("manufacturing_process_07")}</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container}>
        
         
          
            <span>
            {t("manufacturing_process_08")}
            </span>
         
          <p>
          {t("manufacturing_process_09")}
          </p>
        </div>
      </section>
    </>
  );
}

export default Certificates;
