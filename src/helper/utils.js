export const apiUrl = "http://localhost:5000";

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return emailPattern.test(email);
};

export const validatePassword = (password) => {
  const passwordPattern = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/;
  return passwordPattern.test(password);
};
