// src/models/Question.js
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question_text: {
    type: String,
    required: true
  },
  answer_text: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  difficulty_level: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  tags: [{
    type: String
  }],
  source: {
    type: String,
    default: 'AI-generated'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model('Question', questionSchema);
