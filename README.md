<div align="center">
  <img src="frontend/public/logo.png" alt="UrMail Logo" width="120" />
  <h1>UrMail — Autonomous Email Operations System (AEOS)</h1>
  <p><em>AI-powered intelligent email operations, triage, and automated response platform.</em></p>
</div>

---

## 🧠 Overview

UrMail is an advanced, production-ready Autonomous Email Operations Agent designed to reduce human email workload by 60–80%. It ingests communications, semantically understands their context, and autonomously handles repetitive support, sales, and internal routing.

When an email arrives, UrMail's intelligence pipeline automatically:
1. **Classifies** the email into categories (Support, Sales, Personal, Spam).
2. **Prioritizes** the urgency by extracting crucial deadlines and emotional tone.
3. Retrieves relevant context from your **RAG (Retrieval-Augmented Generation) Knowledge Base**.
4. Drafts a highly contextual **Suggested Reply**.
5. Runs a **Decision Engine** to determine whether to *Auto-Reply*, *Suggest a Draft*, or *Escalate* to a human agent based on dynamic confidence scores.

## ✨ Features

- **Executive Dashboard**: Real-time statistical monitoring of AI automation efficiency and recent automated actions.
- **Smart Inbox**: An advanced "Focus Blade" style workspace that filters by AI status, priorities, and semantic content natively. 
- **AI Intelligence Pane**: Deep-dive into exactly *why* the AI made a decision—complete with extracted Action Items, reasoning context, pipeline logging, and confidence scoring.
- **Agentic Knowledge Base**: Drag-and-drop ingestion of `.pdf`, `.txt`, and `.docx` files directly into the RAG vector store to heavily guardrail the AI's generated knowledge.
- **Stitch "Lumina Nocturne" Design System**: A stunning, ultra-premium glassmorphic front-end UI.

## 🏗️ Architecture

**Backend Stack (FastAPI / Python 3.10+)**:
- Orchestrated workflow leveraging **Google Gemini Models** for high-accuracy reasoning and embeddings.
- Custom **RAG Pipeline** (`rag_engine.py` & `embedding_service.py`) dynamically chunking and retrieving context.
- **Decision Engine** providing strict guardrails on autonomous replies.

**Frontend Stack (React / Vite.js)**:
- Complete integration with **Tailwind CSS v3** via PostCSS for reactive "Lumina Nocturne" styling.
- Responsive layout with custom component routing (`react-router-dom`).

---

## 🚀 Getting Started

### 1. Start the Intelligent Backend

We recommend using a virtual environment (`conda` or `venv`):

```bash
cd backend
pip install -r requirements.txt

# Ensure document extraction tools are available
pip install python-docx 
```

Create a `.env` file based on the provided `.env.example` and add your Gemini API Key:
```env
GEMINI_API_KEY="your-google-ai-studio-key"
```

Start the FastAPI server:
```bash
python -m uvicorn app.main:app --port 8000
```
*(The API will be available at `http://localhost:8000`. You can visit `http://localhost:8000/docs` to view the self-documenting Swagger UI).*

### 2. Start the Executive Interface (Frontend)

```bash
cd frontend
npm install
npm run dev
```

Upon launching, the web UI will safely attach to `http://localhost:5173` (or the next open port like `5174/5175`). 

---

## 🧪 Running the Interactive Demo

UrMail ships with a built-in zero-setup demo suite:
1. Open the UI to the **Executive Dashboard**.
2. Click **"Run AI Demo"**.
3. The system will pre-seed the database with mock emails and a theoretical set of company Knowledge Base policies.
4. The Python intelligence routines will trigger, processing each email individually and streaming the categorized results, RAG context, and autonomous replies straight into the visual interface.

## 🛡️ License
Developed for experimental and advanced agentic AI operations.
