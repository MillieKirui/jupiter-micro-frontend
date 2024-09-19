import axios from "axios";
import { UserModel } from "../../auth/models/UserModel";

const API_URL = process.env.REACT_APP_API_URL || "api";

export const USERS_URL = `${API_URL}/users/`;
export const LOANS_URL = `${API_URL}/loans/`;


export function getUserById() {
  return axios.get<UserModel>(USERS_URL);
}

export function getUser(uuid:any) {
  return axios.get<UserModel>(`${USERS_URL}${uuid}`);
}

export function getUsers() {
  return axios.get<UserModel[]>(`${USERS_URL}`);
}


