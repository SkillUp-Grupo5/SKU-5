import { createSlice } from '@reduxjs/toolkit';

export const operationsSlice = createSlice({
  name: 'operations',
  initialState: {
    // checking: true,
    // uid: null,
    // name: null,
  },
  reducers: {
    // authLogin: (state, action) => {

    //   state.checking = false;
    //   state.uid = action.payload.uid;
    //   state.name = action.payload.name;
    // },
    // authCheckingFinish: (state) => {

    //   state.checking = false;
    // },
    // authLogout: (state) => {

    //   state.uid = null;
    //   state.name = null;
    //   state.checking = false;
    // },

  },
})

export const {
  // authLogin,
  // authCheckingFinish,
  // authLogout 
} = operationsSlice.actions;