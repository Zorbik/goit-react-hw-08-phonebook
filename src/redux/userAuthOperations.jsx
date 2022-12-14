import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const createNewUser = createAsyncThunk(
  'userAuth/register',
  async (newUserData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', newUserData);
      token.set(data.token);
      toast.success(`Реєстрація пройшла успішно!`);

      return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 400:
          return rejectWithValue('Помилка створення користувача');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const logInUser = createAsyncThunk(
  'userAuth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);

      toast.success(`Вхід виконан успішно!`);

      return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 400:
          return rejectWithValue('Не вірно вказан логін чи пароль');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const logOut = createAsyncThunk(
  'userAuth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();

      toast.success(`До скорої зустрічі!`);
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue('Необхідно авторизуватися');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'userAuth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().user.token;
    if (!persistedToken) return rejectWithValue('Треба авторизуватись!');
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue('Необхідно авторизуватися');
        default:
          return rejectWithValue(message);
      }
    }
  }
);
