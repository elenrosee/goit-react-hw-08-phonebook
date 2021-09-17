import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  changeFilter,
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
} from './contacts-actions';

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
