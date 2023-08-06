import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: `contacts`,
    initialState: [],
    reducers: {
        saveContacts: (state, action) => {
            state.push(action.payload);
        },
        deleteContacts: (state, action) => {
            return state.filter(contact => contact.name !== action.payload);
        },
    },
});

export const { saveContacts, deleteContacts } =
    contactsSlice.actions;
export default contactsSlice.reducer;
