## Message Board Application (React + Node.js + TypeScript)

This repository contains the source code for a Message Board application built with:

1. Frontend: React + TypeScript
2. Backend: Express.js + TypeScript

### Getting Started

For setting up the project locally, please clone the repo and follow the below steps

### Prerequisites

Node v18 or later installed on the machine

### Docker

To run the application using Docker:

1. Make sure Docker and Docker Compose are installed
2. Run `docker-compose up --build`
3. Open the browser and navigate to http://localhost:5173

To stop the containers:
```
docker-compose down
```

### Local Development

#### Backend
```
cd backend
npm install
npm run serve
```
The server runs on port 8000.

To run tests:
```
npm test
```

#### Frontend
```
cd frontend
npm install
npm run dev
```
Open the browser and navigate to http://localhost:5173

To run tests:
```
npm test
```

### Features
1. Create a new message by providing name and message
2. View a list of all the messages

### Video walkthrough

https://github.com/swathyjayaseelan/MessageBoardApp/assets/13806470/e9a66535-23b3-43c7-8aa1-1869a12c653f


