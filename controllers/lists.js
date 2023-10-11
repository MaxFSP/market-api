const List = require("../models/list");
// CRUD Controllers

//get all lists
exports.getLists = (req, res, next) => {
  List.findAll()
    .then((lists) => {
      res.status(200).json({ lists: lists });
    })
    .catch((err) => console.log(err));
};

//get list by id
exports.getList = (req, res, next) => {
  const listId = req.params.listId;
  List.findByPk(listId)
    .then((list) => {
      if (!list) {
        return res.status(404).json({ message: "List not found!" });
      }
      res.status(200).json({ list: list });
    })
    .catch((err) => console.log(err));
};

//create list
exports.createList = (req, res, next) => {
  const itemId = req.body.itemId;
  const cartId = req.body.cartId;
  const quantity = req.body.quantity;

  List.create({
    itemId: itemId,
    cartId: cartId,
    quantity: quantity,
  })
    .then((result) => {
      console.log("Created List");
      res.status(201).json({
        message: "List created successfully!",
        list: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update list
exports.updateList = (req, res, next) => {
  const listId = req.params.listId;
  const updatedItemId = req.params.itemId;
  const updatedCartId = req.params.cartId;

  List.findByPk(listId)
    .then((list) => {
      if (!list) {
        return res.status(404).json({ message: "List not found!" });
      }
      list.itemId = updatedItemId;
      list.cartId = updatedCartId;
      return list.save();
    })
    .then((result) => {
      res.status(200).json({ message: "List updated!", list: result });
    })
    .catch((err) => console.log(err));
};

//delete list
exports.deleteList = (req, res, next) => {
  const listId = req.params.listId;
  List.findByPk(listId)
    .then((list) => {
      if (!list) {
        return res.status(404).json({ message: "List not found!" });
      }
      return List.destroy({
        where: {
          id: listId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "List deleted!" });
    })
    .catch((err) => console.log(err));
};
