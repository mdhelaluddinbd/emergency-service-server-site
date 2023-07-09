const mongoose = require("mongoose");


// This is Ambulance schema start here

const electricitySchema = new mongoose.Schema({
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
  const Electricity = mongoose.model("electricity", electricitySchema);

  module.exports=Electricity;