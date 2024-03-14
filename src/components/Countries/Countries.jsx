import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);
    
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    // Visited country
    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // Visited Flags
    const handleVisitedFlags = flag => {
        setVisitedFlag([...visitedFlag, flag]);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited Countries */}
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li
                        key={country.cca3}
                        >{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* Flags */}
            <div>
                {
                    visitedFlag.map((flag, idx) => <img key={idx} style={{width: '100px'}} src={flag.png}/>)
                }
            </div>
            
            {/* Display Countries */}
            <div className="countries-container">
            {
                countries.map(country => <Country
                key={country.cca3}
                country={country}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlags = {handleVisitedFlags}
                />)
            }
            </div>
        </div>
    );
};

export default Countries;