/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getApplicant, getLoanById,updateLoanStatus } from "../../../modules/application/core/requests";
import { LoanModel } from "../../../modules/application/models/LoanModel";
import { PageTitle } from "../../../layout/core";
import Swal from "sweetalert2";
import { DisbursmentModal } from "./Modals/DisbursmentModal";
import { getUser } from "../../../modules/auth/core/requests";
import { ApplicantModal } from "./Modals/ApplicantModal";
import { UserModel } from "../../../modules/auth/models/UserModel";


export const Application: React.FC = () => {
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const {applicationId} = useParams<{applicationId:string}>();
 
  const [showDisbursmentModal, setShowDisbursmentModal] = useState(false);
  const [applicantModal, setApplicantModal] = useState(false);
  const [loan, setLoan] = useState<LoanModel>();
  const [applicant, setApplicant] = useState<UserModel>();

  //get loan
  const getloan =()=>{
      getLoanById(applicationId).then((response)=>{
      setLoan(response.data);
    }).catch((error)=>{
        console.log(error);
    });
  }

  
  useEffect(()=>{
    getloan();
  },[]);

    //get applicant
    const getApplicantDetails =()=>{
      console.log(loan);
      if(loan){
            getApplicant(loan?.applicantId).then((response)=>{
              setApplicant(response.data);
        }).catch((error)=>{
            console.log(error);
        });
      }
 }


  useEffect(()=>{
    console.log(loan);
    getApplicantDetails();
  },[loan]);

  //Approval function
  const updateLoanState = (status: any)=>{
      updateLoanStatus(applicationId,status).catch((error)=>{
        console.log(error);
      }).then(()=>{
        switch (status) {
          case "approved":
            Swal.fire({
              title: 'Success!',
              text: 'Application Approved! Ready for disbursal.',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33', 
              confirmButtonText: 'OK!'
           })         
            break;
          case "rejected":
            Swal.fire({
              title: 'Success!',
              text: 'Application Rejected!',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33', 
              confirmButtonText: 'OK!'
            })
            
            break;
        
          default:
            break;
        }
        getloan();
      })
  }

  return (
    <>
     <PageTitle>Application</PageTitle>
     <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
        <div className="card d-flex card-custom shadow col-12 justify-content-center align-items-center">
          <div className="card-header col-11 border-0 justify-content-end align-items-end ">
            <div className="card-toolbar gap-10 p-5 text-end ">
            {loan?.approvalStatus === 'approved' ? (
                    <button className="btn btn-success" disabled>Approved</button>
                ) : (
                    <button className="btn btn-light-info" onClick={()=>{ updateLoanState ("approved")}}>Approve</button>
                )}
            {(loan?.approvalStatus == 'rejected') ? (
                <button className="btn btn-danger" disabled>Rejected</button>
            ) : (
                <button className="btn btn-light-danger" disabled={loan?.disbursed ? true: false}  onClick={()=>{ updateLoanState ("rejected")}}>Reject</button>
            )}
            {loan?.disbursed ? (
                <button className="btn btn-success" disabled>
                    Disbursed
                </button>
            ) : (
              <button 
                className="btn btn-light-info" 
                disabled={loan?.approvalStatus !== "approved"}
                onClick={()=>setShowDisbursmentModal(true)}
              >
                Disburse
              </button>
            )}
            <DisbursmentModal
            show={showDisbursmentModal}
            handleClose={() => setShowDisbursmentModal(false)}
            uuid={applicationId}
            />
            </div>
          </div>
          <div className="card-body border col-11 justify-content-center align-items-center ">  
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex align-items-center mb-2">
                    <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">Ksh </span>
                    <span className="fs-2x fw-bold text-gray-800 me-2 lh-1 ls-n2">{loan?.loanAmount}</span>
                    <span className="badge badge-light-success fs-base">
                    <i className="fa fa-arrow-up fs-5 text-success ms-n1">
                    </i>{loan?.interestAmount}</span>
                </div>
                <span className="fs-6 fw-semibold text-gray-400">Loan Amount and Interest</span>
              </div>
              <div>
                <button className="btn btn-light-info" onClick={()=>setApplicantModal(true)}>View Applicant</button>
              </div>
            </div>              
            <div className="card mb-4">
            <div className="card-body">
                <div className="list-group">
                    {/* <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Loan ID:</strong> <span>{loan?.id}</span>
                    </div> */}
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Applicant</strong> <span><a>{applicant?.fullName}</a></span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Loan Amount:</strong> <span>Ksh {loan?.loanAmount}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Interest Amount:</strong> <span>Ksh {loan?.interestAmount}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Interest Rate:</strong> <span>{loan?.interestRate && (parseFloat(loan.interestRate) * 100).toFixed(2)}%</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Date Borrowed:</strong> <span>{loan?.dateBorrowed && new Date(loan.dateBorrowed).toLocaleDateString()}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>First Payment Date:</strong> <span>{loan?.firstPaymentDate && new Date(loan.firstPaymentDate).toLocaleDateString()}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Last Payment Date:</strong> <span>{loan?.lastPaymentDate && new Date(loan.lastPaymentDate).toLocaleDateString()}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Penalty Amount:</strong> <span>Ksh {loan?.penaltyAmount}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Balance Due:</strong> <span>Ksh {loan?.balanceDue}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Payment Frequency:</strong> <span>{loan?.paymentFrequency}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Collateral Type:</strong> <span>{loan?.collateralType}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Collateral Value:</strong> <span>Ksh {loan?.collateralValue}</span>
                    </div>
                    {loan?.collateralFilePath && (
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Collateral File Path:</strong> <span>{loan.collateralFilePath}</span>
                        </div>
                    )}
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Default Status:</strong> <span>{loan?.defaultStatus ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Loan Term (months):</strong> <span>{loan?.loanTerm}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Payment Type:</strong> <span>{loan?.payType}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Transaction Number:</strong> <span>{loan?.transactionNumber}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Date Disbursed:</strong> 
                        <span>{loan?.dateDisbursed && new Date(loan.dateDisbursed).toLocaleDateString()}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Approval Status:</strong> 
                        <span>{loan?.approvalStatus}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Disbursed:</strong> 
                        <span>{loan?.disbursed ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Date Created:</strong> 
                        <span>{loan?.createdAt && new Date(loan.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Date Updated:</strong> 
                        <span>{loan?.updatedAt && new Date(loan.updatedAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <ApplicantModal
        show={applicantModal}
        handleClose={() => setApplicantModal(false)}
        applicant={applicant}
      />
    </>
  );
};
