
const FireService=require('../models/fireService');

// ---------------------Blood Bank Post request--------------------------------------

exports.insertFireService = async (req, res) => {
    try {
      const fireServiceData = new FireService({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        location:req.body.location
       
      });
  
      const fireServiceInfo = await fireServiceData.save();
      res.status(201).send(fireServiceInfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };
  
  // -------------------------fire service Get request-------------------------
  exports.GetReqFireService = async (req, res) => {
      const fireService = await FireService.find();
      try {
        if (fireService) {
          res.status(201).send({
            success: true,
            data: fireService,
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


        //---------------------------- fire service Get request by Id  ---------------------------
exports.getReqByIdFireService = async (req, res) => {
  
  try {
    const id = req.params.id;
    const fireservice = await FireService.findOne({_id:id});
    res.send(fireservice)
   
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// -------------------------------fire service Delete request-------------------------------
exports.deleteFireService = async (req, res) => {
  try {
    const id = req.params.id;
    const fireservice = await FireService.deleteOne({ _id: id });

    if (fireservice) {
      res.status(201).send({
        success: true,
        data: fireservice,
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



//--------------------- fire service Put request---------------------------

exports.putReqFireService = async (req, res) => {
  try {
    const id = req.params.id;
    const fireService = await FireService.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          location: req.body.location
        },
      },
      { new: true }
    );

    if (fireService) {
      res.status(201).send({
        success: true,
        data: fireService,
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