const SubmitBtn = document.querySelector("button");
const showAlertSuccess = document.querySelector(".alert-msg");

const showSuccessMsg = () => {
  showAlertSuccess.style.display = "block";
  setTimeout(() => {
    showAlertSuccess.style.display = "none";
  }, 4000);
};
SubmitBtn.addEventListener("click", showSuccessMsg);
