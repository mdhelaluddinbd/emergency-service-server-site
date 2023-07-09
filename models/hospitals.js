const mongoose = require("mongoose");

// This is hospital schema start here

const hospitalschema = new mongoose.Schema({
 
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  address: { 
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
});

//   Hospital Model start here
const Hospitals = mongoose.model("hospitals", hospitalschema);


// Here export this module 
module.exports = Hospitals;
