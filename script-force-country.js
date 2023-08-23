let geo_forse_country
let params = (new URL(document.location)).searchParams;
// console.log('params', params)
geo_forse_country = params.get("geo_forse_country");

// console.log('geo_forse_country', geo_forse_country)
if (geo_forse_country) {
    console.log('geo_forse_country', geo_forse_country)
    // console.log('geo_forse_country',geo_forse_country)
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
