import React from 'react'
import styles from "@/app/styles/component/navbar.module.css";

import { NavbarLogo } from "./NavbarLogo";


export const NavbarList = (props) => {
    return (
        <nav
        loading="eager"
        alt="forest"
        role="img"
        aria-label="forest"
        className={`${styles.navbar}`}
      >
        <ul className={styles.navbar__nav}>
        <NavbarLogo/>
          {props.children}</ul>
      </nav>
    )
}
