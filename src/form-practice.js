import "./style.css";

const REQUIRED = ["name", "email", "message"];
const form = document.querySelector("form");
const submitBtn = form.querySelector('[type="submit"]');
const result = document.querySelector("#result");

submitBtn.disabled = true;

REQUIRED.every((field) => form[field].value.trim() !== "");
form.addEventListener("input", () => {
  // Does EVERY form input field have a non-empty value?
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false) // If yes, enable button
    : (submitBtn.disabled = true); // If no, disable button
});

// Same pattern as 'clicks', but for 'submit' events.
form.addEventListener("submit", (event) => {
  // No, browser! WE will handle this. Stop your default behavior.
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  result.innerHTML = Results(data);
});

function Results(data) {
  console.info(Object.entries(data));

  return `<ul class="space-y-1 text-sm">
        ${Object.entries(data)
          .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
          .join("")}
    </ul>   
    `;
}
