import React from "react"
import Day from "./Day"
import { v4 as uuidv4 } from 'uuid';


function DailyWeather({tennisTags}){
    return (
        <div className="tagContainer">
        {tennisTags.map(tags => <Day key={uuidv4()} tags={tags} />)}
    </div>
    )
}

export default DailyWeather;