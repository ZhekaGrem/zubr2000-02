"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Form from "@/app/components/form/Form";
import Googlmap from "@/app/components/googlmaps/Googlmap";
import styles from "@/app/styles/page/contact.module.css";

function Contact() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        title={t("contactus")}
        imageSrc="/contact_hero_real.png"
        imageAlt={t("contactus")}
      />

      <section className={styles.formMap}>
        <div className={styles.formWrap} id="contact_name">
          <Form />
        </div>
        <div className={styles.mapWrap}>
          <Googlmap />
        </div>
      </section>
    </>
  );
}

export default Contact;
