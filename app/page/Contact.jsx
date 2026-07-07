"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Form from "@/app/components/form/Form";
import Googlmap from "@/app/components/googlmaps/Googlmap";
import Reveal from "@/app/components/Reveal/Reveal";
import styles from "@/app/styles/page/contact.module.css";

function Contact() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        variant="split"
        caps={t("contact")}
        title={t("contactus")}
        lead={t("contactLead")}
        imageSrc="/contact_hero_real.webp"
        imageAlt={t("contactus")}
      />

      <Reveal as="section" className={styles.formMap}>
        <div className={styles.formWrap} id="contact_name">
          <Form />
        </div>
        <div className={styles.mapWrap}>
          <Googlmap />
        </div>
      </Reveal>
    </>
  );
}

export default Contact;
