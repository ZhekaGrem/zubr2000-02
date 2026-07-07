"use client";
import styles from "@/app/styles/component/navbarscreen.module.css";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";

const LangDropBar = lazy(() => import("./LangDropBar"));

export const NavbarListDesktop = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cleanPath = (pathname || "").replace(/\/+$/, "");
  const isHome = cleanPath === `/${locale}` || cleanPath === "" || cleanPath === "/";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // gated by mounted → SSR і перший клієнтський рендер однакові (без hydration mismatch)
  const transparent = mounted && isHome && !scrolled;

  const handleMouseEnter = useCallback((dropdown) => {
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const navItems = [
    {
      key: "home",
      href: "/",
      label: t("home"),
    },
    {
      key: "aboutus",
      href: "/aboutus",
      label: t("aboutus"),
      dropdown: [
        { href: "/aboutus/news", label: t("news") },
        { href: "/aboutus/certificates", label: t("certificates") },
        { href: "/aboutus/manufacturing-process", label: t("manufacturing") },
        { href: "/aboutus/quality-standarts", label: t("quality") },
        ...(locale === "uk" ? [{ href: "/aboutus/offers", label: t("offers") }] : []),
      ],
    },
    {
      key: "products",
      href: "/products",
      label: t("product"),
      dropdown: [
        { href: "/products/oak-lumber", label: t("oak") },
        { href: "/products/ash-lumber", label: t("ash") },
        { href: "/products/birch-lumber", label: t("birch") },
        { href: "/products/modrina-lumber", label: t("modrina") },
      ],
    },
    {
      key: "contact",
      href: "/contact",
      label: t("contact"),
    },
  ];

  return (
    <nav className={`${styles.navbar} ${transparent ? styles.transparent : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logo}>
          <Image
              src="/Zubr-logo-01.webp"
              width={50}
              height={50}
              alt="ZUBR-2000 Logo"
              priority
            />
            <Image
              src="/ZUBR-2000-3.svg"
              width={240}
              height={56}
              alt="ZUBR-2000"
              className={styles.logoWord}
              priority
            />
            
          </div>
        </Link>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item.key}
              className={styles.navItem}
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
              
              {item.dropdown && (
                <ul className={`${styles.dropdown} ${activeDropdown === item.key ? styles.active : ""}`}>
                  {item.dropdown.map((subItem, index) => (
                    <li key={index} className={styles.dropdownItem}>
                      <Link href={subItem.href} className={styles.dropdownLink}>
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("language")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={styles.langButton}>
              <Image
                src="/language__02.svg"
                width={20}
                height={20}
                alt="Language"
                className={styles.svgImg}
              />
              <span>{t("language")}</span>
            </button>
            
            <div className={`${styles.dropdown} ${styles.langDropdown} ${activeDropdown === "language" ? styles.active : ""}`}>
              <Suspense fallback={<div className={styles.loading}>...</div>}>
                <LangDropBar />
              </Suspense>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link href="/contact#contact_name" className={styles.cta}>
              {t("writeus")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};