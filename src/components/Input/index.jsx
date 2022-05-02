import React from "react";
import "./input.styles.scss";

const Index = ({ handleChange, label, error, ...props }) => {
  return (
    <div className="form__group">
      <input className="form__input" onChange={handleChange} {...props} />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form__inputLabel`}
        >
          {label}
        </label>
      ) : null}
      <p className="error__message">{error} </p>
    </div>
  );
};

export default Index;
