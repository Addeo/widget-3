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
        // console.log('geo_forse_country', geo_forse_country)
        if (geo_forse_country) {
            countryCode = geo_forse_country
            window.countryCodeGlobal = countryCode;
        }

        // CHECK FROM COUNTRY FIELD
        if (form_field_country_code) {
            form_field_country_code.value = countryCode;
        }

        // CHECK PHONE INPUT
        if (inputPhone && inputPhone.intlTelInput) {
            inputPhone.intlTelInput({
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js" ,
                initialCountry: countryCode.toLowerCase()});

            inputPhone.on("input", function () {
                inputPhone.intlTelInput("setNumber", inputPhone.val())
                window.isValidNumber = inputPhone.intlTelInput("isValidNumber")
            });
        }

        if (inputPhone2 && inputPhone2.intlTelInput) {

            inputPhone2.intlTelInput({
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js" ,
                initialCountry: countryCode.toLowerCase()});
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
        if (uaeWidgetsCountryArray.includes(countryCode.toUpperCase())) {
            console.log('new widget for AE')
            if (countryCode.toUpperCase() === 'AE') {
                (function f() { var widget_key = 'fcd285e2a0637636f63075cbd6207849'; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.convolo.ai/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
            } else {
                (function f() { var widget_key = '2484172bec46f0d949814f774e384e09'; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.convolo.ai/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
            }
        } else {
            (function f() { var widget_key = defaultWidgetKey; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.leadconnect.cc/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
        }
        if (scandinaviaWidgetsCountryArray.includes(countryCode.toUpperCase())) {
            if (elemScandinavia) {
                elemScandinavia.style.display = 'flex'
            }
            if (elemScandinaviaLogo) {
                elemScandinaviaLogo.style.display = 'flex'
            }
        } else if (euWidgetsCountryArray.includes(countryCode.toUpperCase())) {
            if (elemEu) {
                elemEu.style.display = 'flex'
            }
            if (elemEuLogo) {
                elemEuLogo.style.display = 'flex'
            }
        } else if (uaeWidgetsCountryArray.includes(countryCode.toUpperCase())) {
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

        // HIDE-OPEN BY CLASS
        const hideMiddleEast = Array.from(document.getElementsByClassName("hide_for_middle_east"));
        hideMiddleEast.forEach((element) => {
            if (['EG', 'PK', 'BD', 'IN', 'KW', 'BH', 'AE', 'SA', 'QA', 'OM', 'YE'].includes(countryCode.toUpperCase())) {
                element.style.display = 'none'
            }
        })
    });
})
    // WIDGET OPEN LOGIC
    .catch(function(error) {
        (function f() { var widget_key = defaultWidgetKey; window.leadCM = { widget_key: widget_key, }; var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = 'https://app.leadconnect.cc/js/icallback.js?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
});


function getCookie(name) {
    var dc = document.cookie;
    console.log('dc', dc)
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

var myCookie = getCookie("gtm_internal_user");
var params3 = (new URL(document.location)).searchParams;
var internalUser = params3.get("internal_user");

if (myCookie && internalUser && internalUser == 'true') {
    } else {
    var em = document.createElement('script');
    em.type = 'text/javascript';
    em.async = true;
    em.defer = true;
    em.src = '//js.hs-scripts.com/7840017.js'
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(em, s);
}
