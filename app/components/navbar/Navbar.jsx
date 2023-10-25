"use client";
import React, { memo } from "react";
import { DropDownMenu } from "./DropDownMenu";
import { NavbarList } from "./NavbarList";
import { NavbarItem } from "./NavbarItem";
import styles from "@/app/styles/component/navbar.module.css";
import Image from "next/image";
import Link from "next-intl/link";

function Navbar() {

  return (
    <NavbarList>
     
      <NavbarItem className={styles.last} icon="/angle-bottom.svg">
        <DropDownMenu />
      </NavbarItem>
    </NavbarList>
  );
}






export default memo(Navbar);
