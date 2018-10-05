export const actionTypes = {
    CORRECT_GUESS : 'CORRECT_GUESS',
    GUESS_WORD : 'GUESS_WORD'
};

export function correctGuess() {
    return { type:actionTypes.CORRECT_GUESS };
}

/*
*@for the action now we are going to use 'thunk' 
*it will return a function not an object so it is more veritile
*
*/

export guessWord = (guessWord) => {
  return function(dispath,getState)  {

  }
}
