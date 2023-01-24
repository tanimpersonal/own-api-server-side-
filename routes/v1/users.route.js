const express = require("express");
const { getUsers, randomUser } = require("../../controllers/users.controller");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/random/:id").get(randomUser);
module.exports = router;
