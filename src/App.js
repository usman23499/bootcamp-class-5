import './App.css';
import Parent from './parent'
import  Conuntercontex  from "./Countercontex";
import { useState } from 'react';


function App() {

//  let [counter,setstate] = useState(1)
    let counterstate = useState(1);
      //ab ye array ban gaya [0] contain value and [1] pe funation hai for update

  return (

     // now we update parent throw child
    <Conuntercontex.Provider value={counterstate}>
     {/* set defultvlaue  or update defult value*/}


    <div >

            {/* <Parent name="Usman"/> */}
    
            <Parent />
    
    </div>
    </Conuntercontex.Provider>
    
  );
}

export default App;
