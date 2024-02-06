let password = document.getElementById('password');

function revealPassword() {
    password.type = 'text';
}

function hidePassword() {
    password.type = 'password';
}

password.addEventListener('mouseenter', revealPassword);
password.addEventListener('mouseleave', hidePassword);