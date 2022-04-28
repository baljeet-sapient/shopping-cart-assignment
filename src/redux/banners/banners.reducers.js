import BannersActionTypes from "./banners.types";

const initialState = {
  bannerData: [],
  loading: false,
  errorMessage: null,
};

const bannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BannersActionTypes.FETCH_BANNERS_START:
      return {
        ...state,
        loading: true,
      };
    case BannersActionTypes.FETCH_BANNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        bannerData: payload,
      };
    case BannersActionTypes.FETCH_BANNERS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default bannerReducer;
