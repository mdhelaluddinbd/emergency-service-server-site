const mongoose = require("mongoose");


// This is Blood Bank schema start here

const bloodBankSchema = new mongoose.Schema({
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
  
  //   Blood Bank Model start here
  const BloodBank = mongoose.model("blood-bank", bloodBankSchema);

  module.exports=BloodBank;