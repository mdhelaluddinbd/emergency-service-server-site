
const BloodBank=require('../models/bloodBank');

// ---------------------Blood Bank Post request--------------------------------------

exports.insertBloodBank = async (req, res) => {
    try {
      const bloodBankData = new BloodBank({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        location:req.body.location,
        
    
        
      });
  
      const bloodBankInfo = await bloodBankData.save();
      res.status(201).send(bloodBankInfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };
  
  //---------------------------- Blood Bank Get request-------------------------
  exports.bloodBank = async (req, res) => {
      const bloodbank = await BloodBank.find();
      try {
        if (bloodbank) {
          res.status(201).send({
            success: true,
            data: bloodbank,
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



    //---------------------------- Blood Bank Get request by id -------------------------
  exports.getReqByIdBloodBank = async (req, res) => {
    
    try {
      const id = req.params.id;
      const bloodBank = await BloodBank.findOne({_id:id});
      res.send(bloodBank);
     
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };


  // -------------------------------Blood Bank Delete request-------------------------------
exports.deleteReqBloodBank = async (req, res) => {
  try {
    const id = req.params.id;
    const bloodBank = await BloodBank.deleteOne({ _id: id });

    if (bloodBank) {
      res.status(201).send({
        success: true,
        data: bloodBank,
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


//--------------------- Blood Bank Put request---------------------------

exports.putReqBloodBank = async (req, res) => {
  try {
    const id = req.params.id;
    const bloodBank = await BloodBank.findByIdAndUpdate(
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

    if (bloodBank) {
      res.status(201).send({
        success: true,
        data: bloodBank,
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