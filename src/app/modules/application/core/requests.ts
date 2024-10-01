import axios from "axios";
import { ApplicationModel } from "../models/ApplicationModel";
import { LoanModel } from "../models/LoanModel";
import { UserModel } from "../../auth/models/UserModel";


const API_URL = process.env.REACT_APP_API_URL || "api";

export const LOANS_URL = `${API_URL}/loans`;
export const APPLICATION_URL = `${API_URL}/applicants`;
export const LOAN_CALCULATION_URL = `${API_URL}/loans/calculate`;


export function applyLoan(
    firstName: string,
    lastName: string,
    fullName: string,
    phoneNumber: string,
    idNumber: string,
    maritalStatus: string,
    spouseName: string,
    spouseIdNumber: string,
    village: string,
    location: string,
    county: string,
    subCounty: string,
    businessName: string,
    businessLocation: string,
    nextOfKin: string,
    nextOfKinPhone: string,
    loanAmount: number,
    loanTerm: number,
    paymentFrequency: string,
    collateralType: string,
    collateralValue: number,
    collateralFile: File | null, 
    uuid: any 
) {

  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('fullName', fullName);
  formData.append('phoneNumber', phoneNumber);
  formData.append('idNumber', idNumber);
  formData.append('maritalStatus', maritalStatus);
  formData.append('spouseName', spouseName);
  formData.append('spouseIdNumber', spouseIdNumber);
  formData.append('village', village);
  formData.append('location', location);
  formData.append('county', county);
  formData.append('subCounty', subCounty);
  formData.append('businessName', businessName);
  formData.append('businessLocation', businessLocation);
  formData.append('nextOfKin', nextOfKin);
  formData.append('nextOfKinPhone', nextOfKinPhone);
  formData.append('loanAmount', loanAmount.toString()); 
  formData.append('loanTerm', loanTerm.toString()); 
  formData.append('paymentFrequency', paymentFrequency);
  formData.append('collateralType', collateralType);
  formData.append('collateralValue', collateralValue.toString()); 
  
  // Append the file if it exists
  if (collateralFile) {
      formData.append('collateralFile', collateralFile);
  }

  return axios.post<ApplicationModel>(`${APPLICATION_URL}/create/${uuid}`, formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  });
};


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
  return axios.post<LoanModel>(`${LOANS_URL}/updateDisbursment/${uuid}`,{payType,transactionNumber,dateDisbursed});
}

//get Applicatnt
export function getApplicant(uuid:any) {
  return axios.get<UserModel>(`${APPLICATION_URL}/${uuid}`); 
}