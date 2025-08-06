# AuthApplication

A simple React and Node.js authentication app with login and signup functionality.  
Users can register and log in using their email and password.  
The backend uses Express and MongoDB.

## Screenshot

![App Screenshot](/authapplication/Screenshot 2025-08-06 191643.png)
![App Screenshot](/authapplication/Screenshot 2025-08-06 191656.png)

## Frontend Setup

1. Navigate to the `frontend` folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```
   The app will run on [http://localhost:3000](http://localhost:3000).

## Backend Setup

1. Navigate to the `backend` folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. change .env file
   ```
   PORT = ""
   MONGODB = ""
   
4. Start the backend server:
   ```
   node server.js
   ```
   The backend will run on [http://localhost:3000](http://localhost:3000) and connect to MongoDB.
