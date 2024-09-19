const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('task_application', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database has been connected.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;