/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { UserModel } from "../../../modules/auth/models/UserModel";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { getUsers } from "../../../modules/users/core/requests";
import { LoanModel } from "../../../modules/application/models/LoanModel";
import { getLoans } from "../../../modules/application/core/requests";
import { Summary } from "./partials/summary";
import StatusListChart from "./partials/chart";

export const AdminDashboard: React.FC = () => {
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [users, setUsers] = useState<UserModel[]>([]);
  const [loans, setLoans] = useState<LoanModel[]>([]);

  useEffect(()=>{
      getLoans().then((response)=>{
        setLoans(response.data);
        console.log(response.status);
      }).catch((error)=>{
          console.log(error);
      })
      getUsers().then((response)=>{
        setUsers(response.data);
      });
  },[])

  //Count loan by status
  const countByStatus = () => {
    let approvedCount = 0;
    let rejectedCount = 0;
    let pendingCount = 0;

    loans.forEach((loan) => {
      if (loan.approvalStatus === 'approved') {
        approvedCount++;
      } else if (loan.approvalStatus === 'rejected') {
        rejectedCount++;
      } else if (loan.approvalStatus === 'pending') {
        pendingCount++;
      }
      
    });

    return { approvedCount, rejectedCount, pendingCount };
  };

  const { approvedCount, rejectedCount, pendingCount } = countByStatus();

  return (
    <>
    <div>
            {/* begin::Row */}
            <div className="row g-6 g-xl-9">
      <div className="col-lg-6 col-xxl-4">
      <div className="card card-custom shadow  justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-2 mb-5">
                <i className="fa fa-users fs-4x me-10" aria-hidden="true"></i>
                <div className="justify-content-start alight-items-start">
                  <div className="text-start fw-bolder ">{users.length}</div>
                  <div className="fs-6">Users</div>
                </div>
              </div>
         </div>
          </div>
      </div>
      <div className="col-lg-6 col-xxl-4">
      <div className="card card-custom shadow  justify-content-center align-items-center" >
      <div className="card-body justify-content-center">
          <div className="d-flex text-center fs-2 mb-5">
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <KTSVG
              className="svg-icon-2 text-info"
              path="/media/icons/Package.svg"
              />
            <div className="justify-content-start alight-items-start">
              <div className="text-start fw-bolder">{loans.length}</div>
              <div className="fs-6">Applications</div>
            </div>
          
      </div>
      </div>
      </div>
      </div>
  
        <div>
   
        </div>
      </div>
      {/* end::Row */}
       {/* begin::Row */}
       <div className="card">
       <div className="row g-6 g-xl-9">
          <div className="col-lg-6 col-xxl-4">
            {/*begin::Card*/}
            <div className="card h-100">
              {/*begin::Card body*/}
              <div className="card-body p-9">
                {/*begin::Heading*/}
                <div className="fs-2hx fw-bold">{loans.length}</div>
                <div className="fs-4 fw-semibold text-gray-400 mb-7">Applications</div>
                {/*end::Heading*/}
                {/*begin::Wrapper*/}
                <div className="d-flex flex-wrap">
                   {/* Begin::Chart */}
                  <div className="d-flex flex-center h-100px w-100px me-9 mb-5">
                    <StatusListChart approvedCount={approvedCount} rejectedCount={rejectedCount} pendingCount={pendingCount} />
                  </div>
                  {/* End::Chart */}
                  {/*begin::Labels*/}
                  <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                    {/*begin::Label*/}
                    <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                      <div className="bullet bg-primary me-3"></div>
                      <div className="text-gray-400">Approved</div>
                      <div className="ms-auto fw-bold text-gray-700">{approvedCount}</div>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Label*/}
                    <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                      <div className="bullet bg-success me-3"></div>
                      <div className="text-gray-400">Rejected</div>
                      <div className="ms-auto fw-bold text-gray-700">{rejectedCount}</div>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Label*/}
                    <div className="d-flex fs-6 fw-semibold align-items-center">
                      <div className="bullet bg-gray-300 me-3"></div>
                      <div className="text-gray-400">Pending</div>
                      <div className="ms-auto fw-bold text-gray-700">{pendingCount}</div>
                    </div>
                    {/*end::Label*/}
                  </div>
                  {/*end::Labels*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card*/}
          </div>
         <Summary/>
			</div>

       </div>
      {/* end::Row */}

    </div>
    </>
  );
};

