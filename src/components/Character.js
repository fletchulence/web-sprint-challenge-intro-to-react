// Write your Character component here
import react from "react"; //TODO: doubt i'll need to add a useState or effect here

//styling
import styled, {keyframes} from "styled-components";

const StyledDiv = styled.div`
    border: 1px solid black;

    
    span {
        color: ${pr => pr.theme.textColor};
        
        h1{
            font: 30pt News Gothic, sans-script;
            
        }
        button{
            background-color: ${pr => pr.theme.backColor};
            color: ${pr => pr.theme.textColor};

        }
    }
`

export default function Character(props){
    const { name, birthyear } = props;

    //console.log(name)

    return(
        <StyledDiv>
            <span>
                <h1>{name}</h1>
                <button >{birthyear}</button>  {/* *****TODO onClick={(() => onClick)} **** */}
            </span>
        </StyledDiv>
    );

}