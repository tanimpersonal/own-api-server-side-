const express = require("express");
const {
  getUsers,
  randomUser,
  saveUser,
  patchUser,
  deleteUser,
} = require("../../controllers/users.controller");
const router = express.Router();

router.route("/all").get(getUsers);
router.route("/random/:id").get(randomUser);
router.route("/save").post(saveUser);
router.route("/update/:id").patch(patchUser);
router.route("/delete/:id").delete(deleteUser);
module.exports = router;
