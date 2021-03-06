const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  username: {
    type: String,
    unique: false,
  },
  winner: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  tennisBuddy: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
});

const GameResult = mongoose.model('gameResults', matchSchema);
module.exports = GameResult;
