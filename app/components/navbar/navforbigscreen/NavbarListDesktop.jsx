"use client";
import styles from "@/app/styles/component/navbarscreen.module.css";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations,useLocale } from "next-intl";
import React, { useState } from "react";
import { usePathname } from "next-intl/client";



export const NavbarListDesktop = () => {

  const t = useTranslations("Index");
  const pathname = usePathname();

const locale = useLocale();
  const [menuActive, setMenuActive] = useState(true);
  const handleClick = () => {
    setMenuActive(true);
  };
  return (
    <>
      <div
      loading ='eager'
        alt="forest"
        role="img"
        aria-label="forest"
        className={`${styles.container} ${styles.container__closed}`
          }
      >
        <div className={styles.navbar__logo}>
          <Link rel="preload" onClick={handleClick} href="/">
            <Image
              className={styles.logo__img}
              src="/Zubr-logo-01.webp"
              width={70}
              height={70}
              alt="Logo zubr 2000 лого зубр2000"
            />
            <Image
              className={styles.logo__text}
              src="/ZUBR-2000-3.svg"
              width={280}
              height={62}
              alt="Zubr 2000 ЗУБР 2000"
            />
          </Link>
        </div>
        <ul className={styles.nav__link}>
          <li>
            <Link
              href="/"
              onClick={handleClick}
              className={styles.navbar__link}>
              {t("home")}
            </Link>
          </li>
          <li className={styles.navbar__link__open__01}>
            <Link
              rel="preload"
              href="/aboutus"
              onClick={handleClick}
              className={`${styles.navbar__link} `}
            >
              {t("aboutus")}
          
            </Link>
            <ul className={styles.sub__link__01}>
              <li>
                <Link
                  rel="preload"
                  href="/aboutus/news"
                  onClick={handleClick}
                  className={styles.sub__navbar__link}
                >
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link
                  rel="preload"
                  href="/aboutus/certificates"
                  onClick={handleClick}
                  className={styles.sub__navbar__link}
                >
                  {t("certificates")}
                </Link>
              </li>
              <li>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/aboutus/manufacturing-process"
                  className={styles.sub__navbar__link}
                >
                  {t("manufacturing")}
                </Link>
              </li>
              <li className={styles.test}>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/aboutus/quality-standarts"
                  className={styles.sub__navbar__link}
                >
                  {t("quality")}
                </Link>
              </li>
{locale === 'uk' && (
    <li>
      <Link
        rel="preload"
        href="/aboutus/offers"
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
            
              rel="preload"
              onClick={handleClick}
              href="/products"
              className={`${styles.navbar__link} `}
            >
              {t("product")}
            
            </Link>

            <ul className={styles.sub__link__02}>
              <li>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/products/oak-lumber"
                  className={styles.sub__navbar__link}
                >
                  {t("oak")}
                </Link>
              </li>
              <li>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/products/ash-lumber"
                  className={styles.sub__navbar__link}
                >
                  {t("ash")}
                </Link>
              </li>
              <li>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/products/birch-lumber"
                  className={styles.sub__navbar__link}
                >
                  {t("birch")}
                </Link>
              </li>
              <li>
                <Link
                  rel="preload"
                  onClick={handleClick}
                  href="/products/modrina-lumber"
                  className={styles.sub__navbar__link}
                >
                  {t("modrina")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              rel="preload"
              onClick={handleClick}
              href="/contact"
              className={styles.navbar__link}
            >
              {t("contact")}
            </Link>
          </li>
          <li className={styles.navbar__link__open__03}>
            <p className={`${styles.navbar__link} `}>
              
              <Image
                className={styles.planet}
                alt="language PL"
                src="/language__02.svg"
                width={20}
                height={16}
              />
              {t("language")}
             
            </p>

            <ul className={styles.sub__menu__list}>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  href={usePathname()}
                  locale="uk">
                  <div className={styles.menu__lang}>
                  <Image
                    alt="language UA"
                    src="/ua.webp"
                    width={20}
                    height={16}
                    className={styles.menu__flag}
                  />
                  Українська
                  </div>
                </Link>
                {""}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="en"
                >
              <div className={styles.menu__lang}>    <Image
                    alt="language En"
                    src="/gb.webp"
                    width={20}
                    height={16}
                    className={styles.menu__flag}
                    />
                    English{" "}</div>
                </Link>{" "}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="pl"
                >
                  <div className={styles.menu__lang}>

                  
                  <Image
                  className={styles.menu__flag}
                    alt="language PL"
                    src="/pl.webp"
                    width={20}
                    height={16}
                    />
                    Polski{" "}
                    </div>
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="da"
                >
                  <div className={styles.menu__lang}>
                  <Image
                  className={styles.menu__flag}
                  alt="language DA"
                  src="/dk.webp"
                  width={20}
                  height={16}
                  />
                  Danmark{" "}</div>
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="de"
                >
                  <div className={styles.menu__lang}>
                  <Image
                  className={styles.menu__flag}
                  alt="language DE"
                  src="/de.webp"
                  width={20}
                  height={16}
                  />
                  Deutsch{" "}</div>
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="fr"
                >
                  <div className={styles.menu__lang}>
                  <Image
                  className={styles.menu__flag}
                  alt="language FR"
                  src="/fr.webp"
                  width={20}
                  height={16}
                  />
                  Français{" "}</div>
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="it"
                >
                  <div className={styles.menu__lang}>
                  <Image
                  className={styles.menu__flag}
                  alt="language IT"
                  src="/it.webp"
                  width={20}
                  height={16}
                  />
                  Italiano{" "}</div>
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="sv"
                >
                  <div className={styles.menu__lang}>
                  <Image
                  className={styles.menu__flag}
                  alt="language SW"
                  src="/se.webp"
                  width={20}
                  height={16}
                  />
                  Sverige{" "}</div>
                </Link>{" "}
              </li>

              <li>
                <Link
                prefetch={false}
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="ru"
                >
                  <div className={styles.menu__lang}>
                  <Image
                  className={styles.menu__flag}
                  alt="language Ru"
                  src="/ru.webp"
                  width={20}
                  height={16}
                  />
                  Руский</div>
                </Link>
               
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

