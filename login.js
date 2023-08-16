document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;

    // Simulate API call for login using login.php endpoint
    const response = await fetch('backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${username}&password=${password}`
    });

    if (response.ok) {
      // Successful login, redirect to dashboard
      window.location.href = 'dashboard.html';
    } else {
      // Show error message
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Invalid username or password.';
      errorMessage.classList.add('error-message');
      loginForm.appendChild(errorMessage);
    }
  });
});
