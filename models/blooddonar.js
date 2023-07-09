const mongoose = require("mongoose");


// This is Blood Bank schema start here

const bloodDonarSchema = new mongoose.Schema({
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
      bloodgroup: {
        type: String,
        require: true,
      },
  });
  
  //   Blood Bank Model start here
  const BloodDonar = mongoose.model("blood-donar", bloodDonarSchema);

  module.exports=BloodDonar;