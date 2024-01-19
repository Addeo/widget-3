console.log('redirect')
console.log('redirect2')
fetch('https://api.leads.convolo.ai/api/v1/support/check-ip/my')
    .then(function(response) {
        response.json().then(responseParse => {
            let countryCode = responseParse.ip.country
            console.log('countryCode', countryCode.toUpperCase())
            if (['EG', 'PK', 'BD', 'IN', 'KW', 'BH', 'AE', 'SA', 'QA', 'OM', 'YE', 'RU'].includes(countryCode.toUpperCase())) {
                // window.location.href = "https://convolo.ai/";
                window.location.replace("https://convolo.ai/");
            }

        });
    })

