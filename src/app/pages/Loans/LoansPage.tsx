/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getMyloans } from "../../modules/application/core/requests";
import { useSelector } from "react-redux";
import { RootState } from "../../../setup";
import { LoanModel } from "../../modules/application/models/LoanModel";
import { PageTitle } from "../../layout/core";
import { ApplyLoanModal } from "../dashboards/_modals/apply-loan-stepper/ApplyLoanModal";
import { KTSVG } from "../../helpers";

export const LoansPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [showApplyLoanModal, setShowApplyLoanModal] = useState(false);
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [loans, setLoans] = useState<LoanModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getMyloans(uuid).then((response) => {
          console.log(response);
          setLoans(response.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uuid]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = loans.filter((row) =>
    Object.keys(filters).every((field) =>
      String(row[field as keyof LoanModel]).toLowerCase().includes(String(filters[field]).toLowerCase())
    )
  );

  const searchedData = filteredData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const filterApprovedLoans = (status:string) => {
    const approvedLoans = loans.filter(loan => loan.approvalStatus==status);
    return approvedLoans;
};

  return (
    <>
    <PageTitle>My Loans</PageTitle>
     {/* begin::Row */}
     <div className="row g-6 g-xl-9">
      <div className="col-lg-4 col-xxl-4">
      <div className="card card-custom shadow  justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-2 mb-5">
              <KTSVG
                className="svg-icon-2 text-info"
                path="/media/icons/coin_in_hand.svg"
                />
                <div className="justify-content-start alight-items-start">
                  <div className="text-start fw-bolder text-info ">{loans.length}</div>
                  <div className="fs-6 text-start">Total</div>
                  <div className="fs-6 text-start">Applied</div>
                </div>
              </div>
         </div>
          </div>
      </div>
      <div className="col-lg-4 col-xxl-4">
      <div className="card card-custom shadow  justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center mb-5">
              <i className="fa fa-check fs-3x p-5 justify-content-start alight-items-start bg-light-info rounded-circle me-10 text-primary" aria-hidden="true"></i> 
                <div className="justify-content-start alight-items-start">
                  <div className="text-start fw-bolder text-primary ">{(filterApprovedLoans('approved')).length}</div>
                  <div className="fs-6 text-start">Total</div>
                  <div className="fs-6 text-start">Approved</div>
                </div>
              </div>
         </div>
          </div>
      </div>
      <div className="col-lg-4 col-xxl-4">
      <div className="card card-custom shadow  justify-content-center align-items-center">
            <div className="card-body justify-content-center">
              <div className="d-flex text-center fs-2 mb-5">
                <i className="fa fa-times fs-3x p-5 justify-content-start alight-items-start bg-light-info rounded-circle me-10 text-danger" aria-hidden="true"></i>         
                <div className="justify-content-start alight-items-start">
                  <div className="text-start fw-bolder text-danger ">{(filterApprovedLoans('rejected')).length}</div>
                  <div className="fs-6 text-start">Total</div>
                  <div className="fs-6 text-start">Rejected</div>
                </div>
              </div>
         </div>
          </div>
      </div>
  
        <div>
   
        </div>
      </div>
      {/* end::Row */}
     <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
        <div className="card card-custom shadow col-12 justify-content-center align-items-center">
          <div className="card-body col-12 justify-content-center">
            <div>
            <i className="fa fa-search fs-1x mb-5 border border-info rounded p-2" aria-hidden="true">
              <input
                  type="text"
                  className="border-0 ms-5"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{
                    border: 0,
                    outline: 'none',
                  }}
                />
            </i>
            {loading ? 
              <div className="d-flex justify-content-center align-items-center mt-10">
              <div className="spinner-border p-5 text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>            
            :
            <>
              <div className="d-flex border mb-5 p-4 fw-bolder text-start bg-light-info">
              <div className="me-2 col-2">Loan Amount</div>
              <div className="me-2 col-3">Application Date</div>
              <div className="me-2 col-2">Status</div>
              <div className="me-2 col-3">Date Disbursed</div>
            </div>
            {searchedData.map((item, index) => (
              <a href="" style={{ textDecoration: 'none' }}>
               <div className="d-flex border mb-5 p-4 btn btn-light text-start">               
                <div className="me-2 col-2"><a className="text-dark">{item.loanAmount}</a></div>
                <div className="me-2 col-3">{new Date(item.createdAt).toLocaleString()} </div>
                <div className={`me-2 col-2 ${
                  item.approvalStatus === 'approved' ? 'text-success' :
                  item.approvalStatus === 'pending' ? 'text-warning' : 
                  'text-danger'
                }`}>{item.approvalStatus}</div>
                <div className="me-2 col-3">{new Date(item.dateDisbursed).toLocaleString()}</div>                
             </div>
             </a>   
            ))}
            </>
            }
            </div>
          </div>
        </div>
      </div>

       {/* begin::Modals */}
       <ApplyLoanModal
        show={showApplyLoanModal}
        handleClose={() => setShowApplyLoanModal(false)}
      />
      {/* end::Modals */}
    </>
  );
};