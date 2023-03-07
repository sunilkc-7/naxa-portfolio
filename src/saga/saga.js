import { takeLatest } from "redux-saga/effects";
import { Get_Data } from "../redux/reducer/getReducer";
import { handleGetData } from "../saga/handlers/handlers";
export function* watcherSaga() {
  yield takeLatest(Get_Data, handleGetData);
}
