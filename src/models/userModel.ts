import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isBlocked: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

export default User;