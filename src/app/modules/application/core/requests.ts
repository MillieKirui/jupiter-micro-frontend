import axios from "axios";
import { ApplicationModel } from "../models/ApplicationModel";
import { LoanModel } from "../models/LoanModel";


const API_URL = process.env.REACT_APP_API_URL || "api";

export const LOANS_URL = `${API_URL}/loans`;
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

//get user's loan
export function getMyloans(uuid:any){
  return axios.get<LoanModel[]>(`${LOANS_URL}/loans/${uuid}`);
}

export function getLoanById(uuid:any){
  return axios.get<LoanModel>(`${LOANS_URL}/${uuid}`);
}

//update loan
export function updateLoanStatus(uuid:any, approvalStatus:string) {
  return axios.patch<LoanModel>(`${LOANS_URL}/${uuid}`,{approvalStatus});
}

//get all loans
export function getLoans() {
  return axios.get<LoanModel[]>(`${LOANS_URL}`);
}

//Update disbursment
export function updateDisbursment(uuid:any,payType:string, transactionNumber:string, dateDisbursed:Date){
  return axios.patch<LoanModel>(`${LOANS_URL}/updateDisbursment/${uuid}`,{payType,transactionNumber,dateDisbursed});
}