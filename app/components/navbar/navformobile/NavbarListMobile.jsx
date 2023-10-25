import React from 'react'
import styles from "@/app/styles/component/navbar.module.css";

import { NavbarLogo } from "./NavbarLogo";


export const NavbarListMobile = (props) => {
    return (
      <div
      loading="eager"
      alt="forest"
      role="img"
      aria-label="forest"
      className={`${styles.navbar}`}
    >
      <ul className={styles.navbar__nav}>
         <NavbarLogo/>
        {props.children} {/* Your dynamic content here */}
      </ul>
    </div>
    )
}
