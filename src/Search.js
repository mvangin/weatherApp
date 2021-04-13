import React from "react"

function Search({ handleClick, setZipcode, zipcode }) {
    return (
        <div className="searchBox">
            <input type="text" name="zipCode" placeholder="Zip Code" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            <button type="submit" onClick={()=>handleClick(zipcode)}> Search </button>
        </div>
    )
}

export default Search;
