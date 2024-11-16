const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

loginBtn.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
});
var username;
function login(event) {
    event.preventDefault();
     username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = '../HTML/Cook3.html';
    } else {
        alert('Invalid username or password');
    }
}

function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        const userData = {
            username: username,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(userData));

        alert('Sign Up successful! You can now log in.');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    } else {
        alert('Please fill all fields');
    }
}


function showForgotPassword() {
    const username = prompt("Please enter your username:");
    if (username) {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username) {
            alert(`A password reset link has been sent to your registered email for username: ${username}.`);
        } else {
            alert('Username not found.');
        }
    }
}

