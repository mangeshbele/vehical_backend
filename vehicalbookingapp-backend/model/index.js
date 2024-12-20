const { Sequelize } = require('sequelize');

// Configure Sequelize with database credentials
const sequelize = new Sequelize('vehicalbooking', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql', // Use 'postgres', 'sqlite', etc., for other SQL-based databases
});

// Test database connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.error('Error connecting to database:', err));

module.exports = sequelize;
