import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area} = country;
    
    const [isVisited, setIsVisited] = useState(false);
    // Toggle the isVisited value
    const handleVisit = () => {
        setIsVisited(!isVisited)
    }

    return (
        <div className={`country ${isVisited && 'visited'}`}>
            <h3 style={{color: isVisited ? 'black' : 'white'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>{isVisited ? 'I have Visit this Country' : 'I want going'}</p>
            <button onClick={()=> handleVisitedCountries(country)}>Mark As Visited</button>
            <button onClick={ () => handleVisitedFlags(country.flags)}>Add Flag</button>
            <button onClick={handleVisit}>{isVisited ? 'Going' : 'Visited'}</button>
        </div>
    );
};

export default Country;