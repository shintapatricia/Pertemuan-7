var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var persons = [];

app.post("/person", (req, res) => (persons.push(req.body), res.json(req.body)));

app.get("/person", (req, res) => res.json(persons));
// var data = [];
// app.get("/data", (req, res) => {
//   res.json(data);
// });

// app.post("/data", (req, res) => {
//   data.push(Date.now());
//   res.json(data);
// });

http
  .createServer(app)
  .listen(8000, () => console.log("Server is running on port 8000"));
