## Message Board Application

A full-stack message board application built with modern technologies.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Vite, Bootstrap |
| Backend | Express.js, TypeScript, Node.js 18 |
| Database | SQLite |
| DevOps | Docker, Docker Compose, Nginx |
| Testing | Vitest, React Testing Library, Supertest |

### Quick Start (Docker)

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop)

```bash
# Clone the repository
git clone <repo-url>
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

# Frontend coverage
cd frontend && npm run test:coverage
```

### Project Structure

```
MessageBoardApp/
├── backend/
│   ├── src/
│   │   ├── database/        # SQLite connection
│   │   ├── interfaces/      # TypeScript types
│   │   └── messages/        # Routes & services
│   ├── data/                # SQLite database file
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── interfaces/      # TypeScript types
│   └── Dockerfile
└── docker-compose.yml
```

### Features

- Create new messages with name and content
- View all messages in a list
- Data persists in SQLite database
- Fully containerized with Docker

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/messages | Get all messages |
| POST | /api/messages | Create a new message |

### Video Walkthrough

https://github.com/swathyjayaseelan/MessageBoardApp/assets/13806470/e9a66535-23b3-43c7-8aa1-1869a12c653f


