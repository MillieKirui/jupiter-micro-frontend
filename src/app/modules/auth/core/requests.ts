import axios from "axios";
import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../../setup";

const API_URL = process.env.REACT_APP_API_URL || "api";

export const GET_USER_BY_ID = `${API_URL}/users/`;
export const LOGIN_URL = `${API_URL}/users/login`;
export const REGISTER_URL = `${API_URL}/users/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/users/forgotPassword`;



// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, { email, password });
}

// Server should return AuthModel
export function register(
  email: string,
  firstName: string,
  lastName: string,
  phone:string,
  password: string,
) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstName,
    lastName,
    phone,
    password
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}


export function getUserById(uuid:any) {
  return axios.get<UserModel>(`${GET_USER_BY_ID}${uuid}`);
}

export function getUser(uuid:any) {
  return axios.get<UserModel>(`${GET_USER_BY_ID}${uuid}`);
}

export function updateProfileDetails(uuid:any,firstName:string,lastName:string,email:string) {
  return axios.patch<UserModel>(`${GET_USER_BY_ID}${uuid}`,{firstName,lastName,email} );
}

export function deleteAccount(uuid:any) {
  return axios.delete<UserModel>(`${GET_USER_BY_ID}${uuid}` );
}




