import { useReducer } from "react";
import Counterreducer from "./Counter-reducer";

function Childreducer(){

    let [state,dispatch]=useReducer(Counterreducer,1)
    // the above called destructuring
    // 1 is the defult value

    return(
        
        <div>

        <h1>Reducer:</h1>
        <h2>Counter : {state} </h2>

        <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
        
        )
}
export default Childreducer;