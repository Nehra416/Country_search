import { createSlice } from "@reduxjs/toolkit";

const CountryDetailsSlice = createSlice({
    name: 'country',
    initialState: {
        countrySearch: null,
        countryDetails: null
    },
    reducers: {
        setCountryDetails: (state, action) => {
            state.countryDetails = action.payload;
        },
        setCountrySearch: (state, action) => {
            state.countrySearch = action.payload;
        },
    }
})

export const { setCountryDetails, setCountrySearch } = CountryDetailsSlice.actions;
export default CountryDetailsSlice.reducer;