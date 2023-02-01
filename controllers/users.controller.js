const fs = require("fs");
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
module.exports.saveUser = (req, res, next) => {
  const receivedData = req.body;
  // const json = JSON.stringify(receivedData);
  const dataArray = require("../public/users.json");
  dataArray.push(receivedData);
  //this writefile should have a relative path. not the exact path
  fs.writeFileSync("public/users.json", JSON.stringify(dataArray), (err) => {
    if (err) throw err;
    console.log("File Saved");
  });
  console.log(dataArray);
};
