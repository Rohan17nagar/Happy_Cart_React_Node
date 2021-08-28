const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("E commerce -- Happy Cart");
});

app.post("/students", (req, res) => {
  res.send("Happy Cart");
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
