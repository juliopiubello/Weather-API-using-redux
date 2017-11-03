import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      //state.push -> manipulate the state and discard the old
      // return state.concat([action.payload.data]); // create new adding the old
      return [action.payload.data, ...state]; // [city, city, city]
    }

  return state;
}
