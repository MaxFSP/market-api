const controller = require("../controllers/login");
const router = require("express").Router();

// CRUD Routes /users
router.post("/", controller.Login); // /users

module.exports = router;
