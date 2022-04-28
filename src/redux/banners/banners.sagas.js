import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { apiUrl } from "../../helper/utils";
import { get } from "lodash";
import BannersActionTypes from "./banners.types";
import {
  fetchBannerDataFailure,
  fetchBannerDataSuccess,
} from "./banners.action";

function* getBannersData() {
  try {
    const response = yield axios
      .get(apiUrl + "/banners")
      .then((response) => Promise.resolve(response));
    yield put(fetchBannerDataSuccess(get(response, "data", [])));
  } catch (error) {
    yield put(fetchBannerDataFailure());
  }
}

export function* fetchBannerData() {
  yield takeLatest(BannersActionTypes.FETCH_BANNERS_START, getBannersData);
}
