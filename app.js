const express = require("express");

const db = require("./db.js");

const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

const port = process.env.PORT || 3200;

app.get("/teachers", (req, res) => {
  res.status(200).send(db.getTeachers());
});

app.get("/teachers/battery", (req, res) => {
  res.status(200).send(db.hugeGetTeachers());
});

app.get("/teachers/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(db.getTeacher(id));
});

app.post("/teachers", (req, res) => {
  console.log(req.body);
  const teacher = req.body;
  db.createTeacher(teacher);
  res.status(201).send();
});

app.delete("/teachers/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(db.deleteTeacher(id));
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
