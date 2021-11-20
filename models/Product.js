const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,'Name of product is required'],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
      default: 0,
    },
    specifications: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "no-photo.jpg",
    },
  },
  { timestamps: true }
);

// Mongoose generates a Model called Products - a class with methods to make DB queries to a `products` collection
module.exports = mongoose.model(' Product ', productSchema);
