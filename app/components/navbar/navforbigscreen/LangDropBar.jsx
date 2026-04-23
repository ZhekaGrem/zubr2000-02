"use client";
import styles from "@/app/styles/component/navbarscreen.module.css";
import Image from "next/image";
import React, { useTransition, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next-intl/client";
import { useLocale } from "next-intl";

const LangList = [
  { locale: "uk", alt: "language UA", img: "/ua.webp", title: "Українська", id: "1" },
  { locale: "en", alt: "language En", img: "/gb.webp", title: "English", id: "2" },
  { locale: "pl", alt: "language Pl", img: "/pl.webp", title: "Polski", id: "3" },
  { locale: "da", alt: "language Da", img: "/dk.webp", title: "Danmark", id: "4" },
  { locale: "de", alt: "language de", img: "/de.webp", title: "Deutsch", id: "5" },
  { locale: "fr", alt: "language Fr", img: "/fr.webp", title: "Français", id: "6" },
  { locale: "it", alt: "language It", img: "/it.webp", title: "Italiano", id: "7" },
  { locale: "sv", alt: "language SW", img: "/se.webp", title: "Sverige", id: "8" },
  { locale: "ru", alt: "language Ru", img: "/ua.webp", title: "Russian", id: "9" },
];

const LangDropBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const prefetchLocale = useCallback(
    (nextLocale) => {
      if (nextLocale === activeLocale) return;
      try {
        router.prefetch(pathname, { locale: nextLocale });
      } catch {}
      try {
        router.prefetch(`/${nextLocale}${pathname === "/" ? "" : pathname}`);
      } catch {}
    },
    [pathname, activeLocale, router]
  );

  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    const handle = idle(() => {
      LangList.forEach((l) => prefetchLocale(l.locale));
    });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);
    };
  }, [prefetchLocale]);

  const handleSwitch = (nextLocale) => (event) => {
    event.preventDefault();
    if (nextLocale === activeLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <ul
      className={styles.sub__menu__list}
      style={{ opacity: isPending ? 0.7 : 1, transition: "opacity 0.15s" }}
    >
      {LangList.map((list) => (
        <li key={list.id + list.locale}>
          <a
            href={`/${list.locale}${pathname}`}
            className={styles.sub__menu__link}
            onClick={handleSwitch(list.locale)}
            onMouseEnter={() => prefetchLocale(list.locale)}
            onFocus={() => prefetchLocale(list.locale)}
            onTouchStart={() => prefetchLocale(list.locale)}
          >
            <div className={styles.menu__lang}>
              <Image
                className={styles.menu__flag}
                alt={list.alt}
                src={list.img}
                width={20}
                height={16}
              />
              {list.title}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LangDropBar;
