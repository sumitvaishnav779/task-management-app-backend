const { Model, DataTypes } = require('sequelize');
const sequelize = require('./connection');

class Task extends Model {}

// Initialize the Task model
Task.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Task',
  timestamps: false, 
});

// Sync the model with the database (create the table if it doesn't exist)
const syncModels = async () => {
  await Task.sync();
  console.log('Task model synced with the database.');
};

syncModels();

module.exports = Task;