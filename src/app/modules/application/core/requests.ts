import axios from "axios";
import { ApplicationModel } from "../models/ApplicationModel";
import { number } from "yup";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";

const API_URL = process.env.REACT_APP_API_URL || "api";

export const LOAN_APPLICATION_URL = `${API_URL}/applicants/create`;
export const LOAN_CALCULATION_URL = `${API_URL}/loans/calculate`;


// Server should return ApplicationModel
export function applyLoan(
    firstName: string,
    lastName: string,
    fullName:string,
    phoneNumber:string,
    idNumber:string,
    maritalStatus:string,
    spouseName:string,
    spouseIdNumber:string,
    village:string,
    location:string,
    county:string,
    subCounty:string,
    businessName:string,
    businessLocation:string,
    nextOfKin:string,
    nextOfKinPhone:string,
    loanAmount:number,
    loanTerm:number,
    paymentFrequency:string,
    collateralType:string,
    collateralValue:number,
    collateralFile:string,
    uuid:any,

) {
  console.log(firstName,fullName);
  return axios.post<ApplicationModel>(`${LOAN_APPLICATION_URL}/${uuid}`, {
      firstName,
      lastName,
      fullName,
      phoneNumber,
      idNumber,
      maritalStatus,
      spouseName,
      spouseIdNumber,
      village,
      location,
      county,
      subCounty,
      businessName,
      businessLocation,
      nextOfKin,
      nextOfKinPhone,
      loanAmount,
      loanTerm,
      paymentFrequency,
      collateralType,
      collateralValue,
      collateralFile
  });
}

//loan calculation request
export function calculateLoan(
  loanAmount:number,
  loanTerm:number,
  paymentFrequency:string
){
  return axios.post(`${LOAN_CALCULATION_URL}`, {
    loanAmount,
    loanTerm,
    paymentFrequency
  });
}
