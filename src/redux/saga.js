import { all } from "redux-saga/effects";
import todoSaga from "./candidate/candidate.saga";
//TODO: create root saga

export default function* rootSaga() {
  yield all([todoSaga()]);
}
