import React, { useState, useEffect } from 'react';
import './App.css';

//import Components
// TODO: import Characters from './components/Character'

//axios install
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
   const [ charData, setCharData ] = useState() //!will i need an array? probably..

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //TODO: useEffect(() => {
    function getData(){
      axios.get(`https://swapi.dev/api/people`)
      .then( res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
    }
    getData()
  //TODO: }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
