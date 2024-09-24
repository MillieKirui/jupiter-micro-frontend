import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../../app/modules/auth";
import LoanSlice from "../../app/store/LoanSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  loan: LoanSlice
});

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()]);
}
