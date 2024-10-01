import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap-v5";
import { useState } from "react";
import Swal from "sweetalert2";

type Props = {
    show: boolean;
    handleClose: () => void;
    uuid:string;
  };

const SecurityAdditionModal: React.FC<Props> = ({ show, handleClose, uuid }) => {
    
    const [payType,setPayType] = useState('Mpesa');
    const [transactionNumber,setTransactionNumber]= useState('');
    const [dateDisbursed, setDateDisbursed]= useState<Date>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(uuid && payType && transactionNumber && dateDisbursed){

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
          <h2 className="text-center display-7 text-uppercase ">Upload Security Item</h2>  
              {/* begin::Close */}
              <div
              className="btn btn-icon btn-sm btn-light-info justify-content-center"
              onClick={handleClose}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            {/* end::Close */}
          </div>  
          <div className="modal-body">   
            <div className="card">
            <form id="kt_account_profile_details_form" className="form" method="post" onSubmit={handleSubmit}>
                <div className="card-body border-top p-9">
                <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">Collateral Type</label>
                    <div className="col-lg-8 fv-row d-flex form-input-group">                                        
                        <select name="payType" className="form-control form-control-lg" onChange={(e) => setPayType(e.target.value)}>
                            <option value="property">Property</option>
                            <option value="vehicle">Vehicle</option>
                            <option value="savings">Savings</option>
                            <option value="title_deed">Title Deed</option>
                            <option value="payslip">Payslip</option>
                            <option value="logbook">logbook</option>
                        </select>
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
  
  export { SecurityAdditionModal };