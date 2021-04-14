import React from "react"

function CurrentWeather({currentWeather, currentDay}){
    return (
        <div className="currentWeatherContainer">
            <h1> {currentDay} </h1>

            <ul className="currentWeather">
                <li> Temperature: {currentWeather.temp.day} F  </li>
                <li> Humidity: {currentWeather.humidity} %  </li>
                <li> Precipitation {currentWeather.pop * 100} %</li>
                <li> Wind: {currentWeather.wind_speed} mph </li>
            </ul>
        </div>
    )
}

export default CurrentWeather;
