📝 iNotebook — Full Stack Note-Taking App
📌 Overview

This project is a full-stack note-taking application where users can securely log in, create, and manage their personal notes.
The app is inspired by the requirements of the Full Stack Software Developer Intern — First Round Assignment.

Currently, the app is functional with secure authentication, note management, and a clean React frontend, while some advanced features are still under development.

🚀 Features Implemented
🔑 Authentication

User Signup/Login with username and password.

Passwords stored securely using hashing.

Each user can only access their own notes.

Persistent login with authentication tokens.

🖥️ Frontend (React)

Login/Signup Screen

Dashboard Screen to view and add notes.

Navigation bar for smooth movement between screens.

State Management using Context API.

Local Storage for storing auth tokens.

Responsive UI with React Router DOM for navigation.

⚙️ Backend (Node.js + Express)

REST APIs for:

User Signup/Login

Add Note

Fetch Notes (user-specific access)

MongoDB for persistent storage.

Middleware for secure routes using JWT.

🛠️ Work in Progress

The following features from the assignment are still under development:

🔄 Real-time sync of notes with WebSockets.

🗄️ Redis caching for faster “fetch notes” requests.

📡 Hybrid Backend (Python + Node.js) integration.

⚡ Offline-first mode (cache + sync when online).

🪟 Electron desktop packaging (.exe build with installer).

🎛️ User preferences (theme, font size) with local storage.

👤 Role-based access (user/admin).

🔒 Encrypted local storage for sensitive data.

📦 Tech Stack

Frontend: React, React Router DOM, Context API

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Token), bcrypt for password hashing

Other Tools: Nodemon for development

⚡ Getting Started
🔹 Prerequisites

Node.js installed

MongoDB running locally or on MongoDB Atlas

🔹 Installation & Setup

Clone the repo:

git clone https://github.com/RichaKumariDas/NoteSync.git
cd NoteSync


Install backend dependencies:

cd backend
npm install


Start the backend server (default port 5000):

nodemon index.js


You should see:

iNotebook backend listening on port 5000
Connected to MongoDB successfully


Open a new terminal and install frontend dependencies:

cd ../frontend
npm install


Start the React frontend (default port 3000):

npm start


Then open your browser at:

http://localhost:3000

📊 Design Choices & Assumptions

Chose React + Node.js + MongoDB stack for faster prototyping and scalability.

Used JWT authentication instead of sessions for better client-server communication.

Started with Context API for state management (simple & lightweight) — plan to extend to Redux/Zustand if scaling is required.

Prioritized core CRUD features before advanced functionalities (real-time sync, caching, packaging).

🚧 Limitations & Future Improvements

No desktop .exe packaging yet (Electron integration in progress).

Real-time sync (WebSockets) still pending.

Redis caching to optimize performance not yet added.

Offline mode and auto-update not implemented.

📦 Deliverables

GitHub Repo: https://github.com/RichaKumariDas/NoteSync.git

GitHub Profile: https://github.com/RichaKumariDas

Packaged .exe build: (To be delivered after remaining features are completed)

📬 Contact

📧 Email: richadas9801@gmail.com

📱 Phone: +91 8102996678

🌐 GitHub: https://github.com/RichaKumariDas