import { combineReducers } from "@reduxjs/toolkit";
import candidateReducer from "./candidate/candidate.reducer";

const rootReducer = combineReducers({
  candidate: candidateReducer,
});
export default rootReducer;
