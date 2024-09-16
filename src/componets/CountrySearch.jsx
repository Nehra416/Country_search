import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

const CountrySearch = () => {
  const [searchCountry,setSearchCountry] = useState("");
  const navigate = useNavigate();

  const getCountryCard = async(event) => {
    event.preventDefault()
    // navigate("/loading");
    const response = await axios.get(`https://restcountries.com/v3.1/name/${searchCountry}`);
    console.log(response)
  }
    return (
    <div>
      <form  onSubmit={getCountryCard}>
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
    </div>
  );
};

export default CountrySearch;
