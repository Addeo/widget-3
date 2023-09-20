/**
 * http://stackoverflow.com/a/10997390/11236
 */
function updateURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (var i=0; i<tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}
let newUrl = window.location.href

if (window.localStorage.getItem("utm_source")) {
    newUrl = updateURLParameter( newUrl, 'utm_source', window.localStorage.getItem("utm_source"));
}
if (window.localStorage.getItem("utm_campaign")) {
    newUrl = updateURLParameter( newUrl, 'utm_campaign', window.localStorage.getItem("utm_campaign"));
}
if (window.localStorage.getItem("utm_content")) {
    newUrl = updateURLParameter( newUrl, 'utm_content', window.localStorage.getItem("utm_content"));
}
if (window.localStorage.getItem("utm_term")) {
    newUrl = updateURLParameter( newUrl, 'utm_term', window.localStorage.getItem("utm_term"));
}
if (window.localStorage.getItem("utm_medium")) {
    newUrl = updateURLParameter( newUrl, 'utm_medium', window.localStorage.getItem("utm_medium"));
}

if (newUrl !== window.location.href ) {
    window.history.replaceState('', '', newUrl)
}


