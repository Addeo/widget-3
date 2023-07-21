const elemNorthAmerica = document.getElementById("north-america");
const elemScandinavia = document.getElementById("scandinavia");
const elemEu = document.getElementById("eu");
const elemUae = document.getElementById("uae");

const elemNorthAmericaLogo = document.getElementById("NA");
const elemScandinaviaLogo = document.getElementById("SN");
const elemEuLogo = document.getElementById("EU");
const elemUaeLogo = document.getElementById("UAE");

const exUae = document.getElementById("ex-uae");

const inputPhone = $("#phone-2");

const inputPhone2 = $("#phone_number-2");

window.selectedCountryCode = '';
window.internationalNumber = '';

const form_field_country_code = document.getElementById('country_code');

fetch('https://api.leads.convolo.ai/api/v1/support/check-ip/my')
    .then(function(response) {
    response.json().then(responseParse => {
        let countryCode = responseParse.ip.country

        // SET GLOBAL COUNTRY CODE
        window.countryCodeGlobal = countryCode.toLowerCase();

        // FORCE GEO PARAM
        if (window.geo_forse_country) {
            countryCode = window.geo_forse_country
            window.countryCodeGlobal = countryCode;
        }

        // CHECK FROM COUNTRY FIELD
        if (form_field_country_code) {
            form_field_country_code.value = countryCode;
        }

        // CHECK PHONE INPUT
        if (inputPhone) {
            inputPhone.intlTelInput({
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js" ,
                initialCountry: countryCode.toLowerCase()});

            inputPhone.on("input", function () {
                inputPhone.intlTelInput("setNumber", inputPhone.val())
                window.isValidNumber = inputPhone.intlTelInput("isValidNumber")
            });
        }

        // NEED REWRITE WITH ONE INPUT ID
        if (inputPhone2) {
            inputPhone2.intlTelInput({
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js" ,
                initialCountry: responseParse.ip.country.toLowerCase()});
            inputPhone2.on("input", function () {
                inputPhone2.intlTelInput("setNumber", inputPhone2.val())
                window.isValidNumber = inputPhone2.intlTelInput("isValidNumber")
                window.internationalNumber = inputPhone2.intlTelInput("getNumber");
            });
            inputPhone2.on("countrychange", (event) => {
                const countryName = inputPhone2.intlTelInput("getSelectedCountryData");
                if (countryName && countryName.iso2) {
                    window.selectedCountryCode = countryName.iso2;
                    window.internationalNumber = inputPhone2.intlTelInput("getNumber");
                }
            });
        }

        // WIDGET OPEN LOGIC
        if (uaeWidgetsCountryArray.includes(countryCode)) {
            (function f() { var widget_key = uaeWidgetKeyLeadsPage; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.convolo.ai/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
        } else {
            (function f() { var widget_key = defaultWidgetKey; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.leadconnect.cc/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
        }
        if (scandinaviaWidgetsCountryArray.includes(countryCode)) {
            if (elemScandinavia) {
                elemScandinavia.style.display = 'flex'
            }
            if (elemScandinaviaLogo) {
                elemScandinaviaLogo.style.display = 'flex'
            }
        } else if (euWidgetsCountryArray.includes(countryCode)) {
            if (elemEu) {
                elemEu.style.display = 'flex'
            }
            if (elemEuLogo) {
                elemEuLogo.style.display = 'flex'
            }
        } else if (uaeWidgetsCountryArray.includes(countryCode)) {
            if (elemUae) {
                elemUae.style.display = 'flex'
            }
            if (elemUaeLogo) {
                elemUaeLogo.style.display = 'flex'
            }
            if (exUae) {
                exUae.style.display = 'flex'
            }
        } else {
            if (elemNorthAmerica) {
                elemNorthAmerica.style.display = 'flex'
            }
            if (elemNorthAmericaLogo) {
                elemNorthAmericaLogo.style.display = 'flex'
            }
        }
    });
})
    // WIDGET OPEN LOGIC
    .catch(function(error) {
        (function f() { var widget_key = defaultWidgetKey; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.leadconnect.cc/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
});
