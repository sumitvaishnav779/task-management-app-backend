const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const connection = require('./connection');
const Task = require('./Task');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoints
app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    if (!description) {
        return res.status(400).json({ error: 'Description is required' });
    }
    
    const task = await Task.create({ title, description });
    res.status(201).json({message:'Task Added Successfully.'});
});

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.destroy({ where: { id } });
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(201).json({message:'Task has been deleted.'});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});