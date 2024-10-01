/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getMyloans } from "../../modules/application/core/requests";
import { useSelector } from "react-redux";
import { RootState } from "../../../setup";
import { LoanModel } from "../../modules/application/models/LoanModel";
import { PageTitle } from "../../layout/core";
import { ApplyLoanModal } from "../dashboards/_modals/apply-loan-stepper/ApplyLoanModal";
import { KTSVG } from "../../helpers";

type Props = {
    uuid:string;
  };

const Loans: React.FC<Props> = ({ uuid}) => {
  const [loading, setLoading] = useState(true);
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

  return (
    <>
     <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
          <div className="col-12 justify-content-center">
            <div>
            {loading ? 
              <div className="d-flex justify-content-center align-items-center mt-10">
              <div className="spinner-border p-5 text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>            
            :
            <>
              <div className="d-flex border mb-5 p-4 fw-bolder text-start bg-light-info">
              <div className="me-4 col-4">Loan Amount</div>
              <div className="me-4 col-4">Application Date</div>
              <div className="me-4 col-2">Status</div>
            </div>
            {loans.map((item, index) => (
              <a href="" style={{ textDecoration: 'none' }}>
               <div className="d-flex border mb-5 p-4 btn btn-light text-start">               
                <div className="me-4 col-4"><a className="text-dark">{item.loanAmount}</a></div>
                <div className="me-4 col-4">{new Date(item.createdAt).toLocaleString()} </div>
                <div className={`me-4 col-2 badge ${
                  item.disbursed === true ? 'bg-primary':
                  item.approvalStatus === 'approved' ? 'bg-success' :
                  item.approvalStatus === 'pending' ? 'bg-warning' : 
                  'bg-danger'
                }`}>{item.disbursed ===true ? "Disbursed" : item.approvalStatus}</div>          
             </div>
             </a>   
            ))}
            </>
            }
            </div>
          </div>
      </div>
    </>
  );
};
export { Loans };