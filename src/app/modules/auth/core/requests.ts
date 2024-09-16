import axios from "axios";
import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";

const API_URL = process.env.REACT_APP_API_URL || "api";

export const GET_USER_BY_ID = `${API_URL}/users/`;
export const LOGIN_URL = `${API_URL}/users/login`;
export const REGISTER_URL = `${API_URL}/users/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot-password`;

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

export function getUserById() {
  return axios.get<UserModel>(GET_USER_BY_ID);
}

export function getUser(uuid:any) {
  return axios.get<UserModel>(`${GET_USER_BY_ID}${uuid}`);
}
