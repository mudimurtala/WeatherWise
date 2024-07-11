const express = require('express');
const { getSoil } = require('../controllers/soilController');
const router = express.Router();

router.get('/soil', getSoil);

module.exports = router;
