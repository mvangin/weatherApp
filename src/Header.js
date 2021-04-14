import React from "react";
import tennisBall from "./assets/tennisBall.png";
import Search from "./Search";


function Header({firstLoad, handleClick, zipcode, setZipcode, error, city}){
return (
    <div className={`${!firstLoad ? "containerBar" : null}`}>
    <div id="cityName">
        <img className="tennisBall" src={tennisBall}></img> {error ? error : city}
    </div>
    <Search handleClick={handleClick} zipcode={zipcode} setZipcode={setZipcode}/>
</div>
)

}

export default Header;