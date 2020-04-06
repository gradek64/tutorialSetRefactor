import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";

import mySaga from "./sagas";
import data from "./reducers/data_reducer";

const reducers = combineReducers({
  data,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(reducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
