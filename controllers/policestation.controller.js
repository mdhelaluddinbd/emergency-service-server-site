
const PoliceStation=require('../models/policeStation');

// ---------------------policeStation Post request--------------------------------------

exports.insertPoliceStation = async (req, res) => {
    try {
      const policeStationData = new PoliceStation({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        location:req.body.location,
       
      });
  
      const policeStationInfo = await policeStationData.save();
      res.status(201).send(policeStationInfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };
  
  // ------------------------policeStation Get request-----------------------------
  exports.GetReqPoliceStation = async (req, res) => {
      const policestation = await PoliceStation.find();
      try {
        if (policestation) {
          res.status(201).send({
            success: true,
            data: policestation,
          });
        } else {
          res.status(404).send({
            success: false,
            message: "Data not found",
          });
        }
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    };



            //---------------------------- PoliceStation Get request by Id  ---------------------------
exports.getReqByIdPoliceStation = async (req, res) => {
  
  try {
    const id = req.params.id;
    const policeStation = await PoliceStation.findOne({_id:id});
    res.send(policeStation)
   
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


// -------------------------------PoliceStation Delete request-------------------------------
exports.deletePoliceStation = async (req, res) => {
  try {
    const id = req.params.id;
    const policeStation = await PoliceStation.deleteOne({ _id: id });

    if (policeStation) {
      res.status(201).send({
        success: true,
        data: policeStation,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};




//--------------------- policeStation Put request---------------------------

exports.putReqPoliceStation = async (req, res) => {
  try {
    const id = req.params.id;
    const policeStation = await PoliceStation.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          location: req.body.location,
        },
      },
      { new: true }
    );

    if (policeStation) {
      res.status(201).send({
        success: true,
        data: policeStation,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};