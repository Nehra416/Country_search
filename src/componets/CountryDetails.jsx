import React from "react";
import { useSelector } from "react-redux";

const CountryDetails = () => {
  const CountryDetails = useSelector((state) => state.CountryDetails);
  // console.log("countryDetails", CountryDetails.countryDetails);

  const CountryFullDetails = useSelector((state) => state.countryFullDetails);
  console.log("countryFullDetails of slice", CountryFullDetails);
  return (
    <div>
      {CountryDetails?.countryDetails.map((item, index) => {
        return (
          <div key={index} className="country_details">
            <div className="">
              <h2 className="">{item?.name.common}</h2>

              <img
                className="card-img-top"
                src={item.flags?.png}
                alt="Card image cap"
              />

              <p>
                <strong>Capital: </strong>
                {item?.capital}
              </p>
              <p>
                <strong>Region: </strong>
                {item?.region}
              </p>
              <p>
                <strong>Subregion: </strong>
                {item?.subregion}
              </p>
              <p>
                <strong>Languages: </strong>
                {item?.languages.eng}
              </p>
              <p>
                <strong>Population: </strong>
                {item?.population}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryDetails;
