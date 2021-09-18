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
  console.log("RQ BODY", req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/LoginUser", async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({
    username: username,
    password: password,
  }).exec();

  if (user) {
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      mobile: user.mobile,
    };
    console.log("userData", userData);
    res.status(200).send(userData);
  } else {
    res.status(404).send({ error: "Incorrect username / password!" });
  }
});

module.exports = router;
