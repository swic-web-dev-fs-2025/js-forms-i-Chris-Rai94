import "./style.css";

const form = document.querySelector("form");
const formData = new FormData(form);
const data = Object.fromEntries(formData);
const submitBtn = document.querySelector('[type="submit"]');
const REQUIRED = ["username", "password", "email", "confirmPassword"];

submitBtn.disabled = true;
REQUIRED.every((field) => form[field].value.trim() !== "");
form.addEventListener("input", () => {
  // Does EVERY form input field have a non-empty value?
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false) // If yes, enable button
    : (submitBtn.disabled = true); // If no, disable button
});
