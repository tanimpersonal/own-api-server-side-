const fs = require("fs");
module.exports.getUsers = (req, res, next) => {
  const data = require("../public/users.json");
  res.header("Content-Type", "application/json");
  res.json(data);
};
module.exports.randomUser = async (req, res, next) => {
  const datas = await require("../public/users.json");
  res.header("Content-Type", "application/json");
  const params = req.params;
  const { id } = params;
  const randomItem = await datas.find((data) => data.id == id);
  console.log(randomItem);
  await res.json(randomItem);
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
};
module.exports.patchUser = (req, res, next) => {
  const data = require("../public/users.json");
  const { id, gender, name, contact, address, photoUrl } = req.body;
  const matchData = data.find((data) => data.id == id);
  const deleteData = data.filter((data) => data.id != id);
  matchData.id = id;
  matchData.gender = gender;
  matchData.name = name;
  matchData.contact = contact;
  matchData.address = address;
  matchData.photoUrl = photoUrl;
  deleteData.push(matchData);
  fs.writeFileSync("public/users.json", JSON.stringify(deleteData), (err) => {
    if (err) throw err;
    console.log("File Saved");
  });
  console.log(deleteData);
  // console.log(req.body);
};
module.exports.deleteUser = (req, res, next) => {};
