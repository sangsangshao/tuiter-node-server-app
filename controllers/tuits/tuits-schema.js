import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  title: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  avatarIcon: String,
  image: String,
  topic: String,
  userName: String,
  handle: String,
  time: String,
  comments: Number,
  retuits: Number
}, {collection: 'tuits'});

export default schema;


// import mongoose from 'mongoose';
//
// const tuitsSchema = mongoose.Schema({
//   topic: String,
//   handle: String,
//   title: String,
//   attachment: {
//     image: String
//   },
//   time: String,
//   "logo-image": String,
//   "avatar-image": String,
//   posted: {type: Date, defaultValue: Date.now()},
//   tuit: {type: String, required: true},
//   likes: {type: Number, default: 0},
//   liked: {type:Boolean, default: false},
//   dislikes: {type: Number, default: 0},
//   disliked: {type:Boolean, default: false}
// }, {collection: 'tuits'});
//
// export default tuitsSchema;




// const mongoose = require('mongoose');
// const schema = mongoose.Schema({
//   topic: String,
//   posted: {type: Date, defaultValue: Date.now()},
//   userName: String,
//   verified: {type: Boolean, defaultValue: false},
//   liked: {type: Boolean, defaultValue: false},
//   handle: String,
//   title: String,
//   tuit: String,
//   attachment: {
//     image: String
//   },
//   time: String,
//   "logo-image": String,
//   "avatar-image": String,
//   stats: {
//     comments: {type: Number, defaultValue: 0},
//     retweets: {type: Number, defaultValue: 0},
//     likes: {type: Number, defaultValue: 0}
//   }
// }, {collection: 'tuits'});
//
// module.exports = schema;