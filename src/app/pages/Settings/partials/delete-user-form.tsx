const DeleteUser = ()=>{
    return(
        <form id="kt_account_deactivate_form" className="form" method="post" action="{{ route('profile.destroy') }}">
            {/*begin::Card body*/}
            <div className="card-body border-top p-9">
                {/*begin::Notice*/}
                <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                    {/*begin::Icon*/}
                    <i className="ki-duotone ki-information fs-2tx text-warning me-4">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </i>
                    {/*end::Icon*/}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack flex-grow-1">
                        {/*begin::Content*/}
                        <div className="fw-semibold">
                            <h4 className="text-gray-900 fw-bold">You Are Deactivating Your Account</h4>
                            <div className="fs-6 text-gray-700">For extra security, this requires you to confirm your email or phone number when you reset you sign in password.
                            <br />
                            </div>
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Notice*/}
                {/*begin::Form input row*/}
                <div className="form-check form-check-solid fv-row">
                    <input name="deactivate" className="form-check-input" type="checkbox" value="" id="deactivate" required/>
                    <label className="form-check-label fw-semibold ps-2 fs-6">I confirm my account deactivation</label>
                </div>
                {/*end::Form input row*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
                <button id="kt_account_deactivate_account_submit" type="submit" className="btn btn-danger fw-semibold">Deactivate Account</button>
            </div>
            {/*end::Card footer*/}
        </form>

    )
}
export default DeleteUser