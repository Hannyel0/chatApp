# **ChatApp**

ChatApp is a real-time chat application that allows users to create accounts, log in, and chat with others using WebSocket technology. The app ensures smooth communication by providing an intuitive user interface and secure authentication.

---

## **Features**

- User Authentication: Secure sign-up and login using JWT (JSON Web Tokens).

- Real-time Messaging: Seamless and instantaneous communication via WebSockets.

- User Sessions: Automatically logs users in if they have an active session.

- Private Chats: Start conversations with specific users.

- Typing Indicators: See when others are typing.

- Message Persistence: Chats are stored in the database to retrieve previous messages.

---

### **Prerequisites**

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/Hannyel0/chatApp.git
   cd chatApp
   ```
2. Install dependencies for the backend:

    ```bash
    cd server
    npm install
   ```
3. Install dependencies for the frontend:

    ```bash
    cd ../client
    npm install
   ```
4. Set up environment variables, create a .env file in the server directory with the following:

    ```bash
    PORT=3939
    MONGO_URI=mongodb://localhost:27017/chatapp
    SECRET_KEY=your_secret_key
    FRONTEND_URL=http://localhost:5173
    ```

## **Getting Started**

1. Start the backend server:
   ```bash
    cd server
    npm start
   ```
2. Start the frontend server:

    ```bash
    cd client
    npm start
   ```
