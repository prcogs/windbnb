

const House = ({ stay }) => {
    return (
        <div className="house">
            <img src={stay.photo}/>
            <p className={stay.superHost ? "host" : "noHost"}>Super Host</p>
            <p className="type">{stay.type} {stay.maxGuests !== 0 ? "." : ""} {stay.maxGuests} beds</p>
            <p className="rating"><i className="fa fa-star star" aria-hidden="true"></i> {stay.rating}</p>
            <p className="title">{stay.title}</p>
        </div>
    )
}

export default House