import React, { useState } from "react";
import { KTSVG } from "../../../helpers";
import {
  HeaderUserMenu
} from "../../../partials";
import { useTheme } from "../../core";
import { Notifications } from "../../../partials/Notifications";
import { useSelector } from "react-redux";

export function Topbar() {
  const { config } = useTheme();

  const pendingLoans = useSelector((state: any) => state.loan.pendingLoans);
  
  return (
    <>

      {/* begin::User */}
      <div className="ms-1 ms-lg-6">
        {/* begin::Toggle */}
        <div
          className="btn btn-icon btn-sm btn-active-bg-accent"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
        >
          <i className="fa fa-user fs-2x" aria-hidden="true"></i>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Notifications */}
      <div className="ms-1 ms-lg-6">
        {/* begin::Dropdown */}
        <button
          className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
        >
          <i className="fa fa-bell fs-2x" aria-hidden="true"></i>
        </button>
        <span className="p-0 m-0 text-danger">{pendingLoans}</span>
        {/* end::Dropdown */}
        <Notifications/>
      </div>
      {/* end::Notifications */}

      {/* begin::Aside Toggler */}
      {config.aside.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_aside_toggler"
        >
          <i className="fa fa-bars fs-2x" aria-hidden="true"></i>
        </button>
      )}
      {/* end::Aside Toggler */}

      {/* begin::Sidebar Toggler */}
      {config.sidebar.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_sidebar_toggler"
        >
          <KTSVG
            path="/media/icons/duotone/Text/Menu.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </button>
      )}
      {/* end::Sidebar Toggler */}
    </>
  );
}
