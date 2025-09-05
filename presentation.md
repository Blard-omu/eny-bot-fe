# ENY Consulting AI Student Support System

**4-6 Slide Presentation**

**Presenter: Peter Omu**  
**Date: September 4, 2025**  
**Time: 09:24 PM WAT**  
**Role: Mid-Level Fullstack Developer**

---

<p align="left">
  <img 
    src="https://res.cloudinary.com/djkrhjgjd/image/upload/v1757060719/chatbot/chatbot_md1_py19pn.png" 
    alt="Chatbot design" 
    style="width: 50%; height: auto;" 
  />
  </p>


## Slide 1: Title & Business Context

**ENY Consulting AI Student Support System**  
*AI-Powered Chatbot & Lead Conversion Platform*

- **Business Context:**  
  ENY Consulting’s Business Analysis School trains professionals for tech roles (e.g., CBAP certification).  
- **Challenges:**  
  - Scaling personalized support.  
  - Efficient lead management.  
  - Reducing support workload.  
- **Solution:** AI chatbot for instant, context-aware answers with escalation & lead capture.

---

## Slide 2: System Overview

**3-Layer Architecture for Synergy**

<p align="center">
  <img 
    src="https://res.cloudinary.com/djkrhjgjd/image/upload/v1757062593/chatbot/mermaid-diagram_2_e17jeb.svg" 
    alt="Chatbot design" 
    style="width: 100%; height: auto;" 
  />
  </p>

- **Frontend:** User-friendly chat UI.  
- **Middle Layer:** Auth, APIs, data storage.  
- **Core Layer:** AI logic with RAG pipeline.  
- **Synergy:** Seamless user experience with scalable backend processing.

---

## Slide 3: Chat Flow & User Journey

**How It Works**

<img 
    src="https://res.cloudinary.com/djkrhjgjd/image/upload/v1757062248/chatbot/mermaid-diagram_5_p6v6uc.svg" 
    alt="Chatbot design" 
    style="width: 100%; height: auto;" 
  />


- **Escalation:** Triggers if confidence < 0.5, routing to support team.  
- **Lead Capture:** Stores emails for enrollment queries.

---

## Slide 4: AI Integration & Frontend UI

**AI & RAG Pipeline**  
- **RAG Process:**  
  1. Embed query (SentenceTransformers).  
  2. Search ChromaDB for context.  
  3. Generate response with DeepSeek AI.  
- **Benefits:** Context-aware, low hallucination, multi-turn support.  

**Frontend Chat UI (Next.js + Tailwind)**  
- Modal chatbot with suggestions carousel.  
- Conversation bubbles, typing indicator, mobile-first design.  
- [Insert Demo Screenshot/GIF Here]

---

## Slide 5: Technical Implementation & Deployment

**Tech Stack**  
- **Frontend:** Next.js, Tailwind CSS.  
- **Middle Layer:** Node.js/Express, MongoDB, Redis.  
- **Core Layer:** FastAPI, ChromaDB, DeepSeek API.  

**Deployment**  
- Vercel (Frontend).  
- Render (Middle + Core).  
- Docker (ChromaDB).  
- Mongo Atlas (Database).  
