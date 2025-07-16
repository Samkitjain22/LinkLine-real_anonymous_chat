# 📡 Linkline

**Linkline** is a modern real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) featuring secure authentication, responsive UI, media sharing (images), emoji support, themes, and real-time messaging using Socket.IO.

---

## 🚀 Features

- 🔐 **Authentication**: JWT-based login and signup
- 💬 **Real-time Chat**: Powered by Socket.IO
- 🖼️ **Image Upload**: Send and preview images (via Cloudinary)
- 😃 **Emoji Picker**: Add fun to your conversations
- 🎨 **Theme Switcher**: 30+ DaisyUI themes
- 🧑‍🤝‍🧑 **Contact Sidebar**: Chat with other users
- 🌐 **Responsive UI**: Works well on desktop and mobile
- 🗑️ **Google Translate Removed**: Clean experience
- ☁️ **Deployed-Ready**: Can be hosted on Render/Netlify/Vercel

---

## 🛠️ Tech Stack

### 🌐 Frontend
- React.js + Vite
- TailwindCSS + DaisyUI
- Socket.IO Client

### 🔙 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Socket.IO Server
- Cloudinary (for image storage)

---


## 🗂️ Folder Structure

```
chatverse-fullstack-main/
├── backend/
│   ├── src/
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/linkline.git
cd linkline
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5002
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend:

```bash
npm start
```

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌈 Themes

The app includes over 30 pre-configured themes via DaisyUI. Users can switch themes in real-time through the settings panel.

---


## 🔐 Auth

- JWT stored in HTTP-only cookies
- Protected routes on the backend
- Auth state managed with Zustand on the frontend

---

## 🖼️ Demo

> Coming soon 

---

