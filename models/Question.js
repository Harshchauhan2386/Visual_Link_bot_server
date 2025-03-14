// models/Question.js

const mongoose = require('mongoose');

// Define the schema for questions
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    // index: true, 
  },
  answer: {
    type: String,
    required: true,
  },
});

// questionSchema.index({ question: 'text' });

// Create and export the Question model
module.exports = mongoose.model('Question', questionSchema);
