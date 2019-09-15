const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

// middleware

let teachers = [
  {
    id: "1",
    name: "Lesandro Ponciano"
  },
  {
    id: "2",
    name: "Maria Augusta"
  },
  {
    id: "3",
    name: "Marcelo Werneck"
  }
];

let teachersDetails = {
  "1": {
    id: "1",
    name: "Lesandro",
    disciplines: "Interação Humano Computador",
    description: "Ótimo professor e orientador!",
    university: "PUC Minas",
    birthday: "22/01/1985"
  },
  "2": {
    id: "2",
    name: "Lesandro",
    disciplines: "Interação Humano Computador",
    description: "Ótimo professor e orientador!",
    university: "PUC Minas",
    birthday: "22/01/1985"
  },
  "3": {
    id: "3",
    name: "Lesandro",
    disciplines: "Interação Humano Computador",
    description: "Ótimo professor e orientador!",
    university: "PUC Minas",
    birthday: "22/01/1985"
  }
};

app.get("/teachers", (req, res) => {
  res.status(200).send(teachers);
});

app.get("/teachers/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(teachersDetails[id]);
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
