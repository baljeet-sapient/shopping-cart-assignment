import { combineReducers } from "redux";
import bannerReducer from "./banners/banners.reducers";
import categoryReducer from "./category/category.reducers";

const rootReducer = combineReducers({
  banners: bannerReducer,
  categories: categoryReducer,
});

export default rootReducer;
