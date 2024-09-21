import { Link } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "../../core";
import { AsideLandingMenu } from "./AsideLandingMenu";

export function AsideLandingDefault() {
  const { config, classes } = useTheme();

  return (
    <>
      {config.aside.display && (
        <div
          id="kt_aside"
          className={`d-lg-none ${clsx("aside", "bg-white", classes.aside.join(" "))}`}
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true}"
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
                    <div className="aside-logo py-2 pb-15" id="kt_aside_logo">
                    <Link to="/" className="text-info fw-bolder fs-5 ms-0 ms-md-10 justify-content-start align-items-start">
                        <div>Jupiter </div>
                        <div>Microfinance </div>                  
                    </Link>
                    </div>

                    <AsideLandingMenu
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
