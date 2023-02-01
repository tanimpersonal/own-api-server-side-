const express = require("express");
const {
  getUsers,
  randomUser,
  saveUser,
} = require("../../controllers/users.controller");
const router = express.Router();

router.route("/all").get(getUsers);
router.route("/random/:id").get(randomUser);
router.route("/save").post(saveUser);
module.exports = router;
