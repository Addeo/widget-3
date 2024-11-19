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

// fetch('https://api.leads.convolo.ai/api/v1/support/check-ip/my')
//     .then(function(response) {
//         response.json().then(responseParse => {
//             let countryCode =  responseParse?.ip?.country
//             if (countryCode.toLowerCase() === 'us') {
//                 !function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("5NRP9HG9XQO1");}();
//             }
//         }).catch((err) => {
//             console.log(err)
//         })
//     })

fetch('https://api.leads.convolo.ai/api/v1/support/check-ip/my')
    .then(function(response) {
    response.json().then(responseParse => {
        let countryCode = responseParse.ip.country

        // SET GLOBAL COUNTRY CODE
        window.countryCodeGlobal = countryCode.toLowerCase();

        // FORCE GEO PARAM
        if (geo_forse_country) {
            countryCode = geo_forse_country
            window.countryCodeGlobal = countryCode;
        }

        // CHECK FROM COUNTRY FIELD
        if (form_field_country_code) {
            form_field_country_code.value = countryCode;
        }

        // CHECK PHONE INPUT
        if (inputPhone) {
            inputPhone.intlTelInput({
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@21.0.8/build/js/utils.js" ,
                strictMode: true,
                autoPlaceholder: 'aggressive',
                initialCountry: countryCode.toLowerCase()});

            inputPhone.on("input", function () {
                inputPhone.intlTelInput("setNumber", inputPhone.val())
                window.isValidNumber = inputPhone.intlTelInput("isValidNumber")
            });
        }

        // NEED REWRITE WITH ONE INPUT ID
        if (inputPhone2) {
            inputPhone2.intlTelInput({
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@21.0.8/build/js/utils.js" ,
                strictMode: true,
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
