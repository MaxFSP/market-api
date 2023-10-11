const router = require("express").Router();
const controllerItem = require("../controllers/items");
// CRUD Routes /items
router.get("/", controllerItem.getItem); // /items
router.get("/:itemId", controllerItem.getItem); // /users/:itemId
router.post("/", controllerItem.createItem); // /items
router.put("/:itemId", controllerItem.updateItem); // /items/:itemId
router.delete("/:itemId", controllerItem.deleteItem); // /items/:itemId

module.exports = router;
