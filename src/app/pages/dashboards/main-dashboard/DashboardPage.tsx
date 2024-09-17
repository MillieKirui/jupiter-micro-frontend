/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ApplyLoanModal } from "../_modals/apply-loan-stepper/ApplyLoanModal";
import { RootState } from "../../../../setup";
import { useDispatch, useSelector } from "react-redux";
import { getMyloans } from "../../../modules/application/core/requests";
import { LoanModel } from "../../../modules/loans/LoanModel";
import { getUser} from "../../../modules/auth/core/requests";
import { setCurrentUser } from "../../../../setup/redux/UserSlice";

export const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const [showApplyLoanModal, setShowApplyLoanModal] = useState(false);
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [loans, setLoans] = useState<LoanModel[]>([]);
  //get user loans on mount
  useEffect(()=>{
      getMyloans(uuid).then((response)=>{
        setLoans(response.data);
        console.log(response.status);
      }).catch((error)=>{
          console.log(error);
          if(error.status==404){
            setLoans([]);
          }
      })
      getUser(uuid).then((response)=>{
        dispatch(setCurrentUser(response.data));
      });
  },[])

  return (
    <>
      {/* begin::Row */}
      <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-20 mb-10">
      <div className="card card-custom shadow col-7 justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-2 text-info fw-bolder mb-5">
                500,000
              </div>
              <div className="d-flex flex-column ">
                <button className=" btn btn-light-info ps-7 pe-7 fs-3" onClick={()=>setShowApplyLoanModal(true)}>Apply Now</button>
              </div>
         </div>
          </div>
      <div className="card card-custom shadow d-flex flex-end justify-content-end align-items-center btn btn-light-info">
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
              {loans.length >0 ?                    
              <table className="table table-striped">
                  <thead className="">
                    <tr>
                        <th scope="col">Loan Amount</th>
                        <th scope="col">Application Date</th>                     
                        <th scope="col">Status</th>
                        <th scope="col">Date Disbursed </th>
                        <th scope="col">First Repayment Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loans.map((item)=>(
                      <tr>
                          <td className="me-2">{item.loanAmount}</td>
                          <td className="me-2">{item.createdAt}</td>
                          <td className="me-2">{item.approvalStatus}</td>
                          <td className="me-2">{item.dateDisbursed}</td>
                          <td className="me-2">{item.firstPaymentDate}</td>                   
                      </tr> 
                       ))}
                  </tbody>
              </table>
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
    </>
  );
};
