/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import * as auth from "../core/AuthRedux";
import { register } from "../core/requests";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  phone:"",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  changepassword: Yup.string()
    .required("Password confirmation is required")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
    }),
  acceptTerms: Yup.bool().required("You must accept the terms and conditions"),
});

export function Registration() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        register(
          values.email,
          values.firstName,
          values.lastName,
          values.phone,
          values.password
        )
          .then(({ data: { token, uuid } }) => {
            console.log(token);
            setLoading(false);
            dispatch(auth.actions.login(token, uuid));
          })
          .catch(() => {
            setLoading(false);
            setSubmitting(false);
            setStatus("Registration process has broken");
          });
      }, 1000);
    },
  });

  return (
    <form
      className="form w-100"
      noValidate
      id="kt_login_signup_form"
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Title */}
      <div className="pb-5 pb-lg-5">
        <h3 className="fw-bolder text-dark display-6">Registration</h3>
      </div>
      {/* end::Title */}

      {formik.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      )}
      <div className="row mb-5">
              {/* begin::Form group firstName */}
      <div className="col-md-6 fv-row">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          First name
        </label>
        <input
          placeholder="First name"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("firstName")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.firstName && formik.errors.firstName,
            },
            {
              "is-valid": formik.touched.firstName && !formik.errors.firstName,
            }
          )}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.firstName}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group lastName */}
      <div className="col-md-6 fv-row">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Last name
        </label>
        <input
          placeholder="Last name"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("lastName")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
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
          {/* begin::Form group Phone */}
          <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
         Phone
        </label>
        <input
          placeholder="Your phone number"
          type="phone"
          autoComplete="off"
          {...formik.getFieldProps("phone")}
          className={clsx(
            "form-control form-control-lg form-control-solid")}
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group Email */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Email
        </label>
        <input
          placeholder="Email"
          type="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
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

      {/* begin::Form group Password */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.password}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Password confirmation"
          autoComplete="off"
          {...formik.getFieldProps("changepassword")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid":
                formik.touched.changepassword && formik.errors.changepassword,
            },
            {
              "is-valid":
                formik.touched.changepassword && !formik.errors.changepassword,
            }
          )}
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.changepassword}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-10">
        <div className="form-check form-check-custom form-check-solid mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="kt_login_toc_agree"
            {...formik.getFieldProps("acceptTerms")}
          />
          <label
            className="form-check-label fw-bold text-gray-600"
            htmlFor="kt_login_toc_agree"
          >
            <Link to="/auth/terms" className="ms-1 text-info">
              Terms and conditions
            </Link>
            .
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          )}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="d-flex flex-column flex-wrap pb-lg-0 pb-5">
        <button
          type="submit"
          id="kt_login_signup_form_submit_button"
          className="btn-info fw-bolder fs-6 px-8 py-4 my-3 me-4 rounded"
          disabled={
            formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms
          }
        >
          {!loading && <span className="indicator-label">Register</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Form group */}
    </form>
  );
}
