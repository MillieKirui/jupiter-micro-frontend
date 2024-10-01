/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../../layout/core";
import Swal from "sweetalert2";
import { getUser, getUserById } from "../../../modules/auth/core/requests";
import { UserModel } from "../../../modules/auth/models/UserModel";
import { Loans } from "../../Loans/Loans";

export const User: React.FC = () => {

    const[userLoans, setUserLoans]= useState(true);
    const[userSecurityItems, setUserSecurityItems]= useState(false);

    //get user UUID
    const uuid = useSelector<RootState>(
        (state) => state.auth?.uuid,
    );

    const {userId} = useParams<{userId:string}>();
    
    const [user, setUser] = useState<UserModel>();

    const getSelectedUser =()=>{
        getUser(userId).then((response)=>{
        setUser(response.data);
        console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    useEffect(()=>{
        getSelectedUser();
    },[]);
    

  return (
    <>
     <PageTitle>User</PageTitle>
     <div className="d-flex g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
        <div className="card d-flex card-custom shadow col-12 justify-content-center align-items-center">
          <div className="card-header col-11 border-0 justify-content-end align-items-end ">
            <div className="card-toolbar gap-10 p-5 text-end ">
            </div>
          </div>
          <div className="card-body border col-11 justify-content-center align-items-center ">
          <div className="card mb-5 mb-xxl-8">
            <div className="card-body pt-9 pb-0">
                {/*begin::Details*/}
                <div className="d-flex flex-wrap flex-sm-nowrap">
                    {/*begin: icon*/}
                    <div className="me-7 mb-4">
                    <i className="fa fa-user fs-5x me-2" aria-hidden="true"></i>                     
                    </div>
                    {/*end::icon*/}
                    {/*begin::Info*/}
                    <div className="flex-grow-1">
                        {/*begin::Title*/}
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            {/*begin::User*/}
                            <div className="d-flex flex-column">
                                {/*begin::Name*/}
                                <div className="d-flex align-items-center mb-2">
                                    <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"><span>{user?.firstName}</span><span>{user?.lastName}</span></a>
                                    <a href="#">
                                        <i className="ki-duotone ki-verify fs-1 text-primary">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </a>
                                </div>
                                {/*end::Name*/}
                                {/*begin::Info*/}
                                <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                    <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                    <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </i>{user?.role}</a>
                                    <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                    <i className="ki-duotone ki-geolocation fs-4 me-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>{user?.address}</a>
                                    <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                    <i className="ki-duotone ki-sms fs-4 me-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>{user?.email}</a>
                                </div>
                                {/*end::Info*/}
                            </div>
                            {/*end::User*/}
                        </div>
                        {/*end::Title*/}
                        {/*begin::Stats*/}
                        <div className="d-flex flex-wrap flex-stack">
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-column flex-grow-1 pe-8">
                                {/*begin::Stats*/}
                                <div className="d-flex flex-wrap">
                                    {/*begin::Stat*/}
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        {/*begin::Number*/}
                                        <div className="d-flex align-items-center">
                                            <i className="ki-duotone ki-arrow-up fs-2 text-success me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            <div className="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%" data-kt-initialized="1"></div>
                                        </div>
                                        {/*end::Number*/}
                                        {/*begin::Label*/}
                                        <div className="fw-semibold fs-6 text-gray-400">Applications</div>
                                        {/*end::Label*/}
                                    </div>
                                    {/*end::Stat*/}
                                </div>
                                {/*end::Stats*/}
                            </div>
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                </div>
                {/*end::Details*/}
                   {/*begin::Navs*/}
                   <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                          {/*begin::Nav item*/}
                          <li className="nav-item mt-2">
                              <a className={`nav-link text-active-primary ms-0 me-10 py-5 ${userLoans==true && 'active'}`} 
                              onClick={()=>{
                                setUserLoans(true);
                                setUserSecurityItems(false);
                              }}>Applications</a>
                          </li>
                          {/*end::Nav item*/}                                    
                          {/*begin::Nav item*/}
                          <li className="nav-item mt-2">
                              <a className={`nav-link text-active-primary ms-0 me-10 py-5 ${userSecurityItems==true && 'active'}`} 
                              onClick={()=>{
                                setUserLoans(false);
                                setUserSecurityItems(true);
                              }}>Security Items</a>
                          </li>
                          {/*end::Nav item*/}
                      </ul>
                      {/*begin::Navs*/}
                      <div className="g-0 g-xl-4 g-xxl-6">
                        {userLoans &&
                        <Loans uuid={userId}/>
                        }
                        {userSecurityItems &&
                        <div>
                          Security Items
                        </div>
                        }
                      </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    </>
)};