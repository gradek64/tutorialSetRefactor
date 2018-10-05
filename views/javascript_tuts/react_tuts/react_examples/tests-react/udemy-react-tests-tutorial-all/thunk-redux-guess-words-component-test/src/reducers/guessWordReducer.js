import { actionTypes } from '../actions';


/*
 * @function guessWordReducer;
 * @param {array} state - array of guessed words;
 * @param {object} action - action to be reduced;
 *@return {array} - new guess Word state
*/
const initialState = {
    secretWord: false,
    setter:false,
};
export default (state = initialState, action={})=> {
    switch(action.type){
    case(actionTypes.CORRECT_GUESS):
        state.success = true;
        return state;

    default:
        return state;
    }
};