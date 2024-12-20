const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// Define the FormData model
const FormData = sequelize.define('FormData', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    wheels: { type: DataTypes.ENUM('2', '4'), allowNull: false },
    vehicleType: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.STRING },
    endDate: { type: DataTypes.STRING },
});

// Sync the database
sequelize.sync({ alter: true })
    .then(() => console.log('Database synchronized'))
    .catch((err) => console.error('Error syncing database:', err));

module.exports = FormData;
