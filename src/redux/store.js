import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice.js";
import filterSlice from "./filterSlice.js";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterSlice,
    },
});

