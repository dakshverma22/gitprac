const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var number = Number(req.body.number);
  var num2 = Number(req.body.num2);
  var calc = number + num2;

  res.send("the calculate ans is: " + calc);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var result = weight / (height * height);

  res.send("your BMI is: " + result);
});

app.listen("3000", function () {
  console.log("the file is serving on the local host 3000");
});
console.log("abcdfindex");
