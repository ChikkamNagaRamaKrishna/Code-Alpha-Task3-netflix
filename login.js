const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Your authentication logic here
    // For this example, assume login is successful when username is 'Netflix' and password is 'Netflix123'
    if (username === 'Netflix' && password === 'Netflix123') {
        // Set authenticated flag in localStorage
        localStorage.setItem('authenticated', 'true');
        // Redirect to index.html after successful login
        window.location.href = 'netflix.html';
    } else {
        // Display error message for invalid login
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});



