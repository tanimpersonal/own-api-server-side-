module.exports.getUsers = (req, res, next) => {
  const data = require("../public/users.json");
  res.header("Content-Type", "application/json");
  res.json(data);
};
module.exports.randomUser = (req, res, next) => {
  const datas = require("../public/users.json");

  res.header("Content-Type", "application/json");
  const params = req.params;
  const { id } = params;
  const randomItem = datas.find((data) => data.id == id);
  console.log(randomItem);
  res.json(randomItem);
  res.end();
};
