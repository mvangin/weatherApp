import React, { useEffect, useState } from "react"
import "./Homepage.css"
import DailyWeather from "./DailyWeather.js"
import WeekDays from "./WeekDays"
import CurrentWeather from "./CurrentWeather"
import Search from "./Search"
import parseWeather from "./parseWeather"

function Homepage() {

    const [dailyWeather, setDailyWeather] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null)
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("Search Tennis Weather by Zip Code");
    const [error, setError] = useState(null);
    const [tennisTags, setTennisTags] = useState([]);
    const [weekDays, setWeekDays] = useState([]);


    useEffect(() => {
        dailyWeather && dailyWeather.forEach(((day) => {
            const { parsedWeather } = parseWeather(day.wind_speed, day.temp.day, Math.round(day.pop * 100), day.humidity)
            setTennisTags(prev => [...prev, parsedWeather])
        }))

        function weatherWeekCalc(todayIndex) {
            const sevenDayForecast= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            let index = todayIndex + 1;
            let weatherWeek = ["Today"];
            for (let i = 0; i < 6; i++) {
                weatherWeek.push(sevenDayForecast[index])
                if (index === sevenDayForecast.length - 1) {
                    index = -1;
                }
                index += 1;
            }
            return weatherWeek;
        }
        
        var currentDate = new Date();
        let currentDay = currentDate.getDay();
        let weatherWeek = weatherWeekCalc(currentDay)
        setWeekDays(weatherWeek)

    }, [dailyWeather])


    function handleClick(zipcode) {
        console.log(city)
        setTennisTags([]);
        fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},us&appid=f49df63cb1430f4bea6d5db1edba818e`)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw Error(response.statusText)
                } else {
                    return response.json()
                }
            })
            .then(jsonData => {
                setCity(jsonData.name)
                setError(null)
                console.log(jsonData)
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${jsonData.lat}&lon=${jsonData.lon}&units=imperial&appid=f49df63cb1430f4bea6d5db1edba818e`)
                    .then(response => {
                        console.log(response)
                        if (!response.ok) {
                            throw Error(response.statusText)
                        } else {
                            return response.json()
                        }
                    })
                    .then(jsonData => {
                        console.log(jsonData)
                        setDailyWeather(jsonData.daily.slice(0, 7));
                        setCurrentWeather(jsonData.current)
                        console.log(jsonData.daily)
                    })
            })
            .catch(error => {
                setError("An error occured, please try again")
                console.log(error)
            })
    }


    console.log(weekDays)
    console.log(tennisTags)

    return (
        <div id="appContainer" >

            <div id="weatherData">
                <div id="cityName">
                    {error ? error : city}
                </div>
                
                <Search handleClick={handleClick} zipcode={zipcode} setZipcode={setZipcode} />

                {currentWeather && <CurrentWeather currentWeather={currentWeather} />
                }

                {dailyWeather && <div className="weatherContainer">
                    <WeekDays weekDays={weekDays} />
                    <DailyWeather tennisTags={tennisTags} />
                </div>
                }
            </div>



        </div>
    )
}




export default Homepage;
