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

## 🎨 Frontend

| Technology | Purpose |
|------------|---------|
| React.js | Building the user interface |
| Vite | Fast development & build tool |
| HTML5 | Structure of the application |
| CSS3 | Styling & Responsive Design |
| JavaScript (ES6+) | Frontend logic |
| Axios | API communication |
| React Context API | Global user state management |
| Web Speech API | Speech-to-Text (Voice Recognition) |
| Speech Synthesis API | Text-to-Speech (AI Voice Response) |

---

## ⚙️ Backend

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | REST API development |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| JWT (JSON Web Token) | User authentication |
| Multer | File upload handling |
| Cloudinary | Assistant avatar storage |
| dotenv | Environment variable management |
| CORS | Cross-origin resource sharing |

---

## 🤖 AI & Voice Technologies

| Technology | Purpose |
|------------|---------|
| Google Gemini API | Natural language understanding & AI responses |
| Speech Recognition API | Converts user speech into text |
| Speech Synthesis API | Converts AI responses into voice |
| Intent Detection | Determines whether to answer or perform an action |

---

## 🛠 Development Tools

| Tool | Purpose |
|------|---------|
| Git | Version Control |
| GitHub | Source Code Hosting |
| npm | Package Management |
| VS Code | Development Environment |

---

# 📂 Project Structure

```text
Virtual_Assistant/
│
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── token.js
│   │
│   ├── controllers/
│   │   ├── auth.controllers.js
│   │   └── user.controllers.js
│   │
│   ├── middlewares/
│   │   ├── isAuth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── public/
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   │
│   ├── gemini.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Card.jsx
│   │   │
│   │   ├── context/
│   │   │   └── UserContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Customize.jsx
│   │   │   └── Customize2.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# 📸 Preview


### 👤 SignUp/SignIn 

<img width="1918" height="907" alt="Screenshot 2026-07-07 155253" src="https://github.com/user-attachments/assets/a04a14ca-a908-4df6-9592-1dcaeaf921b0" />

---

### 🎤 Voice Interaction

<img width="1900" height="907" alt="Screenshot 2026-07-07 155529" src="https://github.com/user-attachments/assets/287e574c-8b94-43c4-8cd3-977a1aaf5f6e" />

---

### 🤖 Choose Avtaar and Name

<img width="1918" height="911" alt="Screenshot 2026-07-07 155442" src="https://github.com/user-attachments/assets/3c300057-35f9-482d-989b-91129d8ec380" />

<img width="1918" height="908" alt="Screenshot 2026-07-07 155504" src="https://github.com/user-attachments/assets/0fed8ed8-e4bf-4ec6-af48-f44c2490aaa9" />

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

# 🚀 Usage

1. Launch both the backend and frontend servers.
2. Open the application in your browser.
3. Allow microphone permission when prompted.
4. Click the microphone button and start speaking.
5. The assistant converts your speech into text.
6. Your request is sent to the backend.
7. Google Gemini processes the request.
8. The assistant replies with both **text** and **voice**.
9. If the command matches a supported action, it performs that action automatically.

---

# 🎤 Example Voice Commands

| Command | Action |
|----------|--------|
| "Hello" | Greets the user |
| "Who are you?" | Introduces the assistant |
| "Open Google" | Opens Google |
| "Open YouTube" | Opens YouTube |
| "Search AI News" | Searches Google |
| "Play Lofi Music" | Opens YouTube search |
| "What's today's date?" | Speaks today's date |
| "What time is it?" | Speaks current time |
| "Tell me a joke" | AI-generated response |
| "Explain Machine Learning" | Gemini-generated explanation |

---

# 🧠 AI Request Pipeline

```text
        🎤 User Speaks
              │
              ▼
     Speech Recognition API
              │
              ▼
      Recognized User Query
              │
              ▼
     React Frontend (Axios)
              │
              ▼
     Express Backend Server
              │
              ▼
        Google Gemini API
              │
      Intent Identification
              │
     ┌────────┴─────────┐
     ▼                  ▼
General AI        Action Command
 Response          (Website/Search)
     │                  │
     └────────┬─────────┘
              ▼
      Structured Response
              │
              ▼
      Text + Voice Output
              │
              ▼
             User
```

---

# 🌟 Why This Project?

Unlike a traditional chatbot, this assistant combines multiple AI-powered technologies into a single seamless experience.

✔️ Natural voice conversations

✔️ Intelligent responses using Google Gemini

✔️ Browser automation through voice commands

✔️ Speech-to-Text + Text-to-Speech integration

✔️ Modern React-based user interface

✔️ Real-world full-stack architecture

✔️ Easily extendable with new commands and integrations

---

# 🎯 Current Capabilities

- ✅ Voice-based interaction
- ✅ AI-powered conversations
- ✅ Website automation
- ✅ Google search
- ✅ YouTube search
- ✅ Date & Time assistance
- ✅ Speech synthesis
- ✅ Responsive UI
- ✅ MERN architecture

---

# 🚧 Future Enhancements

The project is designed to be scalable. Planned features include:

- 📧 Email Assistant
- 📰 Latest News Updates
- 📅 Google Calendar Integration
- ⏰ Smart Reminder System
- 📂 File & Folder Operations
- 📱 WhatsApp Message Automation
- 🎵 Spotify Integration
- 🏠 Smart Home Control
- 🧠 Conversation Memory
- 🌍 Multi-language Support
- 📄 PDF Reading Assistant
- 💻 Desktop Application (Electron)
- 📱 Android Application

---

# 🤝 Contributing

Contributions are always welcome!

If you'd like to improve this project:

1. Fork this repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

Every contribution, whether it's fixing a bug, improving the UI, or adding a new feature, is greatly appreciated.

---

# 📜 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute it in accordance with the license.

---

# 👨‍💻 Author

### Rajanya Saha

**B.Tech CSE (AI & ML)**

---

<div align="center">

## ⭐ If you like this project, don't forget to give it a Star!

### Built with ❤️ using React, Node.js, Express & Google Gemini AI

*"Technology becomes truly intelligent when interaction feels natural."*

</div>
