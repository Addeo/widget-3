console.log('hi')

const form = document.querySelector("#signup-form");
const email = document.querySelector("#email-2");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#confirm_password");
const phone = document.querySelector("#phone_number-2");
const promoCode = document.querySelector("#promo_code-2");
const agree = document.querySelector("#terms");
const errorMes = document.querySelector(".error-mes");

const showError = (input, msg) => {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    input.classList.add("error");
    if (formControl) {
        formControl.classList.add("error");
        const smallParent = formControl.parentElement
        const small = formControl.parentElement.querySelector(".extra");
        if (small) {
            small.style.display = "block";
            small.textContent = msg;
        }
        const checkbox = formControl.querySelector(".w-checkbox-input");
        if (checkbox) {
            checkbox.classList.add("error");
        }
    }
};

function showSucces(input) {
    const formControl = input.parentElement;
    if (formControl) {
        input.classList.remove('error');
        formControl.classList.remove('error');
        const small = formControl.parentElement.querySelector(".extra");
        if (small) {
            small.style.display = "none";
        }
    }
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input)
        return true
    } else {
        showError(input, 'Email is not invalid');
        return false
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    let check = true
    inputArr.forEach(function(input) {
        if (input.value && input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            check = false
        } else {
            showSucces(input);
        }
    });
    return check
}

const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input1, "Passwords must match");
        return false
    } else {
        showSucces(input1);
        return true
    }
};


const getFieldName = (input) => {
    const firstLetter = input.id.charAt(0).toUpperCase();
    return firstLetter + input.id.slice(1);
};


const checkLength = (input, min, max) => {
    if (input.value.length < min || input.value.length > max) {
        showError(
            input,
            `${getFieldName(
                input
            )} must be between ${min} and ${max} characters long`
        );
        return false
    } else {
        return true
    }
};

const checkAgree = (input) => {
    if (input.checked) {
        showSucces(input);
    } else {
        showError(input, `need agree`)
    }
    return input.checked
}

const checkPhone = (input) => {
    if (window.isValidNumber) {
        showSucces(input);
    } else {
        showError(input, `${getFieldName(input)} is not valid`)
    }
    return window.isValidNumber
}

const validateForm = () => {
    const validateResult = [
        checkRequired([email, password, passwordConfirmation]),
        checkLength(password, 8, 30),
        checkEmail(email),
        checkPasswordMatch(passwordConfirmation, password),
        checkPhone(phone),
        checkAgree(agree)
    ]
    return validateResult.every(v => v === true)
};


form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validateForm()) {
        sendData()
    } else {
        console.log('error')
    }
});


function sendData() {
    errorMes.style.display = "none";
    const XHR = new XMLHttpRequest();
    const FD = new FormData(form);
    const formDataObj = {};
    FD.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    const promo = FD.get("promo_code");
    if (!promo) FD.set("promo_code", ' ')
    if (agree.checked) {
        FD.set("terms", true)
    } else {
        FD.set("terms", false)
    }

    XHR.onreadystatechange = function() {
        if (XHR.readyState === 1 || XHR.readyState === 2 || XHR.readyState === 3) {}
        if (XHR.readyState === 4 && XHR.status === 200) {
            window.location.href = '/success'
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            errorMes.style.display = "flex";
        } else if (XHR.readyState === 4 && XHR.status !== 200 || XHR.readyState === 4 && XHR.status !== 404) {
            errorMes.style.display = "flex";
        }
    };

    XHR.open("POST", "https://api.leads.convolo.ai/api/v2/auth/register");
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.setRequestHeader("Access-Control-Allow-Origin", "*");
    XHR.send(formDataObj);
}
