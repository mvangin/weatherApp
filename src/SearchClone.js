import React, { useState } from "react"
import "./Search.css"

function Weather() {

    const [dailyWeather, setDailyWeather] = useState(null);
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("Enter Zip Code (United States)");
    const [tennisFlags, setTennisFlags] = useState([]);


    function handleClick() {
        console.log(city)
        //fetch(`https://api.openweathermap.org/data/2.5/forecast/hourly?zip=${this.state.city},us&units=imperial&APPID=e1b3deaa440b2455c127c030779cf400`)
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},us&appid=f49df63cb1430f4bea6d5db1edba818e`)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw Error(response.statusText)
                } else {
                    return response.json()
                }
            })
            .then(jsonData => {
                //between hour after sunrise and two hours before sunset
                //wind below 10mph
                //feels like 60-80deg;
                // hourly.pop
                setCity(jsonData.name)
                console.log(jsonData)
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${jsonData.lat}&lon=${jsonData.lon}&units=imperial&appid=f49df63cb1430f4bea6d5db1edba818e`)
                    //fetch(`https://api.openweathermap.org/data/2.5/onecall?,us&&appid=f49df63cb1430f4bea6d5db1edba818e`)
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
                        setDailyWeather(jsonData.daily);

                        console.log(jsonData.daily)
                        //let icon = jsonData.weather[0].icon
                        //let imgUrlCurrent = `https://openweathermap.org/img/wn/${icon}@2x.png`



                    })
            })
            .catch(error => {
                console.log(error)

            })
    }

   

    let sevenDayForecast = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var d = new Date();
    let currentDay = d.getDay();

    function handleSpeed(speed) {
       if (speed > 10){
         return "Windy" 
       } 
    }

    function handleTemp(temp) {
        if (temp < 60) {
            return "Cold"
        } else if (temp > 80){
            return "Hot"
        } else {
            return null
        }
     }

     function handleRain(rain) {
        if (rain > 50){
            return "Rain" 
          }    
        }  

     function handleHumidity(humidity) {
         console.log(humidity)
         if (humidity > 70) {
             return "humid"
         } else {
             return null
         }
     }

    return (
        <div id="appContainer" >

            <div id="weatherData">

                <div id="cityName">
                    {city}
                </div>

                <div id="weatherIcon">

                    Tennis weather ? YES!
                    </div>
         
                    {dailyWeather && dailyWeather.map(((day, index) => 
                    
                    <div key={day.dt}>
                         
                            {handleSpeed(day.wind_speed)}
                            {handleTemp(day.temp.day)}
                            {handleRain(day.pop*100)}
                            {handleHumidity(day.humidity)} 
                    </div>
                        ))
                    }

                <ul>

                    <li> Temperature:  </li>
                    <li> Humidity:   </li>
                    <li> Feels Like:  </li>
                    <li> Wind:  </li>
                </ul>



            </div>

            <div id="searchBox">
                <input type="text" name="zipCode" placeholder="Zip Code" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                <button type="submit" onClick={handleClick}> Search Weather</button>
            </div>

        </div>
    )
}




export default Weather;
