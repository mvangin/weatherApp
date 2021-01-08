import React from "react"
import "./Search.css"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            city: "",
            displayCity: "Enter A City",
            temperature: "",
            humidity: "",
            conditions: "",
            feelsLike: "",
            imgUrl: "https://freesvg.org/img/sivvus_weather_symbols_3.png"
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&APPID=e1b3deaa440b2455c127c030779cf400`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                } else {
                    return response.json()
                }
            })
            .then(jsonData => {
                let mainData = jsonData.main
                console.log(jsonData)
                let icon = jsonData.weather[0].icon
                let imgUrlCurrent = `https://openweathermap.org/img/wn/${icon}@2x.png`

                this.setState({
                    displayCity: `Weather in ${jsonData.name} today: `,
                    temperature: `${mainData.temp}°F`,
                    feelsLike: `${mainData.feels_like}°F`,
                    humidity: ` ${mainData.humidity}%`,
                    conditions: jsonData.weather[0].description,
                    imgUrl: imgUrlCurrent
                })


            })
            .catch(error => {
                console.log(error)
                this.setState({
                    displayCity: "City Not Found",
                    temperature: "",
                    feelsLike: "",
                    humidity: "",
                    conditions: "",
                    imgUrl: ""
                })
            })
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div id="appContainer">

                <div id="weatherData">

                    <div id="cityName">
                        {this.state.displayCity}
                    </div>

                    <div id="weatherIcon">
                        <img src={this.state.imgUrl}/>
                        <p> {this.state.conditions} </p>
                    </div>

                    <ul>
                        <li> Temperature: {this.state.temperature} </li>
                        <li> Humidity: {this.state.humidity}  </li>
                        <li> Feels Like: {this.state.feelsLike} </li>
                    </ul>

                </div>

                <div id="searchBox">
                    <input type="text" name="city" placeholder="City Name" value={this.value} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleClick}> Search Weather</button>
                </div>

            </div>
        )
    }
}


export default Search