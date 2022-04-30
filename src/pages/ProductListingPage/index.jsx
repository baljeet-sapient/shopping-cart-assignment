import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { fetchProductsData } from "../../redux/products/products.actions";
import ProductListing from "../../components/ProductListing";
import ProductPage from "../../components/ProductPage";

const Index = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const productData = useSelector((state) => {
    return state.products.productsData;
  });

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [location]);

  return (
    <Routes>
      <Route
        exact
        path={`/`}
        element={<ProductListing productData={productData} />}
      />
      <Route
        path={`/:productId`}
        element={<ProductPage productData={productData} />}
      ></Route>
    </Routes>
  );
};

export default Index;