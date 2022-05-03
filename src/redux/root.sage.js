import { all, call } from "redux-saga/effects";
import { fetchBannerData } from "./banners/banners.sagas";
import { fetchCategoryData } from "./category/category.sagas";
import { fetchProductData } from "./products/products.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchBannerData),
    call(fetchCategoryData),
    call(fetchProductData),
  ]);
}
