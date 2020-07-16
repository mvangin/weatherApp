import React from "react"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            city: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=e1b3deaa440b2455c127c030779cf400`)
            .then(response => (response.json()))
            .then(jsonData => (console.log(jsonData)))
    }
            
    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" name="city" value={this.value} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleClick}> Search Weather</button>
                <p> {this.state.city} </p>
            </div>
        )
    }
}


export default Search