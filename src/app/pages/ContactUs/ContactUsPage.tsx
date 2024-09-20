export function ContactUsPage() {
    return (
        <>     
        <div className="col-12 col-md-6 shadow p-5 rounded bg-white">
            {/*begin::Form */}
            <form action="" className="form" method="post" id="kt_contact_form">
                <h1 className="fw-bold text-dark mb-2 text-center">Contact Us</h1>
                {/*begin::Input group */}
                <div className="row mb-5">
                    {/*begin::Col */}
                    <div className="col-md-6 fv-row">
                        {/*begin::Label */}
                        <label className="fs-5 fw-semibold mb-1">Name</label>
                        {/*end::Label */}
                        {/*begin::Input */}
                        <input type="text" className="form-control " placeholder="" name="fname" />
                        {/*end::Input */}
                    </div>
                    {/*end::Col */}
                    {/*begin::Col */}
                    <div className="col-md-6 fv-row">
                        {/*end::Label */}
                        <label className="fs-5 fw-semibold mb-1">Last Name</label>
                        {/*end::Label */}
                        {/*end::Input */}
                        <input type="text" className="form-control " placeholder="" name="lname" />
                        {/*end::Input */}
                    </div>
                    {/*end::Col */}
                </div>
                {/*end::Input group */}
                {/*begin::Input group */}
                <div className="fv-row">
                        {/*end::Label */}
                        <label className="fs-5 fw-semibold mb-1">Email</label>
                        {/*end::Label */}
                        {/*end::Input */}
                        <input type="text" className="form-control " placeholder="" name="email" />
                        {/*end::Input */}
                    </div>
                {/*end::Input group */}
                {/*begin::Input group */}
                <div className="fv-row">
                        {/*end::Label */}
                        <label className="fs-5 fw-semibold mb-1">Phone</label>
                        {/*end::Label */}
                        {/*end::Input */}
                        <input type="text" className="form-control " placeholder="" name="phone" />
                        {/*end::Input */}
                    </div>

                {/*end::Input group */}
                {/*begin::Input group */}
                <div className="d-flex flex-column mb-10 fv-row">
                    <label className="fs-6 fw-semibold mb-1">Message</label>
                    <textarea className="form-control " rows={3} name="message" placeholder=""></textarea>
                </div>
                {/*end::Input group */}
                {/*begin::Submit */}
                <div className="d-flex flex-column fv-row">
                <button type="submit" className="btn btn-light-info" >
                    {/*begin::Indicator label */}
                    <span className="indicator-label">Send</span>
                    {/*end::Indicator label */}
                    {/*begin::Indicator progress */}
                    <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    {/*end::Indicator progress */}
                </button>
                </div>
                {/*end::Submit */}
            </form>
            {/*end::Form */}
        </div>											
        </>
    );
};