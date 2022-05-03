import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../helper/utils";
import { fetchCategoryData } from "../../redux/category/category.action";
import "./productListing.styles.scss";
import Sidebar from "../Sidebar";
import DropDownView from "../DropDownView";
import Product from "../Product";

const Index = ({ productData }) => {
  const [defaultSelected, setDefaultSelected] = useState(true);
  let { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryData = useSelector((state) => {
    return state.categories.categoryData;
  });

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  const handleCategoryChange = (id) => {
    if (productId === id || id === "Default") {
      navigate(`/product-list`);
      setDefaultSelected(true);
    } else {
      navigate(`/product-list/${id}`);
    }
  };

  const handleDropDownChange = (e) => {
    const id = e.target.value;
    if (productId === id || id === "Default") {
      navigate(`/product-list`);
      setDefaultSelected(true);
    } else {
      navigate(`/product-list/${id}`);
    }
  };

  const productClickHandler = async (product) => {
    const headers = {
      "Content-Type": "text/plain",
    };
    const data = await axios({
      url: `${apiUrl}/addToCart`,
      method: "post",
      data: {
        id: product.id,
      },
      headers: headers,
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err));
    if (data.response === "Success") {
    }
  };

  return (
    <div>
      <div className="container product__listing">
        <Sidebar
          id={productId}
          name="select"
          handleCategoryChange={handleCategoryChange}
        ></Sidebar>
        <div className="category__dropdown">
          <DropDownView
            categoryData={categoryData}
            productId={productId}
            defaultSelected={defaultSelected}
            handleDropDownChange={handleDropDownChange}
          ></DropDownView>
        </div>
        <div className="category__description">
          {productData.map((product, index) => (
            <Product
              key={index}
              product={product}
              productClickHandler={productClickHandler}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
