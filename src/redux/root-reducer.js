import { combineReducers } from "redux";
import bannerReducer from "./banners/banners.reducers";
import cartReducer from "./cart/cart.reducer";
import categoryReducer from "./category/category.reducers";
import productReducer from "./products/products.reducers";

const rootReducer = combineReducers({
  banners: bannerReducer,
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
