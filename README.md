# AI-Powered Learning Path Generator

## Project Vision
This project aims to create a personalized learning experience by leveraging AI to generate and manage educational content. The system will generate questions across various domains and topics, process them using NLP/RAG techniques, and create customized learning paths based on individual user performance and needs.

## Current Progress
Currently, we have implemented a Node.js application that:
- Integrates with Google's Gemini API for question generation
- Stores generated questions in MongoDB
- Supports filtering by topic and difficulty levels
- Includes pagination and sorting capabilities

## Technical Stack
- Backend: Node.js with Express
- Database: MongoDB
- AI Integration: Google Gemini API
- Future Plans: NLP/RAG for question processing

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running
- Gemini API key

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/mcq_generator
GEMINI_API_KEY=your_gemini_api_key
```

4. Start the server
```bash
npm start
```

### API Endpoints

#### Generate a Question
```bash
curl -X POST \
  http://localhost:3000/generate-question \
  -H 'Content-Type: application/json' \
  -d '{
    "topic": "Algebra",
    "difficulty": "Medium"
  }'
```

#### Get Questions
```bash
# Get all questions
curl http://localhost:3000/questions

# With filters
curl "http://localhost:3000/questions?topic=Algebra&difficulty=Medium"

# With pagination and sorting
curl "http://localhost:3000/questions?page=1&limit=10&sortBy=created_at&order=desc"
```

## Data Structure
Questions are stored with the following schema:
```javascript
{
  question_text: String,
  answer_text: String,
  domain: String,
  topic: String,
  difficulty_level: String,
  tags: [String],
  source: String,
  created_at: Date
}
```

## Roadmap
1. Current Phase: Basic question generation and storage
2. Next Steps:
   - Implement NLP/RAG for question processing
   - Develop recommendation engine
   - Create personalized learning paths
   - Add performance analytics
   - Build user feedback system

## Future Features
- Question similarity analysis
- Topic clustering
- Adaptive difficulty adjustment
- Learning progress tracking
- Performance analytics dashboard
- Personalized recommendation system

## Contributing
Feel free to contribute to this project by:
1. Opening issues for bugs or feature requests
2. Submitting pull requests
3. Providing feedback on the architecture and implementation

 