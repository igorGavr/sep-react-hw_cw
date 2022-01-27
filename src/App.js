// noinspection JSCheckFunctionSignatures

import {useReducer, useRef} from "react";
import {Dogs} from "./components/Dogs/Dogs";
import {Cats} from "./components/Cats/Cats";

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'add':
            if (action.target==='cat'){
                return  {...state, cats:[...state.cats, action.payload]}
            }
            if (action.target==='dog'){
                return  {...state, dogs:[...state.dogs, action.payload]}
            }
            throw new Error()
        case 'delete':
            if (action.target==='cat'){
                return  {...state, cats:state.cats.filter(value => value !== action.payload)}
            }
            if (action.target==='dog'){
                return  {...state, dogs:state.dogs.filter(value => value !== action.payload)}
            }
            throw new Error()
        default:
            return state
    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const catInput = useRef();
    const dogInput = useRef();

    const addCat = (e) => {
        e.preventDefault();
        const newCat = catInput.current.value
        dispatch({type: 'add', target: 'cat', payload: newCat})
        catInput.current.value = ''

    }
    const addDog = (e) => {
        e.preventDefault()
        const newDog = dogInput.current.value
        dispatch({type: 'add', target: 'dog', payload: newDog})
        dogInput.current.value = ''

    }
    const deleteDog = (dog) => {
        dispatch({type:'delete', target:'dog', payload:dog})
    }
    const deleteCat = (cat) => {
        dispatch({type:'delete', target:'cat', payload:cat})
    }
    return (
        <div>
            <form style={{display:'flex', justifyContent:'center'}}>
                <label>Add Cat: <input ref={catInput} type="text" name={'cat'}/></label>
                <button onClick={addCat}>Save</button>
                <label>Add Dog: <input ref={dogInput} type="text" name={'dog'}/></label>
                <button onClick={addDog}>Save</button>
            </form>
            <h1><hr/></h1>
            <div style={{display:'flex', justifyContent:'center', gap:'500px'}}>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>
        </div>
    );
};

export default App;
