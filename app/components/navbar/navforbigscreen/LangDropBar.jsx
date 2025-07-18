import styles from "@/app/styles/component/navbarscreen.module.css";
import Image from "next/image";
import Link from "next-intl/link";

import React from "react";
import { usePathname } from "next-intl/client";

const LangList = [
  {
    locale: "uk",
    alt: "language UA",
    img: "/ua.webp",
    title: "Українська",
    id: "1",
  },
  {
    locale: "en",
    alt: "language En",
    img: "/gb.webp",
    title: "English",
    id: "2",
  },
  {
    locale: "pl",
    alt: "language Pl",
    img: "/pl.webp",
    title: "Polski",
    id: "3",
  },
  {
    locale: "da",
    alt: "language Da",
    img: "/dk.webp",
    title: "Danmark",
    id: "4",
  },
  {
    locale: "de",
    alt: "language de",
    img: "/de.webp",
    title: "Deutsch",
    id: "5",
  },
  {
    locale: "fr",
    alt: "language Fr",
    img: "/fr.webp",
    title: "Français",
    id: "6",
  },
  {
    locale: "it",
    alt: "language It",
    img: "/it.webp",
    title: "Italiano",
    id: "7",
  },
  {
    locale: "sv",
    alt: "language SW",
    img: "/se.webp",
    title: "Sverige",
    id: "8",
  },
  {
    locale: "ru",
    alt: "language Ru",
    img: "/ua.webp",
    title: "russian",
    id: "9",
  },
];


const LangDropBar = () => {
  const pathname = usePathname();
  return (
    <ul className={styles.sub__menu__list}>
      {LangList.map((list) => (
        <li key={list.id + list.locale}>
          <Link
            prefetch={false}
            rel='preload'
            to=''
            className={styles.sub__menu__link}
            href={pathname}
            locale={list.locale}
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
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangDropBar;
