import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCountryFullDetails } from '../redux/CountryDetailSlice';

const CountryCard = () => {
    const dispatch = useDispatch();
    const CountryDetails = useSelector(state => state.CountryDetails);
    // console.log("CountryCard", CountryDetails.countryDetails);
    const navigate = useNavigate()

    const fullDetails = async (code) => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${code}`)
        console.log("fullDetails", res.data);
        dispatch(setCountryFullDetails(res.data))

        navigate('./details')
    }

    return (
        <>
            {
                CountryDetails?.countryDetails.map((item, index) => {

                    return (
                        <div className="card " key={index}>
                            <img className="card-img-top" src={item.flags?.png} alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title">{item?.name.common}</h2>
                                <p className="card-text">{item?.population}</p>
                                <button onClick={() => fullDetails(item.cca3)}>View full Detail</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CountryCard