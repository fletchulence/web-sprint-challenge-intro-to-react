// Write your Character component here
import React from "react"; //TODO: doubt i'll need to add a useState or effect here

import Films from "./Films/Films";

//styling
import styled, {keyframes} from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    border: 1px solid black;
    flex-flow: row wrap;
    justify-self: center;
    margin: 2%;
    height: auto;
    //* width: fill; //(not necessary for MVP)
    padding: 0% 2%;

    transition: 0.2s ease-in-out;
    //? ---- HOVERS
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${pr => pr.theme.transBColor};
        h1{
            color:  ${pr => pr.theme.transTColor};
            text-shadow: 2px 2px ${pr => pr.theme.textColor};
        }
        button{
            background-color:  ${pr => pr.theme.textColor};
            color:  ${pr => pr.theme.backColor};
        }
    };
    
    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: ${pr => pr.theme.textColor};
        text-shadow: 2px 2px ${pr => pr.theme.backColor};
        
        //? ----- for the Name initial
        h1{
            display: flex;
            //*  align-self: left;  //(not necessary for MVP)
            font: 30pt News Gothic, sans-script;
            margin: 0;
        }

        //? ------ for the button at initial
        button{
            align-self: flex-end;
            height: fit-content;
            background-color: ${pr => pr.theme.backColor};
            color: ${pr => pr.theme.textColor};
            //?additional HOVERS only while on button
            :hover{
                transition: 0.5s ease-in-out;
                background-color:  ${pr => pr.theme.backColor};
                color:  ${pr => pr.theme.textColor};                
            }
        }
    }
    .films{
        display: flex;
        //  border: 3px dotted red;
        width: 100%;
    }
`

export default function Character(props){
    const { name, 
            birthyear, 
            films, 
            actionFilms, 
            charId, 
            actionMovie, 
            filmData,
            filmId } = props;

     console.log(filmId)
    return(
        <>
        <StyledDiv>
            <div className='HERE'>
                <h1>{name}</h1>
                <button onClick={() => actionFilms(films)} >{birthyear}</button>  {/* *****TODO onClick={(() => onClick)} to show films **** */}
            </div>

            <div className="films"> 
            { films === charId ?  films.map((el, index) => {
                    return (
                        <Films 
                            key={index}
                            films={el}
                            actionMovie={actionMovie}
                            filmData={filmData}
                            filmId={filmId}
                        /> 
                        ) 
                    }) 
            : null }
                </div>
        </StyledDiv>
        </>
    );

}