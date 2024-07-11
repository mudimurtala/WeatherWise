import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`/api/weather?location=${location}`);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data', error);
        }
    };

    return (
        <div>
            <h2>Weather Information</h2>
            <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Enter location" 
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && <div>{JSON.stringify(weather)}</div>}
        </div>
    );
};

export default Weather;
