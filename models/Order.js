const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema(
  {
    mobileNo:{
        type:Number,
        minlength:[10, 'Must be 10 characters long'],
        required:[true,'Mobile number is required']
    },
    shippingAddress: {
      type: String,
      minlength: [10, 'Must be 10 characters long'],
      required: [true, 'Text is required']
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: true
    },
    status: {
        type: String,
        enum: ['Confirming','On the way...', 'Delivered'],
        required: [true, 'Order Status is required']
      },
    // userId: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: true
    // }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
