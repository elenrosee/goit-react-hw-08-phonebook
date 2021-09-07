import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './FormInput/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
