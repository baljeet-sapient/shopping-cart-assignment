import React from "react";
import "./button.styles.scss";

const Index = ({ children, ...props }) => {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
};

export default Index;
