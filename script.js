// get html ids
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');
// listen
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, passwordRepeat]);
    checkLength(username, 2, 6);
    checkLength(password, 4, 8);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});
// show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show valid
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form success';
}
// checking email by regexp
function checkEmail(input) {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regx.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError( input, 'Почта введена неверно');
    }
}
// checking required fields as array
function checkRequired(checkInputsInArr) {
    checkInputsInArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${fieldName(input)} необходимо заполнить`);
        } else {
            showSuccess(input);
        }
    });
}
// input length for some fields
function checkLength(input, min, max) {
    function wordOv() {
        if (min === 6) {
            return ' символов';
        } else {
            return ' символа';
        }
    }
    if (input.value.length < min) {
        showError(
            input, `${fieldName(input)} должен быть ${min + wordOv()}`

        );
    } else if (input.value.length > max) {
        showError(
            input, `${fieldName(input)} не меньше ${max} символов`
        );
    } else {
        showSuccess(input);
    }
}
// password matching
function checkPasswordsMatch(password, passwordRepeat) {
    if (password.value !== passwordRepeat.value) {
        showError(passwordRepeat, 'Пароли не совпадают');
    }
}
// fields for translate
function fieldName(input) {
    if (input === email) {
        return 'Почта';
    } else if (input === password) {
        return 'Пароль';
    } else if (input === passwordRepeat) {
        return 'Пароль повторно';
    } else if (input === username) {
        return 'Пользователь';
    }
    return input;
}


