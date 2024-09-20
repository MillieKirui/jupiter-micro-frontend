import React, { useRef, useEffect } from "react";
import { AsideMenuMain } from "./AsideMenuMain";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../setup";
import { AsideMenuAdmin } from "../AsideMenuAdmin";

type Props = {
  menuType: "main";
  asidePrimaryDisplay: boolean;
};

const AsideMenu: React.FC<Props> = ({ menuType, asidePrimaryDisplay }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const role = useSelector((state: RootState) => state.auth.role);
  const user= useSelector<RootState>(
    (state) => state.auth.user
  );
  console.log(user);
  return (
    <div
      className="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 ms-5"
      data-kt-menu="true"
    >
      <div
        ref={scrollRef}
        className="hover-scroll-y pe-4 pe-lg-5"
        id="kt_aside_menu_scroll"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"        
        data-kt-scroll-wrappers="#kt_aside_wordspace"
        data-kt-scroll-offset="10px"
      >
        <div className="menu-wrapper menu-column menu-fit">
          {role ==="admin" ?
              menuType === "main" && <AsideMenuAdmin />
              :
              menuType === "main" && <AsideMenuMain />
          }
        </div>
      </div>
    </div>
  );
};

export { AsideMenu };
