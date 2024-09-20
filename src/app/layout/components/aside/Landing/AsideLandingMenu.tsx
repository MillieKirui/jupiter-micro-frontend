import { Link } from "react-router-dom";
import clsx from "clsx";
import { AsideMenu } from "./AsideMenu";
import { useTheme } from "../../../core";

export function AsideLandingMenu() {
  const { config, classes } = useTheme();

  return (
    <>
      {config.aside.display && (
        <div
          id="kt_aside"
          className={clsx("aside", "bg-white", classes.aside.join(" "))}
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width={
            config.aside.secondaryDisplay
              ? "{default:'200px', '300px': '250px'}"
              : "70px"
          }
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_aside_toggler"
        >

          {config.aside.secondaryDisplay && (
            <div className="aside-secondary d-flex flex-row-fluid bg-white shadow rounded">
              <div
                className="aside-workspace my-7 ps-5 pe-4 ps-lg-10 pe-lg-6"
                id="kt_aside_wordspace"
              >
                  <>
                    {/* begin::Logo */}
                    <div className="aside-logo py-2 pb-15" id="kt_aside_logo">
                      <Link to="/">
                      <i className="fa fa-user fs-2x me-2" aria-hidden="true"></i>
                      <span className="text-info fw-bolder fs-5" id="copy-text">Username</span>
                      </Link>
                    </div>
                    {/* end::Logo */}
                    <AsideMenu
                      menuType="main"
                      asidePrimaryDisplay={config.aside.primaryDisplay}
                    />
                  </>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
