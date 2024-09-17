import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../../../setup";

export function HeaderUserMenu() {
  const user= useSelector<RootState>(
    (state) => state.auth.user
  );
  console.log(user);
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px"
      data-kt-menu="true"
    >
      <div
        className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
        style={{
          backgroundImage: `url('${toAbsoluteUrl(
            "/media//misc/dropdown-header-bg.jpg"
          )}')`,
        }}
      >
        <div className="symbol symbol-45px mx-5 py-5">
          <span className="symbol-label align-items-end">
          <i className="fa fa-user fs-2x"></i>
          </span>
        </div>
        <div className="">
          <span className="text-info fw-bolder fs-4">Hello {}</span>
          <span className="text-white fw-bold fs-7 d-block">
          </span>
        </div>
      </div>

      {/* begin::Row */}
      <div className="justify-content-center align-items-center">
        <div className="border">
        <Link
          to="/settings"
          className="col border-bottom text-center p-5 btn btn-active-color-info rounded-0"
          data-kt-menu-dismiss="true"
        >
          <span className="fw-bolder fs-6 d-block text-center">Settings</span>
        </Link>
        </div>
        <div className="border justify-content-center align-items-center">
          <Link
            to="/logout"
            className=" p-5 btn btn-active-color-info rounded-0"
            data-kt-menu-dismiss="true"
          >
            <span className="fw-bolder fs-6 d-block text-center">Sign Out</span>
          </Link>
        </div>
      </div>
      {/* end::Row */}
    </div>
  );
}
