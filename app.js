const SubmitBtn = document.querySelector("button");
const showAlertSuccess = document.querySelector(".alert-msg");
const email = document.getElementById("email");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const massageInput = document.getElementById("msg-input");
const radioInputs = document.querySelectorAll("input[name='query-type']");
const checkbox = document.getElementById("consent-checkbox");
const inputsArray = [firstName, lastName, email, massageInput];

const isEmailValid = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const massageInputValue = massageInput.value.trim();
  const emailValue = email.value.trim();

  let inputsFilled = true;

  if (!firstNameValue) {
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

  if (emailValue === "" || !isEmailValid(emailValue)) {
    errorHandler(email);
    inputsFilled = false;
  } else {
    successMessage(email);
  }

  let radioChecked = false;
  radioInputs.forEach((radio) => {
    if (radio.checked) {
      radioChecked = true;
    }
  });

  if (!radioChecked) {
    errorHandler(radioInputs[0].parentElement);
    inputsFilled = false;
  } else {
    successMessage(radioInputs[0].parentElement);
  }

  return inputsFilled;
};

const errorHandler = (input) => {
  input.style.borderColor = "#d73c3c";
  const inputContainer = input.parentElement;
  const errorSpan = inputContainer.querySelector(".error");
  errorSpan.style.display = "block";
};

const successMessage = (input) => {
  input.style.borderColor = "#0c7d69";
  const inputContainer = input.parentElement;
  const errorSpan = inputContainer.querySelector(".error");
  errorSpan.style.display = "none";
};

const showAlertHandler = () => {
  showAlertSuccess.style.display = "block";
  setTimeout(() => {
    showAlertSuccess.style.display = "none";
  }, 4000);
};

const showSuccessMsg = (event) => {
  event.preventDefault(); // جلوگیری از ارسال فرم
  if (checkInputs()) {
    showAlertHandler();
  }

  inputsArray.forEach((input) => {
    input.value = "";
    input.style.borderColor = "";
  });
};

SubmitBtn.addEventListener("click", showSuccessMsg);
