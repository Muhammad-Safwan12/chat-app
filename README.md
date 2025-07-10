# 💬 Chat App - Real-Time MERN Chat Application

A full-stack real-time **chat application** built using the **MERN Stack** (MongoDB, Express, React, Node.js) and **Socket.io** for bi-directional communication between users.


## 🚀 Features

- 🔐 User authentication with JWT
- 📦 Backend API using Express & MongoDB
- 💬 Real-time chat using Socket.io
- 💡 RESTful APIs with Mongoose schema
- 📁 Clean folder structure (client & server)
- ⚙️ Environment variables for secrets
- ⚡ Instant messaging without refresh

## 🛠️ Tech Stack

### Frontend (Client)
- ⚛️ React.js (with Vite)
- 📦 Axios for API calls
- 🎨 Tailwind CSS (or CSS Modules, if used)
- 🔄 Socket.io-client

### Backend (Server)
- 🧠 Node.js + Express
- 🔐 JSON Web Tokens (JWT)
- 🗄️ MongoDB (with Mongoose)
- 📡 Socket.io for real-time events
- 🌐 CORS, dotenv for environment config
- 

## 📁 Project Structure

<pre> ## 📁 Project Structure ``` chat-app/ ├── client/ # React frontend (Vite) │ ├── src/ │ ├── .env # React env vars (ignored) │ └── package.json │ ├── server/ # Node backend │ ├── server.js │ ├── .env # Secrets & config (ignored) │ └── package.json │ ├── .gitignore ├── README.md └── package-lock.json ``` </pre>

## 🧪 Local Setup Instructions

> Follow these to run the app locally on your machine.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Muhammad-Safwan12/chat-app.git
cd chat-app

# 2️⃣ Setup Server

```
cd server
npm install
```

## ➕ Create a .env file inside server/

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

## 🔄 Run Backend Server

```
npm run dev
```

# 3️⃣ Setup Client

```
cd ../client
npm install
```

## ➕ Create a .env file inside client/
```
VITE_SERVER_URL=http://localhost:5000
```

## 🔄 Run Frontend
```
npm run dev
```
##🌍 Deployment (Optional)
- 🧑‍💻 Frontend: Netlify or Vercel
- 🛠 Backend: Render or Railway

# 🙌 Author
**Muhammad Safwan**
























