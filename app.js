const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.json({ message: 'Task added successfully', tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});