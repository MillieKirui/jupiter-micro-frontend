import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { usePageData, useTheme } from "../../core";
import { Topbar } from "./Topbar";

export function Header() {;
  const { config, classes, attributes } = useTheme();
  const { pageTitle, moduleName } = usePageData();
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
          {config.aside.content && config.aside.content === "menu" && (
            <h3 className="text-dark fw-bolder my-1 fs-2">{pageTitle}</h3>
          )}
        </div>
        {/* end::Left */}

        {/* begin::Right */}
        <div className="d-flex align-items-center">
          <Topbar />
        </div>
        {/* end::Right */}
      </div>
    </>
  );
}
