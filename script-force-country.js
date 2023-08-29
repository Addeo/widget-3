let geo_forse_country

let params = (new URL(document.location)).searchParams;

geo_forse_country = params.get("geo_forse_country");

if (geo_forse_country) {
    console.log('geo_forse_country', geo_forse_country)
}

let isMobileApp = params.get("mobile-app");

if (!isMobileApp) {
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

console.log('check utm params from local storage: ', utm_source, utm_campaign, utm_content, utm_term, utm_medium)

if (params.get("internal_user")) {
    utm_source = 'interna';
    utm_campaign = 'interna';
    utm_content = 'interna';
    utm_term = 'interna';
    utm_medium = 'interna';
}

console.log('check if params internal_user, then utm: ', utm_source, utm_campaign, utm_content, utm_term, utm_medium)


if (params.get("utm_source")) {
    utm_source = window.localStorage.getItem('utm_source')
}

if (params.get("utm_campaign")) {
    utm_campaign = window.localStorage.getItem('utm_campaign')
}

if (params.get("utm_content")) {
    utm_content = window.localStorage.getItem('utm_content')
}

if (params.get("utm_term")) {
    utm_term = window.localStorage.getItem('utm_term')
}

if (params.get("utm_medium")) {
    utm_medium = window.localStorage.getItem('utm_medium')
}

console.log('check params-utm from url: ', utm_source, utm_campaign, utm_content, utm_term, utm_medium)
