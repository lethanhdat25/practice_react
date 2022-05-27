import { call, all, takeEvery, put } from "redux-saga/effects";
import {
  createCandidate,
  createCandidateFailed,
  createCandidateSuccess,
  getCandidate,
  getCandidateFailed,
  getCandidateSuccess,
} from "./candidate.reducer";
import { toast } from "react-hot-toast";

import { createApi, getAllApi } from "./candidate.api";

function* getAllSaga(action) {
  try {
    const res = yield call(getAllApi, action.payload);
    yield put(getCandidateSuccess(res.data));
  } catch (error) {
    yield put(getCandidateFailed(error.code));
  }
}

function* createCandidateSaga(action) {
  try {
    yield call(createApi, action.payload);
    yield put(createCandidateSuccess());
    toast.success("Create todo success!");
  } catch (error) {
    yield put(createCandidateFailed(error.code));
    toast.error("This didn't work.");
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(getCandidate.type, getAllSaga),
    takeEvery(createCandidate.type, createCandidateSaga),
  ]);
}
