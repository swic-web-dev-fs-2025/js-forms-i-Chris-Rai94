import "./style.css";

const form = document.querySelector("form");
const formData = new FormData(form);
const data = Object.fromEntries(formData);
const submitBtn = document.querySelector('[type="submit"]');
const output = document.getElementsByTagName("output")[0];
const REQUIRED = ["username", "password", "email", "confirmPassword"];

submitBtn.disabled = true;
REQUIRED.every((field) => form[field].value.trim() !== "");
form.addEventListener("input", () => {
  // Does EVERY form input field have a non-empty value?
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false) // If yes, enable button
    : (submitBtn.disabled = true); // If no, disable button
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.password.value !== form.confirmPassword.value) {
    output.value = "Error: Passwords do not match.";
    return;
  }
  output.value = "";
});
