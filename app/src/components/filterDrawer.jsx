import { useEffect, useState } from "react"


const FilterDrawer = ({location, guests, stays, changeCity, changeQuests}) => {
    const [numberAdults, setNumberAdults] = useState(0)
    const [numberChilds, setNumberChilds] = useState(0)

    var listCity = []
    for (let i = 0; i < stays.length ; i++) {
        listCity = [...listCity, stays[i].city]
    }

    // convertit set to array
    const list = Array.from(new Set(listCity))
    var newList = []
    if(location === "") {
        newList = list 
    }

    else {
        // compare la value de l'input location avec les villes 
        // (on récupe la longeur de location et on compare le même nbr de lettre de la ville)
        newList = list.filter( item => item.toLowerCase().substr(0, location.length) === location.toLowerCase())
    }

    const changeNumberChilds = (signe) => {
        if (numberChilds === 0 && signe === "-") {
            setNumberChilds(0)
        }

        else if(signe === "-") {
            setNumberChilds(numberChilds - 1)
        }

        else if(signe === "+") {
            setNumberChilds(numberChilds + 1)
        }
    }

    const changeNumberAdults = (signe) => {
        if (numberAdults === 0 && signe === "-") {
            setNumberAdults(0)
        }

        else if(signe === "-") {
            setNumberAdults(numberAdults - 1)
        }

        else if(signe === "+") {
            setNumberAdults(numberAdults + 1)
        }        
    }

    useEffect(() => {
        changeQuests(numberAdults + numberChilds)
    },[numberChilds, numberAdults])
    
    return (
        <div className="filter">
            <ul className="list">
                {newList.map((item, i) => {
                            return(
                                <li key={i} onClick={() => {changeCity(item)}}>
                                    <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>{item + ", Finland"}
                                </li>
                            ) 
                        })}
            </ul>

            <div className="upGuests">
                <p>Adults <br/> <button onClick={() => {changeNumberAdults("-")}}>-</button>  
                                    <strong>{numberAdults}</strong> 
                                <button onClick={() => {changeNumberAdults("+")}}>+</button>
                </p>

                <p>Childs <br/> <button onClick={() => {changeNumberChilds("-")}} >-</button> 
                                    <strong>{numberChilds}</strong> 
                                <button onClick={() => {changeNumberChilds("+")}}>+</button>
                </p>
            </div>
        </div>
    )
}

export default FilterDrawer