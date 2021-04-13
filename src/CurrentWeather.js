import React from "react"

function CurrentWeather({currentWeather}){
    return (
        <div className="currentWeatherContainer">
            <h1> Current Weather </h1>

            <ul className="currentWeather">
                <li> Temperature: {currentWeather.temp} F  </li>
                <li> Humidity: {currentWeather.humidity} %  </li>
                <li> Feels Like: {currentWeather.feels_like} F</li>
                <li> Wind: {currentWeather.wind_speed} mph </li>
            </ul>
        </div>
    )
}

export default CurrentWeather;
