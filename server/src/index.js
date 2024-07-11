const express = require('express');
const sequelize = require('./models');
const weatherRoutes = require('./routes/weatherRoutes');
const soilRoutes = require('./routes/soilRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api', weatherRoutes);
app.use('/api', soilRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => console.log('Error: ' + err));
