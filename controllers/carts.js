const Cart = require("../models/cart");
// CRUD Controllers

//get all carts
exports.getCarts = (req, res, next) => {
  Cart.findAll()
    .then((carts) => {
      res.status(200).json({ carts: carts });
    })
    .catch((err) => console.log(err));
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
    .catch((err) => console.log(err));
};

//create cart
exports.createCart = (req, res, next) => {
  const description = req.body.description;
  const userUserId = req.body.userId;

  Cart.create({
    description: description,
    userUserId: userUserId,
  })
    .then((result) => {
      console.cart("Created Cart");
      res.status(201).json({
        message: "Cart created successfully!",
        cart: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update cart
exports.updateCart = (req, res, next) => {
  const cartId = req.params.cartId;
  const updatedDescription = req.params.description;
  const updatedUserId = req.params.userUserId;

  Cart.findByPk(cartId)
    .then((cart) => {
      if (!cart) {
        return res.status(404).json({ message: "Cart not found!" });
      }
      cart.description = updatedDescription;
      cart.userUserId = updatedUserId;
      return cart.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Cart updated!", cart: result });
    })
    .catch((err) => console.log(err));
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
    .catch((err) => console.log(err));
};
