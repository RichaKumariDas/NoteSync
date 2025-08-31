🖥️ iNotebook – MERN Stack Note Management App
📌 Overview

iNotebook is a full-stack note-taking web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to securely sign up, log in, create, view, edit, and delete personal notes. The app ensures that each user can only access their own notes with JWT authentication and bcrypt-based password hashing.

This project is being developed as part of the Full Stack Software Developer Intern Assignment.
I am actively working on extending features and enhancements, but since the submission deadline has arrived, I am submitting the current working build.

✨ Features Implemented

🔐 Secure User Authentication (Signup/Login with JWT & bcrypt).

📝 Note Management → Create, View, Update, Delete notes.

👤 User-Specific Notes (each user only sees their own notes).

🌐 MERN Stack Architecture (MongoDB, Express.js, React.js, Node.js).

🎨 Responsive & Clean UI with React-Bootstrap.

🔄 Global State Management using React Context API.

🛠️ Tech Stack

Frontend: React.js, React-Bootstrap, Context API
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT, bcrypt
Tools: GitHub, VS Code, Postman

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/RichaKumariDas/NoteSync.git
cd iNotebook

2️⃣ Start the Frontend (React App)
cd notebook
npm install
npm start


Runs the app in development mode.

Open: http://localhost:3000

3️⃣ Start the Backend (Node.js + Express API)

Open a new terminal:

cd backend
npm install
nodemon index.js


Starts the backend server at: http://localhost:5000

Ensure MongoDB connection string is set correctly.

4️⃣ Environment Variables

In the backend/.env file, add:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000

📦 Development Status

✅ Core features are implemented and working (authentication, CRUD notes, user isolation).

🔄 I am continuously working on additional features like offline support, caching, real-time sync, and desktop packaging.

📅 Due to the submission deadline, this version is being shared, but improvements are ongoing.

👩‍💻 Author

Richa Kumari

📧 Email: richadas9801@gmail.com

🌐 LinkedIn: https://www.linkedin.com/in/richadas02/

💻 GitHub: https://github.com/RichaKumariDas