const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// GET /tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST /tasks
router.post('/', async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const newTask = new Task({ title, description, dueDate, status });
  await newTask.save();
  res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
