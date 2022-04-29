import { combineReducers } from "redux";
import bannerReducer from "./banners/banners.reducers";
import categoryReducer from "./category/category.reducers";
import productReducer from "./products/products.reducers";

const rootReducer = combineReducers({
  banners: bannerReducer,
  categories: categoryReducer,
  products: productReducer,
});

export default rootReducer;
