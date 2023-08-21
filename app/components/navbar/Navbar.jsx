"use client";
import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState, memo } from "react";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

function Navbar() {
  const t = useTranslations("Index");
  const pathname = usePathname();

  const [menuActive, setMenuActive] = useState(true);
  const handleClick = () => {
    setMenuActive(true);
  };
  return (
    <>
      <nav
        loading="lazy"
        alt="forest"
        role="img"
        aria-label="forest"
        className={`${
          menuActive
            ? `${styles.container} ${styles.container__closed}`
            : [styles.container]
        }`}
      >
        <div className={styles.navbar__logo}>
          <Link rel="preload" onClick={handleClick} href="/">
            <Image
              className={styles.logo__img}
              src="/Zubr-logo.webp"
              width={70}
              height={75}
              alt="Logo zubr 2000"
            />
            <Image
              className={styles.logo__text}
              src="/text-zubr-03.webp"
              width={170}
              height={70}
              alt="Logo Text zubr 2000"
            />
          </Link>
        </div>
        <div
          className={`${
            menuActive ? [styles.navbar__burger] : [styles.navbar__burger__exit]
          }`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
        </div>
        <ul>
          <li>
            <Link
              href="/"
              onClick={handleClick}
              className={styles.navbar__link}
            >
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
              <Image
                className={`${styles.drop__down} ${styles.planet}`}
                alt="language PL"
                src="/down__02.svg"
                width={20}
                height={16}
              />
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
              <Image
                className={`${styles.drop__down} ${styles.planet}`}
                alt="language PL"
                src="/down__02.svg"
                width={20}
                height={16}
              />
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
              {" "}
              <Image
                className={styles.planet}
                alt="language PL"
                src="/language__02.svg"
                width={20}
                height={16}
              />{" "}
              {t("language")}
              <Image
                className={`${styles.drop__down} ${styles.planet}`}
                alt="language PL"
                src="/down__02.svg"
                width={20}
                height={16}
              />
            </p>

            <ul className={styles.sub__menu__list}>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="ua"
                >
                  Українська{" "}
                  <Image
                    alt="language UA"
                    src="/ua.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="en"
                >
                  English{" "}
                  <Image
                    alt="language En"
                    src="/gb.webp"
                    width={20}
                    height={16}
                  />
                </Link>{" "}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="pl"
                >
                  Polski{" "}
                  <Image
                    alt="language PL"
                    src="/pl.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="da"
                >
                  Danmark{" "}
                  <Image
                    alt="language DA"
                    src="/dk.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="de"
                >
                  Deutsch{" "}
                  <Image
                    alt="language DE"
                    src="/de.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="fr"
                >
                  Français{" "}
                  <Image
                    alt="language FR"
                    src="/fr.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="it"
                >
                  Italiano{" "}
                  <Image
                    alt="language IT"
                    src="/it.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}{" "}
              </li>
              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="sv"
                >
                  Sverige{" "}
                  <Image
                    alt="language SW"
                    src="/se.webp"
                    width={20}
                    height={16}
                  />
                </Link>{" "}
              </li>

              <li>
                <Link
                  rel="preload"
                  to=""
                  className={styles.sub__menu__link}
                  href={usePathname()}
                  locale="ru"
                >
                  Руский
                  <Image
                    alt="language Ru"
                    src="/ru.webp"
                    width={20}
                    height={16}
                  />
                </Link>
                {""}{" "}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Navbar);
