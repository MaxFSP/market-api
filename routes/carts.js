const router = require("express").Router();
const controllerCart = require("../controllers/carts");
// CRUD Routes /carts
router.get("/", controllerCart.getCart); // /carts
router.get("/:cartId", controllerCart.getCart); // /users/:cartId
router.post("/", controllerCart.createCart); // /carts
router.put("/:cartId", controllerCart.updateCart); // /carts/:CartId
router.delete("/:cartId", controllerCart.deleteCart); // /carts/:CartId

module.exports = router;
