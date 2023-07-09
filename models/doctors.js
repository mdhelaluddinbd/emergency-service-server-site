const mongoose = require("mongoose");


// This is doctors schema start here

const doctorsschema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
    name: {
      type: String,
      require: true,
    },
    degree: {
      type: String,
      require: true, 
    },
    specialty: {
      type: String,
      require: true,
    },
    workplace: {
      type: String,
      require: true,
    },

    chamber: {
        type: String,
        require: true,
      },
      contract: {
        type: String,
        require: true,
      },
  });
  
  //   doctros Model start here
  const Doctors = mongoose.model("doctors", doctorsschema);

  module.exports=Doctors;