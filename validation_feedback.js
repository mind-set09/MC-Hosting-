document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const validationError = document.querySelector(".validation-error");
  const signupForm = document.getElementById("signup-form");

  emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
      emailInput.classList.remove("invalid");
      validationError.style.display = "none";
    } else {
      emailInput.classList.add("invalid");
      validationError.style.display = "block";
    }
  });

  signupForm.addEventListener("submit", (event) => {
    if (!emailInput.validity.valid) {
      event.preventDefault();
      emailInput.classList.add("invalid");
      validationError.style.display = "block";
    }
  });
});
