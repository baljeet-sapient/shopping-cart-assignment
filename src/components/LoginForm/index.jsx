import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../helper/utils";
import Button from "../Button";
import Input from "../Input";
import "./loginForm.styles.scss";

const Index = ({}) => {
  const navigation = useNavigate();
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigation("/");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    if (event.target.name === "email") {
      if (!validateEmail(event.target.value)) {
        const emailError = "Please add valid email pattern wich includes @";
        setInputError({ ...inputError, [name]: emailError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }

    if (event.target.name === "password") {
      if (!validatePassword(event.target.value)) {
        const passwordError =
          "Please add valid Password (min-length 6, atleast 1 alpha numeric and no space)";
        setInputError({ ...inputError, [name]: passwordError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }
  };

  return (
    <div className="login">
      <div className="login__content">
        <h2 className="title">Login</h2>
        <span>Get access to your Orders, Wishlist and Recommensations</span>
      </div>
      <form onSubmit={handleSubmit} className="login__form">
        <Input
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
          error={inputError.email}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
          error={inputError.password}
        />
        <Button
          type="submit"
          className="buttons"
          disabled={inputError.email || inputError.password}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};
export default Index;
