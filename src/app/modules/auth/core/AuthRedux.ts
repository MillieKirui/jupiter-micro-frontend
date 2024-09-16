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
};

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
  uuid: undefined,
};

export interface IAuthState {
  user?: UserModel;
  accessToken?: string;
  uuid?: string;
}

export const reducer = persistReducer(
  { storage, key: "jupiter", whitelist: ["user", "accessToken", "uuid"] },
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken;
        const uuid = action.payload?.uuid;
        return { ...state, accessToken, uuid, user: undefined };
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

      default:
        return state;
    }
  }
);

export const actions = {
  login: (accessToken: string, uuid: string) => {
    return { type: actionTypes.Login, payload: { accessToken, uuid } };
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