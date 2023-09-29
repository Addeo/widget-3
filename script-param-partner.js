let params2 = (new URL(document.location)).searchParams;

if (params2.get("_by")) {
    window.localStorage.setItem('paramPartner', params2.get("_by"))
}
const paramPartner = localStorage.getItem('paramPartner');
if (paramPartner) {
    let affiliateffiliateField = document.getElementById("Affiliate")
    if (affiliateffiliateField) {
        affiliateffiliateField.value = paramPartner;
    } else {
        // console.log('no Affiliate')
    }
} else {
    // console.log('no paramPartner')
}

var currentUrl = window.location.href;
let fieldUrl = document.getElementById("url")
if (fieldUrl) {
    fieldUrl.value = currentUrl;
} else {
    // console.log('no fieldUrl')
}
let titles = document.getElementsByTagName('title');
let fieldPageTitle = document.getElementById("page_title")
if (fieldPageTitle) {
    fieldPageTitle.value = titles[0].innerHTML;
} else {
    // console.log('no fieldPageTitle')
}
