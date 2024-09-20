/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ApplyLoanModal } from "../_modals/apply-loan-stepper/ApplyLoanModal";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { getMyloans } from "../../../modules/application/core/requests";
import { getUser} from "../../../modules/auth/core/requests";
import { LoanModel } from "../../../modules/application/models/LoanModel";
import { PageTitle } from "../../../layout/core";

export const DashboardPage: React.FC = () => {
  const [showApplyLoanModal, setShowApplyLoanModal] = useState(false);
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [loans, setLoans] = useState<LoanModel[]>([]);
  const [loading, setLoading] = useState(true);

  //get user loans on mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getMyloans(uuid).then((response) => {
          console.log(response);
          setLoans(response.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uuid]);

  return (
    <>
    <PageTitle>User Dashboard</PageTitle>
      {/* begin::Row */}
      <div>
            {/* begin::Row */}
      <div className="row g-6 g-xl-9">
      <div className="col-lg-6 col-xxl-4">
      <div className="card card-custom shadow justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-2 text-info fw-bolder mb-5">
                500,000
              </div>
              <div className="d-flex flex-column ">
                <button className=" btn btn-light-info ps-7 pe-7 fs-3" onClick={()=>setShowApplyLoanModal(true)}>Apply Now</button>
              </div>
         </div>
          </div>
      </div>
      <div className="col-lg-6 col-xxl-4">
      <div className="card card-custom shadow d-flex flex-end justify-content-end align-items-center btn btn-light-info">
          <div className="card-body justify-content-center">
            <div className="text-center fs-3 fw-bolder ">
              <div className="mb-5">Invite a Friend</div>
              <div> Earn 500/=</div>            
            </div>
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
              <div className="card-body col-12  justify-content-center">
              {loans.length >0 ?                    
                 loading ? 
                  <div className="d-flex justify-content-center align-items-center mt-10">
                  <div className="spinner-border p-5 text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>            
                :
                <>
                  <div className="d-flex border mb-5 p-4 fw-bolder text-start bg-light-info">
                  <div className="me-2 col-2">Loan Amount</div>
                  <div className="me-2 col-3">Application Date</div>
                  <div className="me-2 col-2">Status</div>
                  <div className="me-2 col-3">Date Disbursed</div>
                </div>
                {loans.map((item, index) => (
                   <div className="d-flex border mb-5 p-4 btn btn-light text-start">               
                    <div className="me-2 col-2"><a className="text-dark">{item.loanAmount}</a></div>
                    <div className="me-2 col-3">{new Date(item.createdAt).toLocaleString()} </div>
                    <div className={`me-2 col-2 ${
                      item.approvalStatus === 'approved' ? 'text-success' :
                      item.approvalStatus === 'pending' ? 'text-warning' : 
                      'text-danger'
                    }`}>{item.approvalStatus}</div>
                    <div className="me-2 col-3">{new Date(item.dateDisbursed).toLocaleString()}</div>                
                 </div>  
                ))}
                </>              
              :
              <div className="justfiy-content-center align-items-center">
                <div className="text-center">You haven't applied to any loans yet.</div>
                <div className="text-center">Kindly apply to grow you limit</div>
              </div>
                      }
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
      </div>
    </>
  );
};
