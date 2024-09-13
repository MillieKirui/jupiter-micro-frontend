import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap-v5";
import { StepperComponent } from "../../../../assets/ts/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

type Props = {
  show: boolean;
  handleClose: () => void;
};
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  nationalID:"",
  spouse:"",
  spouseNationalID:"",
  loanAmount:"",
  location:"",
  county:"",
  subcounty:"",
  village:"",



};

const applicationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required")
});

const ApplyLoanModal: React.FC<Props> = ({ show, handleClose }) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: applicationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
    },
  });

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
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

    stepper.current.goNext();
  };

  const submit = () => {
    window.location.reload();
  };

  return (
    <Modal
      id="kt_modal_create_app"
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
            className="btn btn-icon btn-sm btn-light-info justify-content-end "
            onClick={handleClose}
          >
            <i className="far fa-xmark"></i>
          </div>
          {/* end::Close */}
        </div>

        <div className="modal-body">      
          {/*begin::Stepper */}
          <div
            ref={stepperRef}
            className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
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
                id="kt_modal_create_app_form"
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
                      {/* begin::Form group Firstname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          First name
                        </label>
                        <input
                          placeholder="First name"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("firstname")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.firstname && formik.errors.firstname,
                            },
                            {
                              "is-valid": formik.touched.firstname && !formik.errors.firstname,
                            }
                          )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.firstname}</div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group Lastname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Last name
                        </label>
                        <input
                          placeholder="Last name"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("lastname")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastname && formik.errors.lastname,
                            },
                            {
                              "is-valid": formik.touched.lastname && !formik.errors.lastname,
                            }
                          )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastname}</div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                      </div>
                      <div className="row mb-5">
                      {/* begin::Form group Firstname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Phone
                        </label>
                        <input
                          placeholder="phone number"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("firstname")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.firstname && formik.errors.firstname,
                            },
                            {
                              "is-valid": formik.touched.firstname && !formik.errors.firstname,
                            }
                          )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.firstname}</div>
                          </div>
                        )}
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
                          {...formik.getFieldProps("nationalID")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastname && formik.errors.lastname,
                            },
                            {
                              "is-valid": formik.touched.lastname && !formik.errors.lastname,
                            }
                          )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastname}</div>
                          </div>
                        )}
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
                            name="maritalStatus"
                            value="married"
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
                            name="maritalStatus"
                            value="single"
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
                            name="maritalStatus"
                            value="divorced"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Divorced/Widow</span>
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
                          {...formik.getFieldProps("spouse")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.firstname && formik.errors.firstname,
                            },
                            {
                              "is-valid": formik.touched.firstname && !formik.errors.firstname,
                            }
                          )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.firstname}</div>
                          </div>
                        )}
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
                          {...formik.getFieldProps("spouseNationalID")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastname && formik.errors.lastname,
                            },
                            {
                              "is-valid": formik.touched.lastname && !formik.errors.lastname,
                            }
                          )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastname}</div>
                          </div>
                        )}
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
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.firstname && formik.errors.firstname,
                            },
                            {
                              "is-valid": formik.touched.firstname && !formik.errors.firstname,
                            }
                          )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.firstname}</div>
                          </div>
                        )}
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
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastname && formik.errors.lastname,
                            },
                            {
                              "is-valid": formik.touched.lastname && !formik.errors.lastname,
                            }
                          )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastname}</div>
                          </div>
                        )}
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
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.firstname && formik.errors.firstname,
                            },
                            {
                              "is-valid": formik.touched.firstname && !formik.errors.firstname,
                            }
                          )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.firstname}</div>
                          </div>
                        )}
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
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastname && formik.errors.lastname,
                            },
                            {
                              "is-valid": formik.touched.lastname && !formik.errors.lastname,
                            }
                          )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastname}</div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                      </div>
                      <div className="row mb-5">
                       {/* begin::Form group Firstname */}
                       <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Next of kin
                        </label>
                        <input
                          placeholder="phone number"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("firstname")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.firstname && formik.errors.firstname,
                            },
                            {
                              "is-valid": formik.touched.firstname && !formik.errors.firstname,
                            }
                          )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.firstname}</div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}

                      {/* begin::Form group Lastname */}
                      <div className="col-md-6 fv-row">
                        <label className="form-label fs-6 fw-bolder text-dark pt-5">
                          Phone Number
                        </label>
                        <input
                          placeholder="Last name"
                          type="text"
                          autoComplete="off"
                          {...formik.getFieldProps("lastname")}
                          className={clsx(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": formik.touched.lastname && formik.errors.lastname,
                            },
                            {
                              "is-valid": formik.touched.lastname && !formik.errors.lastname,
                            }
                          )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.lastname}</div>
                          </div>
                        )}
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
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                     {/*begin::Form Group */}
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
                            name="frequency"
                            value="married"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Monthly</span>
                      </label>
                      {/*end::Option */}
                                 {/*begin:Option */}
                                 <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="maritalStatus"
                            value="single"
                          />
                        </span>
                        <span className="fw-bolder fs-6">Weekly</span>
                      </label>
                      {/*end::Option */}

                    </div>
                    {/*end::Form Group */}
                    {/* begin::Form group Phone */}
                        <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Loan Applied
                      </label>
                      <input
                        placeholder="loan amount"
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("loanAmount")}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.email}</div>
                        </div>
                      )}
                    </div>
                    {/* end::Form group */}   
                     {/* begin::Form group Phone */}
                     <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Total Repayment Amount(Words)
                      </label>
                      <input
                        placeholder="total repayment amount"
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("totalRepayment")}
                        className={clsx(
                          "form-control form-control-lg ",
                          { "is-invalid": formik.touched.email && formik.errors.email },
                          {
                            "is-valid": formik.touched.email && !formik.errors.email,
                          }
                        )}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.email}</div>
                        </div>
                      )}
                    </div>
                    {/* end::Form group */} 
                     {/* begin::Form group Phone */}
                     <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                        Repayment Amount per week(Words)
                      </label>
                      <input
                        placeholder="frequency amount"
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("frequencyamount")}
                        className={clsx(
                          "form-control form-control-lg ",
                          { "is-invalid": formik.touched.email && formik.errors.email },
                          {
                            "is-valid": formik.touched.email && !formik.errors.email,
                          }
                        )}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.email}</div>
                        </div>
                      )}
                    </div>
                    {/* end::Form group */}                  
                    {/*end::Form Group */}

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
                      {/* begin::Form group Phone */}
                      <div className="fv-row mb-5">
                      <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Value
                      </label>
                      <input
                        placeholder="valuer"
                        type="text"
                        autoComplete="off"
                        {...formik.getFieldProps("securityvalue")}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.email}</div>
                        </div>
                      )}
                    </div>
                    {/* end::Form group */} 
                          {/*begin::Input group */}
                <div className="d-flex flex-column mb-10 fv-row">
                    <label className="fs-6 fw-semibold mb-1">Description</label>
                    <textarea className="form-control " rows={3} name="message" placeholder=""></textarea>
                </div>
                {/*end::Input group */} 
                
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
                      type="button"
                      className="btn btn-lg btn-info fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="submit"
                      onClick={submit}
                    >
                      Submit{" "}
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
