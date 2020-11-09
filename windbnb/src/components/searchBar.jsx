import { useState } from "react"

const SearchBar = ({ changeFilter }) => {
    const [location, setLocation] = useState("")
    const [guests, setGuests] = useState("")
    const [largeBar, setVisible] = useState("little")

    return (
        <div className={largeBar+"Wrapper"}>
            <div className={largeBar+"SearchBar"} onClick={() => setVisible("big")}>
                <input type="text" placeholder="Add location" value={location} onChange={(e) => {setLocation(e.target.value)}} className={largeBar+'Input'}/>
                <input type="text" placeholder="Add guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} className={largeBar+'Input'}/>
                <button className={largeBar+"Button"} onClick={() => {changeFilter(location, guests)}}><i className={"fa fa-search" + ' ' + largeBar+"Search"} aria-hidden="true"></i>{largeBar === "big" ? "  Search" : ""}</button>
            </div>
            <button className={largeBar+"Btn"} onClick={() => {setVisible("little")}}><i class="fa fa-arrow-down fa-2x" aria-hidden="true"></i></button>
        </div>
    )
}

export default SearchBar