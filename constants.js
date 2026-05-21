const euArray = ['AL', 'AD', 'AM', 'AT', 'BE', 'BA', 'BG', 'BY', 'CH', 'CY', 'CZ', 'DE', 'EE', 'ES', 'FO', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NL', 'PL', 'PT', 'RO', 'RU', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA', 'UK', 'SE', 'NO', 'FI', 'DK']
const naArray = ['AI', 'AG', 'BS', 'BB', 'BM', 'BQ', 'VG', 'CA', 'KY', 'CU', 'DM', 'DO', 'GL', 'GD', 'GP', 'HT', 'JM', 'MQ', 'MX', 'PM', 'MS', 'KN', 'PR', 'SX', 'LC', 'VC', 'TT', 'TC', 'US', 'VI']
const meArray = [ 'AE', 'BH', 'CY', 'EG', 'IR', 'IQ', 'IL', 'JO', 'KW', 'LB', 'OM', 'QA', 'SA', 'SY', 'TR', 'YE', 'DZ', 'EH', 'LY', 'MA', 'SD', 'TN', 'SS', 'IN', 'PK', 'BD', 'AO', 'SH', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'DJ', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MZ', 'NA', 'NE', 'NG', 'ST', 'RE', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'TZ', 'TG', 'UG', 'ZM', 'ZW']
const asiaArray = [ 'KR', 'JP', 'CN', 'SG', 'ID', 'PH', 'AU', 'NZ']
const latamArray = [ 'BZ', 'CR', 'SV', 'GT', 'HN', 'NI', 'PA', 'AR', 'BO', 'BR', 'CL', 'CO', 'PY', 'PE', 'SR', 'UY', 'VE']

const northAmericaWidgetsCountryArray = ['AI', 'AG', 'BS', 'BB', 'BM', 'BQ', 'VG', 'CA', 'KY', 'CU', 'DM', 'DO', 'GL', 'GD', 'GP', 'HT', 'JM', 'MQ', 'MX', 'PM', 'MS', 'KN', 'PR', 'SX', 'LC', 'VC', 'TT', 'TC', 'US', 'VI', 'BZ', 'CR', 'SV', 'GT', 'HN', 'NI', 'PA', 'AR', 'BO', 'BR', 'CL', 'CO', 'PY', 'PE', 'SR', 'UY', 'VE']
const scandinaviaWidgetsCountryArray = ['SE', 'NO', 'FI', 'DK']
const euWidgetsCountryArray = ['AL', 'AD', 'AM', 'AT', 'BE', 'BA', 'BG', 'BY', 'CH', 'CY', 'CZ', 'DE', 'EE', 'ES', 'FO', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NL', 'PL', 'PT', 'RO', 'RU', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA', 'UK']
const meRegionalWidgetsCountryArray = ['BH', 'CY', 'EG', 'IR', 'IQ', 'IL', 'KW', 'LB', 'OM', 'QA', 'SY', 'TR', 'YE', 'DZ', 'EH', 'LY', 'MA', 'SD', 'TN', 'SS', 'IN', 'PK', 'BD', 'AO', 'SH', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'DJ', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MZ', 'NA', 'NE', 'NG', 'ST', 'RE', 'RW', 'SN', 'SC', 'SL', 'SO', 'ZA', 'TZ', 'TG', 'UG', 'ZM', 'ZW'];
const uaeWidgetsCountryArray = ['AE', 'SA', 'JO'].concat(meRegionalWidgetsCountryArray);

const widgetKeyAe = '5bf31d3c7c872ddded847f321a710e52';
const widgetKeySa = '8c58014641808fb3d8ac3b66b24c949b';
const widgetKeyJo = '375d380cd14cf33d33d9cd86dbaf3e44';
const widgetKeyMeRegional = '300e53bc5ff8f9130c33fdd7edf77d69';
const defaultWidgetKey = '7ec27fa6d3df639b2075532161c17917';

function getGeoWidgetConfig(countryCode) {
    const cc = (countryCode || '').toUpperCase();
    if (cc === 'AE') {
        return { widget_key: widgetKeyAe, variant: 'GEO AE (convolo)', scriptHost: 'app.convolo.ai' };
    }
    if (cc === 'SA') {
        return { widget_key: widgetKeySa, variant: 'GEO SA (convolo)', scriptHost: 'app.convolo.ai' };
    }
    if (cc === 'JO') {
        return { widget_key: widgetKeyJo, variant: 'GEO JO (convolo)', scriptHost: 'app.convolo.ai' };
    }
    if (meRegionalWidgetsCountryArray.includes(cc)) {
        return { widget_key: widgetKeyMeRegional, variant: 'GEO ME regional (convolo)', scriptHost: 'app.convolo.ai' };
    }
    return { widget_key: defaultWidgetKey, variant: 'default (leadconnect)', scriptHost: 'app.leadconnect.cc' };
}

function loadGeoWidget(countryCode, options) {
    const config = getGeoWidgetConfig(countryCode);
    const logPayload = {
        variant: config.variant,
        countryCode: (countryCode || '').toUpperCase(),
        widget_key: config.widget_key,
        scriptHost: config.scriptHost,
    };
    if (options && options.fallback) {
        logPayload.error = options.error;
        console.log('[brightcall widget] Loading widget (IP check failed, fallback)', logPayload);
    } else {
        console.log('[brightcall widget] Loading widget', logPayload);
    }
    (function f() {
        var widget_key = config.widget_key;
        window.leadCM = { widget_key: widget_key };
        var em = document.createElement('script');
        em.type = 'text/javascript';
        em.async = true;
        var scriptBase = config.scriptHost === 'app.convolo.ai'
            ? 'https://app.convolo.ai/js/icallback.js'
            : 'https://app.leadconnect.cc/js/icallback.js';
        em.src = scriptBase + '?v=' + Math.random() + '&key=' + widget_key + '&uri=' + encodeURIComponent(window.location.href);
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(em, s);
    })();
}

const EVENT_DEMO_FORM_SUBMIT_LEAD_PAGE_EU = 'DEMO_FORM_SUBMIT_EU';
const EVENT_DEMO_FORM_SUBMIT_LEAD_PAGE_NA = 'DEMO_FORM_SUBMIT_NA';
const EVENT_DEMO_FORM_SUBMIT_LEAD_PAGE_ME = 'DEMO_FORM_SUBMIT_ME';
const EVENT_DEMO_FORM_SUBMIT_LEAD_PAGE_ASIA = 'DEMO_FORM_SUBMIT_ASIA';
const EVENT_DEMO_FORM_SUBMIT_LEAD_PAGE_LATAM = 'DEMO_FORM_SUBMIT_LATAM';

