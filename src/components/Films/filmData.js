import React from 'react';
import styled from 'styled-components';



export default function FilmData (props) {
    const { story, movieName, films } = props;

    console.log(movieName)

    // console.log(story)
    return(
      <div>
      {movieName === films ? story : null}
      </div>
    );
}