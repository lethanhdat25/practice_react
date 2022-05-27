import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  candidate: null,
  errorCode: "",
  createCandidateStatus: "",
};
const canditdateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    getCandidate: (state) => {
      state.loading = true;
    },
    getCandidateSuccess: (state, action) => {
      state.loading = false;
      state.candidate = action.payload;
    },
    getCandidateFailed: (state, action) => {
      state.loading = false;
      state.errorCode = action.payload;
    },
    createCandidate: (state) => {
      state.loading = true;
    },
    createCandidateSuccess: (state) => {
      state.loading = false;
      state.createCandidateStatus = "CREATE_SUCCESS";
    },
    createCandidateFailed: (state, action) => {
      state.loading = false;
      state.errorCode = action.payload;
      state.createCandidateStatus = "CREATE_FAILED";
    },
  },
});

export default canditdateSlice.reducer;
//Action
export const {
  getCandidate,
  getCandidateSuccess,
  getCandidateFailed,
  createCandidate,
  createCandidateSuccess,
  createCandidateFailed,
} = canditdateSlice.actions;
