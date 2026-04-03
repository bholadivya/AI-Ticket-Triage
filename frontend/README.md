# 🎟 AI Ticket Triage – Support Ticket Classification System

A full-stack MERN web application designed to intelligently analyze customer support tickets, automatically assign categories and priorities, and maintain ticket history for efficient support workflows.

📌 **Overview**

AI Ticket Triage is a smart support ticket management system that uses a **local rule-based NLP engine** to classify support issues into categories such as Billing, Technical, Account, and Feature Requests.

The system automatically:

• detects ticket category
• assigns priority levels (P0–P3)
• flags urgency
• generates confidence scores
• stores ticket history in MongoDB

This project simulates how modern customer support systems prioritize incoming issues.

---

## 🚀 Features

### 🎯 Smart Ticket Analysis

• Automatic ticket category detection
• Priority assignment (P0–P3)
• Urgency detection
• Confidence score generation
• Keyword extraction

---

### 🧠 AI Logic Engine

• Local rule-based NLP classification
• No external AI APIs used
• Heuristic keyword mapping
• Security escalation rule

---

### 🚨 Custom Twist – Security Escalation

Security-sensitive tickets such as:

• hacked
• breach
• unauthorized access

are automatically escalated to:

**P0 – Critical Priority**

This ensures immediate support attention.

---

### 📜 Ticket History

• Stores all analyzed tickets in MongoDB Atlas
• Displays latest 5 tickets in UI
• Maintains persistent history across refresh

---

### 🎨 Frontend UI

• Modern React interface
• Professional card-based layout
• Ticket history dashboard
• Latest analysis section
• Responsive and clean UI

---

## 🧩 Tech Stack

### Frontend

• React.js
• Axios
• CSS Styling

### Backend

• Node.js
• Express.js
• MongoDB (Mongoose)

### Database & Deployment

• MongoDB Atlas
• Localhost development setup

---

## 🔍 Classification Logic

The application uses a local rule-based heuristic engine.

### Category Mapping

Examples:

• payment → Billing
• refund → Billing
• crash → Technical
• password → Account
• feature → Feature

---

### Priority Logic

• **P0** → Security issues
• **P1** → Urgent issues
• **P2** → Multiple keyword matches
• **P3** → Default low priority

---

## ⚙ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repository_url>
cd ai-ticket-triage
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### 4️⃣ Environment Variables

Create `.env` inside backend folder

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

⚠ Sensitive credentials are excluded for security reasons.

---

## ▶ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🌐 API Endpoints

### Analyze Ticket

```http
POST /tickets/analyze
```

Sample request:

```json
{
  "message": "payment failed urgently"
}
```

---

### Fetch Ticket History

```http
GET /tickets
```

Returns latest 5 analyzed tickets.

---

## 🧪 Sample Test Cases

### Billing

```text
payment failed urgently
```

Expected:

• Category → Billing
• Priority → P1

---

### Security

```text
my account was hacked
```

Expected:

• Category → Account
• Priority → P0

---

### Feature Request

```text
please add dark mode feature
```

Expected:

• Category → Feature
• Priority → P3

---

## 🧪 Future Enhancements

• ML-based classification
• sentiment analysis
• ticket assignment workflow
• pagination
• authentication
• support agent dashboard

---

## 📝 Reflection

This project follows a **service-oriented backend architecture**.

The controller layer manages request-response flow, while the analyzer service contains business logic for:

• ticket classification
• priority scoring
• confidence scoring

Trade-offs:

• fast
• explainable
• easy to maintain

Limitations:

• limited semantic understanding
• keyword-based classification only

With more time, I would improve:

• synonym detection
• fuzzy matching
• ML-based scoring

---

## 👩‍💻 Author

**Divya Bhola**
Full Stack MERN Developer
Special Interest: Product Analytics, Workflow Automation & Intelligent Support Systems
