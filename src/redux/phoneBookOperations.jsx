import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue(
            'Для подальшого використання необхідно авторизуватися!'
          );
        case 404:
          return rejectWithValue('Такого контакта у користувача немає');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      toast.success(`Контакт ${data.name} успішно видален!`);

      return data.id;
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue(
            'Для подальшого використання необхідно авторизуватися!'
          );
        case 404:
          return rejectWithValue('Такого контакта у користувача немає');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });

      toast.success(`Контакт ${data.name} успішно додан!`);

      return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue(
            'Для подальшого використання необхідно авторизуватися!'
          );
        case 400:
          return rejectWithValue('Контакт не створено');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });

      toast.success(`Контакт ${data.name} успішно оновлен!`);
      return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue(
            'Для подальшого використання необхідно авторизуватися!'
          );
        case 400:
          return rejectWithValue('Контакт не оновлено');
        default:
          return rejectWithValue(message);
      }
    }
  }
);
