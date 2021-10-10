import React from 'react';
import styled from 'styled-components';

import FilmData from './filmData';

const StyledMovies = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  
  div{
    // border: 1px solid blue;
    display: flex;
    justify-content: center;
    font-size: 0.8em;
    :hover{
      transition: 0.5s ease-in-out;
      background-color:  ${pr => pr.theme.backColor};
      color:  ${pr => pr.theme.textColor};                
  }

    //! THHE HOHVERS AND TRANSITIONS!!!!@@@@@@@!
    
  }
`


function Films(props) {
    const { films, actionMovie, filmData, filmId } = props;

// console.log(filmId)
    return(
        <StyledMovies>

          <div onClick={() => actionMovie(filmData)}>{films}</div>
        
          { filmId === filmData ?  filmData.map((el) => {
                    return (
                        <FilmData 
                            key={el.index}
                            story={el.opening_crawl}
                            movieName={el.name}
                            
                        /> 
                        ) 
                    }) 
            : null }
        </StyledMovies>

    );
};

export default Films;