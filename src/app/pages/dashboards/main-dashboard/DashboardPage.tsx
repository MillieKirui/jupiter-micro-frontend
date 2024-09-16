/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ApplyLoanModal } from "../_modals/apply-loan-stepper/ApplyLoanModal";

export const DashboardPage: React.FC = () => {
  const [showApplyLoanModal, setShowApplyLoanModal] = useState(false);
  return (
    <>
      {/* begin::Row */}
      <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-15 mb-10">
      <div className="card card-custom shadow col-6 justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-2 text-info fw-bolder mb-5">
                500,000
              </div>
              <div className="d-flex flex-column ">
                <button className=" btn btn-light-info ps-7 pe-7 fs-3" onClick={()=>setShowApplyLoanModal(true)}>Apply Now</button>
              </div>
         </div>
          </div>
      <div className="card card-custom shadow justify-content-center align-items-center btn">
          <div className="card-body justify-content-center">
            <div className="d-flex text-center fs-3 fw-bolder ">
              Invite a Friend
              <br/>
              Earn 500/=
            </div>
          </div>
        </div>
  
        <div>
   
        </div>
      </div>
      {/* end::Row */}
       {/* begin::Row */}
      <div className="d-flex  g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
        <div className="card card-custom shadow col-12 justify-content-center align-items-center">
              <div className="card-body justify-content-center">
              <table className="table table-striped">
                  <thead className="">
                    <tr>
                        <th scope="col">Loan</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Application Date</th>
                        <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Millie Kirui</td>
                          <td>millieqrui@gmail.com</td>
                          <td>12-2-3</td>
                          <td>12-2-3</td>
                      </tr> 
                      <tr>
                          <td>
                              You haven't applied to any loan yet
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>   
      <div>
   
        </div>
      </div>
      {/* end::Row */}

      
        {/* begin::Modals */}
        <ApplyLoanModal
        show={showApplyLoanModal}
        handleClose={() => setShowApplyLoanModal(false)}
      />
      {/* end::Modals */}
    </>
  );
};
