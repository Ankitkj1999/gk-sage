import express from 'express';
import connectDB from './config/db.js';
import Question from './models/question.js';
import { generateQuestion } from './services/geminiService.js';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Generate MCQ endpoint
app.post('/generate-question', async (req, res) => {
  try {
    const { topic, difficulty } = req.body;
    
    if (!topic || !difficulty) {
      return res.status(400).json({ error: 'Topic and difficulty are required' });
    }
    
    // Generate question using Gemini API
    const questionData = await generateQuestion(topic, difficulty);

    console.log(`The question data is ${questionData}`);
    
    // Save to MongoDB
    const question = new Question(questionData);
    await question.save();
    
    res.json(question);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate question' });
  }
});

// Get questions by topic and difficulty
app.get('/questions', async (req, res) => {
  try {
    const { topic, difficulty } = req.query;
    const query = {};
    
    if (topic) query.topic = topic;
    if (difficulty) query.difficulty_level = difficulty;
    
    const questions = await Question.find(query);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});