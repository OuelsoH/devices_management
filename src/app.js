const express = require("express");
const app = express();
const env = require("./config/env");
const userRouter = require("./routes/users.route");
const db_connection = require("./config/db");
const customError =  require("./helpers/errorHandler")

db_connection.connect((err) => {
    const error = new customError("")
  if (err) {
    console.log(err)
  }else{
      console.log("database connected");

  }
});

app.use("/api/users/", userRouter);

app.use((req, res) => {
  res.send("not found");
});

app.listen(env.PORT, env.HOSTNAME, () => {
  console.log(`working on http://${env.HOSTNAME}:${env.PORT}`);
});
