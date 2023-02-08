import { combineReducers, createReducer, createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContact,
  filterContact,
  getAllContacts,
  setLoading,
} from './actions';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAllContacts.fulfilled]: (state, action) => action.payload,
    [addNewContact.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContact.fulfilled]: (state, action) =>
      state.filter(contact => {
        return contact.id !== action.payload;
      }),
  },
});

const loader = createReducer(false, {
  [setLoading]: (state, action) => action.payload,
  [getAllContacts.pending]: (state, action) => true,
  [getAllContacts.fulfilled]: (state, action) => false,
  [addNewContact.fulfilled]: (state, action) => false,
  [addNewContact.pending]: (state, action) => true,
  [deleteContact.pending]: (state, action) => true,
  [deleteContact.fulfilled]: (state, action) => false,
});

const filterReducer = createReducer('', {
  [filterContact]: (state, action) => action.payload,
});

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
  isLoading: loader,
});
