const mongoose = require("mongoose");

// This is Ambulance schema start here

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
  role:{
    type:String,
    require:true
  }
});

//   Ambulance Model start here
const Users = mongoose.model("users", usersSchema);

module.exports = Users;
