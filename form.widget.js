console.log('hi')

const form = document.querySelector("#signup-form");
const email = document.querySelector("#email-2");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#confirm_password");
const phone = document.querySelector("#phone_number-2");
const promoCode = document.querySelector("#promo_code-2");
const agree = document.querySelector("#terms");
const errorMes = document.querySelector(".error-mes");
const errorTextMes = document.querySelector("#text-error-message");

if (agree) {
    agree.addEventListener('click', () => {
        if (agree.checked) {
            showSuccess(agree);
            if (errorMes) {
                errorMes.style.display = "none";
            }
        } else {
            showError(agree, `Please agree to the Convolo Terms of Service`)
        }
    })
}

const showError = (input, msg) => {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    input.classList.add("error");
    if (formControl) {
        formControl.classList.add("error");

        const small = formControl.parentElement.querySelector(".extra");
        if (small) {
            small.style.display = "block";
            small.textContent = msg;
        } else {
            const smallParent = formControl.parentElement;
            const smallPhone = smallParent.parentElement.querySelector(".extra");
            if (smallPhone) {
                smallPhone.style.display = "block";
                smallPhone.textContent = 'Phone not valid';
            }
        }
        const checkbox = formControl.querySelector(".w-checkbox-input");
        if (checkbox) {
            checkbox.classList.add("error");
        }
    }
};

function showSuccess(input) {
    const formControl = input.parentElement;
    if (formControl) {
        input.classList.remove('error');
        formControl.classList.remove('error');
        const small = formControl.parentElement.querySelector(".extra");
        if (small) {
            small.style.display = "none";
        } else {
            const smallParent = formControl.parentElement;
            const smallPhone = smallParent.parentElement.querySelector(".extra");
            if (smallPhone) {
                smallPhone.style.display = "none";
            }
        }
    }
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
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
            showSuccess(input);
        }
    });
    return check
}

const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input1, "Passwords must match");
        return false
    } else {
        showSuccess(input1);
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
        showSuccess(input);
    } else {
        showError(input, `Please agree to the Convolo Terms of Service`)
    }
    return input.checked
}

const checkPhone = (input) => {
    if (window.isValidNumber) {
        showSuccess(input);
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
    e.stopPropagation();
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
    const promo = FD.get("promo_code");
    if (!promo) FD.set("promo_code", '')
    FD.delete("terms")
    FD.forEach((value, key) => (formDataObj[key] = value));
    const sendObject = `${JSON.stringify(formDataObj).substr(0, JSON.stringify(formDataObj).length - 1)}` + `, "terms": ${agree.checked} }`

    XHR.onload = () => {
        if (XHR.readyState === 4) {
            if (XHR.status === 200 || XHR.status === 201) {
                window.location.href = 'https://convolo.ai/success'
            } else {
                errorMes.style.display = "flex";
                if (XHR.response) {
                    const responseJson = JSON.parse(XHR.response)
                    if (errorTextMes) {
                        errorTextMes.textContent = responseJson.message
                    } else {
                        console.log('no errorTextMes')
                    }
                } else {
                    console.log('no XHR.response')
                }
            }
        }
    };

    XHR.open("POST", "https://api.leads.convolo.ai/api/v2/auth/register");
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.setRequestHeader("Access-Control-Allow-Origin", "*");
    XHR.send(sendObject);
}
