"use client";
import React, { useState } from "react";
import styles from "@/app/styles/component/navbar.module.css";
import Image from "next/image";
import { useTranslations,useLocale } from "next-intl";
import Link from "next-intl/link";
import { CSSTransition } from "react-transition-group";
import { usePathname } from "next-intl/client";

export const DropDownMenu = (props) => {
  const t = useTranslations("Index");
  const [activeMenu, setactiveMenu] = useState("main");
  const pathname = usePathname();
const locale = useLocale();

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
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className={styles.menu}>
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
        unmountOnExit
        timeout={500}
        classNames="menu-aboutus"
      >
        <div className={styles.menu}>
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
        unmountOnExit
        timeout={500}
        classNames="menu-products"
      >
        <div className={styles.menu}>
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
        unmountOnExit
        timeout={500}
        classNames="menu-lang"
      >
        <div className={styles.menu}>
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
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="en"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language EN" src="/gb.webp" width={20} height={16} />{" "}
              English
            </DropdownItem>
          </Link>
          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="uk"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language EN" src="/ua.webp" width={20} height={16} />{" "}
              Українська
            </DropdownItem>
          </Link>
          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="pl"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language pl" src="/pl.webp" width={20} height={16} />{" "}
              Polski
            </DropdownItem>
          </Link>

          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="da"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language da" src="/dk.webp" width={20} height={16} />{" "}
              Danmark
            </DropdownItem>
          </Link>

          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="de"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language de" src="/de.webp" width={20} height={16} />{" "}
              Deutsch
            </DropdownItem>
          </Link>

          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="it"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language it" src="/it.webp" width={20} height={16} />{" "}
              Italiano
            </DropdownItem>
          </Link>

          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="sv"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language SW" src="/se.webp" width={20} height={16} />{" "}
              Sverige
            </DropdownItem>
          </Link>

          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="fr"
          >
            <DropdownItem>
              <Image className={styles.menu__item__img}  alt="language FR" src="/fr.webp" width={20} height={16} />{" "}
              Français
            </DropdownItem>
          </Link>

          <Link
            prefetch={false}
            rel="preload"
            to=""
            href={usePathname()}
            locale="ru"
            
          >
            <DropdownItem>
              <Image className={styles.menu__item__img} alt="language Ru" src="/ru.webp" width={20} height={16} />{" "}
              Руский
            </DropdownItem>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
};
