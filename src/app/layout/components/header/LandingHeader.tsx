import { Link } from "react-router-dom";
import { usePageData, useTheme } from "../../core";
import { LandingPageMenu } from "../aside/LandingPageMenu";
import { LandingTopBar } from "./LandingTopBar";

export function LandingHeader() {;
  const { config, classes, attributes } = useTheme();
 
  return (
    <>
      <div
        className={`${classes.headerContainer.join(
          " "
        )} d-flex align-items-stretch justify-content-between`}
        {...Object.fromEntries(Array.from(attributes.headerContainer))}
      >
        {/* begin::Left */}
        <div className="d-flex align-items-center">
        <div className="aside-logo py-2 pb-15 pt-20 pt-lg-0" id="kt_aside_logo">
            <Link to="/" className="text-info fw-bolder fs-5 ms-0 ms-md-10 justify-content-start align-items-start">
                <div>Jupiter </div>
                <div>Microfinance </div>                  
            </Link>
        </div>
        </div>
        {/* end::Left */}
        {/* begin::Right */}
        <div className="d-flex align-items-center">
          <LandingTopBar/>
        </div>
        {/* end::Right */}
              {/* begin::Right */}
      <span className="d-none d-lg-block d-lg-flex row-g gap-lg-20 fw-bolder fs-4">
          <LandingPageMenu/>
        </span>
        {/* end::Right */}
      </div>
    </>
  );
}
