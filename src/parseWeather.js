import React from "react"

function parseWeather(speed, temp, rain, humidity) {
        let parsedWeather = [];

        if (speed > 10) {
            parsedWeather.push({ cond: "Windy", stat: speed })
        }

        if (temp < 60) {
            parsedWeather.push({ cond: "Cold", stat: temp })
        } else if (temp > 80) {
            parsedWeather.push({ cond: "Hot", stat: temp })
        }

        if (rain > 50) {
            parsedWeather.push({ cond: "Rain", stat: rain })
        }

        if (humidity > 70) {
            parsedWeather.push({ cond: "Humid", stat: humidity })
        }
        return {parsedWeather};
    }


export default parseWeather;