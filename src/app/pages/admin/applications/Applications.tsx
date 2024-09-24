/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { PageTitle } from "../../../layout/core";
import { LoanModel } from "../../../modules/application/models/LoanModel";
import { getLoans } from "../../../modules/application/core/requests";

export const Applications: React.FC = () => {
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [loans, setLoans] = useState<LoanModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await  getLoans().then((response)=>{
          setLoans(response.data);
          console.log(response.status);
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <>
    <PageTitle>Applications</PageTitle>
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
              <div className="me-2 col-3">Status</div>
              <div className="me-2 col-3">Date Disbursed</div>
            </div>
            {searchedData.map((item, index) => (
              <a href={`/admin/applications/${item.uuid}`}  style={{ textDecoration: 'none' }} key={item.id}>
               <div className="d-flex border mb-5 p-4 btn btn-light text-start">               
                <div className="me-2 col-2"><a className="text-dark">{item.loanAmount}</a></div>
                <div className="me-2 col-3">{new Date(item.createdAt).toLocaleString()} </div>
                <div className={`me-2 col-3 ${
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
    </>
  );
};
