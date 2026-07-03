<div align="center">

# 🎙️ Virtual Assistant

### *Your AI-Powered Voice Companion Built with MERN & Google Gemini*

**Listen. Understand. Respond. Assist. — All through Natural Conversation.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-success?style=flat-square)](LICENSE)

<br>

> *"A virtual assistant should do more than answer questions—it should understand intent, automate actions, and interact naturally."*

<br>

</div>

---

# 🧠 About the Project

**Virtual Assistant** is a modern AI-powered web application that allows users to interact completely through **voice commands** or **text input**.

Instead of behaving like a simple chatbot, the assistant understands user intent using **Google Gemini AI**, performs predefined actions, opens popular websites, answers general queries, and replies naturally using **speech synthesis**.

The project combines **Speech Recognition**, **Generative AI**, **Text-to-Speech**, and a responsive React interface to create an interactive assistant experience directly inside the browser.

---

# ✨ Features

### 👤 Personalized AI Assistant

Every user gets their own personalized virtual assistant.

- Secure Login & Signup
- Create your own AI assistant
- Choose assistant name
- Select assistant avatar
- Edit assistant profile anytime
- Personalized conversations

---

### 🤖 AI Capabilities

- Google Gemini powered intelligent conversations
- Natural language understanding
- Context-aware responses
- Personalized assistant using user information
- Fast AI response generation

---

### 🎤 Voice Interaction

- Speech-to-Text using Web Speech API
- Natural voice commands
- Hands-free interaction
- Automatic speech recognition
- Continuous conversation flow

---


### 🌐 Smart Actions

The assistant can perform various browser actions through voice commands.

- Open Google
- Open YouTube
- Search on Google
- Play YouTube videos
- Tell Date & Time
- Answer general questions
- AI-powered explanations

---

### 💬 Conversation History

Never lose your conversations.

- Stores previous chats automatically
- Saves all voice interactions
- Chat history available anytime
- Personalized conversation records

---

### 🌐 Productivity Features

- Open popular websites using voice
- Search anything on Google
- Play videos on YouTube
- Tell current date & time
- General question answering

---

### 💻 User Experience

- Clean modern UI
- Responsive design
- Fast API communication
- Smooth animations
- Easy-to-use interface

---

# 🏗️ System Architecture

```text
                    USER
                     │
         🎤 Voice / ⌨️ Text Input
                     │
                     ▼
          Speech Recognition API
                     │
                     ▼
              React Frontend
                     │
             Axios HTTP Request
                     │
                     ▼
           Express.js Backend API
                     │
                     ▼
         Google Gemini AI Model
                     │
          Intent + Response Generation
                     │
                     ▼
        Structured JSON Response
                     │
                     ▼
         Text Display + Voice Output
                     │
                     ▼
                  USER
```

---

# 🔄 Application Workflow

```text
              Create Account
                     │
                     ▼
              Login Securely
                     │
                     ▼
      Choose Assistant Name & Avatar
                     │
                     ▼
          Start Voice Conversation
                     │
                     ▼
      Speech Recognition (STT)
                     │
                     ▼
        Google Gemini Processing
                     │
                     ▼
      AI Response + Text-to-Speech
                     │──────────────► Execute predefined action
                     │                (Open Website/Search/etc.)
                     ▼
        Conversation Saved Automatically
                     │
                     ▼
       View History Anytime Later
```


---

# ⚡ Core Functionalities

| Feature | Description |
|----------|-------------|
| 🎤 Voice Recognition | Converts speech into text |
| 🤖 Gemini AI | Understands and generates responses |
| 🔊 Speech Synthesis | Reads responses aloud |
| 🌐 Website Navigation | Opens supported websites |
| 🔎 Google Search | Searches anything instantly |
| ▶️ YouTube Search | Plays requested videos |
| 📅 Date & Time | Returns current system date & time |
| 💬 Chat Mode | Supports manual text conversations |
| 📱 Responsive UI | Works across desktop and mobile browsers |

---

# 🧱 Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React.js | User Interface |
| Vite | Fast development & build tool |
| HTML5 | Page structure |
| CSS3 | Styling & Animations |
| JavaScript (ES6+) | Frontend Logic |
| Axios | API communication |
| Web Speech API | Speech-to-Text |
| Speech Synthesis API | Text-to-Speech |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| Express.js | REST API Server |
| Google Gemini API | AI Response Generation |
| dotenv | Environment Variable Management |
| CORS | Cross-Origin Requests |

---

## AI Components

| Component | Function |
|-----------|----------|
| Speech Recognition | Converts voice into text |
| Google Gemini | Natural language understanding & response generation |
| Intent Detection | Determines whether to answer or perform an action |
| Speech Synthesis | Converts AI response into voice |

---

# 📂 Project Structure

```text
Virtual_Assistant/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Card.jsx
│   │   ├── context/
│   │   │    ├── UserContext.jsx
│   ├── index.html
│  
│   │
│   ├── pages/
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Customize.jsx
│   │   ├── Customize2.jsx
│   │   ├── Home.jsx
│   │
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │      └── assistantController.js
│   │
│   ├── routes/
│   │      └── assistantRoutes.js
│   │
│   ├── config/
│   │      └── gemini.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

# 📸 Preview

> Replace these placeholders with actual screenshots after uploading them.

### 🏠 Home Screen

```text
assets/home.png
```

---

### 🎤 Voice Interaction

```text
assets/voice-command.png
```

---

### 🤖 AI Response

```text
assets/response.png
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/RajanyaSaha-27/Virtual_Assistant.git
```

```bash
cd Virtual_Assistant
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Install Frontend Dependencies

Open another terminal.

```bash
cd frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=5000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

GEMINI_API_URL=YOUR_GEMINI_API_ENDPOINT
```

Example:

```env
PORT=5000

GEMINI_API_KEY=AIzaSy*********************

GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent
```

> **Note:** Never commit your API keys to GitHub.

---

# ▶️ Running the Application

### Start Backend

```bash
cd backend
npm start
```

Backend will start at

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend will start at

```
http://localhost:5173
```

Open the URL in your browser and allow microphone permission.

---
