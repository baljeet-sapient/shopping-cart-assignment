import { all, call } from "redux-saga/effects";
import { fetchBannerData } from "./banners/banners.sagas";

export default function* rootSaga() {
  yield all([call(fetchBannerData)]);
}
