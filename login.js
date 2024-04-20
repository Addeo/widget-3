const email = document.querySelector("#email-2");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn-submit");
const errorMes = document.querySelector(".error-mes");
const form = document.querySelector('#wf-form-Signin-Form');
const btnSubmit = document.querySelector('#btn-submit');

console.log('new logic add attribute button')

/** Need add to style in the future */
if (btnSubmit) {
    btnSubmit.style.textAlign = 'center';
    btnSubmit.setAttribute('type', 'button')
}

function checkPassword(input) {
    if ( password.value.length > 0 ) {
        showSuccess(input)
        return true
    } else {
        showError(input);
        return false
    }
}
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

function showSuccess(input) {
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
const showError = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    input.classList.add("error");
    if (formControl) {
        formControl.classList.add("error");

        const small = formControl.parentElement.querySelector(".extra");
        if (small) {
            small.style.display = "block";
            // small.textContent = msg;
        } else {
            const smallParent = formControl.parentElement;
            const smallPhone = smallParent.parentElement.querySelector(".extra");
            if (smallPhone) {
                smallPhone.style.display = "block";
                // smallPhone.textContent = 'Phone not valid';
            }
        }

    }
};

const validateForm = () => {
    const validateResult = [
        checkEmail(email),
        checkPassword(password)
    ]
    return validateResult.every(v => v === true)
};

form.addEventListener("submit",  (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(validateForm()) {
        sendData();
    }
})

if (btnSubmit) {
    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(validateForm()) {
            sendData();
        }
    })
}

function sendData() {
    errorMes.style.display = "none";
    const XHR = new XMLHttpRequest();

    const formDataObj = {
        password: password.value,
        email: email.value
    };

    if (btn) {
        btn.setAttribute('disabled', 'true')
        setTimeout(() => {
            btn.setAttribute('disabled', 'false')
        }, 4000)
    }

    const sendObject = JSON.stringify(formDataObj)
    XHR.onload = () => {
        if (XHR.readyState === 4) {
            if (XHR.status === 200 || XHR.status === 201) {
                var myobj = JSON.parse(XHR.response)
                if(myobj.token) {
                    setTimeout(()=> {
                        let force_login_param_to_new_app = ''
                        let force_login_param_to_local = ''
                        let loginParams = (new URL(document.location)).searchParams;
                        force_login_param_to_new_app = loginParams.get("force_login_param_to_new_app");
                        force_login_param_to_local = loginParams.get("force_login_param_to_local");
                        if (force_login_param_to_new_app) {
                            window.location.href = `https://new.app.convolo.ai/security/login?is_login=${myobj.token}&current_page=/pages/dashboard`
                        } else if (force_login_param_to_local) {
                            window.location.href = `http://localhost:3201/security/login?is_login=${myobj.token}&current_page=/pages/dashboard`
                        } else {
                            window.location.href = `https://app.convolo.ai/security/login?is_login=${myobj.token}&current_page=/pages/dashboard`
                        }
                    }, 500)
                }
            } else {
                errorMes.style.display = "flex";
                if (XHR.response) {
                    const responseJson = JSON.parse(XHR.response)
                    if (errorTextMes) {
                        errorTextMes.textContent = responseJson.message
                        console.error(errorTextMes);
                    }
                }
            }
        }
    };

    XHR.open("POST", "https://api.leads.convolo.ai/api/v1/auth/login");
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.setRequestHeader("Access-Control-Allow-Origin", "*");
    XHR.send(sendObject);
}

