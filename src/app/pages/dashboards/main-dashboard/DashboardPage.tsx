/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ApplyLoanModal } from "../_modals/create-app-stepper/ApplyLoanModal";

export const DashboardPage: React.FC = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-4 g-xxl-6 justify-content-center">
      <div className="card card-custom shadow col-6 justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-3 fw-bolder ">
                500,000
              </div>
              <div className="d-flex flex-column ">
                <button className=" btn btn-light-info ps-5 pe-5" onClick={()=>setShowCreateAppModal(true)}>Apply Now</button>
              </div>
         </div>
          </div>
        <div>
   
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
      </div>
      {/* end::Row */}
        {/* begin::Modals */}
        <ApplyLoanModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      />
      {/* end::Modals */}
    </>
  );
};
