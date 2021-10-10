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
   const [ filmData, setFilmData ] = useState([]) //TODO
   
   //show or hide based on click -- initialize null
   const [ charId, setCharId ] = useState(null) //TODO
   const [ filmId, setFilmId ] = useState(null) //TODO

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    function getPeopleData(){
      axios.get(`https://swapi.dev/api/people`)
      .then( res => {
        //  console.log(res.data)  //! datums within array of data within objects
        setCharData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    }
    getPeopleData()
   }, [])

   // ----- FOR FILMS DATA (STRETCH) -----
   useEffect(() => {
    function getFilmsData(){
      axios.get(`https://swapi.dev/api/films/`)
      .then( res => {
        // console.log(res.data.results)  //! datums within array of data within objects
        setFilmData(res.data.results)
       
      })
      .catch(err => {
        console.error(err)
      })
    }
    getFilmsData()
   }, [charId])

// console.log(charId)

  // console.log(charData)  //! testing output
  // console.log(movies)  //! testing output

  //! testing map function
  // console.log(charData)

  // charData.map(el => {
  //     console.log(el.name)
  //     console.log(el.birth_year)
  //     console.log(el.films)
  //  })

   const openDetailsChar = (index) =>{
      setCharId(index)
    }
    
    // console.log(filmData)
    
    
    const openDetailsMovie = (index) =>{
      setFilmId(index)
    }

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charData.map((el, index) => {
          return (
          <Characters 
            key={index} 
            actionFilms={openDetailsChar}
            actionMovie={openDetailsMovie}
            name={el.name} 
            birthyear={el.birth_year}
            films={el.films}
            charId={charId}
            filmData={filmData}
            filmId={filmId}
           />
           )
        } 
      )} 
      {/* props i need to pass to Characters and show?? name / birth_year*/}   
    </div>
  );
}

export default App;
