document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;

    // Simulate API call for login using JSONPlaceholder's /users endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    });

    if (response.ok) {
      const users = await response.json();
      const user = users.find(u => u.username === username && u.email === password);

      if (user) {
        // Successful login, redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        // Show error message
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.classList.add('error-message');
        loginForm.appendChild(errorMessage);
      }
    } else {
      console.error('Failed to fetch users data.');
    }
  });
});
