import { storeFactory } from './testHelpers';
import { guessWord } from './actions';
import guessWordReducer from './reducers/guessWordReducer';



describe('guess word action dispacher',()=>{
   
    describe('no guess words',()=>{
        const noGuessState = {
            secretWord:'party',
            guessedWords:[{
                guessedWord:'aGuessedWord',
                letterMachCount: 2
            }]
        };
        let store;
        beforeEach(()=>{

            /*
              *@if you need to access stor ewith default value 
              *@them dont core store with mock data at all 
              *@just make sure have default initial data set up.
            */

            store = storeFactory( noGuessState, {
                secretWord:guessWordReducer, 
                guessedWords:guessWordReducer
            });


        });
        test('update store state correctlty if or unsuccessful word',()=>{
            //dispatch event for unsuccessful word;
            console.log(noGuessState.guessedWords[0].guessedWord);
            store.dispatch(guessWord(noGuessState.guessedWords[0].guessedWord));
            //check store;
            //const storeAfterAction = store.getState();
            //expect(storeAfterAction).toEqual(noGuessState);
        });
        test('update state correclty for guessed word',()=>{

        });
    });
});