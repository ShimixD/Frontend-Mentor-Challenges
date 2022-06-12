const form = document.querySelector('.container-form');
const inputEmail = document.querySelector('.container-email');
const errorEmail = document.querySelector('.container-error');

form.addEventListener('submit', (e) => {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(inputEmail.value) === true) {
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = 'url("")';
        errorEmail.innerHTML = '';
    } else {
        e.preventDefault();
        
        inputEmail.style.border = '1px solid red';
        inputEmail.style.backgroundImage = 'url("images/icon-error.svg")';
        errorEmail.innerHTML = 'Please provide a valid email';
    }
});