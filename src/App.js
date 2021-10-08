import React, { useState, useEffect } from 'react';
import './App.css';

//import Components
// TODO: import Characters from './components/Character'

//axios install
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
   const [ charData, setCharData ] = useState([]) //!will i need an array? probably..

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    function getData(){
      axios.get(`https://swapi.dev/api/people`)
      .then( res => {
        //console.log(res.data)  //! datums within array of data within objects
        setCharData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    }
    getData()
   }, [])

  console.log(charData)

  charData.map(el => {
    console.log(el.name)
    console.log(el.birth_year)
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {charData.map((el, index) => {
          <Characters key={indexname={el.name} birthyear={el.birthday={el.birth_year}} />
        } 
      )} */}
      {/* props i need to pass and show?? name birth year*/}   
    </div>
  );
}

export default App;
