const express = require("express");
const app = express();
const port = 5000;
const usersRoute = require("./routes/v1/users.route.js");
app.use("/users", usersRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
