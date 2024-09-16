import { configureStore } from '@reduxjs/toolkit'
import CountryDetails from './CountryDetailSlice.js';

const store = configureStore({
    reducer: {
        CountryDetails: CountryDetails,
    }
})

export default store;