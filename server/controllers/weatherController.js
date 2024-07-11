const axios = require('axios');
const Weather = require('../models/Weather');

exports.getWeather = async (req, res) => {
    const { location } = req.query;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
        const weatherData = response.data;
        await Weather.create({ location, data: weatherData });
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};
