import {useReducer, useRef} from "react";

import {Cats, Dogs} from "./components";
import {catDogReducer} from "./reducers";
import {actions} from "./constants";

const App = () => {
    const [state, dispatch] = useReducer(catDogReducer, {cats: [], dogs: []});
    const catInput = useRef();
    const dogInput = useRef();

    const addCat = (e) => {
        e.preventDefault();
        const name = catInput.current.value;

        if (!name) {
            return
        }

        const cat = {
            id: new Date().getTime(),
            name
        }

        dispatch({type: actions.ADD_CAT, payload: {cat}})
        catInput.current.value = ''
    }

    const addDog = (e) => {
        e.preventDefault();
        const name = dogInput.current.value;

        if (!name) {
            return
        }

        const dog = {
            id: new Date().getTime(),
            name
        }

        dispatch({type: actions.ADD_DOG, payload: {dog}})
        catInput.current.value = ''

    }

    const deleteCat = (id) => {
        dispatch({type: actions.DEL_CAT, payload: {id}})
    }

    const deleteDog = (id) => {
        dispatch({type: actions.DEL_DOG, payload: {id}})
    }

    return (
        <div>
            <form style={{display: 'flex', justifyContent: 'center'}}>
                <label>Add Cat: <input ref={catInput} type="text" name={'cat'}/></label>
                <button onClick={addCat}>Save</button>
                <label>Add Dog: <input ref={dogInput} type="text" name={'dog'}/></label>
                <button onClick={addDog}>Save</button>
            </form>
            <h1>
                <hr/>
            </h1>
            <div style={{display: 'flex', justifyContent: 'center', gap: '500px'}}>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>
        </div>
    );
};

export default App;
