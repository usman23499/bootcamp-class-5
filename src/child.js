import { useContext } from "react";
import counterContext from "./Countercontex";
// Import context


function Child(){
// function Child(props

// called conter contex and use it
let CounterValue = useContext(counterContext);

    return(

        <div>

            <h1>This is First Child Use Context API</h1>
            {/* <h2>Call the Data form Grand Parent { props.name}</h2> */}
            
            {/* <h2>Call The Context : {CounterValue}</h2> */}
            
            <h2>Call The Context : {CounterValue[0]}</h2>
            {/* beacuse 0 pe data and 1 pe upadte karne ka funcation hai */}

            <button
            onClick={()=>CounterValue[1](++CounterValue[0])}
            >Increment</button>
            </div>
    )
} 

export default Child;