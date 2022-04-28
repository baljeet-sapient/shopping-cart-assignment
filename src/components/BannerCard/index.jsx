import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../Button";
import "./bannerCard.styles.scss";
import { useNavigate, useMatch } from "react-router-dom";
import { fetchCategoryData } from "../../redux/category/category.action";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let categoryData = useSelector((state) => {
    return state.categories.categoryData;
  });

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  return (
    <div className="category__section">
      {categoryData.map((category) =>
        category.enabled ? (
          <div className="category" key={category.key}>
            <div className="category__image">
              <img src={category.imageUrl} alt={category.name} />
            </div>

            <div className="category__container">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <Button onClick={() => navigate(`/product-list/${category.id}`)}>
                {category.name}
              </Button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Index;
