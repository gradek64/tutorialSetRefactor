import { storeFactory } from './testHelpers';
import { guessWord } from './actions';
import guessWordReducer from './reducers/guessWordReducer';



describe('guess word action dispacher',()=>{
    const initialState = {
        secretWord:'party',
        /* guessedWords:[{
            guessedWord:'guessedWord',
            letterMachCount: 0
        }]*/
    };
    const secretWord = 'greg';
    const unsuccessGuessWord = 'train';
    describe('no guess words',()=>{
        let store;
        beforeEach(()=>{

            /*
              *@if you need to access stor ewith default value 
              *@them dont core store with mock data at all 
              *@just make sure have default initial data set up.
            */
            // store = storeFactory(initialState, guessWordReducer);

        });
        test('update state correclty f or unsuccessful word',()=>{
            //dispatch event for unsuccessful word;
            /*store.dispatch(guessWord(unsuccessGuessWord));
            const storeAfterAcion = store.getState();
            const expectedState = {
                ...initialState,
                guessedWords:[{
                    guessedWord:unsuccessGuessWord,
                    letterMachCount: 3
               }], 
            };*/
            // expect(newState).toEqual(expectedState);
        });
        test('update state correclty for guessed word',()=>{

        });
    });
});