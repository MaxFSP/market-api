const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");
const Item = require("./models/item");
const Cart = require("./models/cart");
const List = require("./models/list");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//test route
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

//CRUD routes
app.use("/user", require("./routes/users"));
app.use("/item", require("./routes/items"));
app.use("/cart", require("./routes/carts"));
app.use("/list", require("./routes/items"));
app.use("/login", require("./routes/login"));
//app.use("/cart", require("./routes/cart"));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then((result) => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

const db = require("./util/database");
db.items = require("./models/item.js");
db.users = require("./models/user.js");
db.cart = require("./models/cart.js");
db.list = require("./models/list.js");
db.users.hasMany(db.items);
db.items.belongsTo(db.users);
db.items.hasMany(db.list);
db.list.belongsTo(db.items);
db.cart.hasMany(db.list);
db.list.belongsTo(db.cart);
db.users.hasOne(db.cart);
db.cart.belongsTo(db.users);
