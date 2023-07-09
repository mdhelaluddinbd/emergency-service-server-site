const BloodDonar = require("../models/blooddonar");

// ---------------------Blood Bank Post request--------------------------------------

exports.insertBloodDonar = async (req, res) => {
  try {
    const bloodDonarData = new BloodDonar({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      bloodgroup: req.body.bloodgroup,
    });

    const bloodDonarInfo = await bloodDonarData.save();
    res.status(201).send(bloodDonarInfo);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

//--------------------------- Blood Bank Get request----------------------------------
exports.bloodDonarGetReq = async (req, res) => {
  const blooddonargetData = await BloodDonar.find();
  try {
    if (blooddonargetData) {
      res.status(201).send({
        success: true,
        data: blooddonargetData,
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


    //---------------------------- Blood Donar Get request by id -------------------------
    exports.getReqByIdBloodDonar = async (req, res) => {
    
      try {
        const id = req.params.id;
        const bloodDonar = await BloodDonar.findOne({_id:id});
        res.send(bloodDonar);
       
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    };


    // -------------------------------Blood Donar Delete request-------------------------------
exports.deleteReqBloodDonar = async (req, res) => {
  try {
    const id = req.params.id;
    const bloodDonar = await BloodDonar.deleteOne({ _id: id });

    if (bloodDonar) {
      res.status(201).send({
        success: true,
        data: bloodDonar,
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


//--------------------- Blood Donar Put request---------------------------

exports.putReqBloodDonar = async (req, res) => {
  try {
    const id = req.params.id;
    const bloodDonar = await BloodDonar.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          bloodgroup: req.body.bloodgroup,
        },
      },
      { new: true }
    );

    if (bloodDonar) {
      res.status(201).send({
        success: true,
        data: bloodDonar,
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