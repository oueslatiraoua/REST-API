const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./config/.env" });

app.use(express.json());
mongoose.connect(process.env.MONGO_URI, (err) =>
  err ? console.log(err) : console.log("is connected")
);
const User = require("./Models/User");
//       POST :  ADD A NEW USER TO THE DATABASE
app.post("/api/createuser", (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});
//       GET :  RETURN ALL USERS
app.get("/api/findbyName/:name", (req, res) => {
  User.find({ name: req.params.name })

    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});
//       PUT : EDIT A USER BY ID
app.put("/api/findbyId/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});
//       DELETE : REMOVE A USER BY ID
app.delete("/api/delete/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});
app.listen(8001, () => console.log("is running"));
