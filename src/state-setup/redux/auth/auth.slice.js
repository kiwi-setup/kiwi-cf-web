import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isUserLoggedIn: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserDetails: (state, { payload: user }) => {
      console.log('setUserDetails: slice: ', user);
      state.isUserLoggedIn = !!user;
      state.user = user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = AuthSlice.actions;

export default AuthSlice.reducer;
