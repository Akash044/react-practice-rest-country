import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../countryDetails/countryDetails.css"

const CountryDetails = () => {
    let { id } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]);
            });
    }, [])
   const {name,capital,area,population,flag} = country;
    return (
        <div>
            <img src={flag} alt=""/>
            <h5>Name: {name}</h5>
            <h5>Capital: {capital}</h5>
            <h5>Area: {area}</h5>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default CountryDetails;