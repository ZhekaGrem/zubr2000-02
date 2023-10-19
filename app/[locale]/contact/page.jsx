"use client";
import React from "react";
import styles from "@/app/styles/contact.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Form from "@/app/components/form/Form";
import Googlmap from "@/app/components/googlmaps/Googlmap"

function Contact() {
  const t = useTranslations("Index");
  return (
    <>
      <div className={styles.contact}>
      <Googlmap/>

    <div className={styles.contact__block}>

        <div className={styles.contact__info}>
          <ul>
              <li className={styles.sub__contact__info}>{t('contactus')}</li>
            
            <li>{t('manager')}:+38 097 136-20-00 </li>
            <li>{t('director')}:+38 067 674-58-43 </li>
            <li>
              <a    rel="preload" href="mailto:zubrzubr2000@gmail.com ">
                zubrzubr2000@gmail.com
              </a>
            </li>
            <li>
              <a    rel="preload" href="mailto:gremroman@gmail.com">gremroman@gmail.com</a>
            </li>
            <li>
              <a   rel="preload" href="mailto:grem_roman@icloud.com">
                grem_roman@icloud.com{" "}
              </a>
            </li>
          
          </ul>
        </div>
        <div className={styles.contact__info}>
          <ul>
           
              <li className={styles.sub__contact__info}>{t('findus')}</li>
           
            <li>79000</li>
            <li>{t("ukrain")}</li>
                <li>{t("lviv")}</li>
                <li>{t("street")}</li>
          </ul>
        </div>
        <div className={styles.contact__info}>
          <a    rel="preload" href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html">
            <h2>FORDAQ.COM</h2>
            <Image
              src="/fordaq-logo-02.webp"
              width={190}
              height={100}
              alt="fordaq"
            />
          </a>
        </div>
      </div>
              </div>
      <div id='contact_name' className={styles.contact__form}>
        <Form />
      </div>
    </>
  );
}

export default Contact;
