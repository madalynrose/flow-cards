import { combineReducers } from "redux";
import { createReducer } from "../utils";
import types from "./types";
import { options } from "../constants/options"

/* State shape
{
    currentCard: id
    flowChart: [id1, id2, ...] 
    selectedOptions: ['class1', 'class2']
}
*/

const currentCard = createReducer(0)({
  [ types.SET_CURRENT_CARD ]: (state, action) => action.payload
});

const flowChart = createReducer([])({
  [ types.ADD_CARD ]: (state, action) => {
    let newState = state;
    newState.push(options[action.payload]);
    return newState;
  },
  [ types.GO_BACK]: (state, action) => {
    let newState = state;
    newState.pop();
    return newState;
  }
});

const selectedOptions = createReducer([])({
  [types.SELECT_OPTION]: (state, action) => {
    let newState = state;
    newState.push(action.payload);
    return newState;
  },
  [ types.GO_BACK]: (state, action) => {
    let newState = state;
    newState.pop();
    return newState;
  }
})


export default combineReducers( {
  currentCard,
  flowChart,
  selectedOptions
} );
