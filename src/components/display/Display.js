import React, { useState, useEffect } from 'react';
import Countries from '../countries/Countries';


const Display = () => {
    const [country, setCountries] = useState([]);
    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            });
    }, [])
    let i = 1;
    return (
        <div >
            {
                country.map(cn => <Countries key={i++} country={cn}></Countries>)
            }

        </div>
    );
};

export default Display;