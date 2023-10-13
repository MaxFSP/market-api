const Item = require("../models/item");
// CRUD Controllers

//get all items
exports.getItems = (req, res, next) => {
  Item.findAll()
    .then((items) => {
      res.status(200).json({ items: items });
    })
    .catch((err) => console.log(err));
};

//get item by id
exports.getItem = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.findByPk(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: "Item not found!" });
      }
      res.status(200).json({ item: item });
    })
    .catch((err) => console.log(err));
};

//create item
exports.createItem = (req, res, next) => {
  const description = req.body.description;
  const userId = req.body.userId;

  Item.create({
    description: description,
    userId: userId,
  })
    .then((result) => {
      console.log("Created Item");
      res.status(201).json({
        message: "Item created successfully!",
        item: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update item
exports.updateItem = (req, res, next) => {
  const itemId = req.params.itemId;
  const updatedDescription = req.params.description;
  const updatedUserId = req.params.UserId;
  Item.findByPk(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: "Item not found!" });
      }
      item.description = updatedDescription;
      item.userUserId = updatedUserId;
      return item.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Item updated!", item: result });
    })
    .catch((err) => console.log(err));
};

//delete item
exports.deleteItem = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.findByPk(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: "Item not found!" });
      }
      return Item.destroy({
        where: {
          id: itemId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "Item deleted!" });
    })
    .catch((err) => console.log(err));
};
