import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Day({ tags }) {
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
                    <i class="fas fa-cloud-rain"> Rain </i>
                    <div> {`${stat} %`} </div>
                </div>
            default:
                return;
        }

    }
    console.log(tags)
    return (
        <div>
            {!tags.length && <div className="tag_tennisApprove"> <i className="fas fa-thumbs-up"> </i> Go play Tennis! </div>}
            {tags.map(tag => <div key={uuidv4()} className="day" className="tag">{handleIcon(tag)} </div>)}
        </div>
    )
}

export default Day;