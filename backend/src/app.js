const express = require("express");
require("./db/connections");

const userRoutes = require("./routes/usersRoutes");
const app = express();
const port = process.env.PORT || 8000;

app.use("/users", userRoutes);
app.use(express.json());

app.listen(port, () => {
  console.log(`connection is setup at port :: ${port}`);
});
