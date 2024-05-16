const form = document.getElementById('myForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');
const lowercaseReq = document.getElementById('lowercase-req');
const uppercaseReq = document.getElementById('uppercase-req');
const numberReq = document.getElementById('number-req');
const specialReq = document.getElementById('special-req');
const submitBtn = document.getElementById('submit-btn');

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,'!#])[A-Za-z\d.,'!#]{8,}$/;

password.addEventListener('input', function () {
    const value = password.value;
    let requirementsMet = true;

    lowercaseReq.style.color = /(?=.*[a-z])/.test(value) ? 'green' : 'red';
    uppercaseReq.style.color = /(?=.*[A-Z])/.test(value) ? 'green' : 'red';
    numberReq.style.color = /(?=.*\d)/.test(value) ? 'green' : 'red';
    specialReq.style.color = /(?=.*[.,'!#])/.test(value) ? 'green' : 'red';

    requirementsMet =
        /(?=.*[a-z])/.test(value) &&
        /(?=.*[A-Z])/.test(value) &&
        /(?=.*\d)/.test(value) &&
        /(?=.*[.,'!#])/.test(value);

    submitBtn.disabled = !requirementsMet;

    message.textContent = ''; // Clear previous message
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!passwordPattern.test(password.value)) {
        message.textContent = 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one of the following characters: (.,\'!#)';
        return;
    }

    message.textContent = 'Form submitted successfully!';
});
