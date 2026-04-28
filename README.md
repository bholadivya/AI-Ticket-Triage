# 🤖 AI-Powered Support Ticket Triage System

A full-stack web application that intelligently classifies and prioritizes customer support tickets using rule-based NLP logic.

---

## 🔗 Live Demo

- 🌐 Frontend: https://ai-ticket-triage-3xv7zy32r-bhola26divya-6808s-projects.vercel.app  
- ⚙️ Backend: https://ai-ticket-triage-backend.onrender.com  

---

## 📌 Overview

This project simulates a real-world support system where tickets are:

- Automatically categorized  
- Assigned priority levels  
- Flagged for urgency  
- Stored and displayed  

---

## 🚀 Features

### 🎯 Ticket Analysis
- Automatic classification based on keywords  
- Priority assignment (P0–P3)  
- Urgency detection  
- Confidence scoring  

### 📊 Ticket History
- Stores all analyzed tickets  
- Displays previous tickets  
- Updates in real-time  

### ⚡ UI/UX
- Clean responsive interface  
- Loading & retry logic  
- Error handling  

---

## 🧩 Tech Stack

**Frontend**
- React (Vite)
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Deployment**
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas

---

## ⚙️ Installation

### 1. Clone Repository
```
git clone https://github.com/bholadivya/AI-Ticket-Triage.git
cd ai-ticket-triage

```
### 2. Backend Setup
```
cd backend
npm install
```

Create a .env file inside backend/:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run backend:
```
npm run dev
```
### 3. Frontend Setup
```
cd frontend
npm install
npm run dev
```
## 🌐 API Endpoints

### POST /tickets/analyze
```json
{
  "message": "payment failed urgently"
}
```

### GET /tickets
### 🧠 Example Response
```json
{
  "category": "Billing",
  "priority": "P1",
  "urgency": true,
  "confidence": 75,
  "keywords": ["payment"]
}
```
### ⚠️ Notes
- Backend may take a few seconds to respond (Render free tier sleep)
- This uses rule-based logic (not ML)

### 🔐 Security
- .env is excluded from Git
- No sensitive credentials are exposed

### 👩‍💻 Author

Divya Bhola

Full Stack Developer 
