import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Day({ tags, dayWeather, setCurrentWeather, setCurrentDay, day, currentDay}) {
    function handleIcon({ cond, stat }) {
        switch (cond) {
            case ("Windy"):
                return <div>
                    <i className="fas fa-wind"> Windy </i>
                    <div> {`${stat} MPH`} </div>
                </div>
            case ("Cold"):
                return <div>
                    <i className="fas fa-temperature-low"> Cold </i>
                    <div> {`${stat} F`} </div>
                </div>
            case ("Hot"):
                return <div>
                    <i className="fas fa-temperature-high"> Hot </i>
                    <div> {`${stat} F`} </div>
                </div>
            case ("Humid"):
                return <div>
                    <i className="fas fa-water"> Humid </i>
                    <div> {`${stat} %`} </div>
                </div>
            case ("Rain"):
                return <div>
                    <i className="fas fa-cloud-rain"> Precip. </i>
                    <div> {`${stat} %`} </div>
                </div>
            default:
                return;
        }

    }
    return (
        <div className={`dayWeatherContainer ${day === currentDay ? "day-border" : null}`} 
            onClick={() => {
                setCurrentDay(day);
                setCurrentWeather(dayWeather)
            }}>
     
            <div className="day"> <b> {day}</b> </div>
            {!tags.length && <div className="tag_tennisApprove"> <i className="fas fa-thumbs-up"> </i> Go play Tennis! </div>}
            {tags.map(tag => <div key={uuidv4()} className="day" className="tag">{handleIcon(tag)} </div>)}
        </div>
    )
}

export default Day;