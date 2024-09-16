import React from "react";

const CountryDetails = () => {
  return (
    <div>
      <div className="mt-8 border rounded p-4">
        <h2 className="text-2xl font-bold mb-4">
          Country Name
        </h2>
    
    <img className="card-img-top" src="https://picsum.photos/id/237/500/300" alt="Card image cap" />
        
        <p>
          <strong>Capital:</strong>
        </p>
        <p>
          <strong>Region:</strong> </p>
        <p>
          <strong>Subregion:</strong> 
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          
        </p>
        <p>
          <strong>Population:</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
