const express = require("express");
require("./db/connections");
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`connection is setup at port :: ${port}`);
});
