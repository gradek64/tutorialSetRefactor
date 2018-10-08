import { actionTypes } from '../actions';


/*
 * @function guessWordReducer;
 * @param {array} state - array of guessed words;
 * @param {object} action - action to be reduced;
 *@return {array} - new guess Word state
*/
const initialState = {
    secretWord:'party',
    guessedWords:[{
        guessedWord:'guessedWord',
        letterMachCount: 0
    }],
};
export default (state = initialState, action={})=> {
    switch(action.type){
    case(actionTypes.GUESS_WORD):
        state.success = true;
        console.log('...state',...state);
        console.log('action.payload',action.payload);
        return state;
        //return {...state, guessedWords:[action.payload]};

    default:
        return state;
    }
};