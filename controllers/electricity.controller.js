
const Electricity=require('../models/electricity');

// ---------------------Blood Bank Post request--------------------------------------

exports.insertElectricity = async (req, res) => {
    try {
      const electricityData = new Electricity({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        location:req.body.location,
       
    
        
      });
  
      const electricityInfo = await electricityData.save();
      res.status(201).send(electricityInfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };
  
  //-------------------------------- Electricity Get request-------------------------------
  exports.GetReqElectricity = async (req, res) => {
      const electricity = await Electricity.find();
      try {
        if (electricity) {
          res.status(201).send({
            success: true,
            data: electricity,
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


    //---------------------------- electricity Get request by Id  ---------------------------
exports.getReqByIdElectricity = async (req, res) => {
  
  try {
    const id = req.params.id;
    const electricity = await Electricity.findOne({_id:id});
    res.send(electricity)
   
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};



// -------------------------------electricity Delete request-------------------------------
exports.deleteElectricity = async (req, res) => {
  try {
    const id = req.params.id;
    const electricity = await Electricity.deleteOne({ _id: id });

    if (electricity) {
      res.status(201).send({
        success: true,
        data: electricity,
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



//--------------------- electricity Put request---------------------------

exports.putReqElectricity = async (req, res) => {
  try {
    const id = req.params.id;
    const electricity = await Electricity.findByIdAndUpdate(
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

    if (electricity) {
      res.status(201).send({
        success: true,
        data: electricity,
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
