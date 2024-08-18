const SubmitBtn = document.querySelector("button");
const showAlertSuccess = document.querySelector(".alert-msg");
// const errorInpusMsg = document.querySelectorAll(".error");
const email = document.getElementById("email");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const massageInput = document.getElementById("msg-input");
const radio1 = document.getElementById("general-enquiry");
const radio2 = document.getElementById("sport-request");
const inputsArray = [firstName, lastName, email, massageInput];
console.log(email);
const isEnailValid = (email) => {
  const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPatern.test(email);
};

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const massageInputValue = massageInput.value.trim();
  const emailValue = email.value.trim();
  let isInputFilled = true;
  if (firstNameValue === "") {
    errorHandler(firstName);
    isInputFilled = false;
  } else {
    successMessage(firstName);
  }
  if (lastNameValue === "") {
    errorHandler(lastName);
    isInputFilled = false;
  } else {
    successMessage(lastName);
  }
  if (massageInputValue === "") {
    errorHandler(massageInput);
    isInputFilled = false;
  } else {
    successMessage(massageInput);
  }
  if (emailValue === "" || !isEnailValid(emailValue)) {
    errorHandler(email);
    isInputFilled = false;
  } else {
    successMessage(email);
  }
  if (!radio1.checked && !radio2.checked) {
    errorHandler(document.querySelector(".radio-error"));
    isInputFilled = false;
  } else {
    successMessage(document.querySelector(".radio-error"));
  }
  return isInputFilled;
};

const errorHandler = (input) => {
  input.style.borderColor = "#d73c3c";
  const inputContainer = input.parentElement;
  const errorSpan = inputContainer.querySelector("span");
  errorSpan.style.display = "block";
};

const successMessage = (input) => {
  input.style.borderColor = "#2b4246";
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
    inputsArray.forEach((input) => {
      input.value = "";
      input.style.borderColor = "";
    });
    radio1.checked = false;
    radio2.checked = false;
  }
};
SubmitBtn.addEventListener("click", showSuccessMsg);
