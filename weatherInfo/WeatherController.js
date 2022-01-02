const express = require('express')
const router = express.Router()

const VerifyToken = require('../auth/VerifyToken')
const request = require('request');
const API_KEY = '0443ecf68ae76b52150e0e0f03833139';

router.get('/forecast', VerifyToken, function (req, res) {

    const forecast = function (latitude, longitude) {

        const url = `http://api.openweathermap.org/data/2.5/weather?`
            +`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

        request({ url: url, json: true }, function (error, response) {
            if (error) {
                console.log('Unable to connect to Forecast API');
            }
            else {

                const current = 'It is currently ' + response.body.main.temp + ' degrees out.';
                const maxTemperature = 'The high today is ' + response.body.main.temp_max + ' with a low of ' + response.body.main.temp_min;
                const humid = 'Humidity today is ' + response.body.main.humidity;

                res.status(200).send({"current":current, "maxTemperature": maxTemperature, "humid":humid});
            }
        })
    }
    forecast(req.query.latitude, req.query.longitude);
})

module.exports = router;