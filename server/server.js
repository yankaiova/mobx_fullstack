require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let prodarray = [{ id: 1, name: "Антон", born: "10.10.1998", age: 25 }];
let devarray = [{ id: 1, name: "Юлия", born: "09.08.2001", age: 22 }];
app.use(cors());
app.listen(8000, () => console.log(`Listening on port ${8000}`));

function calcAge(dateOfBorn) {
  const diff = new Date(Date.now() - Date.parse(dateOfBorn));
  return Math.abs(diff.getUTCFullYear() - 1970);
}

function sortDate(arr) {
  return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
app.get("/dev/get", (req, res) => {
  res.send(devarray);
});
app.post("/dev/edit", (req, res) => {
  let data = req.body;
  data.map((user) => {
    if (user.age === "?") {
      user.age = calcAge(user.born);
    }
  });
  devarray = sortDate(data.slice());
  res.send("success req post");
});
app.get("/prod/get", (req, res) => {
  res.send(prodarray);
});
app.post("/prod/edit", (req, res) => {
  let data = req.body;
  data.map((user) => {
    if (user.age === "?") {
      user.age = calcAge(user.born);
    }
  });
  prodarray = sortDate(data.slice());
  res.send("success req post");
});
