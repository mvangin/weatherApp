import React, { useEffect, useState } from "react"
import "./Homepage.css"
import WeekDays from "./WeekDays"
import CurrentWeather from "./CurrentWeather"
import Search from "./Search"
import parseWeather from "./parseWeather"
import Day from "./Day"
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header"

function Homepage() {

    const [dailyWeather, setDailyWeather] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null)
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("Search Tennis Weather");
    const [error, setError] = useState(null);
    const [tennisTags, setTennisTags] = useState([]);
    const [weekDays, setWeekDays] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);
    const [currentDay, setCurrentDay] = useState("Today")


    useEffect(() => {
        dailyWeather && dailyWeather.forEach(((day) => {
            const { parsedWeather } = parseWeather(day.wind_speed, day.temp.day, Math.round(day.pop * 100), day.humidity)
            setTennisTags(prev => [...prev, parsedWeather])
        }))

        function weatherWeekCalc(todayIndex) {
            const sevenDayForecast = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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
        setCurrentWeather(null);
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
                setCity(`${jsonData.name}, USA`)
                setFirstLoad(false);
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
                        setCurrentWeather(jsonData.daily[0])
                    })
            })
            .catch(error => {
                setError("An error occured")
                console.log(error)
            })
    }


    console.log(weekDays)
    console.log(tennisTags)

    return (
        <div className={`appContainer ${firstLoad ? "firstLoad" : null}`} >

            <div className="weatherData">
                <Header handleClick={handleClick}
                    zipcode={zipcode}
                    setZipcode={setZipcode}
                    error={error}
                    city={city}
                    firstLoad={firstLoad}
                />

                {
                    currentWeather &&
                    <CurrentWeather
                        currentDay={currentDay}
                        currentWeather={currentWeather}
                    />
                }


                {dailyWeather &&
                    <div className="weatherContainer">
                        <div className="tagContainer">
                            {tennisTags.map((tags, index) => (
                                <Day setCurrentWeather={setCurrentWeather}
                                    key={uuidv4()}
                                    dayWeather={dailyWeather[index]}
                                    setCurrentDay={setCurrentDay}
                                    day={weekDays[index]}
                                    tags={tags}
                                    currentDay={currentDay}
                                />
                            ))
                            }
                        </div>

                    </div>
                }
            </div>



        </div>
    )
}




export default Homepage;
