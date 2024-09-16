/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ApplyLoanModal } from "../dashboards/_modals/apply-loan-stepper/ApplyLoanModal";
import { LoanModel } from "../../modules/loans/LoanModel";
import { getMyloans } from "../../modules/application/core/requests";
import { useSelector } from "react-redux";
import { RootState } from "../../../setup";

export const LoansPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const uuid = useSelector<RootState, string | undefined>(
    (state) => state.auth?.uuid,
  );

  const [loans, setLoans] = useState<LoanModel[]>([]);

  useEffect(() => {
    if (uuid) {
      getMyloans(uuid).then((response) => {
        console.log(response);
        setLoans(response.data);
      });
    }
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

  return (
    <>
      <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
        <div className="card card-custom shadow col-12 justify-content-center align-items-center">
          <div className="card-body justify-content-center">
            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Loan Amount</th>
                    <th scope="col">Application Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Disbursed</th>
                    <th scope="col">First Payment date</th>
                  </tr>
                </thead>
                <tbody>
                  {searchedData.map((item, index) => (
                    <tr key={index}>
                      <td className="me-2">{item.loanAmount}</td>
                      <td className="me-2">{item.createdAt}</td>
                      <td className="me-2">{item.approvalStatus}</td>
                      <td className="me-2">{item.dateDisbursed}</td>
                      <td className="me-2">{item.firstPaymentDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};