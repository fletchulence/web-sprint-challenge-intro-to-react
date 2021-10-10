import React from 'react';
import styled from 'styled-components';

// import filmData from './filmData';

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
    const { films, actionMovie } = props;

console.log(films)
    return(
        <StyledMovies>
          
          <div onClick={() => actionMovie()}>{films}</div>
        
          {/* { films === showFilmStory ?  films.map((el) => {
                    return (
                        <Films 
                            key={el.index}
                            films={el}
                            actionMovie={actionMovie}
                        /> 
                        ) 
                    }) 
            : null } */}
        </StyledMovies>

    );
};

export default Films;