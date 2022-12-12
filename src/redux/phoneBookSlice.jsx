import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './phoneBookOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    changeSearchQuery(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [payload, ...state.contacts.items];
        state.contacts.isLoading = false;
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [
          payload,
          ...state.contacts.items.filter(({ id }) => payload.id !== id),
        ];
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => payload !== id
        );
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        toast.error(payload);
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        toast.error(payload);
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        toast.error(payload);
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const { changeSearchQuery } = phoneBookSlice.actions;
