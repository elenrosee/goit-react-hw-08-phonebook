import { createReducer, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  changeFilter,
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
} from './contacts-actions';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     [addContactSuccess]: (state, { payload }) => state.push(payload),
//     [deleteContactSuccess]: (state, { payload }) =>
//       state.filter(contact => contact.id !== payload),
//   },
//   extraReducers: {
//     [fetchContactsSuccess]: (_state, action) => action.payload,
//   },
// });

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     [changeFilter](state, action) {
//       state = action.payload;
//     },
//   },
// });

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
