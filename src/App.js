import React, { useState, useEffect } from 'react';
import './App.css';

//import Components
import Characters from './components/Character';

//axios install
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
   const [ charData, setCharData ] = useState([]) //!will i need an array? probably..
  //  const [ showMore, setShowMore ] = useState(true) //TODO: this is for stretch -- make false for ihding initial

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

  // console.log(charData)  //! testing output

  //! testing map function
  // charData.map(el => {
  //   console.log(el.name)
  //   console.log(el.birth_year)
  // })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charData.map((el, index) => {
          return <Characters key={index} name={el.name} birthyear={el.birth_year} />
        } 
      )} 
      {/* props i need to pass to Characters and show?? name / birth_year*/}   
    </div>
  );
}

export default App;
