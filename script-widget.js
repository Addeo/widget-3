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

const form_field_country_code = document.getElementById('country_code');

fetch('https://api.leads.convolo.ai/api/v1/support/check-ip/my')
    .then(function(response) {
    response.json().then(responseParse => {
        let countryCode = responseParse.ip.country

        // FORCE GEO PARAM
        if (window.geo_forse_country) {
            countryCode = window.geo_forse_country
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
                input.intlTelInput("setNumber", input.val())
                window.isValidNumber = input.intlTelInput("isValidNumber")
            });
        }

        // WIDGET OPEN LOGIC
        if (uaeWidgetsCountryArray.includes(countryCode)) {
            (function f() { var widget_key = uaeWidgetKey; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.convolo.ai/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
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
