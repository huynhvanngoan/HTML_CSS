let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}

function checkInvalidData(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if (!input.value) {
            isEmptyError = true;
            showError(input, 'This field cannot be empty');
        } else {
            showSuccess(input);
        }
    });

    return isEmptyError;
}

function checkEmail(input) {
    const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    input.value = input.value.trim();
    let isEmail = !regexEmail.test(input.value);

    if (!isEmail) {
        showSuccess(input);
    } else {
        showError(input, 'Invalid email');
    }

    return isEmail;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min || input.value.length > max) {
        showError(input, `Must be between ${min} and ${max} characters`);
        return true;
    }

    showSuccess(input);
    return false;
}

function checkMatchPasswordError(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match');
        return true;
    }
    showSuccess(confirmPasswordInput);
    return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isEmptyError = checkInvalidData([username, email, password, confirmPassword]);
    let isEmailError = checkEmail(email);
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 6, 12);
    let isCheckMatchPasswordError = checkMatchPasswordError(password, confirmPassword);

    if (!isEmptyError && !isEmailError && !isUsernameLengthError && !isPasswordLengthError && !isCheckMatchPasswordError) {
        // Submit the form if no errors
        console.log('Form submitted successfully!');
        // You can perform the form submission logic here
    }
});
