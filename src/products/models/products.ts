import { Schema, model, Types } from 'mongoose';

const productSchema = new Schema({
  address: {
    type: String,
  },
  price: {
    type: Number,
  },
  productAvatar: {
    type: String,
  },
  productName: {
    type: String,
  },
  sackType: {
    type: String,
  },
  sellerId: {
    type: Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const ProductModel = model('products', productSchema);

export default ProductModel;
