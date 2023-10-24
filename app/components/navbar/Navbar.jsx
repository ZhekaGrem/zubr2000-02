"use client";
import React, { useState, memo } from "react";
import styles from "@/app/styles/component/navbar.module.css";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";
import { CSSTransition } from "react-transition-group";

function Navbar() {
  const t = useTranslations("Index");
  const pathname = usePathname();

  const locale = useLocale();
  const [menuActive, setMenuActive] = useState(true);
  const handleClick = () => {
    setMenuActive(true);
  };
  return (
    <NavbarList>
      <NavItem icon="/angle-bottom.svg">
        <Dropdownmenu />
      </NavItem>
      .
    </NavbarList>
  );
}

function NavbarList(props) {
  return (
    <nav
      loading="eager"
      alt="forest"
      role="img"
      aria-label="forest"
      className={`${styles.navbar}`}
    >
      <ul className={styles.navbar__nav}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`${styles.nav__item}`}>
      <Link rel="preload" href="/" onClick={() => setOpen(!open)}>
        <Image src={props.icon} width={60} height={60} alt="dropdown button" />
      </Link>
      {open && props.children}
    </li>
  );
}

function Dropdownmenu() {
  const t = useTranslations("Index");
  const [activeMenu, setactiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <div href="#" className={styles.menu__item} onClick={()=> props.goToMenu && setactiveMenu(props.goToMenu)}>
        <span className={styles.icon__button}> {props.leftIcon}</span>
        {props.children}
        <span className={styles.icon__right}> {props.rightIcon}</span>
      </div>
    );
  }

  return (
    <div className={styles.dropdown} style={{height: menuHeight}}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem> {t("home")}</DropdownItem>
          <DropdownItem
            rightIcon={
              <Image
                src="/angle-right.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu ="aboutus"
          >
            {" "}
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
            goToMenu ="products"
          >
            {" "}
            {t("product")}
          </DropdownItem>
          <DropdownItem> {t("contact")}</DropdownItem>
          <DropdownItem
            rightIcon={
              <Image
                src="/angle-right.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
            }
            goToMenu ="lang"
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
          <DropdownItem leftIcon={
              <Image
                src="/angle-left.svg"
                width={50}
                height={50}
                alt="dropleft button"
              /> } goToMenu ="main"></DropdownItem>
          <DropdownItem> {t("news")}</DropdownItem>
          <DropdownItem>{t("certificates")}</DropdownItem>
          <DropdownItem>{t("manufacturing")}</DropdownItem>
          <DropdownItem> {t("contact")}</DropdownItem>
          <DropdownItem>{t("quality")}</DropdownItem>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === "products"}
        unmountOnExit
        timeout={500}
        classNames="menu-products"
      >
        <div className={styles.menu}>
          <DropdownItem leftIcon={
              <Image
                src="/angle-left.svg"
                width={50}
                height={50}
                alt="dropleft button"
              /> } goToMenu ="main"></DropdownItem>
          <DropdownItem> {t("oak")}</DropdownItem>
          <DropdownItem>{t("certificates")}</DropdownItem>
          <DropdownItem>{t("manufacturing")}</DropdownItem>
          <DropdownItem> {t("contact")}</DropdownItem>
          <DropdownItem>{t("quality")}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "lang"}
        unmountOnExit
        timeout={500}
        classNames="menu-lang"
      >
        <div className={styles.menu}>
          <DropdownItem leftIcon={
              <Image
                src="/angle-left.svg"
                width={50}
                height={50}
                alt="dropleft button"
              />
              
             }
             goToMenu ="main"
              ></DropdownItem>
          <DropdownItem> {t("news")}</DropdownItem>
          <DropdownItem>{t("certificates")}</DropdownItem>
          <DropdownItem>{t("manufacturing")}</DropdownItem>
          <DropdownItem>   Français{" "}
                  <Image
                    alt="language FR"
                    src="/fr.webp"
                    width={20}
                    height={16}
                  />
                </DropdownItem>
          <DropdownItem>Français</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default memo(Navbar);
