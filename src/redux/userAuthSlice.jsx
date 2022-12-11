import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  createNewUser,
  getCurrentUser,
  logInUser,
  logOut,
} from './userAuthOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(createNewUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(createNewUser.rejected, (state, { payload }) => {
        toast.error(`Операція завершилась помилкою ${payload}!`);
        state.isLoggedIn = false;
      })
      .addCase(logInUser.rejected, (state, { payload }) => {
        toast.error(`Операція завершилась помилкою ${payload}!`);
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        toast.error(`Операція завершилась помилкою ${payload}!`);
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        toast.error(`Операція завершилась помилкою ${payload}!`);
        state.isLoggedIn = false;
      });
  },
});
