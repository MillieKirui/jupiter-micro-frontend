import { Link } from "react-router-dom";
import { KTSVG } from "../../helpers";
import { useTheme } from "../../layout/core";
import { toAbsoluteUrl } from "../../helpers";
import { ContactUsPage } from "../ContactUs/ContactUsPage";
import { Footer } from "../../layout/components/Footer";

export function LandingPage() {
  const { config, classes, attributes } = useTheme();
  const gradientStyle = {
    backgroundImage: 'linear-gradient(100.33deg, rgba(136, 100, 140, 0.6) -36.88%, rgba(136, 100, 140, 0.463495) 21.99%, rgba(136, 100, 140, 0.414385) 30.82%, rgba(147, 117, 152, 0.359844) 40.28%, rgba(223, 227, 231, 0) 102.68%)'
  };
  return (
    <>
       <div
      id="kt_header"
      className="header pt-10 shadow"
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: false}"
    >
      <div
        className={`${classes.headerContainer.join(
          " "
        )} d-flex align-items-stretch justify-content-between pt-40 ps-0 pb-40`}
        {...Object.fromEntries(Array.from(attributes.headerContainer))}
      >
        {/* begin::Left */}
        <div className="d-flex align-items-center">
          {!config.aside.content && (
            <>
              {/* begin::Logo */}
              <Link to="/" className="text-info fw-bolder fs-5">
                Jupiter 
                <br/>
                Microfinance
              </Link>
              {/* end::Logo */}
            </>
          )}
        </div>
        {/* end::Left */}
        {/* begin::Right */}
        <div  className="d-lg-block d-md-block  d-sm-none">
        <div className="d-flex align-items-center gap-15 fs-5 ">
          <Link to="/" className="text-dark">Home</Link>
          <Link to="" className="text-dark">About Us</Link>
          <Link to="/auth" className="text-dark">Login/Register</Link>
          <Link to="" className="text-dark">Contact Us</Link>
        </div>

        </div>
        {/* end::Right */}
      </div>
    </div>  
    <div
        className="d-flex flex-column flex-lg-row flex-column-fluid pt-15"
      >
        {/* Content */}
        <div className="d-flex flex-column flex-lg-row-auto w-lg-600px pt-lg-0">
          {/* Top */}
          <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15 text-center">
            {/* begin::Aside Subtitle */}
            <h3 className="fw-bolder fs-3x text-dark-info text-start ps-20 lh-lg">
              Micro-finance and
              <br />
               credit services
            </h3>
            {/* end::Aside Subtitle */}
            <div className="d-flex flex-column ps-20">
             {/* begin::Aside description */}
             <div  className="fw-bolder fs-1x text-info lh-lg text-start ">We offer easy loans for your business, education or anything else</div>
              {/* begin::Aside description */}
              <div className="pt-10 text-start">
                                          {/* begin::Aside button */}
               <button className="btn btn-sm-sm btn-lg-md btn-info text-start pe-6 ps-6"> <a href="/auth" className="text-white">Get Started</a></button>
                {/* begin::Aside button*/}

              </div>
              </div>
          </div>
          {/* Bottom */}
        </div>
        <div className="flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden mx-auto mw-450px w-100">
          <div className="d-flex flex-column-fluid flex-center py-10">
          <div
            className="d-flex flex-row-fluid bgi-size-cover bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-450px"
            style={{
              backgroundImage: `url(${toAbsoluteUrl(
                "/media/illustrations/business-deal.png"
              )})`,
            }}
          ></div>
          </div>
        </div>
      </div>
    <div className="ps-15">
      <ContactUsPage/>
    </div>
    <Footer/>   
    </>
  );
}
