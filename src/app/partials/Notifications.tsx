import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function Notifications() {
const pendingLoans = useSelector((state: any) => state.loan.pendingLoans);

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px"
      data-kt-menu="true"
    >
      <div
        className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
      >
        <div className="symbol symbol-45px mx-5 py-5">
          <span className="symbol-label align-items-end">
          <i className="fa fa-bell fs-2x" aria-hidden="true"></i>
          </span>
        </div>
        <div className="">
          <span className="text-info fw-bolder fs-4">Notifications</span>
          <span className="text-white fw-bold fs-7 d-block">
          </span>
        </div>
      </div>

      {/* begin::Row */}
      <div className="justify-content-center align-items-center">
        <div className="border justify-content-center align-items-center text p-5">
          Loans to be reviewed {" "}{pendingLoans}
        </div>
      </div>
      {/* end::Row */}
    </div>
  );
}
