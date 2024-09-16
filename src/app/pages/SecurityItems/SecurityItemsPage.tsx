/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ApplyLoanModal } from "../dashboards/_modals/apply-loan-stepper/ApplyLoanModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../setup";
import { getMyloans } from "../../modules/application/core/requests";
import { LoanModel } from "../../modules/loans/LoanModel";

export const SecurityItemsPage: React.FC = () => {
  const [showApplyLoanModal, setShowApplyLoanModal] = useState(false);
    //get user UUID
    const uuid = useSelector<RootState>(
      (state) => state.auth?.uuid,
    );
  
    const [loans, setLoans] = useState<LoanModel[]>([]);
    //get user loans on mount
    useEffect(()=>{
        getMyloans(uuid).then((response)=>{
          console.log(response);
          setLoans(response.data);
        })
    },[])
  return (
    <>
       {/* begin::Row */}
      <div className="d-flex  g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
        <div className="card card-custom shadow col-12 justify-content-start p-5">
            <div className="card-header justify-content-end">
              <button className="btn btn-info p-2">Add Security Item</button>
            </div>
              <div className="card-body row ">
              {loans.map((item)=>(
                item.collateralFilePath != null &&
                <div className="card col-md-3  col-4 border p-5 m-5" key={item.id}>
                  <div>
                    <a href={item.collateralFilePath}>
                      <i className="fa fa-file fs-2x me-2" aria-hidden="true"></i>
                      <br/>
                      <span>{(item.collateralFilePath)?.split('\\').pop()}</span>
                    </a>
                    </div>
                </div>

              ))}  
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
