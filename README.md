## Message Board Application

A full-stack message board application.

### Quick Start (Docker)

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop)

```bash
# Clone the repository
git clone "https://github.com/swathyjayaseelan/MessageBoardApp.git"
cd MessageBoardApp

# Create data directory for SQLite
mkdir -p backend/data

# Build and run
docker-compose up --build
```

Open http://localhost:5173 in your browser.

To stop:
```bash
docker-compose down
```

### Local Development

**Prerequisites:** Node.js v18 or later

#### Backend
```bash
cd backend
npm install
npm run serve
```
Server runs on http://localhost:8000

#### Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on http://localhost:5173

### Running Tests

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

```

### Features

- Create new messages with name and content
- View all messages in a list
- Data persists in SQLite database
- Fully containerized with Docker

### API Endpoints

GET: /api/messages - Get all messages
POST: /api/messages - Create a new message

### Video Walkthrough

https://github.com/swathyjayaseelan/MessageBoardApp/assets/13806470/e9a66535-23b3-43c7-8aa1-1869a12c653f


