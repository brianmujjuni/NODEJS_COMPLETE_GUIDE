const Sequelize = require("sequelize");
const sequelize = require("../uitl/database");
const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
});
module.exports = Order;
