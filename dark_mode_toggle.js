document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const content = document.querySelector(".content");

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    content.classList.toggle("dark-mode");
  });
});
