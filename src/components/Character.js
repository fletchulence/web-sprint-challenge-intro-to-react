// Write your Character component here
import react from "react"; //TODO: doubt i'll need to add a useState or effect here

//styling
import styled, {keyframes} from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    border: 1px solid black;
    flex-flow: column wrap;
    justify-content: center;
    margin: 2%;
    height: 10%;
    width: fit-content;

    //TODO: add a transition
    
    div {
        color: ${pr => pr.theme.textColor};
        display: flex;
        
        h1{
            font: 30pt News Gothic, sans-script;
            margin: 0;
            
        }
        button{
            align-self: center;
            height: fit-content;
            background-color: ${pr => pr.theme.backColor};
            color: ${pr => pr.theme.textColor};
            
            transition: 0.2s ease-in-out;
            &:hover{
                
            }
        }
    }
`

export default function Character(props){
    const { name, birthyear } = props;

    //console.log(name)

    return(
        <StyledDiv>
            <div>
                <h1>{name}</h1>
                <button >{birthyear}</button>  {/* *****TODO onClick={(() => onClick)} **** */}
            </div>
        </StyledDiv>
    );

}