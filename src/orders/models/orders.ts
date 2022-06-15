import { Schema, model, Types } from 'mongoose';

const orderSchema = new Schema({
  destination: {
    type: String,
  },
  qty: {
    type: Number,
  },
  logisticsStatus: {
    type: String,
  },
  productId: {
    type: Types.ObjectId,
    ref: 'products'
  },
  paymentStatus: {
    type: String,
  },
  buyerId: {
    type: Types.ObjectId,
    ref: 'users'
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const OrderModel = model('orders', orderSchema);

export default OrderModel;
