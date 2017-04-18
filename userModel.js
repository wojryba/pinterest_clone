const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
const Img = require('./imgModel');

const UserSchema = new Schema({
  user: {type: String, required: true, index: true, uniqe: true},
  picture: String,
  nick: String,
  images: [{ type: Schema.Types.ObjectId, ref: 'Img' }]
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);


module.exports = User;
