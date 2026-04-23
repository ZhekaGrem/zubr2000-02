"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/page/offer.module.css";
import { client } from "@/app/_lib/sanity";
import Link from "next-intl/link";
import OfferBlog from "@/app/components/offerblog/OfferBlog";
import Button from "@/app/UI/button/button";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";

async function getData() {
  const query = `*[_type == "offer"] | order(publication_data_offer desc)`;
  const data = await client.fetch(query);
  return data;
}

const ADVANTAGES = [
  {
    title: "Багаторічний досвід",
    body: "Більше 20 років виробництва пиломатеріалів — стабільна якість і передбачувані строки.",
  },
  {
    title: "Сировинна база",
    body: "Доступ до різних порід деревини та контроль сировини на всіх етапах.",
  },
  {
    title: "Екологічна відповідальність",
    body: "Співпраця з партнерами, які підтримують стале лісове господарство.",
  },
  {
    title: "Гнучкість у виробництві",
    body: "Стандартні розміри або індивідуальні замовлення — від малих до великих партій.",
  },
  {
    title: "Партнерство",
    body: "Прозорі умови, обмін ресурсами й знаннями заради спільного результату.",
  },
];

const PHONES = [
  { label: "Директор", number: "+38 067 674-58-43" },
  { label: "Менеджер", number: "+38 097 136-20-00" },
];

const EMAILS = ["zubrzubr2000@gmail.com", "gremroman@gmail.com", "grem_roman@icloud.com"];

export default function Offers() {
  const t = useTranslations("Index");
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    getData().then(setBlogData);
  }, []);

  return (
    <>
      <PageIntro
        title={t("offers")}
        lead="Ми відкриті до нових партнерств у виробництві пиломатеріалів обрізних і необрізних — шукаємо надійних партнерів, які поділяють наш підхід до якості."
        imageSrc="/photo_tittl_№2.webp"
        imageAlt={t("offers")}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <h2 className={styles.sectionHeading}>Запрошуємо до співпраці</h2>
            <p className={styles.lead}>
              Команда ZUBR-2000 розширює виробничі потужності та шукає партнерів,
              готових разом створювати високоякісні пиломатеріали й розвивати галузь.
            </p>
          </div>

          <div className={styles.advantages}>
            <h3 className={styles.subHeading}>Чому варто співпрацювати з нами</h3>
            <ul className={styles.advantageList}>
              {ADVANTAGES.map((a, i) => (
                <li key={a.title} className={styles.advantageItem}>
                  <span className={styles.advantageIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.advantageBody}>
                    <div className={styles.advantageTitle}>{a.title}</div>
                    <p className={styles.advantageText}>{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Ми шукаємо</h2>
          <OfferBlog data={blogData} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Контактна інформація</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCol}>
              <div className={styles.colTitle}>Телефони</div>
              {PHONES.map((p) => (
                <div key={p.number} className={styles.contactRow}>
                  <span className={styles.contactLabel}>{p.label}</span>
                  <a href={`tel:${p.number.replace(/\s/g, "")}`} className={styles.contactLink}>
                    {p.number}
                  </a>
                </div>
              ))}
            </div>
            <div className={styles.contactCol}>
              <div className={styles.colTitle}>Email</div>
              {EMAILS.map((email) => (
                <a key={email} href={`mailto:${email}`} className={styles.contactLink}>
                  {email}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.ctaWrap}>
            <Link href="/contact#contact_name">
              <Button title_button="Написати нам" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
