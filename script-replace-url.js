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

// <script>
//     $(document).ready(function() {
//     $('select').wrap('<div class="select_wrapper w-input"></div>')
//     $('select').parent().prepend('<span>'+ $(this).find(':selected').text() +'</span>');
//     $('select').parent().children('span').width($('select').width());
//     $('select').css('display','none');
//     $('select').parent().append('<ul class="select_inner"></ul>');
//     $('select').children().each(function(){
//     var opttext = $(this).text();
//     var optval = $(this).val();
//     $('select').parent().children('.select_inner').append('<li id="' + optval +'">' + opttext +'</li>');
// });
//
//     $('select').parent().find('li').on('click',function (){
//     var cur = $(this).attr('id');
//     $('select').parent().children('span').text($(this).text());
//     $('select').children().removeAttr('selected');
//     $('select').children('[value="'+cur+'"]').attr('selected','selected');
//     console.log($('select').children('[value="'+cur+'"]').text());
// });
//     $('select').parent().on('click',function (){
//     $(this).find('ul').slideToggle('fast');
// });
// });
// </script>
