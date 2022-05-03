import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../helper/utils";
import Button from "../Button";
import Input from "../Input";
import "./registerForm.styles.scss";

const Index = () => {
  const navigate = useNavigate();
  const [userCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } =
    userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    navigate(`/`);
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

    if (event.target.name === "confirmPassword") {
      if (password !== event.target.value) {
        setInputError({ ...inputError, [name]: "Password do not match" });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }
  };

  return (
    <div className="register">
      <div className="register__content">
        <h2 className="title">Signup</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <form onSubmit={handleSubmit} className="register__form">
        <Input
          name="firstName"
          type="text"
          label="First Name"
          value={firstName}
          handleChange={handleChange}
          required
        />
        <Input
          name="lastName"
          type="text"
          label="Last Name"
          value={lastName}
          handleChange={handleChange}
          required
        />
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
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
          error={inputError.confirmPassword}
        />
        <Button
          type="submit"
          className="buttons"
          disabled={
            inputError.email ||
            inputError.password ||
            inputError.confirmPassword
          }
        >
          Signup
        </Button>
      </form>
    </div>
  );
};
export default Index;
