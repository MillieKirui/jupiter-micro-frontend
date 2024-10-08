import React, { createContext, useContext, useState, useEffect } from "react";
import { DefaultThemeConfig } from "./DefaultThemeConfig";
import {
  getEmptyCssClasses,
  getEmptyHTMLAttributes,
  ThemeSetup,
} from "./ThemeSetup";
import {
  IThemeConfig,
  IThemeCSSClasses,
  IThemeHTMLAttributes,
} from "./ThemeModels";

export interface ThemeContextModel {
  config: IThemeConfig;
  classes: IThemeCSSClasses;
  attributes: IThemeHTMLAttributes;
  setTheme: (_themeConfig: Partial<IThemeConfig>) => void;
}

const ThemeContext = createContext<ThemeContextModel>({
  config: DefaultThemeConfig,
  classes: getEmptyCssClasses(),
  attributes: getEmptyHTMLAttributes(),
  setTheme: (_themeConfig: Partial<IThemeConfig>) => {},
});


const ThemeProvider: React.FC = ({ children }) => {
  const [config, setConfig] = useState(ThemeSetup.config);
  const [classes, setClasses] = useState(ThemeSetup.classes);
  const [attributes, setAttributes] = useState(ThemeSetup.attributes);
  const setTheme = (_themeConfig: Partial<IThemeConfig>) => {
    const bodyClasses = Array.from(document.body.classList);
    bodyClasses.forEach((cl) => document.body.classList.remove(cl));
    ThemeSetup.updatePartialConfig(_themeConfig);
    setConfig(Object.assign({}, ThemeSetup.config));
    setClasses(ThemeSetup.classes);
    setAttributes(ThemeSetup.attributes);
  };
  const value: ThemeContextModel = {
    config,
    classes,
    attributes,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };

export function useTheme() {
  return useContext(ThemeContext);
}
