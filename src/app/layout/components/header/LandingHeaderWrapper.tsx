/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IThemeCSSClasses, useTheme } from "../../core";
import { LandingHeader } from "./LandingHeader";


type Props = {
  classes: IThemeCSSClasses;
};

const HeaderDesktopFixedTabletFixed: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="kt_header"
      className={`header ${classes.header}`}
      data-kt-sticky="true"
      data-kt-sticky-name="header"
  >
      <LandingHeader></LandingHeader>
    </div>
  );
};

const HeaderDesktopFixedTabletFluid: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="kt_header"
      className={`header ${classes.header}`}
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{lg: '300px'}"
    >
      <LandingHeader></LandingHeader>
    </div>
  );
};

const HeaderDesktopFluidTabletFixed: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="kt_header"
      className={`header ${classes.header}`}
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: false}"
    >
      <LandingHeader></LandingHeader>
    </div>
  );
};

export function LandingHeaderWrapper() {
  const { config, classes } = useTheme();
  const { header } = config;
  return (
    <>
      {header.fixed.desktop && header.fixed.tabletAndMobile && (
        <HeaderDesktopFixedTabletFixed classes={classes} />
      )}

      {header.fixed.desktop && !header.fixed.tabletAndMobile && (
        <HeaderDesktopFixedTabletFluid classes={classes} />
      )}

      {!header.fixed.desktop && header.fixed.tabletAndMobile && (
        <HeaderDesktopFluidTabletFixed classes={classes} />
      )}

      {!header.fixed.desktop && !header.fixed.tabletAndMobile && (
        <div id="kt_header" className={`header ${classes.header}`}>
          <LandingHeader></LandingHeader>
        </div>
      )}
    </>
  );
}
