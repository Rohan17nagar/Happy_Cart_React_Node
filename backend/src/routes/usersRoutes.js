const express = require("express");
const User = require("../models/users");
let router = express.Router();

router.use(express.json());

router.get("/GetUserDetails", (req, res) => {
  User.find()
    .then((result) => {
      res.status(200).json({
        userData: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

router.post("/PostUserDetails", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
