"use client";
import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState,memo } from "react";
import Link from "next-intl/link";
import Dropdown from "../dropdown/Dropdown";

function Navbar() {
  const t = useTranslations("Index");

  const [menuActive, setMenuActive] = useState(true);
  const handleClick = () => {
    setMenuActive(true);
  };
  return (
    <>
      <div
      loading="lazy"
        alt="forest"
        role="img"
        aria-label="forest"
        className={styles.container}
      >
        <div className={styles.navbar__body}>
          <div className={styles.navbar__logo__text}>
            <Link
           
              rel="preload"
              className={styles.navbar__logo}
              onClick={handleClick}
              href="/"
            >
              <Image
                src="/Zubr-logo.webp"
                width={80}
                height={75}
                alt="Logo zubr 2000"
              />
              <Image
                className={styles.logo__text}
                src="/text-zubr-03.webp"
                width={180}
                height={80}
                alt="Logo Text zubr 2000"
              />
            </Link>
          </div>
          <nav
            className={`${styles.close__navbar__menu} 
            ${menuActive ? "" : styles.open__navbar__menu}`}
          >
            <ul className={styles.navbar__list}>
              <li>
                <Link 
                  rel="preload"
                  href="/"
                  onClick={handleClick}
                  className={styles.navbar__link}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link 
                  rel="preload"
                  href="/aboutus"
                  onClick={handleClick}
                  className={`${styles.navbar__link} ${styles.navbar__link__1}`}
                >
                  {t("aboutus")}
                </Link>
                <ul
                  className={` ${styles.sub__navbar__list} ${styles.navbar__link__1}`}
                >
                  <li>
                    <Link
                   
                      rel="preload"
                      href="/aboutus/news"
                      onClick={handleClick}
                      className={styles.sub__navbar__link}
                    >
                      {t('news')}
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
              <li>
                <Link 
                  rel="preload"
                  onClick={handleClick}
                  href="/products"
                  className={`${styles.navbar__link}`}
                >
                  {t("product")}
                </Link>
                <ul
                  className={` ${styles.sub__navbar__list} ${styles.navbar__link__2}`}
                >
                
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
              <ul className={styles.navbar__list}>
                <li>
                  <Dropdown />
                </li>
              </ul>
            </ul>
          </nav>

          <div
            className={`${
              menuActive
                ? [styles.navbar__burger]
                : [styles.navbar__burger__exit]
            }`}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Navbar);
