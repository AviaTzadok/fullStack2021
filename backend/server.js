const express = require("express");
// const req = require("express/lib/request");
const app = express(); //מפעיל שרת
let cors = require("cors"); //עוקף אבטחה
app.use(cors());

const port = 5001; //מספר שאני מגדיר
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//req-בקשה res-תשובה
app.post("/message", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//     res.send("Hi from home!");
// });

// app.get("/users", (req, res) => {
//     res.send("Hi users");
// });

// app.get("/food/:item/yummy/:user", (req, res) => {
//     console.log(req.params);
//     const item = req.params.item;
//     const user = req.params.user;
//     res.send(`you picked ${item} ${user}`);
// });

// app.post("check", (req, res) => {
//   console.log(req.body);
//   res.send(`Good user!!!`);
// });

// app.get("/ab*cd", (req, res) => {
//     res.send(`Good pattern!!!`);
// });
