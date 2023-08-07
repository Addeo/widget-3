let geo_forse_country
let params = (new URL(document.location)).searchParams;
console.log('params', params)
geo_forse_country = params.get("geo_forse_country");

// console.log('geo_forse_country', geo_forse_country)
if (geo_forse_country) {
    console.log('geo_forse_country', geo_forse_country)
    // console.log('geo_forse_country',geo_forse_country)
}
