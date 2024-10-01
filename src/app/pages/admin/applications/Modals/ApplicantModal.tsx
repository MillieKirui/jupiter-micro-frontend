import { useSelector } from "react-redux";
import { RootState } from "../../../../../setup";
import { Modal } from "react-bootstrap-v5";
import { useState } from "react";
import { getLoanById, updateDisbursment } from "../../../../modules/application/core/requests";
import Swal from "sweetalert2";

type Props = {
    show: boolean;
    handleClose: () => void;
    uuid:string;
  };

const ApplicantModal: React.FC<Props> = ({ show, handleClose, uuid }) => {
    
    const [payType,setPayType] = useState('Mpesa');
    const [transactionNumber,setTransactionNumber]= useState('');
    const [dateDisbursed, setDateDisbursed]= useState<Date>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(uuid && payType && transactionNumber && dateDisbursed){
        updateDisbursment(uuid,payType,transactionNumber,dateDisbursed).then((response)=>{
            handleClose();
            Swal.fire({
                title: 'Success!',
                text: 'Loan Disbursed.',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33', 
                confirmButtonText: 'OK!'
             }).finally(()=>
            {
                window.location.reload();
            })
        })
        }
      };
  
    return (
      <Modal
        id="kt_modal_apply_loan"
        tabIndex={-1}
        dialogClassName="modal-dialog-centered mw-800px h-auto"
        show={show}
        onHide={handleClose}
      >
        <div className="container px-10 py-10">
          <div className="modal-header py-2 d-flex border-0 align-items-center">
          <h2 className="text-center display-7 text-uppercase ">Loan Disbursment</h2>  
            {/* begin::Close */}
            <div
              className="btn btn-icon btn-sm btn-light-info justify-content-end "
              onClick={handleClose}
            >
              <i className="far fa-xmark"></i>
            </div>
            {/* end::Close */}
          </div>  
          <div className="modal-body">   
            <div className="card">
            <form id="kt_account_profile_details_form" className="form" method="post" onSubmit={handleSubmit}>
                <div className="card-body border-top p-9">
                <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">Pay Type</label>
                    <div className="col-lg-8 fv-row d-flex form-input-group">                
                        <select name="payType" className="form-control form-control-lg" onChange={(e) => setPayType(e.target.value)}>
                            <option value="Bank">Bank</option>
                            <option value="Mpesa">Mpesa</option>
                            <option value="Cash">Cash</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">Transaction Number</label>
                    <div className="col-lg-8 fv-row">
                    <input
                        type="text"
                        name="transactionNumber"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Transaction Number"
                        onChange={(e) => setTransactionNumber(e.target.value)}
                    />
                    </div>
                </div>
                <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">Disbursment Date</label>
                    <div className="col-lg-8 fv-row">
                    <input
                        type="date"
                        name="datedisbursed"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Disbursment Date"
                        onChange={(e) => setDateDisbursed(new Date(e.target.value))}
                    />
                    {false && (
                        <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <button form="send-verification" className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                            Click here to re-send the verification email.
                            </button>
                        </p>
                        </div>
                    )}
                    </div>
                </div>
                </div>
                <div className="card-footer d-flex justify-content-end py-6 px-9">
                <button type="reset" className="btn btn-light btn-active-light-info me-2" onClick={handleClose}>Discard</button>
                <button type="submit" className="btn btn-info" id="kt_account_profile_details_submit">Save</button>
                </div>
            </form>
            </div>   
          </div>
        </div>
      </Modal>
    );
  };
  
  export { ApplicantModal };