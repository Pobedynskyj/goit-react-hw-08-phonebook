import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  removeContact,
} from 'components/service/api';

export const getAllContacts = createAsyncThunk('getContacts', async () => {
  try {
    const res = await fetchContacts();
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const addNewContact = createAsyncThunk('addContact', async contact => {
  try {
    const res = await addContact(contact);
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { dispatch }) => {
    try {
      await removeContact(id);
      dispatch(getAllContacts());
      // return res;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const filterContact = createAction('filter');

export const setLoading = createAction('loader');
// dispatch = (const action = {type: 'contacts/getContact', payload: res})
