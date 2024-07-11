const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Weather = sequelize.define('Weather', {
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = Weather;
