const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/happycartDB", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful.");
  })
  .catch((err) => {
    console.log("DB connection failed.");
  });
