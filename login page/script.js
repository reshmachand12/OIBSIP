document.addEventListener('DOMContentLoaded', () => {
    const showRegisterLink = document.getElementById('showRegisterLink');
    const showLoginLink = document.getElementById('showLoginLink');
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const welcomeContainer = document.getElementById('welcomeContainer');
    const loginSuccessMessage = document.getElementById('loginSuccessMessage');
    const registerSuccessMessage = document.getElementById('registerSuccessMessage');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutButton = document.getElementById('logoutButton');

    // Show register form and hide login form
    showRegisterLink.addEventListener('click', () => {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
        resetMessages();
    });

    // Show login form and hide register form
    showLoginLink.addEventListener('click', () => {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        resetMessages();
    });

    // Login form submission
    loginForm.addEventListener('submit', loginUser);

    function loginUser(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform login logic (e.g., validation, authentication)
        // For demonstration purposes, assume the login is successful
        loginSuccessMessage.style.display = 'block';
        setTimeout(() => {
            loginSuccessMessage.style.display = 'none';
            loginContainer.style.display = 'none';
            welcomeContainer.style.display = 'block';
        }, 3000);
    }

    // Register form submission
    registerForm.addEventListener('submit', registerUser);

    function registerUser(event) {
        event.preventDefault();
        const regUsername = document.getElementById('regUsername').value;
        const regEmail = document.getElementById('regEmail').value;
        const regPassword = document.getElementById('regPassword').value;

        // Perform registration logic (e.g., store user data)
        // For demonstration purposes, assume registration is successful
        registerSuccessMessage.style.display = 'block';
        setTimeout(() => {
            registerSuccessMessage.style.display = 'none';
            registerContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        }, 3000);
    }

    // Logout functionality
    logoutButton.addEventListener('click', logout);

    function logout() {
        // Clear any session or local storage
        // Optionally, redirect to a login page (e.g., index.html)
        window.location.href = 'index.html';
    }

    // Helper function to reset error/success messages
    function resetMessages() {
        loginSuccessMessage.style.display = 'none';
        registerSuccessMessage.style.display = 'none';
    }
});
