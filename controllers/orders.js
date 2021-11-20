const mongoose = require("mongoose");
const Order = require("../models/Order");

const postOrder = async (req, res, next) => {
  const order = req.body;

  try {
    const updatedOrder = await Order.create(order);
    res.json(updatedOrder);
  } catch (error) {
    if (error.name === "ValidationError") {
      error.status = 400; // bad request as required fields are missing or not proeprly given
      return next(error);
    }

    error.status = 500;
    next(error);
  }
};

module.exports = {
  postOrder,
};
