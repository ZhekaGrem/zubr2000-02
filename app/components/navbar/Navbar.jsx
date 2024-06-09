import React, { memo} from "react";
import { DropDownMenu } from "./navformobile/DropDownMenu";
import { NavbarListMobile } from "./navformobile/NavbarListMobile";
import { NavbarItem } from "./navformobile/NavbarItem";
import { NavbarListDesktop } from "./navforbigscreen/NavbarListDesktop";
import { BackToTopButton } from "../BackToTop/BackToTopButton";

function Navbar() {
 



  return (
    <nav>
      <NavbarListMobile>
        <NavbarItem icon='/angle-bottom.svg'>
          <DropDownMenu />
        </NavbarItem>
      </NavbarListMobile>

      <NavbarListDesktop />
      
    </nav>
  );
}

export default memo(Navbar);
