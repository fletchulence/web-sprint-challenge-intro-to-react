import React from 'react';
import styled from 'styled-components';

const StyledMovies = styled.div`
  border: 1px dashed green;
  display: flex;
  justify-content: center;
  
  div{
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    font-size: 0.8em;

    //! THHE HOHVERS AND TRANSITIONS!!!!@@@@@@@!
    
  }
`


function Films(props) {
    const { films, key } = props;

    console.log(key)

    return(
      <StyledMovies>
        <div>{films}</div>
      </StyledMovies>
    );
};

export default Films;