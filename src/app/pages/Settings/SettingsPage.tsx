/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import UpdateProfileInfo from "./partials/update-profile-information";
import UpdatePassword from "./partials/update-password-form";
import DeleteUser from "./partials/delete-user-form";
import { RootState } from "../../../setup";
import { useSelector } from "react-redux";
import { getUser } from "../../modules/auth/core/requests";
import { UserModel } from "../../modules/auth/models/UserModel";

export const SettingsPage: React.FC = () => {
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [user, setUser] = useState<UserModel>();
  //get user loans on mount
  useEffect(()=>{
      getUser(uuid).then((response)=>{
        console.log(response);
        setUser(response.data);
      });
  },[uuid]);

  const updateProfileInfo = () =>{

  }

  return (
    <>
      <div className="app-main flex-column flex-row-fluid ms-5 border" id="kt_app_main">
						{/* begin::Content wrapper*/}
						<div className="d-flex flex-column flex-column-fluid">
						{/* begin::Content*/}
							<div id="kt_app_content" className="app-content flex-column-fluid">
								{/* begin::Content container*/}
								<div id="kt_app_content_container" className="app-container container-fluid">
									{/* begin::Basic info*/}
									<div className="card mb-5 mb-xl-10">
										{/* begin::Card header*/}
										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
											{/* begin::Card title*/}
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Profile Details</h3>
											</div>
											{/* end::Card title*/}
										</div>
										{/* begin::Card header*/}
										{/* begin::Content*/}
										<div id="kt_account_settings_profile_details" className="collapse show">
                      <UpdateProfileInfo user_firstName={`${user?.firstName}`} user_lastName={`${user?.lastName}`} user_email={user?.email}/>
										</div>
										{/* end::Content*/}
									</div>
									{/* end::Basic info*/}
									{/* begin::Sign-in Method*/}
									<div className="card mb-5 mb-xl-10">
										{/* begin::Card header*/}
										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Password Update</h3>
											</div>
										</div>
										{/* end::Card header*/}
										{/* begin::Content*/}
										<div id="kt_account_settings_signin_method" className="collapse show">
											{/* begin::Card body*/}
											<div className="card-body border-top p-9">
                        <UpdatePassword />
											</div>
											{/* end::Card body*/}
										</div>
										{/* end::Content*/}
									</div>
									{/* end::Sign-in Method*/}
									{/* begin::Deactivate Account*/}
									<div className="card">
										{/* begin::Card header*/}
										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Deactivate Account</h3>
											</div>
										</div>
										{/* end::Card header*/}
										{/* begin::Content*/}
										<div id="kt_account_settings_deactivate" className="collapse show">
											{/* begin::Form*/}
											 <DeleteUser/>
											{/* end::Form*/}
										</div>
										{/* end::Content*/}
									</div>
									{/* end::Deactivate Account*/}
								</div>
								{/* end::Content container*/}
							</div>
							{/* end::Content*/}                    
						{/* end::Content wrapper*/}
					</div>
					{/* end:::Main*/}
				</div>
 
    </>
  );
};
