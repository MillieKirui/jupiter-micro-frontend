export function Summary (){
    return(
        <div className="col-lg-6 col-xxl-4">
            {/*begin::Summary*/}
            <div className="card h-100">
                <div className="card-body p-9">
                    <div className="fs-2hx fw-bold">Ksh 70,000</div>
                    <div className="fs-4 fw-semibold text-gray-400 mb-7">Disbursed</div>
                    <div className="fs-6 d-flex justify-content-between mb-4">
                        <div className="fw-semibold">Interest</div>
                        <div className="d-flex fw-bold">
                        <i className="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>Ksh 20,000</div>
                    </div>
                    <div className="separator separator-dashed"></div>
                    <div className="fs-6 d-flex justify-content-between my-4">
                        <div className="fw-semibold">Pending Loans Amount</div>
                        <div className="d-flex fw-bold">
                        <i className="ki-duotone ki-arrow-down-left fs-3 me-1 text-danger">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>Ksh408</div>
                    </div>
                    <div className="separator separator-dashed"></div>
                    <div className="fs-6 d-flex justify-content-between mt-4">
                        <div className="fw-semibold">Total repayed</div>
                        <div className="d-flex fw-bold">
                        <i className="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>Ksh 50,000</div>
                    </div>
                </div>
            </div>
            {/*end::Summary*/}
        </div>
    )
}