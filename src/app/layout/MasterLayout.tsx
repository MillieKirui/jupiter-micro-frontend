import React from "react";
import { AsideDefault } from "./components/aside/AsideDefault";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { Toolbar } from "./components/Toolbar";
import { ScrollTop } from "./components/ScrollTop";
import { Content } from "./components/Content";
import { MasterInit } from "./MasterInit";
import { PageDataProvider } from "./core";
import SideMenuDrawer from "../pages/Landing/partials/SideMenuDrawer";

const MasterLayout: React.FC = ({ children }) => {
  return (
    <PageDataProvider>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <AsideDefault />
          <div
            className="wrapper d-flex flex-column flex-row-fluid me-0wrapper d-flex flex-column flex-row-fluid me-0 bg-light-info"
            id="kt_wrapper"
          >
            <HeaderWrapper />
            <div className="d-flex flex-column flex-column-fluid">
              <Toolbar />
              <div
                className="content fs-6 d-flex flex-column-fluid"
                id="kt_content"
              >
                <Content>{children}</Content>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ScrollTop />
      <MasterInit />
    </PageDataProvider>
  );
};

export { MasterLayout };
