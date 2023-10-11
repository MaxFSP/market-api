const Sequelize = require("sequelize");
const db = require("../util/database");

const Item = db.define("item", {
  itemId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Item;
