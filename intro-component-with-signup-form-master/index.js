const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const emailAddress = document.getElementById('emailInput');
const passwordText = document.getElementById('passInput');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailAddressError = document.getElementById('emailError');
const passwordTextError = document.getElementById('passError');

const button = document.getElementById('submit');

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError);
    validateEmpty(passwordText.value, passwordText, passwordTextError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) === true) {
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'Looks like this is not an email');
    }
}
function validateEmpty(valueInput, divInput, divError, nameInput) {
    if(valueInput.length === 0) {
        showError(divInput, divError, nameInput);
    } else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error) {
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt=""><p class="error">${error}</p>`
}
function hideError(divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}