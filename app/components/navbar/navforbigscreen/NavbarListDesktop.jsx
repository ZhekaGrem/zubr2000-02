"use client";
import styles from "@/app/styles/component/navbarscreen.module.css";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations, useLocale } from "next-intl";
import React, { useState, lazy } from "react";

const LangDropBar = lazy(() => import("./LangDropBar"));

export const NavbarListDesktop = () => {
  const t = useTranslations("Index");

  const locale = useLocale();
  const [menuActive, setMenuActive] = useState(true);
  const handleClick = () => {
    setMenuActive(true);
  };
  return (
    <>
      <div
        loading='eager'
        alt='forest'
        role='img'
        aria-label='forest'
        className={`${styles.container} ${styles.container__closed}`}
      >
        <div className={styles.navbar__logo}>
          <Link rel='preload' onClick={handleClick} href='/'>
            <Image
              className={styles.logo__img}
              src='/Zubr-logo-01.webp'
              width={70}
              height={70}
              alt='Logo zubr 2000 лого зубр2000'
            />
            <Image
              className={styles.logo__text}
              src='/ZUBR-2000-3.svg'
              width={280}
              height={62}
              alt='Zubr 2000 ЗУБР 2000'
            />
          </Link>
        </div>
        <ul className={styles.nav__link}>
          <li>
            <Link
              href='/'
              onClick={handleClick}
              className={styles.navbar__link}
            >
              {t("home")}
            </Link>
          </li>
          <li className={styles.navbar__link__open__01}>
            <Link
              rel='preload'
              href='/aboutus'
              onClick={handleClick}
              className={`${styles.navbar__link} `}
            >
              {t("aboutus")}
            </Link>
            <ul className={styles.sub__link__01}>
              <li>
                <Link
                  rel='preload'
                  href='/aboutus/news'
                  onClick={handleClick}
                  className={styles.sub__navbar__link}
                >
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link
                  rel='preload'
                  href='/aboutus/certificates'
                  onClick={handleClick}
                  className={styles.sub__navbar__link}
                >
                  {t("certificates")}
                </Link>
              </li>
              <li>
                <Link
                  rel='preload'
                  onClick={handleClick}
                  href='/aboutus/manufacturing-process'
                  className={styles.sub__navbar__link}
                >
                  {t("manufacturing")}
                </Link>
              </li>
              <li className={styles.test}>
                <Link
                  rel='preload'
                  onClick={handleClick}
                  href='/aboutus/quality-standarts'
                  className={styles.sub__navbar__link}
                >
                  {t("quality")}
                </Link>
              </li>
              {locale === "uk" && (
                <li>
                  <Link
                    rel='preload'
                    href='/aboutus/offers'
                    onClick={handleClick}
                    className={styles.sub__navbar__link}
                  >
                    {t("offers")}
                  </Link>
                </li>
              )}
            </ul>
          </li>
          <li className={styles.navbar__link__open__02}>
            <Link
              rel='preload'
              onClick={handleClick}
              href='/products'
              className={`${styles.navbar__link} `}
            >
              {t("product")}
            </Link>

            <ul className={styles.sub__link__02}>
              <li>
                <Link
                  rel='preload'
                  onClick={handleClick}
                  href='/products/oak-lumber'
                  className={styles.sub__navbar__link}
                >
                  {t("oak")}
                </Link>
              </li>
              <li>
                <Link
                  rel='preload'
                  onClick={handleClick}
                  href='/products/ash-lumber'
                  className={styles.sub__navbar__link}
                >
                  {t("ash")}
                </Link>
              </li>
              <li>
                <Link
                  rel='preload'
                  onClick={handleClick}
                  href='/products/birch-lumber'
                  className={styles.sub__navbar__link}
                >
                  {t("birch")}
                </Link>
              </li>
              <li>
                <Link
                  rel='preload'
                  onClick={handleClick}
                  href='/products/modrina-lumber'
                  className={styles.sub__navbar__link}
                >
                  {t("modrina")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              rel='preload'
              onClick={handleClick}
              href='/contact'
              className={styles.navbar__link}
            >
              {t("contact")}
            </Link>
          </li>
          <li className={styles.navbar__link__open__03}>
            <Link href='#' className={`${styles.navbar__link} `}>
              <Image
                className={styles.planet}
                alt='language PL'
                src='/language__02.svg'
                width={20}
                height={16}
              />
              {t("language")}
            </Link>
            <LangDropBar />
          </li>
        </ul>
      </div>
    </>
  );
};
