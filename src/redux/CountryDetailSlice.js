import { createSlice } from "@reduxjs/toolkit";

const CountryDetailsSlice = createSlice({
    name: 'country',
    initialState: {
        countrySearch: null,
        countryDetails: null,
        countryFullDetails: null
    },
    reducers: {
        setCountryDetails: (state, action) => {
            state.countryDetails = action.payload;
        },
        setCountrySearch: (state, action) => {
            state.countrySearch = action.payload;
        },
        setCountryFullDetails: (state, action) => {
            state.countryFullDetails = action.payload;
        },
    }
})

export const { setCountryDetails, setCountrySearch, setCountryFullDetails } = CountryDetailsSlice.actions;
export default CountryDetailsSlice.reducer;