module.exports.getUsers = (req, res, next) => {
  const data = require("../public/users.json");
  res.header("Content-Type", "application/json");
  res.json(data);
};
