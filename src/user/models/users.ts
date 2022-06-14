import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const UserModel = model('users', userSchema);

export default UserModel;
