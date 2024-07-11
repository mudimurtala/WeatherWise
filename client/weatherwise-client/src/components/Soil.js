import React, { useState } from 'react';
import axios from 'axios';

const Soil = () => {
    const [location, setLocation] = useState('');
    const [soil, setSoil] = useState(null);

    const fetchSoil = async () => {
        try {
            const response = await axios.get(`/api/soil?location=${location}`);
            setSoil(response.data);
        } catch (error) {
            console.error('Error fetching soil data', error);
        }
    };

    return (
        <div>
            <h2>Soil Information</h2>
            <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Enter location" 
            />
            <button onClick={fetchSoil}>Get Soil Data</button>
            {soil && <div>{JSON.stringify(soil)}</div>}
        </div>
    );
};

export default Soil;
