const Sequelize = require("sequelize");
const db = require("../util/database");

const List = db.define("list", {
  listId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = List;
