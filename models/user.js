const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  permission: {
    type: Sequelize.INTEGER,
    allowNull: true,
    default: 0,
  },
});

module.exports = User;
