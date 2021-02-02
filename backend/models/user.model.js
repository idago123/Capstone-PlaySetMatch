const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  availability: {
    type: String,
  },
  skillLevel: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  image: {
    type: String,
  },
  bio: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
