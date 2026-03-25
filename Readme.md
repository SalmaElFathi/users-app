#  Users Management Application

##  Description

This is a full-stack **Users Management application** that allows you to:

* Create new users
* View a list of users
* Search users
* Edit user information
* Delete users

The application is built using a **MERN-like architecture**:

* Frontend: React (with React Router & Axios)
* Backend: Node.js, Express
* Database: MongoDB

---

##  Features

###  User Management

*  Create user with validation (name, email, password)
*  Display all users in a table
*  Search users by name/email
*  Edit user information
*  Delete user with confirmation

###  UI/UX

* Responsive and clean interface
* Form validation (password confirmation)
* Error handling and feedback messages

---

##  Technologies Used

### Frontend

* React
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* bcrypt (for password hashing)

---

##  Project Structure

```
project/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── UserList.jsx
|   |   |   |__ Header.jsx
│   │   ├── pages/
│   │   │   ├── Users.jsx
│   │   │   ├── CreateUser.jsx
│   │   │   └── EditUser.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── index.js
```

---

##  Installation

###  Clone the repository

```bash
git clone https://github.com/your-username/users-management.git
cd users-app
```

---

###  Backend setup

```bash
cd server
npm install
npm start
```

Server runs on:

```
http://localhost:5000
```

---

###  Frontend setup

```bash
cd client
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

### API Endpoints

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| GET    | /api/users        | Get all users   |
| GET    | /api/users/:id    | Get single user |
| POST   | /api/users/create | Create user     |
| PUT    | /api/users/:id    | Update user     |
| DELETE | /api/users/:id    | Delete user     |


