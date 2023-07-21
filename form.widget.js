const form = document.querySelector("#signup-form");
const email = document.querySelector("#email-2");
const affiliate = document.querySelector("#Affiliate-2");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#confirm_password");
const phone = document.querySelector("#phone_number-2");
const promoCode = document.querySelector("#promo_code-2");
const agree = document.querySelector("#terms");
const errorMes = document.querySelector(".error-mes");
const errorTextMes = document.querySelector("#text-error-message");


const euArray = ['AL', 'AD', 'AM', 'AT', 'BE', 'BA', 'BG', 'BY', 'CH', 'CY', 'CZ', 'DE', 'EE', 'ES', 'FO', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NL', 'PL', 'PT', 'RO', 'RU', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA', 'UK', 'SE', 'NO', 'FI', 'DK']

const naArray = ['AI', 'AG', 'BS', 'BB', 'BM', 'BQ', 'VG', 'CA', 'KY', 'CU', 'DM', 'DO', 'GL', 'GD', 'GP', 'HT', 'JM', 'MQ', 'MX', 'PM', 'MS', 'KN', 'PR', 'SX', 'LC', 'VC', 'TT', 'TC', 'US', 'VI']

const meArray = [ 'AE', 'BH', 'CY', 'EG', 'IR', 'IQ', 'IL', 'JO', 'KW', 'LB', 'OM', 'QA', 'SA', 'SY', 'TR', 'YE', 'DZ', 'EH', 'LY', 'MA', 'SD', 'TN', 'SS', 'IN', 'PK', 'BD', 'AO', 'SH', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'DJ', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MZ', 'NA', 'NE', 'NG', 'ST', 'RE', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'TZ', 'TG', 'UG', 'ZM', 'ZW']

const asiaArray = [ 'KR', 'JP', 'CN', 'SG', 'ID', 'PH', 'AU', 'NZ']

const latamArray = [ 'BZ', 'CR', 'SV', 'GT', 'HN', 'NI', 'PA', 'AR', 'BO', 'BR', 'CL', 'CO', 'PY', 'PE', 'SR', 'UY', 'VE']


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
    if (window.selectedCountryCode) {
        // console.log('window.selectedCountryCode', window.selectedCountryCode)
        formDataObj['country_code'] = window.selectedCountryCode;
    } else {
        // console.log('no window.selectedCountryCode', window.selectedCountryCode)
    }

    const paramPartner = window.localStorage.getItem('paramPartner');
    if (paramPartner) {
        formDataObj['Affiliate'] = paramPartner;
    } else {
        console.log('no paramPartner')
    }

    FD.delete("terms")
    FD.forEach((value, key) => (formDataObj[key] = value));
    if (window.internationalNumber) {
        // console.log('window.internationalNumber', window.internationalNumber)
        formDataObj['phone_number'] = window.internationalNumber;
    } else {
        // console.log('no window.internationalNumber', window.internationalNumber)
    }
    const sendObject = `${JSON.stringify(formDataObj).substr(0, JSON.stringify(formDataObj).length - 1)}` + `, "terms": ${agree.checked} }`

    XHR.onload = () => {
        if (XHR.readyState === 4) {
            if (XHR.status === 200 || XHR.status === 201) {

                window.location.href = 'https://convolo.ai/success';
                // Google analytics
                if (window.dataLayer) {
                    let sendEvent = "SIGNUP_FORM_SUBMIT"
                    console.log('window.countryCodeGlobal', window.countryCodeGlobal)
                    if (window.countryCodeGlobal && euArray && euArray.includes(window.countryCodeGlobal)) {
                        sendEvent = "SIGNUP_FORM_SUBMIT_EU"
                    }
                    if (window.countryCodeGlobal && naArray && naArray.includes(window.countryCodeGlobal)) {
                        sendEvent = "SIGNUP_FORM_SUBMIT_NA"
                    }
                    if (window.countryCodeGlobal && meArray && meArray.includes(window.countryCodeGlobal)) {
                        sendEvent = "SIGNUP_FORM_SUBMIT_ME"
                    }
                    if (window.countryCodeGlobal && asiaArray && asiaArray.includes(window.countryCodeGlobal)) {
                        sendEvent = "SIGNUP_FORM_SUBMIT_ASIA"
                    }
                    if (window.countryCodeGlobal && latamArray && latamArray.includes(window.countryCodeGlobal)) {
                        sendEvent = "SIGNUP_FORM_SUBMIT_LATAM"
                    }
                    console.log('sendEvent', sendEvent)
                    window.dataLayer.push({event: sendEvent});
                }
                if ($FPROM) {
                    $FPROM.trackSignup(
                        { email: formDataObj.email},
                        function(){console.log('Callback received!')}
                        );
                } else {
                    console.log('no $FPROM')
                }

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
