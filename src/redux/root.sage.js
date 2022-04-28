import { all, call } from "redux-saga/effects";
import { fetchBannerData } from "./banners/banners.sagas";
import { fetchCategoryData } from "./category/category.sagas";

export default function* rootSaga() {
  yield all([call(fetchBannerData), call(fetchCategoryData)]);
}
