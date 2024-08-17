const SubmitBtn = document.querySelector("button");
const showAlertSuccess = document.querySelector(".alert-msg");
const email = document.getElementById("email");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const massageInput = document.getElementById("msg-input");

const isEnailValid = (email) => {
  const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPatern.test(email);
};

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const massageInputValue = massageInput.value.trim();
  const emailValue = email.value.trim();
  let inputsFilled = true;
  if (firstNameValue === "") {
    errorHandler(firstName);
    inputsFilled = false;
  } else {
    successMessage(firstName);
  }
  if (lastNameValue === "") {
    errorHandler(lastName);
    inputsFilled = false;
  } else {
    successMessage(lastName);
  }
  if (massageInputValue === "") {
    errorHandler(massageInput);
    inputsFilled = false;
  } else {
    successMessage(massageInput);
  }
  if (emailValue === "" || !isEnailValid(emailValue)) {
    errorHandler(email);
    inputsFilled = false;
  } else {
    successMessage(email);
  }
  return inputsFilled;
};

const errorHandler = (input) => {
  input.style.borderColor = "#d73c3c";
  const inputContainer = input.parentElement;
  const errorSpan = inputContainer.querySelector("span");
  errorSpan.style.display = "block";
};

const successMessage = (input) => {
  input.style.borderColor = "#0c7d69";
  const inputContainer = input.parentElement;
  const errorSpan = inputContainer.querySelector("span");
  errorSpan.style.display = "none";
};
const showAlertHandler = () => {
  showAlertSuccess.style.display = "block";
  setTimeout(() => {
    showAlertSuccess.style.display = "none";
  }, 4000);
};
const showSuccessMsg = () => {
  if (checkInputs()) {
    showAlertHandler();
  }
};
SubmitBtn.addEventListener("click", showSuccessMsg);
