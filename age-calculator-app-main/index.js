const resultYear = document.getElementById('years');
const resultMonth = document.getElementById('months');
const resultDay = document.getElementById('days');

const inputDay = document.querySelector('.input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');

const valueYear = document.getElementById('year-input');
const valueMonth = document.getElementById('month-input');
const valueDay = document.getElementById('day-input');

const buttonResult = document.getElementById('submit-btn');
const inputForm = document.querySelectorAll('.input-form');
const errorText = document.querySelectorAll('.error');

const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');

function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
}

buttonResult.addEventListener('click', (e) => {
    e.preventDefault();

    const year = parseInt(valueYear.value);
    const month = parseInt(valueMonth.value);
    const day = parseInt(valueDay.value);
    const getAge = new Date();
    const getYear = getAge.getFullYear();
    const getMonth = getAge.getMonth() + 1;
    const getDay = getAge.getDate();

    let diffYear = getYear - year;
    let diffMonth = getMonth - month;
    let diffDay = getDay - day;
    if (diffDay < 0) {
        diffMonth--;
        const daysInPrevMonth = new Date(getYear, getMonth - 1, 0).getDate();
        diffDay = daysInPrevMonth + diffDay;
    }
    if (diffMonth < 0) {
        diffYear--;
        diffMonth = 12 + diffMonth;
    }

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        inputForm.forEach((element) => {
            element.classList.add('input-error');
        });
        errorText.forEach((element) => {
            element.innerHTML = 'This field is required';
        });
    } else if (day > 31) {
        inputDay.classList.add('input-error');
        errorDay.innerHTML = 'Must be a valid day';
    } else if (month > 12) {
        inputMonth.classList.add('input-error');
        errorMonth.innerHTML = 'Must be a valid month';
    } else if (year > getYear) {
        inputYear.classList.add('input-error');
        errorYear.innerHTML = 'Must be in the past';
    } else if (!isValidDate(year, month, day)) {
        inputDay.classList.add('input-error');
        inputMonth.classList.add('input-error');
        inputYear.classList.add('input-error');
    
        errorDay.innerHTML = 'Invalid date';
    } else {
        inputDay.classList.remove('input-error');
        inputMonth.classList.remove('input-error');
        inputYear.classList.remove('input-error');

        inputForm.forEach((element) => {
            element.classList.remove('input-error');
        });
        errorText.forEach((element) => {
            element.innerHTML = '';
        });
        resultYear.innerHTML = diffYear;
        resultMonth.innerHTML = diffMonth;
        resultDay.innerHTML = diffDay;
    }
});