document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
      // Perform login validation and logic here
      // Example: Authenticate user using fetch or XMLHttpRequest
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        window.location.href = "/dashboard.html"; // Redirect on successful login
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
