/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTheme } from "../core";
import { toAbsoluteUrl } from "../../helpers/AssetHelpers";

export function Footer() {
  const { classes } = useTheme();
  return (
    <div className={`footer py-4 d-flex flex-lg-column`} id="kt_footer">
      {/* begin::Container */}
      <div
            className="d-flex flex-row-fluid bgi-size-cover bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-150px"
            style={{
              backgroundImage: `url(${toAbsoluteUrl(
                "/media/illustrations/jupiter.jpg"
              )})`,
            }}
          >
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        {/* begin::Copyright */}
        <div className="text-light order-2 order-md-1">
          <div>
            <div>Jupiter Microfinance</div>
            <span>Our business is to help other businesses
              <br/> and individuals with loans
            </span>
            <div className="d-flex">
              <a href="#" className="text-light pt-3 pe-7 pb-3">
                      <i className="fab fa-facebook-f text-light"></i>
              </a>
              <a href="#" className="pt-3 pe-5 pb-3">
                <i className="fab fa-twitter text-light"></i>
              </a>
              <a href="#" className="pt-3 pe-5 pb-3">
                <i className="fab fa-whatsapp text-light"></i>
              </a>
              <a href="#" className="pt-3 pe-5 pb-3">
                <i className="fab fa-linkedin text-light"></i>
              </a>
            </div>
          </div>
          <span className="text-muted fw-bold me-2">
            {new Date().getFullYear()} &copy;
          </span>
          <a href="#" className="text-gray-800 text-hover-primary">
            Jupiter MicroFinance
          </a>
        </div>
        {/* end::Copyright */}
        {/* begin::Info */}
          <div className="fv-row text-dark order-2 order-md-1">
          <div className="text-light  fs-4 fw-bold ">
            CONTACT US
          </div>
          <div className="text-light fw-bold me-2">
            jupiter@gmail.com
          </div>
          <div className="text-light fw-bold me-2">
            address
          </div>       
        </div>
        {/* end::Info */}
        
      </div>
      {/* end::Container */}
      </div>
    </div>
  );
}
