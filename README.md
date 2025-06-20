#  Simple User REST API – Internship Assessment

This project is a simple RESTful API built with **Node.js** and **Express.js** as part of a backend internship technical assessment for **Quarks Group LTD**.

It demonstrates proper project structure with **routes**, **controllers**, and **services**, and includes input validation, error handling, and in-memory data storage (no database used).

---

##  Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **UUID** – For generating unique user IDs
- **Modular Architecture** – Clean code separation

---
## project Structure
**assesment_node/**


├── index.js              App entry point, sets up Express server


├── routes/               API route definitions

 └── userRoutes.js     Routes for POST /users and GET /users/:id



├── controllers/          Handles request validation and control flow

 └── userController.js  Controller functions for each endpoint


├── services/              Business logic and in-memory data store

 └── userService.js     Create and fetch users using UUID


├── package.json          # Project metadata and dependencies

└── README.md             # Project documentation



---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NaomeJoyeuse/assesment_node.git
cd assesment_node
```
### 2. Install Dependencies

```
npm install
```
#### 3.Start the Server

```
npm start
```
## End points
### Create User(request body)
```
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
### response(201 created)
```
{
  "id": "uuid-v4-generated-id",
  "name": "John Doe",
  "email": "john@example.com"
}
 ```
### Error Response 400 Bad Request
```
{
  "error": "Invalid or missing name/email"
}
```

### Get User by ID
      GET /users/:id
```
{
  "id": "uuid-v4-generated-id",
  "name": "John Doe",
  "email": "john@example.com"
}
```





