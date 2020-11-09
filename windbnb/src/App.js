import logo from './logo.svg';
import './App.css';
import './animation.css';
import Header from './components/header';
import ListHouse from './components/listHouse';
import stays from './stays.json'
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState({
                                "location" : "",
                                "guests" : ""
                              })

  const changeFilter = (location, guests) => {
    const newFilter = {
      "location" : location,
      "guests" : guests
    }
    setFilter(newFilter)
  }

  return (
    <div className="App">
      <Header changeFilter={changeFilter}/>
      <ListHouse stays={stays} filter={filter}/>
      <footer></footer>
    </div>
  );
}

export default App;
