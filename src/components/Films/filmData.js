import React from 'react';
import styled from 'styled-components';

// import filmData from './filmData';


export default function FilmData (props) {
    const { story } = props;

    console.log(story)
    return(
      <div>
      {story}
      </div>
    );
}