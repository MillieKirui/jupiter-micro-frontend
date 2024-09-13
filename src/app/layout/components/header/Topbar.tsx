import { KTSVG } from "../../../helpers";
import {
  HeaderUserMenu,
} from "../../../partials";
import { useTheme } from "../../core";

export function Topbar() {
  const { config } = useTheme();
  return (
    <>

      {/* begin::Notifications */}
      <div className="ms-1 ms-lg-6">
        {/* begin::Dropdown */}
        <button
          className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
        >
         <i className="far fa-bell fs-2x"></i>
        </button>
        {/* end::Dropdown */}
      </div>
      {/* end::Notifications */}
 
      {/* begin::User */}
      <div className="ms-1 ms-lg-6">
        {/* begin::Toggle */}
        <div
          className="btn btn-icon btn-sm btn-active-bg-accent"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
        >
          <i className="far fa-user fs-2x"></i>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Sidebar Toggler */}
      {config.sidebar.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_sidebar_toggler"
        >
         <i className="fa-solid fa-bars"></i>
        </button>
      )}
      {/* end::Sidebar Toggler */}
    </>
  );
}
