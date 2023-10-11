const Sequelize = require("sequelize");
const db = require("../util/database");

const Cart = db.define("cart", {
  cartId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Cart;
