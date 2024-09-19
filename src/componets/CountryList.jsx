import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryDetails } from '../redux/CountryDetailSlice';
import ErrorNotification from './ErrorNotification';
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner

const CountryList = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countryDetails = useSelector(state => state.CountryDetails);

  const fullDetailsHandler = (item) => {
    dispatch(setCountryDetails(item));
    console.log("countryDetails=>", countryDetails);
    navigate("/card/details");
  };

  useEffect(() => {
    const getAllCountryDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/allcountries");
        setAllCountries(response.data);
      } catch (error) {
        setError("Failed to load country data.");
      } finally {
        setIsLoading(false); // Set loading to false when done
      }
    };

    getAllCountryDetails();
  }, []);

  return (
    <div>
      {isLoading && <LoadingSpinner />} 
      {error && <ErrorNotification message={error} />}
      {!isLoading && allCountries.map((item, index) => (
        <div className="country_card" key={index}>
          <img className="card-img-top" src={item.flags?.png} alt="country flag" />
          <div className="card-body">
            <h2 className="card-title">{item?.name?.common}</h2>
            <p className="card-text">Population: <span>{item?.population}</span></p>
            <button onClick={() => fullDetailsHandler(item)}>View full Detail</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
