import React, { useRef, useEffect } from "react";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { LandingPageMenu } from "./LandingPageMenu";

type Props = {
  menuType: "main";
  asidePrimaryDisplay: boolean;
};

const AsideLandingMenu: React.FC<Props> = ({ menuType, asidePrimaryDisplay }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
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
          {
              menuType === "main" && <LandingPageMenu />
          }
        </div>
      </div>
    </div>
  );
};

export { AsideLandingMenu };
