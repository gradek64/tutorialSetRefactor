import { connect } from 'react-redux';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Congrats from './Congrats';
import  GuessWords from './GuessWords';
import  InputWord from './InputWord';
import {guessWord , getSecretWord , correctGuess} from './actions';

class App extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }
    render() {

        /*
          *@ distructure your reducers from store to pass them to 
          *@ commponent is props
        */

        const { success, guessWords, secretWord ,submitWord} = this.props;
        const { collectionOfGuesses } = guessWords;

        console.log('this.props',this.props);

        return (
            <div className="App">
                <Congrats success={ success.success }/>
                <InputWord success={ success.success } guessWord = { submitWord }/>
                <GuessWords guessWords={ collectionOfGuesses } />
            </div>
        );
    }
}
const mapStoreToProps = (store) => {
    /*
    * @return store.reducer given in function args then you will use the same values 
    * as the one used in store (direct mapping);
    */
    return store;
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitWord: (word) => dispatch(guessWord(word)),
        correctGuess,
        getSecretWord
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(App);

