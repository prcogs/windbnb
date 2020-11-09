import House from './house'

const ListHouse = ({ stays, filter }) => {
    var newList = stays

    if(filter.location !== "" && filter.guests !== ""){
        newList = stays.filter( stay => stay.city.toLowerCase() === filter.location.toLowerCase() &&  stay.maxGuests <= filter.guests)
    }

    else if(filter.location !== "" && filter.guests === ""){
        newList = stays.filter( stay => stay.city.toLowerCase() === filter.location.toLowerCase())
    }

    else if(filter.guests !== "" && filter.location === "") {
        newList = stays.filter( stay => stay.maxGuests <= filter.guests)
    }

    return (
        <>
            <h1>Stays in Finland</h1>
            <div className="listHouse">
            
                {newList.map((item, i) => {
                    return <House stay={item} key={i}/>
                })}
            </div>
        </>
    )
}

export default ListHouse