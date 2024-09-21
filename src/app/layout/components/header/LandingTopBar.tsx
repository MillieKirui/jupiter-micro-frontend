import { useTheme } from "../../core";
import { LandingPageMenu } from "../aside/LandingPageMenu";

export function LandingTopBar() {
  const { config } = useTheme();
  
  return (
    <>   
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
    </>
  );
}
