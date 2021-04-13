import React from "react"
import { v4 as uuidv4 } from 'uuid';


function WeekDays({ weekDays }) {
    return (
        <div className="daysContainer" >
            {weekDays.map(item => <div className="day" key={uuidv4()}> <b> {item} </b></div>)}
        </div>
    )
}

export default WeekDays;