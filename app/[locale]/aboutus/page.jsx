"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/aboutus.module.css";

function AboutUs() {
  const t = useTranslations("Index");

  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.wi__41}>
              <div className={`${styles.big__title} ${styles.section__title} `}>
                <span>{t("aboutus")}</span>
              </div>

              <p>
                Фірма "ЗУБР-2000" - ваш надійний постачальник деревини твердих
                порід Компанія "ЗУБР-2000" є лідером у галузі постачання
                деревини твердих порід з сертифікатом ланцюга постачання FSC.
                Завдяки нашому досвіду та високій якості продукції, ми
                здійснюємо успішну співпрацю з країнами, такими як Італія,
                Швеція, Словаччина, Польща, Естонія та Данія.
              </p>

              <h3>Наша компанія спеціалізується:</h3>
              <ul className={`${styles.list}`}>
                <li>торгівля деревиною </li>
                <li>виробництві різноманітних типорозмірів пиломатеріалів</li>
                <li>пропонуємо послуги з розпилу</li>
                <li>сушки пиломатеріалів</li>
                <li>простругування пиломатеріалів за індивідуальними розмірами клієнтів.
                </li>
              </ul>
              <p>
                Ми пильно відбираємо деревину, щоб вона повністю відповідала
                вимогам Державного управління лісового господарства України та є
                еквівалентною до європейських стандартів. На наших складах
                завжди є значний запас деревини та пиломатеріалів, що гарантує
                швидку поставку замовлень.
              </p>
              <p>
                Наша політика - гнучкість до вимог ринку та клієнтів. Ми завжди
                готові відповідати на ваші потреби та пропозиції, а також
                виготовляти продукцію на замовлення.
              </p>
            </div>
            <div className={`${styles.container} ${styles.mini__block}`}>
              <div className={`${styles.pricing__plan}`}>
                <div className={`${styles.plan__title}`}><span>Сертиікати</span></div>
                <ul className={`${styles.list}`}>
                  <li>FSC</li>
                  <li>Trade Leaders</li>
                </ul>
              </div>
            </div>
            <div className={`${styles.container} ${styles.mini__block}`}>
              <div className={`${styles.pricing__plan}`}>
                <div className={`${styles.plan__title}`}>
                  <span>Процес виробництва</span>
                </div>
                <ul className={`${styles.list}`}>
                  <li>Відбір сировини</li>
                  <li>Склад сировини</li>
                  <li>Деревообробна лінія SYC-520G</li>
                  <li>Сушка</li>
                  <li>Пакування</li>
                  <li>Склад готової продукції</li>
                </ul>
              </div>
            </div>
            <div className={`${styles.container} ${styles.mini__block}`}>
              <div className={`${styles.pricing__plan}`}>
                <div className={`${styles.plan__title}`}><span>Стандарти якості</span></div>
                <ul className={`${styles.list}`}>
                  <li>ФАНСИРОВИНА</li>
                  <li>ТЕХНІЧНІ УМОВИ НА ПИЛОМАТЕРІАЛИ</li>
                  <li>ДУБ (КРУГЛЯК) СОРТ А</li>
                  <li>ДУБ (КРУГЛЯК) ФАНЕРНОЇ ЯКОСТІ.</li>
                  <li>ТЕХНІЧНІ УМОВИ НА ПАЛЄТИ ТА ПАЛЄТНЕ ПАКУВАННЯ.</li>
                </ul>
              </div>
            </div>

            <div className={styles.wi__41}>
              <p>
                Обирайте компанію "ЗУБР-2000" як надійного партнера у галузі
                деревообробки. Ми забезпечимо вас продукцією високої якості та
                надійними поставками з урахуванням сертифікату FSC, що
                підтверджує нашу відповідальність до збереження лісових ресурсів
                та сталого розвитку.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
