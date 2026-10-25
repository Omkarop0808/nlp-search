# `Timeless AI`

An NLP tool to remove those hassles of finding the most relevant content in videos and documents.

## Inspiration

Everyday people watch one billion hours of videos on YouTube and generate billions of views. Another interesting fact is that searches related to the term "how to" are growing 70 percent year over year. This means that when users are searching for ways to learn something, they rely heavily on video content. Online education has proven the immense power and impact it can have on millions of learners worldwide.

## Problem

Many times we find ourselves skipping through a YouTube timeline trying to find a punchline or a specific part of a tutorial. It can be time-consuming and mind-numbing to try and find a specific moment in a YouTube video.

Although plenty of video solutions are available online, long educational lectures can become monotonous. People zone out frequently, lose track of what is going on, and end up rewinding and watching repeatedly. Furthermore, there is often a lack of immediate comprehension feedback to verify what you've learned.

Similarly, reading lengthy privacy policies and terms takes hundreds of hours each year. Summarizing and extracting the crucial clauses in real time solves this bottleneck.

## What It Does

The core mission is to remove the hassle of hunting for specific moments in multimedia content and deliver instant, high-relevance NLP insights:

1. **YouTube Video Analyzer**: Paste any YouTube link to fetch the full transcript, generate an extractive summary, extract key topics and entity tags, enable timestamp jumping, perform VADER sentiment analysis on audience comments with an interactive distribution chart, and generate an automated comprehension quiz.
2. **Zoom Online Lecture Analyzer**: Upload or paste lecture transcripts to condense long discussions, search key phrases, evaluate lecture sentiment tone, and generate self-assessment quizzes.
3. **Legal Document Analyzer**: Upload policy agreements or terms of service (.txt / .md) to generate concise executive summaries with red highlights on high-importance obligations and conditions.

## NLP Pipeline & Key Endpoints

- `/api/ytb-t01`: Fetches YouTube captions, cleans timestamps, and generates extractive summaries.
- `/api/ytb-summary-01`: TextRank sentence scoring based on word frequencies and sentence positions.
- `/api/nlp/relevants`: Main sentence scoring, topic extraction, and key lemma identification.
- `/api/nlp/entities`: Named entity and technical keyword extraction.
- `/api/nlp/sentiment`: NLTK VADER sentiment scoring with positivity, negativity, and neutral distributions.
- `/api/nlp/disambiguation` & `/api/nlp/quiz`: WordNet synset and antonym matching for smart multiple-choice quiz questions.
- `/api/ytb-similarwords-01`: WordNet synonym generation for semantic phrase expansion.

## Modern Architecture & NLP Engine (Updated 2026)

The project has been modernized into a self-contained, high-performance system:

- **Frontend**: React + Vite 8 (fast bundling, HMR, native JSX support).
- **Backend**: Python 3.11+ FastAPI backend (`backend/server.py`) serving local NLTK NLP pipelines:
  - **Extractive Summarization**: Weighted sentence scoring based on word frequencies, sentence position, and length thresholds.
  - **Sentiment Analysis**: NLTK VADER (`SentimentIntensityAnalyzer`) with compound scoring and sentiment distribution.
  - **Semantic Analysis & Quiz Generation**: WordNet synsets, hypernyms, and antonyms for intelligent distractor generation.
  - **YouTube Transcript Processing**: Real-time closed caption retrieval and normalization via `youtube-transcript-api`.

---

## How to Run Locally

### Quick Launch (One-Click)

Double-click `run_all.bat` or run in PowerShell:

```powershell
.\run_all.ps1
```

This automatically starts both the FastAPI NLP backend on `http://127.0.0.1:8000` and the Vite React frontend on `http://127.0.0.1:3000`.

### Manual Launch

#### 1. Start the NLP Backend

In terminal 1:

```bash
# Install Python dependencies
pip install fastapi uvicorn nltk youtube-transcript-api pydantic

# Launch the FastAPI NLP server
python -m uvicorn backend.server:app --host 127.0.0.1 --port 8000
```

API Documentation and Swagger UI is accessible at `http://127.0.0.1:8000/docs`.

#### 2. Start the Frontend Application

In terminal 2:

```bash
# Install frontend packages (Vite & React)
npm install

# Start Vite development server
npm start
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. All API requests (`/api/*`) are automatically proxied to the Python NLP backend.