import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCountryDetails } from '../redux/CountryDetailSlice';
// import { setCountryFullDetails } from '../redux/CountryDetailSlice';

const CountryCard = () => {
    const dispatch = useDispatch();
    const CountryDetails = useSelector(state => state.CountryDetails);
    console.log("CountryCard=>", CountryDetails);
    const navigate = useNavigate()

    useEffect(() => {
      console.log(CountryDetails);
      
      if (CountryDetails.countryDetails.length <=0){
        navigate("/")
      }
    })




    const fullDetails = async (item) => {
        dispatch(setCountryDetails(item))
        navigate('./details')
    }

    return (
        <div>
            {
               CountryDetails?.countryDetails.map((item, index) => {

                    return (
                        <div className="country_card" key={index}>
                            <img className="card-img-top" src={item.flags?.png} alt="Country Flag" />
                            <div className="card-body">
                                <h2 className="card-title">{item?.name.common}</h2>
                                <p className="card-text"> Population: <span>{item?.population}</span></p>
                                <button onClick={() => fullDetails(item)}>View full Detail</button>
                            </div>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default CountryCard