import FitlerDrawer from './filterDrawer'

import { useState } from "react"

const SearchBar = ({ changeFilter, stays }) => {
    const [location, setLocation] = useState("")
    const [guests, setGuests] = useState("")
    const [largeBar, setVisible] = useState("little")

    const changeCity = (city) => {
        setLocation(city)
    }

    const changeQuests = (number) => {
        if(number === 0) {
            setGuests("")
        }

        else {
            setGuests(number)
        }
        
    }

    return (
        <div className={largeBar+"Wrapper"}>
            <div className={largeBar+"SearchBar"} onClick={() => setVisible("big")}>
                
                {largeBar === "big" ? <label htmlFor="location">Location</label> : ""}
                <input type="text" 
                       name="location" 
                       placeholder="Add location" 
                       value={location} 
                       onChange={(e) => {setLocation(e.target.value)}} 
                       className={largeBar+'Input'}/>

                {largeBar === "big" ? <label htmlFor="guests">Guests</label> : ""}
                <input type="text"
                       name="guests"
                       placeholder="Add guests" 
                       value={guests} 
                       onChange={(e) => {setGuests(e.target.value)}} 
                       className={largeBar+'Input'}/>

                <button className={largeBar+"Button"} 
                        onClick={() => {changeFilter(location, guests); setVisible("little")}}>
                            <i className={"fa fa-search" + ' ' + largeBar+"Search"} aria-hidden="true"></i>{largeBar === "big" ? "  Search" : ""}
                </button>
            </div>
            <button className={largeBar+"Btn"} onClick={() => {setVisible("little")}}><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>

            {largeBar === "big" ? <FitlerDrawer location={location} 
                                                guests={guests} 
                                                stays={stays} 
                                                changeCity={changeCity}
                                                changeQuests={changeQuests}/> : ""}
        </div>
    )
}

export default SearchBar