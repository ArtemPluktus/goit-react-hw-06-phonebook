import contactsSlice from './contactsSlice.js';
import filterSlice from './filterSlice.js';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
})