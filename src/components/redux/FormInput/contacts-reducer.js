import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import Actions from './contacts-actions';

const initialItemsState = [];

const addContact = (state, { payload }) =>
  state.find(({ name }) => name.toLowerCase() === payload.name.toLowerCase())
    ? alert(`${payload.name} is already in contacts`)
    : [payload, ...state];

const items = createReducer(initialItemsState, {
  [Actions.addItem]: addContact,
  [Actions.deleteItem]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [Actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
