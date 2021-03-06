import React from 'react';
import { Link } from 'react-router-dom';
import "../countries/countries.css"

const Countries = (props) => {
  const {name}=props.country;


    return(
        <div className="countryD">
            <h5>{name}</h5>
           <Link to={`${name}`}><button>DETAILS</button></Link> 
        </div>

    );
    
};

export default Countries;