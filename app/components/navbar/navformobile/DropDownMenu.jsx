"use client";
import React, { useState, useRef, useTransition, useEffect, useCallback } from "react";
import styles from "@/app/styles/component/navbar.module.css";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";
import { CSSTransition } from "react-transition-group";
import { usePathname, useRouter } from "next-intl/client";

const OTHER_LOCALES = ["en", "uk", "pl", "da", "de", "it", "sv", "fr", "ru"];

export const DropDownMenu = (props) => {
  const t = useTranslations("Index");
  const [activeMenu, setactiveMenu] = useState("main");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [, startTransition] = useTransition();

  const mainRef = useRef(null);
  const aboutusRef = useRef(null);
  const productsRef = useRef(null);
  const langRef = useRef(null);

  const prefetchLocale = useCallback(
    (nextLocale) => {
      if (nextLocale === locale) return;
      try {
        router.prefetch(pathname, { locale: nextLocale });
      } catch {}
      try {
        router.prefetch(`/${nextLocale}${pathname === "/" ? "" : pathname}`);
      } catch {}
    },
    [pathname, locale, router]
  );

  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    const handle = idle(() => {
      OTHER_LOCALES.forEach((l) => prefetchLocale(l));
    });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);
    };
  }, [prefetchLocale]);

  const switchLocale = (nextLocale) => (event) => {
    event.preventDefault();
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  function DropdownItem(props) {
    return (
      <div
        className={styles.menu__item}
        onClick={() => props.goToMenu && setactiveMenu(props.goToMenu)}
      >
        <span className={styles.icon__button}> {props.leftIcon}</span>
        {props.children}
        <span className={styles.icon__right}> {props.rightIcon}</span>
      </div>
    );
  }

  return (
    <div className={styles.dropdown} >
      <CSSTransition
        in={activeMenu === "main"}
        nodeRef={mainRef}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div ref={mainRef} className={styles.menu}>
          <Link href="/" onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("home")}</DropdownItem>
          </Link>
          <DropdownItem
            rightIcon={
              <Image
                src="/angle-right.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu="aboutus"
          >
            {t("aboutus")}
          </DropdownItem>
          <DropdownItem
            rightIcon={
              <Image
                src="/angle-right.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu="products"
          >
            {" "}
            {t("product")}
          </DropdownItem>
          <Link
            rel="preload"
            onClick={() => setactiveMenu(!false)}
            href="/contact"
          >
            {" "}
            <DropdownItem> {t("contact")}</DropdownItem>
          </Link>
          <DropdownItem
            rightIcon={
              <Image
                src="/angle-right.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu="lang"
          >
            {" "}
            {t("language")}
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "aboutus"}
        nodeRef={aboutusRef}
        unmountOnExit
        timeout={500}
        classNames="menu-aboutus"
      >
        <div ref={aboutusRef} className={styles.menu}>
          <DropdownItem
            leftIcon={
              <Image
                src="/angle-left.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu="main"
          ></DropdownItem>

          <Link
            rel="preload"
            href="/aboutus"
            onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("infous")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/aboutus/news"
            onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("news")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/aboutus/certificates"
            onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("certificates")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/aboutus/manufacturing-process"
            onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("manufacturing")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/aboutus/quality-standarts"
            onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("quality")}</DropdownItem>
          </Link>
         {locale === 'uk' && ( <Link
            rel="preload"
            href="/aboutus/offers"
            onClick={() => setactiveMenu(!false)}>
            <DropdownItem> {t("offers")}</DropdownItem>
          </Link>)}

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "products"}
        nodeRef={productsRef}
        unmountOnExit
        timeout={500}
        classNames="menu-products"
      >
        <div ref={productsRef} className={styles.menu}>
          <DropdownItem
            leftIcon={
              <Image
                src="/angle-left.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu="main"
          ></DropdownItem>

          <Link
            rel="preload"
            href="/products"
            onClick={() => setactiveMenu(!false)}
          >
            <DropdownItem>{t("ourproduct")}</DropdownItem>
          </Link>

          <Link
            rel="preload"
            href="/products/oak-lumber"
            onClick={() => setactiveMenu(!false)}
          >
            <DropdownItem>{t("oak")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/products/ash-lumber"
            onClick={() => setactiveMenu(!false)}
          >
            <DropdownItem>{t("ash")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/products/birch-lumber"
            onClick={() => setactiveMenu(!false)}
          >
            <DropdownItem>{t("birch")}</DropdownItem>
          </Link>
          <Link
            rel="preload"
            href="/products/modrina-lumber"
            onClick={() => setactiveMenu(!false)}
          >
            <DropdownItem>{t("modrina")}</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "lang"}
        nodeRef={langRef}
        unmountOnExit
        timeout={500}
        classNames="menu-lang"
      >
        <div ref={langRef} className={styles.menu}>
          <DropdownItem
            leftIcon={
              <Image
                src="/angle-left.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu="main"
          ></DropdownItem>
          <a href={`/en${pathname}`} onClick={switchLocale("en")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language EN" src="/gb.webp" width={20} height={16} />{" "}
              English
            </DropdownItem>
          </a>
          <a href={`/uk${pathname}`} onClick={switchLocale("uk")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language UK" src="/ua.webp" width={20} height={16} />{" "}
              Українська
            </DropdownItem>
          </a>
          <a href={`/pl${pathname}`} onClick={switchLocale("pl")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language pl" src="/pl.webp" width={20} height={16} />{" "}
              Polski
            </DropdownItem>
          </a>
          <a href={`/da${pathname}`} onClick={switchLocale("da")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language da" src="/dk.webp" width={20} height={16} />{" "}
              Danmark
            </DropdownItem>
          </a>
          <a href={`/de${pathname}`} onClick={switchLocale("de")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language de" src="/de.webp" width={20} height={16} />{" "}
              Deutsch
            </DropdownItem>
          </a>
          <a href={`/it${pathname}`} onClick={switchLocale("it")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language it" src="/it.webp" width={20} height={16} />{" "}
              Italiano
            </DropdownItem>
          </a>
          <a href={`/sv${pathname}`} onClick={switchLocale("sv")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language SW" src="/se.webp" width={20} height={16} />{" "}
              Sverige
            </DropdownItem>
          </a>
          <a href={`/fr${pathname}`} onClick={switchLocale("fr")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language FR" src="/fr.webp" width={20} height={16} />{" "}
              Français
            </DropdownItem>
          </a>
          <a href={`/ru${pathname}`} onClick={switchLocale("ru")}>
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language Ru" src="/ru.webp" width={20} height={16} />{" "}
              Русский
            </DropdownItem>
          </a>
        </div>
      </CSSTransition>
    </div>
  );
};
