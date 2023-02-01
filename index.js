const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const port = 5000;
const usersRoute = require("./routes/v1/users.route.js");
app.use("/user", usersRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
