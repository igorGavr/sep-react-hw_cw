import {actions} from "../constants";

export const catDogReducer = (state,action) => {
  switch (action.type){
      case actions.ADD_CAT:
          return {...state, cats:[...state.cats, action.payload.cat]}

      case actions.ADD_DOG:
          return {...state, dogs:[...state.dogs, action.payload.dog]}

      case actions.DEL_CAT:
          return {...state, cats:state.cats.filter(cat => cat.id!==action.payload.id)}

      case actions.DEL_DOG:
          return {...state, dogs:state.dogs.filter(dog => dog.id!==action.payload.id)}

      default:
          return state
  }
}
