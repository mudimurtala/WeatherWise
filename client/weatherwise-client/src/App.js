import React from 'react';
import Weather from './components/Weather';
import Soil from './components/Soil';

const App = () => {
    return (
        <div>
            <h1>WeatherWise</h1>
            <Weather />
            <Soil />
        </div>
    );
};

export default App;
