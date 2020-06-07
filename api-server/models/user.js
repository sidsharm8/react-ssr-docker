const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 email: String,
 password: String,
 sortPreference : String
});

userSchema.methods.verifyPassword = async function(password){
  const match = await bcrypt.compare(password, this.password);
  return match;
};
module.exports = mongoose.model("User", userSchema);
