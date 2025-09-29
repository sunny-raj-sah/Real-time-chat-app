# Real-Time Chat Application

A **real-time chat application** built using **Node.js**, **Express.js**, and **Socket.IO**. This app allows multiple users to chat in real-time, supports **typing indicators**, **online user tracking**, and **private messaging** between users.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- Real-time public chat for multiple users
- Private messaging between selected users
- Typing indicator for active users
- Online user list updates dynamically
- System messages for join/leave notifications
- Built with scalability in mind using WebSockets

---

## Tech Stack

- **Backend:** Node.js, Express.js, Socket.IO
- **Frontend:** HTML, JavaScript
- **Database:** None (in-memory for demo; can be extended)
- **Real-time Communication:** Socket.IO
- **Authentication:** Simple username prompt (can be extended to JWT or OAuth)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

2. Install dependencies:

npm install

3. Start the server:

node index.js

4. Open the application in your browser:

http://localhost:4000

5. Usage

Enter a username when prompted.

Start chatting in the public chat.

Click on a username from the online users list to send private messages.

Watch typing notifications when others are typing.

System messages notify when a user joins or leaves the chat.

6. Project Structure
   real-time-chat-app/
   │
   ├─ index.js # Backend server with Socket.IO
   ├─ index.html # Frontend UI
   ├─ package.json # Node.js dependencies and scripts
   └─ README.md # Project documentation
