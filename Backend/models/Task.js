const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: String },
  status: { type: String, default: "Belum Selesai" }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
