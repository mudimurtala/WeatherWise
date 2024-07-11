const axios = require('axios');
const Soil = require('../models/Soil');

exports.getSoil = async (req, res) => {
    const { location } = req.query;
    // Example of fetching soil data; adjust according to your actual API source
    try {
        const soilData = { /* mocked soil data */ };
        await Soil.create({ location, data: soilData });
        res.json(soilData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch soil data' });
    }
};
