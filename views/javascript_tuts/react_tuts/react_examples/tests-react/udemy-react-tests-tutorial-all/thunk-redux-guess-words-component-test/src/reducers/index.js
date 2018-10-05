import { combineReducers } from 'redux';
import success from './successReducer';
import guessWord from './guessWordReducer';

export default combineReducers(
    { 
        success,
        guessWord
    }
);