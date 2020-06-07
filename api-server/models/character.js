const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  created: String,
  episode: Array,
  gender: String,
  id: Number,
  image: String,
  location: Object,
  name: String,
  origin: Object,
  species: String,
  status: String,
  type: String,
  url: String
});
characterSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Character", characterSchema);
