const mongoose = require("mongoose");


// This is police station schema start here

const policeStationSchema = new mongoose.Schema({
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
  
  //   police station Model start here
  const PoliceStation = mongoose.model("police-stations", policeStationSchema);

  module.exports=PoliceStation;