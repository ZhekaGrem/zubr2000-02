import React from 'react';
import styles from "@/app/styles/component/navbarscreen.module.css";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next-intl/client";

export default function LangList() {
    console.log("LangList");
    const pathname = usePathname();
  return (
    <ul className={styles.sub__menu__list}>
  <li>
    <Link prefetch={false} rel='preload' to='' href={usePathname()} locale='uk'>
      <div className={styles.menu__lang}>
        <Image
          alt='language UA'
          src='/ua.webp'
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
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='en'
    >
      <div className={styles.menu__lang}>
        {" "}
        <Image
          alt='language En'
          src='/gb.webp'
          width={20}
          height={16}
          className={styles.menu__flag}
        />
        English{" "}
      </div>
    </Link>{" "}
  </li>
  <li>
    <Link
      prefetch={false}
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='pl'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language PL'
          src='/pl.webp'
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
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='da'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language DA'
          src='/dk.webp'
          width={20}
          height={16}
        />
        Danmark{" "}
      </div>
    </Link>
    {""}{" "}
  </li>
  <li>
    <Link
      prefetch={false}
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='de'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language DE'
          src='/de.webp'
          width={20}
          height={16}
        />
        Deutsch{" "}
      </div>
    </Link>
    {""}{" "}
  </li>
  <li>
    <Link
      prefetch={false}
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='fr'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language FR'
          src='/fr.webp'
          width={20}
          height={16}
        />
        Français{" "}
      </div>
    </Link>
    {""}{" "}
  </li>
  <li>
    <Link
      prefetch={false}
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='it'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language IT'
          src='/it.webp'
          width={20}
          height={16}
        />
        Italiano{" "}
      </div>
    </Link>
    {""}{" "}
  </li>
  <li>
    <Link
      prefetch={false}
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='sv'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language SW'
          src='/se.webp'
          width={20}
          height={16}
        />
        Sverige{" "}
      </div>
    </Link>{" "}
  </li>

  <li>
    <Link
      prefetch={false}
      rel='preload'
      to=''
      className={styles.sub__menu__link}
      href={usePathname()}
      locale='ru'
    >
      <div className={styles.menu__lang}>
        <Image
          className={styles.menu__flag}
          alt='language Ru'
          src='/ru.webp'
          width={20}
          height={16}
        />
        Руский
      </div>
    </Link>
  </li>
</ul>

  )
}
