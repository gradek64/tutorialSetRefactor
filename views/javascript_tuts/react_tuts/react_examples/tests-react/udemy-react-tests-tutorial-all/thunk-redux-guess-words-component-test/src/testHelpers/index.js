
/*
  * @connect to store for real app testing purposes;
*/

import { createStore, applyMiddleware } from 'redux';
import { middlewares }from '../store';
import { combineReducers } from 'redux';


export const storeFactory = (initialState, reducer ) => {
    const rootReducer =  combineReducers(reducer);
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

    return createStoreWithMiddleware(rootReducer,initialState);
};