import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListing from "../../components/ProductListing";

const ProductPage = ({ productData }) => {
  const params = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterData = productData.filter(
      (ele) => params.productId === ele.category
    );
    setFilterData(filterData);
  }, [productData, params.productId]);

  return (
    <div className="collection-page">
      <ProductListing productData={filterData}></ProductListing>
    </div>
  );
};
export default ProductPage;
