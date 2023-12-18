import React from 'react'
import Image from "next/image";
import Link from "next-intl/link";
import styles from "@/app/styles/component/navbar.module.css";

export const NavbarLogo=()=>{
    return(
      <li className={styles.navbar__logo}>
      <Link rel="preload"  href="/">
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
    </li>
    )}