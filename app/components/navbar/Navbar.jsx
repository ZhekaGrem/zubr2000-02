"use client";
import React, { memo, useState, useEffect } from "react";
import { DropDownMenu } from "./navformobile/DropDownMenu";
import { NavbarListMobile } from "./navformobile/NavbarListMobile";
import { NavbarItem } from "./navformobile/NavbarItem";
import { NavbarListDesktop } from "./navforbigscreen/NavbarListDesktop";
import {BackToTopButton} from "../BackToTop/BackToTopButton";





function Navbar() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 1180
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
   
      <NavbarListMobile>
        <NavbarItem icon="/angle-bottom.svg">
          <DropDownMenu />
        </NavbarItem>
      </NavbarListMobile>
   
      <NavbarListDesktop/>
  <BackToTopButton/>
    
  </nav>
  );
}






export default memo(Navbar);
