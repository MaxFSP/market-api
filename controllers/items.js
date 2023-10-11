const Item = require("../models/item");
// CRUD Controllers

//get all items
exports.getItems = (req, res, next) => {
  Item.findAll()
    .then((items) => {
      res.status(200).json({ items: items });
    })
    .catch((err) => console.item(err));
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
    .catch((err) => console.item(err));
};

//create item
exports.createItem = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const userId = req.body.userId;

  Item.create({
    name: name,
    email: email,
    password: password,
  })
    .then((result) => {
      console.item("Created Item");
      res.status(201).json({
        message: "Item created successfully!",
        item: result,
      });
    })
    .catch((err) => {
      console.item(err);
    });
};

//update item
exports.updateItem = (req, res, next) => {
  const itemId = req.params.itemId;
  const updatedName = req.params.name;
  const updatedEmail = req.params.email;
  const updatedPassword = req.params.password;

  Item.findByPk(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: "Item not found!" });
      }
      item.weather = updatedWeather;
      item.name = updatedName;
      item.email = updatedEmail;
      item.password = updatedPassword;
      return item.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Item updated!", item: result });
    })
    .catch((err) => console.item(err));
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
    .catch((err) => console.item(err));
};
