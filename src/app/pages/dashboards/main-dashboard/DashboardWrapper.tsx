/* eslint-disable react-hooks/exhaustive-deps */
import React, { Children, useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
  PageTitle,
}from "../../../layout/core";

interface DashboardWrapperProps {
  children: React.ReactNode; 
}

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

const DashboardWrapper: React.FC<DashboardWrapperProps>=({children})=> {
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
      {children}
    </>
  );
}
export default DashboardWrapper;
