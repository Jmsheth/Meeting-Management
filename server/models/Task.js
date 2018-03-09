const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Meeting = require("./meeting");
//create tasks using mongodb

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: [true, "Task name is required"]
  },
  taskParticipant: {
    type: String,
    required: [true, "One Participant is required"]
  },
  dateCreated: {
    type: Date
  },
  dueDate: {
    type: Date,
    requied: [false]
  },
  tags: {
    type: String,
    required: [true, "tag is required"]
  },
  notes: {
    type: String,
    required: [false]
  }
});

const task = mongoose.model("task", taskSchema);
module.exports = task;
