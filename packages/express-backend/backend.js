// backend.js
import express from "express";
import cors from "cors";
import userServices from "./user-services.js";
const { getUsers, findUserById, addUser, deleteUser } = userServices;
// import {
//   getUsers,
//   findUserById,
//   addUser,
//   deleteUser,
// } from "./user-services.js";

const app = express();
const port = 8000; //Possibly change later to desired number to avoid conflict

//Middleware must be added before routes
app.use(cors());
app.use(express.json());

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor"
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer"
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor"
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress"
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender"
    }
  ]
};

//Gets all users
app.get("/users/all", (req, res) => {
  getUsers()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err.message));
});

//Get Users by name and then job
app.get("/users", (req, res) => {
  const { name, job } = req.query;
  getUsers(name, job)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err.message));
});

//Get Users by name and job
app.get("/users/search", (req, res) => {
  const { name, job } = req.query;
  if (!name || !job) {
    return res.status(400).send("Missing query parameters 'name' or 'job'");
  }
  findUserByNameAndJob(name, job)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err.message));
});

//Get User by ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id; //or req.params.id
  findUserById(id)
    .then((user) => {
      if (!user) return res.status(404).send("Resource not found.");
      return res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err.message)); 
});

const newId = () => Math.random().toString(36).substring(2, 8);

//Create and insert User
app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd)
    .then((user) => res.status(201).send(user))
    .catch((err) => res.status(500).send(err.message));
});


//Delete User via ID
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    deleteUser(id)
      .then((deletedUser) => {
        if (!deletedUser) return res.status(404).send("Resource not found.");
        return res.status(204).send();
      })
      .catch((err) => res.status(500).send(err.message));
});

//Get Users
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

