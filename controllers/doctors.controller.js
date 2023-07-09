
const Doctors=require('../models/doctors')

// ---------------------Doctors Post request--------------------------------------

exports.insertDoctors = async (req, res) => {
    try {
      const doctorsData = new Doctors({
        id: req.body.id,
        name:req.body.name,
        degree:req.body.degree, 
        specialty:req.body.specialty,
        workplace:req.body.workplace,
        chamber:req.body.chamber,
        contract:req.body.contract,
        
      });
  
      const doctorsinfo = await doctorsData.save();
      res.status(201).send(doctorsinfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };


  
  
  // --------------------------Doctors Get request-----------------------
  exports.doctors = async (req, res) => {
      const doctors = await Doctors.find();
      try {
        if (doctors) {
          res.status(201).send({
            success: true,
            data: doctors,
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


      //----------------------- Doctors Get request by Id -------------------------
  exports.getReqByIdDoctors = async (req, res) => {
    const doctors = await Doctors.find();
    try {
      const id = req.params.id;
      const doctors = await Doctors.findOne({_id:id});
      res.send(doctors)
     
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };



  // -------------------------------Doctors Delete request-------------------------------
exports.deleteDoctors = async (req, res) => {
  try {
    const id = req.params.id;
    const doctors = await Doctors.deleteOne({ _id: id });

    if (doctors) {
      res.status(201).send({
        success: true,
        data: doctors,
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



//--------------------- Hospitals Put request---------------------------

exports.putDoctors = async (req, res) => {
  try {
    const id = req.params.id;
    const doctors = await Doctors.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          degree: req.body.degree,
          specialty: req.body.specialty,
          workplace: req.body.workplace,
          chamber: req.body.chamber,
          contract: req.body.contract,
        },
      },
      { new: true }
    );

    if (doctors) {
      res.status(201).send({
        success: true,
        data: doctors,
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