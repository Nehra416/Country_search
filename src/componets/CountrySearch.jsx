import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, } from 'react-redux'
import { setCountryDetails } from "../redux/CountryDetailSlice";

const CountrySearch = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const CountryDetails = useSelector(state => state.CountryDetails);

  const getCountryCard = async (event) => {
    event.preventDefault()
    // navigate("/loading");
    const response = await axios.get(`http://localhost:5000/api/countries?name=${searchCountry}`);
    dispatch(setCountryDetails(response.data))
    navigate('./card')
    console.log(response)
  }
  return (
    <div className="search_page">
      <form className="search_form" onSubmit={getCountryCard}>
        <input
          type="text"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
          placeholder="Search for a country..."
          className="p-2 border rounded mr-2"
        />
        <button type="submit">
          Search
        </button>
      </form>

      
        <Link  to='/allcountries' className="link">All Countries</Link>
    </div>
  );
};

export default CountrySearch;
