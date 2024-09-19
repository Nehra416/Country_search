// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CountryDetails = () => {

//   const navigate = useNavigate()
//   useEffect(() => {
//     console.log(countryDetails);
    
//     if (countryDetails.length <= 0){
//       navigate("/")
//     }
//   })


//   const countryDetails = useSelector((state) => state.CountryDetails.countryDetails);

//   if (!countryDetails) {
//     return <p>No country details available.</p>;
//   }

//   return (
//     <div className="country_details">
//       <h2>{countryDetails?.name?.common}</h2>
//       <img
//         className="card-img-top"
//         src={countryDetails.flags?.png}
//         alt="Card image cap"
//       />
//       <p>
//         <strong>Capital: </strong>
//         {countryDetails?.capital}
//       </p>
//       <p>
//         <strong>Region: </strong>
//         {countryDetails?.region}
//       </p>
//       <p>
//         <strong>Subregion: </strong>
//         {countryDetails?.subregion}
//       </p>
//       <p>
//         <strong>Languages: </strong>
//         {countryDetails?.languages ? Object.values(countryDetails.languages).join(', ') : 'N/A'}
//       </p>
//       <p>
//         <strong>Population: </strong>
//         {countryDetails?.population}
//       </p>
//     </div>
//   );
// };

// export default CountryDetails;



import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const navigate = useNavigate();
  const countryDetails = useSelector((state) => state.CountryDetails.countryDetails);

  useEffect(() => {
    if (countryDetails.length <= 0) {
      navigate("/");
    }
  });

  if (!countryDetails) {
    return <p>No country details available.</p>;
  }

  return (
    <div className="country_details">
      <h2>{countryDetails?.name?.common}</h2>
      <img
        className="card-img-top"
        src={countryDetails.flags?.png}
        alt="Country flag"
      />
      <p><strong>Official Name: </strong>{countryDetails?.name?.official}</p>
      <p><strong>Capital: </strong>{countryDetails?.capital ? countryDetails.capital.join(', ') : 'N/A'}</p>
      <p><strong>Region: </strong>{countryDetails?.region}</p>
      <p><strong>Subregion: </strong>{countryDetails?.subregion || 'N/A'}</p>
      <p><strong>Demonym: </strong>{countryDetails?.demonyms?.eng?.m || 'N/A'}</p>
      <p><strong>Area: </strong>{countryDetails?.area} km²</p>
      <p><strong>Population: </strong>{countryDetails?.population}</p>
      <p><strong>Time Zone: </strong>{countryDetails?.timezones ? countryDetails.timezones.join(', ') : 'N/A'}</p>
      <p><strong>Currency: </strong>{countryDetails?.currencies ? Object.values(countryDetails.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
      <p><strong>Languages: </strong>{countryDetails?.languages ? Object.values(countryDetails.languages).join(', ') : 'N/A'}</p>
      <p><strong>Independent: </strong>{countryDetails?.independent ? 'Yes' : 'No'}</p>
      <p><strong>Landlocked: </strong>{countryDetails?.landlocked ? 'Yes' : 'No'}</p>
      <p><strong>Car Driving Side: </strong>{countryDetails?.car?.side || 'N/A'}</p>
      <p><strong>Maps: </strong>
        <a href={countryDetails?.maps?.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a> | 
        <a href={countryDetails?.maps?.openStreetMaps} target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
      </p>
      <p><strong>Alternative Spellings: </strong>{countryDetails?.altSpellings ? countryDetails.altSpellings.join(', ') : 'N/A'}</p>
    </div>
  );
};

export default CountryDetails;
