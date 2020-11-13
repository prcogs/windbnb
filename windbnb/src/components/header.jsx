import SearchBar from './searchBar'

const Header = ({ changeFilter, stays }) => {
    return (
        <header>
            <p className="site"><i className="fa fa-caret-up fa-2x caret" aria-hidden="true"></i>  windbnb</p>

            <SearchBar changeFilter={changeFilter} stays={stays}/>
        </header>
    )
}

export default Header