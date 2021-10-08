// Write your Character component here
import react from "react"; //TODO: doubt i'll need to add a useState or effect here
//TODO: need to add styled components here later but wont worry about it now



export default function Character(props){
    const { name, birthyear } = props;

    console.log(name)
    
    return(
        <div>
            {name} {birthyear}
        </div>
    );

}