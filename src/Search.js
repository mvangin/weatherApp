import React from "react"
import "./Search.css"
 
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            city: "",
            zipCode: "Enter Zip Code (United States)",
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.city},us&units=imperial&APPID=e1b3deaa440b2455c127c030779cf400`)
            .then(response => {
                console.log(response)
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
                    zipCode: `Current Weather in ${jsonData.name}`,
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
                    zipCode: "City Not Found",
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
                        {this.state.zipCode}
                    </div>

                    <div id="weatherIcon">
                        <img src={this.state.imgUrl} alt="weather"/>
                        <p> {this.state.conditions} </p>
                    </div>

                    <ul>
                        <li> Temperature: {this.state.temperature} </li>
                        <li> Humidity: {this.state.humidity}  </li>
                        <li> Feels Like: {this.state.feelsLike} </li>
                    </ul>

                </div>

                <div id="searchBox">
                    <input type="text" name="city" placeholder="Zip Code" value={this.value} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleClick}> Search Weather</button>
                </div>

            </div>
        )
    }
}


export default Search
