const rp = require('request-promise')

module.exports =   async function (city='') {
    if (city==='') {
        throw new Error("Поле город должно быть заполненно")
    }
     const KEY = '8ae9257f712e45763393f859141b2d30'
     const uri = 'http://api.openweathermap.org/data/2.5/weather'
     const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    }
    try {
        const response = await rp(options)
        const result = (response.main.temp)
        return {
            weather: `${response.name}: ${result.toFixed(0)}`,
            error: null
        }

    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    }

}