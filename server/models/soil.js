const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Soil = sequelize.define('Soil', {
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = Soil;
