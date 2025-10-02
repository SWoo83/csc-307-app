// backend.js
import express from "express";

const app = express();
const port = 8000; //Possibly change later to desired number to avoid conflict

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});