const Cart = require("../models/cart");
// CRUD Controllers

//get all carts
exports.getCarts = (req, res, next) => {
  Cart.findAll()
    .then((carts) => {
      res.status(200).json({ carts: carts });
    })
    .catch((err) => console.cart(err));
};

//get cart by id
exports.getCart = (req, res, next) => {
  const cartId = req.params.cartId;
  Cart.findByPk(cartId)
    .then((cart) => {
      if (!cart) {
        return res.status(404).json({ message: "Cart not found!" });
      }
      res.status(200).json({ cart: cart });
    })
    .catch((err) => console.cart(err));
};

//create cart
exports.createCart = (req, res, next) => {
  const description = req.body.description;
  const userId = req.body.userId;

  Cart.create({
    description: description,
    userId: userId,
  })
    .then((result) => {
      console.cart("Created Cart");
      res.status(201).json({
        message: "Cart created successfully!",
        cart: result,
      });
    })
    .catch((err) => {
      console.cart(err);
    });
};

//update cart
exports.updateCart = (req, res, next) => {
  const cartId = req.params.cartId;
  const updatedDescription = req.params.description;
  const updatedUserId = req.params.userId;

  Cart.findByPk(cartId)
    .then((cart) => {
      if (!cart) {
        return res.status(404).json({ message: "Cart not found!" });
      }
      cart.description = updatedDescription;
      cart.userId = updatedUserId;
      return cart.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Cart updated!", cart: result });
    })
    .catch((err) => console.cart(err));
};

//delete cart
exports.deleteCart = (req, res, next) => {
  const cartId = req.params.cartId;
  Cart.findByPk(cartId)
    .then((cart) => {
      if (!cart) {
        return res.status(404).json({ message: "Cart not found!" });
      }
      return Cart.destroy({
        where: {
          id: cartId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "Cart deleted!" });
    })
    .catch((err) => console.cart(err));
};
