"use client";
import React, { useState } from "react";
import styles from "@/app/styles/component/navbar.module.css";
import Image from "next/image";

export const NavbarItem = (props) => {
    const [open, setOpen] = useState(false);
  return (
    <li className={`${styles.nav__item}`}>
      <div rel="preload" onClick={() => setOpen(!open)}>
        <Image src={props.icon} width={60} height={60} style={{position:""}}alt="dropdown button" />
      </div>
      {open && props.children}
    </li>
  );
}
