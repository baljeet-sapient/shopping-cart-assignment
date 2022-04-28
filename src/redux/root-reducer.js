import { combineReducers } from "redux";
import bannerReducer from "./banners/banners.reducers";

const rootReducer = combineReducers({
  banners: bannerReducer,
});

export default rootReducer;
