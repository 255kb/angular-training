var express = require("express");
var app = express();

app.use(express.json());

const tasks = [
  {
    title: "Task 1",
    desc: "Task 1 description",
    date: "2023-02-10",
    done: false,
  },
  {
    title: "Task 2",
    desc: "Task 2 description",
    date: "2023-02-05",
    done: false,
  },
];

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/tasks", function (req, res) {
  res.send(tasks);
});

app.post("/tasks", function (req, res) {
  tasks.push(req.body);
  res.status(201).send({ response: "success" });
});

app.delete("/tasks/:index", function (req, res) {
  tasks.splice(req.params.index, 1);

  res.send(tasks);
});

// start the server
app.listen(3000, function () {
  console.log("Hello I am running on http://localhost:3000");
});
