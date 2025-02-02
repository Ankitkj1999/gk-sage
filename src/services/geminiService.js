// src/services/geminiService.js
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generatePrompt = (topic, difficulty) => {
  return `Generate a multiple choice question about ${topic} with difficulty level ${difficulty}. 
  Format the response as JSON with the following structure:
  {
    "question_text": "The question here",
    "answer_text": "The correct answer here",
    "domain": "The broad subject area",
    "topic": "${topic}",
    "difficulty_level": "${difficulty}",
    "tags": ["relevant", "tags", "here"]
  }`;
};

export const generateQuestion = async (topic, difficulty) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = generatePrompt(topic, difficulty);
    
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    
    return JSON.parse(response);
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
};