import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { UserModel } from "../models/UserModel";
import { getUserById } from "./requests";

export interface ActionWithPayload<T> extends Action {
  payload?: T;
} 

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
  SetUUID: "[Set UUID] Action",
  SetRole: "[Set Role] Action",
};

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
  uuid: undefined,
  role: undefined
};

export interface IAuthState {
  user?: UserModel;
  accessToken?: string;
  uuid?: string;
  role?: string;
}

export const reducer = persistReducer(
  { storage, key: "jupiter", whitelist: ["user", "accessToken", "uuid", "role"] },
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken;
        const uuid = action.payload?.uuid;
        const role = action.payload?.role;
        return { ...state, accessToken, uuid,role, user: undefined };
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken;
        return { ...state, accessToken, user: undefined };
      }

      case actionTypes.Logout: {
        return initialAuthState;
      }

      case actionTypes.UserRequested: {
        return { ...state, user: undefined };
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user;
        return { ...state, user };
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user;
        return { ...state, user };
      }
   
      case actionTypes.SetRole: {
        const role = action.payload?.role;
        return { ...state, role };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (accessToken: string, uuid: string, role: string) => {
    return { type: actionTypes.Login, payload: { accessToken, uuid,role } };
  },
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: { accessToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: () => ({
    type: actionTypes.UserRequested
  }),
  fulfillUser: (user: UserModel) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  setUser: (user: UserModel) => ({ type: actionTypes.SetUser, payload: { user } }),
  setRole: (role: string) => ({ type: actionTypes.SetRole, payload: { role } }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga(action) {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const { data: user } = yield getUserById();
    yield put(actions.fulfillUser(user));
  });
}