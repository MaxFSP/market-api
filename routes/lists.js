const router = require("express").Router();
const controllerList = require("../controllers/lists");
// CRUD Routes /lists
router.get("/", controllerList.getList); // /lists
router.get("/:listId", controllerList.getList); // /users/:listId
router.post("/", controllerList.createList); // /lists
router.put("/:listId", controllerList.updateList); // /lists/:listId
router.delete("/:listId", controllerList.deleteList); // /lists/:listId

module.exports = router;
