
const Ambulance=require('../models/ambulance');

// ---------------------Blood Bank Post request--------------------------------------

exports.insertAmbulance = async (req, res) => {
    try {
      const ambulanceData = new Ambulance({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        kind:req.body.kind,
       
    
        
      });
  
      const ambulanceInfo = await ambulanceData.save();
      res.status(201).send(ambulanceInfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };
  
  // --------------------------------- Get request-------------------------------------------
  exports.GetReqAmbulance = async (req, res) => {
      const ambulance = await Ambulance.find();
      try {
        if (ambulance) {
          res.status(201).send({
            success: true,
            data: ambulance,
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



     //---------------------------- Ambulance Get request by id -------------------------
     exports.getReqByIdAmbulance = async (req, res) => {
    
      try {
        const id = req.params.id;
        const ambulance = await Ambulance.findOne({_id:id});
        res.send(ambulance);
       
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    };



     // -------------------------------Blood Donar Delete request-------------------------------
exports.deleteReqAmbulance = async (req, res) => {
  try {
    const id = req.params.id;
    const ambulance = await Ambulance.deleteOne({ _id: id });

    if (ambulance) {
      res.status(201).send({
        success: true,
        data: ambulance,
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




//--------------------- Ambulance Put request---------------------------

exports.putReqAmbulance = async (req, res) => {
  try {
    const id = req.params.id;
    const ambulance = await Ambulance.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          kind: req.body.kind,
        },
      },
      { new: true }
    );

    if (ambulance) {
      res.status(201).send({
        success: true,
        data: ambulance,
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