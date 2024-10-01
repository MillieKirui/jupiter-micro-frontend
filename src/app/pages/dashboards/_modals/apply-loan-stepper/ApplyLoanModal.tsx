import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap-v5";
import { StepperComponent } from "../../../../assets/ts/components";
import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { applyLoan, calculateLoan } from "../../../../modules/application/core/requests";
import swal from "sweetalert";
import { RootState } from "../../../../../setup";
import { useSelector } from "react-redux";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const initialValues = {
  firstName: "",
  lastName: "",
  fullName:"",
  phoneNumber:"",
  idNumber:"",
  maritalStatus:"",
  spouseName:"",
  spouseIdNumber:" ",
  village:"",
  location:"",
  county:"",
  subCounty:"",
  businessName:"",
  businessLocation:"",
  nextOfKin:"",
  nextOfKinPhone:"",
  loanAmount:0,
  loanTerm:1,
  paymentFrequency:"",
  collateralType:"",
  collateralValue:0,
  collateralFile:null,
  uuid:""
};

const applicationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required")
});

const ApplyLoanModal: React.FC<Props> = ({ show, handleClose }) => {

  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calculationModal, showCalculationModal] = useState(false);
  const [loanAmount, setLoanAmount] = useState(0);
  const[loanTerm, setLoanTerm]= useState(0);
  const [firstPaymentDate,setFirstPaymentDate]= useState("");
  const [lastPaymentDate,setLastPaymentDate]= useState("");
  const [numberOfPayments,setNumberOfPayments]= useState(0);
  const [paymentFrequency,setPaymentFrequency]= useState("");
  const [totalPayment,setTotalPayment] = useState(0);
  const [totalInterest,setTotalInterest]= useState(0);
  const [paymentAmount,setPaymentAmount]= useState(0);

  const formik = useFormik({
    initialValues,
    validationSchema: applicationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        applyLoan(
          values.firstName,
          values.lastName,
          values.fullName,
          values.phoneNumber,
          values.idNumber,
          values.maritalStatus,
          values.spouseName,
          values.spouseIdNumber,
          values.village,
          values.location,
          values.county,
          values.subCounty,
          values.businessName,
          values.businessLocation,
          values.nextOfKin,
          values.nextOfKinPhone,
          values.loanAmount,
          values.loanTerm,
          values.paymentFrequency,
          values.collateralType,
          values.collateralValue,
          values.collateralFile,
          uuid

        ).then((response) => {
          if(response.status==201){
            console.log(response);
            setLoading(false);
            swal("Success!", "Your Application has Successfully been submitted!", "success");            
          }
        })
          .catch(() => {
            setLoading(false);
            setSubmitting(false);
            setStatus("Registration process has broken");
          });
      }, 1000);
    },
  });

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
    console.log(stepper.current);
  };

  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    stepper.current.goPrev();
  };

  const nextStep = () => {
    setHasError(false);
    if (!stepper.current) {
      return;
    };
    if (stepper.current.getCurrentStepIndex() === 3) {
      const values = formik.values;
      console.log(values.loanAmount,values.loanTerm, values.paymentFrequency);
      calculateLoan(Number(values.loanAmount), values.loanTerm, values.paymentFrequency).then((response)=>{
          console.log(response);
          setLoanAmount(response.data.loanAmount);
          setLoanTerm(response.data.loanTerm);
          setPaymentFrequency(response.data.paymentFrequency);
          setFirstPaymentDate(response.data.firstPaymentDate);
          setLastPaymentDate(response.data.lastPaymentDate);
          setNumberOfPayments(response.data.numberOfPayments);
          setTotalInterest(response.data.totalInterest);
          setTotalPayment(response.data.totalPayment);
          setPaymentAmount(response.data.paymentAmount);
      });
      console.log(formik.values)
      if(calculationModal){
        showCalculationModal(false);
        stepper.current.goNext();
      }
      else{
        showCalculationModal(true);
      }
     return;
   };

    stepper.current.goNext();
  };

  return (
    <Modal
      id="kt_modal_apply_loan"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog-centered mw-1000px h-auto"
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
    >
      <div className="container px-10 py-10">
        <div className="modal-header py-2 d-flex border-0 align-items-center">
        <h2 className="text-center display-7 text-uppercase ">Loan Application</h2>  
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
          {/*begin::Stepper */}
          <div
            ref={stepperRef}
            className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_apply_loan_stepper"
          >
              {/*begin::Aside */}
              <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              {/*begin::Nav */}
              <div className="stepper-nav d-flex flex-column pt-5">
                {/*begin::Step 1 */}
                <div
                  className="stepper-item current"
                  data-kt-stepper-element="nav"
                >
                  <div className="stepper-wrapper">
                    <div className="stepper-icon bg-light-info">
                      <i className="stepper-check fas fa-check"></i>
                      <span className="stepper-number">1</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Personal Details</h3>
                      <div className="stepper-desc">Your personal details</div>
                    </div>
                  </div>
                </div>
                {/*end::Step 1 */}

                {/*begin::Step 2 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon bg-light-info">
                      <i className="stepper-check fas fa-check"></i>
                      <span className="stepper-number">2</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Marital Details</h3>
                      <div className="stepper-desc">
                        Your marital details
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 2 */}

                {/*begin::Step 3 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon bg-light-info">
                      <i className="stepper-check fas fa-check"></i>
                      <span className="stepper-number">3</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Amount Confirmation</h3>
                      <div className="stepper-desc">
                        Your confirmation in words
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 3 */}

                {/*begin::Step 4 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon bg-light-info">
                      <i className="stepper-check fas fa-check"></i>
                      <span className="stepper-number">4</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Loan Security</h3>
                      <div className="stepper-desc">
                        Your security
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 4 */}

                {/*begin::Step 5 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon bg-light-info">
                      <i className="stepper-check fas fa-check"></i>
                      <span className="stepper-number">5</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Completed!</h3>
                      <div className="stepper-desc">Review and Submit</div>
                    </div>
                  </div>
                </div>
                {/*end::Step 5 */}
              </div>
              {/*end::Nav */}
            </div>
            {/*begin::Aside */}
            {/*begin::Content */}
            <div className="d-flex flex-row-fluid justify-content-center">
              {/*begin::Form */}
              <form
                className="pb-5 w-100 w-md-400px w-xl-500px"
                noValidate
                id="kt_modal_apply_loan_form"
                onSubmit={formik.handleSubmit}
              >
                {/*begin::Step 1 */}
                <div className="pb-5 current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-5 pb-lg-10">
                      <h3 className="fw-bolder text-dark">
                        Personal Details
                      </h3>
                    </div>
                    {/*begin::Heading */}
                    <div className="row mb-5">
                      {/* begin::Form group Lastname */}
                      <div className="col-md-12 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Full Name
                        </label>
                        <input
                          placeholder="Enter your official names as shown on your National ID"
                          type="text"
                          autoComplete="on"
                          {...formik.getFieldProps("fullName")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastName && formik.errors.lastName,
                            },
                            {
                              "is-valid": formik.touched.lastName && !formik.errors.lastName,
                            }
                          )}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastName}</div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                      </div>
                      <div className="row mb-5">
                      {/* begin::Form group Phone */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Phone
                        </label>
                        <input
                          placeholder="phone number"
                          type="text"
                          autoComplete="on"
                          {...formik.getFieldProps("phoneNumber")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group Lastname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          ID Number
                        </label>
                        <input
                          placeholder="national ID"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("idNumber")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}
                      </div>
                  </div>
                </div>
                {/*end::Step 1 */}

                {/*begin::Step 2 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-7">
                       Marital Details
                      </h3>
                    </div>
                    {/*end::Heading */}

                    {/*begin::Form Group */}
                    
                    {/*begin::Form Group */}
                    <div className="d-flex gap-15">
                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            {...formik.getFieldProps("maritalStatus")}
                          />
                        </span>
                        <span className="fw-bolder fs-6">Married</span>
                      </label>
                      {/*end::Option */}
                                 {/*begin:Option */}
                                 <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            {...formik.getFieldProps("maritalStatus")}
                            value="Single"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Single</span>
                      </label>
                      {/*end::Option */}
                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                             className="form-check-input"
                             type="radio"
                            {...formik.getFieldProps("maritalStatus")}
                            value="Divorced"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Divorced</span>
                      </label>
                      {/*end::Option */}
                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                             className="form-check-input"
                             type="radio"
                            {...formik.getFieldProps("maritalStatus")}
                            value="Widow"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Widow</span>
                      </label>
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}
                    <div className="row mb-5">
                     {/* begin::Form group Firstname */}
                     <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Name of Husband/Wife
                        </label>
                        <input
                          placeholder="spouse name"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("spouseName")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group Lastname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          ID Number
                        </label>
                        <input
                          placeholder="national ID"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("spouseIdNumber")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}
                      </div>
                      <div className="row mb-5">
                       {/* begin::Form group Firstname */}
                       <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          County
                        </label>
                        <input
                          placeholder="county"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("county")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group Lastname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Sub County
                        </label>
                        <input
                          placeholder="sub-county"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("sub-county")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}
                      </div>

                      <div className="row mb-5">
                       {/* begin::Form group Firstname */}
                       <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Home Area/Village
                        </label>
                        <input
                          placeholder="home area"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("village")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group Lastname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Location
                        </label>
                        <input
                          placeholder="Location"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("location")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}
                      </div>
                      <div className="row mb-5">
                       {/* begin::Form group nextOfKin */}
                       <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Next of kin
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("nextOfKin")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group nextOfKinPhone */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Phone Number
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("nextOfKinPhone")}
                          className={clsx(
                            "form-control form-control-lg "
                          )}
                        />
                      </div>
                      {/* end::Form group */}
                      </div>


                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 2 */}

                {/*begin::Step 3 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        Amount Confirmation
                      </h3>
                    </div>
                    {/*end::Heading */}

                    {/*begin::Form Group */}
                    {/* begin::Form group Loan Amount */}
                    <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Loan Amount
                      </label>
                      <input
                        placeholder="loan amount"
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("loanAmount")}
                        className={clsx(
                          "form-control form-control-lg "
                        )}
                      />
                    </div>
                    {/* end::Form group */} 
                     {/* begin::Form group Loan Term */}
                     <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                        Loan Term
                      </label>
                      <input
                        placeholder="loan term"
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("loanTerm")}
                        className={clsx(
                          "form-control form-control-lg "
                        )}
                      />
                    </div>
                    {/* end::Form group */}  
                    {/*begin::Form Group Repayment frequency */}
                    <div className="d-flex gap-15">
                      <label>
                      Repayment Frequency
                      </label>
                       {/*begin:Option */}
                       <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            {...formik.getFieldProps("paymentFrequency")}
                            value="bi-weekly"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Bi-Weekly</span>
                      </label>
                      {/*end::Option */}
                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            {...formik.getFieldProps("paymentFrequency")}
                            value="weekly"                         
                          />
                        </span>
                        <span className="fw-bolder fs-6">Weekly</span>
                      </label>
                      {/*end::Option */}
                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            {...formik.getFieldProps("paymentFrequency")}
                            value="monthly"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Monthly</span>
                      </label>
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}                
                    {/*end::Form Group */}
                    {/* start:: calculation section */}
                    {calculationModal&&(
                      <div className="card card-custom border border-info">
                      <div className="card border">
                          <span className="mb-0 p-0 text-info ms-2 fw-bolder ">!Your Loan Details</span>
                          <span className="fs-8 text-grey ms-2" >Kindly check before proceeding</span>
                      </div>
                      <div className="card-body border">
                      <div className="mb-3">
                        Total Payment:<span className="text-info fw-bolder ms-2">{totalPayment}</span>
                      </div>
                      <div className="mb-3">
                        Total Interest :<span className="text-info fw-bolder ms-2">{totalInterest}</span>
                      </div>
                      <div className="mb-3">
                        Frequency :<span className="text-info fw-bolder ms-2">{paymentFrequency}</span>
                      </div>
                      <div className="mb-3">
                        Number of payments :<span className="text-info fw-bolder ms-2">{numberOfPayments}</span>
                      </div>
                      <div className="mb-3">
                        Payment amount {paymentFrequency} :<span className="text-info fw-bolder ms-2">{paymentAmount}</span>
                      </div>
                      <div className="mb-3">
                        First Repayment Date :<span className="text-info fw-bolder ms-2">{firstPaymentDate}</span>
                      </div>
                      <div className="mb-3">
                        Last Repayment Date :<span className="text-info fw-bolder ms-2">{lastPaymentDate}</span>
                      </div>
                    </div>
                      <div className="mt-2 ms-2">
                        <button className="btn btn-sm btn-light-info" onClick={()=>showCalculationModal(false)}>Change Details</button>
                        <br/>
                        <span className="text-mute fw-8">You can click here to remain on this section and change your details. Otherwise click <span className="text-info">Continue</span> to proceed</span>
                      </div>
                      </div>  
                    )}
                    {/*end::calculation section */}               
                  </div>
                </div>
                {/*end::Step 3 */}
                {/*begin::Step 4 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        Loan Security
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                     {/* begin::Form group Collatoral Type */}
                     <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Collatoral Type
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("collateralType")}
                        className={clsx(
                          "form-control form-control-lg "
                        )}
                      />
                    </div>
                    {/* end::Form group */} 
                    {/* begin::Form group Collatoral Value */}
                    <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Value
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("collateralValue")}
                        className={clsx(
                          "form-control form-control-lg "
                        )}
                      />
                    </div>
                    {/* end::Form group */} 
                       {/* begin::Form group Collatoral Value */}
                       <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      File
                      </label>
                      <input
                        type="file"
                        autoComplete="off"
                        {...formik.getFieldProps("collateralFile")}
                        className={clsx(
                          "form-control form-control-lg "
                        )}
                      />
                    </div>
                    {/* end::Form group */} 
                
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 4 */}

                {/*begin::Step 5 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/* begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        Complete
                      </h3>
                      <div className="text-muted fw-bold fs-3">
                        Review your Application
                      </div>
                    </div>
                    {/* end::Heading */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Personal Details</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Marital Detail</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Amount Confirmation</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                    
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Loan Security</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
             
                    </div>
                    {/* end::Section */}
                  </div>
                </div>
                {/*end::Step 5 */}

                {/*begin::Actions */}
                <div className="d-flex justify-content-between pt-10">
                  <div className="mr-2">
                    <button
                      type="button"
                      className="btn btn-lg btn-light-info fw-bolder py-4 pe-8 me-3"
                      data-kt-stepper-action="previous"
                      onClick={prevStep}
                    >
                      Previous
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      id="kt_login_signup_form_submit_button"
                      className="btn-info fw-bolder fs-6 px-8 py-4 my-3 me-4 rounded"
                      data-kt-stepper-action="submit"
                      disabled={
                        formik.isSubmitting
                      }
                    >
                      {!loading && <span className="indicator-label"> Submit{" "}</span>}
                      {loading && (
                        <span className="indicator-progress" style={{ display: "block" }}>
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn btn-lg btn-info fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="next"
                      onClick={nextStep}
                    >
                      Continue{" "}
                    </button>
                  </div>
                </div>
                {/*end::Actions */}
              </form>
              {/*end::Form */}
            </div>
            {/*end::Content */}
          </div>
          {/* end::Stepper */}
        </div>
      </div>
    </Modal>
  );
};

export { ApplyLoanModal };
