import Child from './child'
import ChildReducer from './child2'
function Parent(props){

    return(

        // <Child name={props.name}/>
        <div>
            <Child />
        <ChildReducer />

        </div>

    )
} 

export default Parent;