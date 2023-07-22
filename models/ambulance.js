const mongoose = require("mongoose");


// This is Ambulance schema start here

const ambulanceSchema = new mongoose.Schema({
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
     
      kind: {
        type: String,
        require: true,
      },
  });
  
  //   Ambulance Model start here
  const Ambulance = mongoose.model("ambulances", ambulanceSchema);

  module.exports=Ambulance;