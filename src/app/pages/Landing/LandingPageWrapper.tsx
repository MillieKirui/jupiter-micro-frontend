/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { getConfig, IThemeConfig, PageTitle, useTheme } from "../../layout/core";
import { LandingPage } from "./LandingPage";
import { LandingLayout } from "../../layout/LandingLayout";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  aside: {
    ...defaultPageConfig.aside,
    display: true,
    primaryDisplay: false,
    secondaryDisplay: true,
    toggle: false,
    content: "menu",
  },
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: false,
  },
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: false,
  },
};

export function LandingPageWrapper() {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(dashboardPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
    <LandingLayout>
    <LandingPage />
    </LandingLayout>
    </>
  );
}
