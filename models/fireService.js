const mongoose = require("mongoose");


// This is Ambulance schema start here

const fireServiceSchema = new mongoose.Schema({
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
  
  //   Ambulance Model start here
  const FireService = mongoose.model("fireservice", fireServiceSchema);

  module.exports=FireService;