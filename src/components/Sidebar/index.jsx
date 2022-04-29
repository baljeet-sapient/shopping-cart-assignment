import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.styles.scss";

const Index = (props) => {
  const categoryData = useSelector((state) => state.categories.categoryData);
  const filteredData = categoryData.filter((data) => data.enabled === true);
  return (
    <div className="category__container">
      <ul className="category__list">
        {filteredData.map((category) => (
          <li
            key={category.id}
            className={category.id === props.id ? "active" : null}
            onClick={() => props.handleCategoryChange(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
