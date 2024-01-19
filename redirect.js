console.log('redirect')

fetch('https://api.leads.convolo.ai/api/v1/support/check-ip/my')
    .then(function(response) {
        response.json().then(responseParse => {
            let countryCode = responseParse.ip.country

            // SET GLOBAL COUNTRY CODE
            window.countryCodeGlobal = countryCode.toLowerCase();

            // FORCE GEO PARAM
            // console.log('geo_forse_country', geo_forse_country)
            if (geo_forse_country) {
                countryCode = geo_forse_country
                window.countryCodeGlobal = countryCode;
            }


            if (['EG', 'PK', 'BD', 'IN', 'KW', 'BH', 'AE', 'SA', 'QA', 'OM', 'YE', 'RU'].includes(countryCode.toUpperCase())) {
                window.location.href = "https://convolo.ai/";
            }

        });
    })

