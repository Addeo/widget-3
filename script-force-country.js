let geo_forse_country
let is_mobile_app
let params = (new URL(document.location)).searchParams;
// console.log('params', params)
geo_forse_country = params.get("geo_forse_country");
is_mobile_app = params.get("mobile-app");

// console.log('geo_forse_country', geo_forse_country)
if (geo_forse_country) {
    console.log('geo_forse_country', geo_forse_country)
    // console.log('geo_forse_country',geo_forse_country)
}

if (is_mobile_app) {
    console.log('is_mobile_app', is_mobile_app)
    // console.log('geo_forse_country',geo_forse_country)
}
