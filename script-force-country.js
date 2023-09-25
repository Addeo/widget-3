function getCookie(name) {
    const nameEquals = name + '=';
    const cookieArray = document.cookie.split(';');

    for (cookie of cookieArray) {
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.slice(1, cookie.length);
        }

        if (cookie.indexOf(nameEquals) == 0)
            return decodeURIComponent(
                cookie.slice(nameEquals.length, cookie.length),
            );
    }

    return null;
}


let geo_forse_country

let params = (new URL(document.location)).searchParams;
console.log('params', params)

if (params.get("_by")) {
    window.localStorage.setItem('paramPartner', params.get("_by"))
    window.localStorage.setItem('utm_source', 'Affiliate')
    window.localStorage.setItem('utm_campaign', params.get("_by"))
}

geo_forse_country = params.get("geo_forse_country");

if (geo_forse_country) {
    console.log('geo_forse_country', geo_forse_country)
}

let isMobileApp = params.get("mobile-app");

if (!isMobileApp) {
    console.log('create script hubstaff')
    (function f() {
        var em = document.createElement('script');
        em.type = 'text/javascript';
        em.async = true;
        em.defer = true;
        em.src = '//js.hs-scripts.com/7840017.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(em, s);
    })();
}

// utm params

let utm_source
let utm_campaign
let utm_content
let utm_term
let utm_medium

if (window.localStorage.getItem('utm_source')) {
    utm_source = window.localStorage.getItem('utm_source')
}

if (window.localStorage.getItem('utm_campaign')) {
    utm_campaign = window.localStorage.getItem('utm_campaign')
}

if (window.localStorage.getItem('utm_content')) {
    utm_content = window.localStorage.getItem('utm_content')
}

if (window.localStorage.getItem('utm_term')) {
    utm_term = window.localStorage.getItem('utm_term')
}

if (window.localStorage.getItem('utm_medium')) {
    utm_medium = window.localStorage.getItem('utm_medium')
}

// console.log('check utm params from local storage: ', utm_source, utm_campaign, utm_content, utm_term, utm_medium)

if (params.get("internal_user")) {
    utm_source = 'internal';
    utm_campaign = 'internal';
    utm_content = 'internal';
    utm_term = 'internal';
    utm_medium = 'internal';
}

const internalUserCookie = getCookie('gtm_internal_user');

if (internalUserCookie) {
    // console.log('✅ The cookie exists: ', internalUserCookie);
    utm_source = 'internal';
    utm_campaign = 'internal';
    utm_content = 'internal';
    utm_term = 'internal';
    utm_medium = 'internal';
} else {
    // console.log('⛔️ The cookie does not exist');
}

// console.log('check if params internal_user, then utm: ', utm_source, utm_campaign, utm_content, utm_term, utm_medium)


if (params.get("utm_source")) {
    utm_source = params.get("utm_source")
    window.localStorage.setItem('utm_source', utm_source)
}

if (params.get("utm_campaign")) {
    utm_campaign = params.get("utm_campaign")
    window.localStorage.setItem('utm_campaign', utm_campaign)
}

if (params.get("utm_content")) {
    utm_content = params.get("utm_content")
    window.localStorage.setItem('utm_content', utm_content)
}

if (params.get("utm_term")) {
    utm_term = params.get("utm_term")
    window.localStorage.setItem('utm_term', utm_term)
}

if (params.get("utm_medium")) {
    utm_medium = params.get("utm_medium")
    window.localStorage.setItem('utm_medium', utm_medium)
}

// console.log('check params-utm after url parse params: ', utm_source, utm_campaign, utm_content, utm_term, utm_medium)
// utm_medium=viral&utm_campaign=Powered%20By%20Link&utm_source=test
