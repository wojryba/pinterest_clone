const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const ImgSchema = new Schema({
  creator: { type: String, index: true, ref: 'User' },
  url: {type: String, required: true},
  description: String,
  likes: {type: Array, index: true, default: []},
  shares: Number,
  time: String
});

const Img = mongoose.model('Img', ImgSchema);

module.exports = Img;
