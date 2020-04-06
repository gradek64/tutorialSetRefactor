import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

//this is wather handler for executing AGE_UP action
function* ageUpAsync() {
  yield delay(4000);
  //put is like dispatch
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

/**
 * this generator function is set up in a watcher  for saga;
 * sagaMiddleware.run(watchAgeUp);
 */
export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
