# Frontend - Student Support Portal

This Next.js frontend powers the user interface for ENY Consulting's Business Analysis School, providing a responsive chat interface for students to interact with the AI Q&A bot, submit escalations, and provide lead information. It supports real-time communication via Socket.io and displays chat history for authenticated users.

---

<p align="center">
  <img 
    src="https://res.cloudinary.com/djkrhjgjd/image/upload/v1757062248/chatbot/mermaid-diagram_5_p6v6uc.svg" 
    alt="Chatbot design" 
    style="width: 100%; height: auto;" 
  />

---

<img src="https://res.cloudinary.com/djkrhjgjd/image/upload/v1757060720/chatbot/chat_lg_z9ku0b.png" alt="chtbot_ui"/>

---



## Overview

The Frontend:

* Offers a mobile-friendly chat UI with Tailwind CSS.
* Connects to Middle Backend for AI queries, escalations, and chat history.
* Uses Socket.io for real-time responses.
* Supports optional admin dashboard view.

This service delivers a seamless user experience for global students.

---

## Tech Stack

* **Framework**: Next.js (React + TypeScript)
* **Styling**: Tailwind CSS
* **Real-Time**: Socket.io Client
* **Deployment**: Vercel

---

**Role in Flow**:
1. Sends user queries to Middle Backend via HTTP/Socket.io.
2. Displays AI responses, escalation prompts, and chat history.
3. Handles lead capture forms.

---

## Getting Started

### Prerequisites

* Node.js (v18+)
* GitHub account

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/frontend.git
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create `.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

### 4. Run Server

```bash
npm run dev
```

Access at http://localhost:3000.

---

## Codebase Structure

```
/
├── src/
│   ├── app/               # Next.js routes
│   ├── components/        # UI (Chat, Modal)
│   ├── hooks/             # Custom hooks (useChat)
│   ├── lib/               # API/Socket.io clients
│   └── utils/             # Helpers
├── tailwind.config.js     # Styling
└── README.md
```

---

## Security

* **Validation**: Client-side checks with Zod.
* **Security**: JWT for authenticated routes (chat history).
* **Privacy**: GDPR-compliant UI prompts.

---

## Testing

* React Testing Library + Jest for components.

```bash
npm test
```

---

## Deployment

* Deploy to Vercel via Git push.
* Set env vars in Vercel dashboard.

URL: https://eny-bot-fe.vercel.app

---

## Author

Built by BLARD OMU for ENY Consulting Technical Assessment.
