const Hospitals = require("../models/hospitals");

//--------------------- Hospitals Post request-----------------------------

exports.insertHospitals = async (req, res) => {
  try {
    const hospitalData = new Hospitals({
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      location: req.body.location,
    });

    const hospitalinfo = await hospitalData.save();
    res.status(201).send(hospitalinfo);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

//---------------------------- Hospitals Get request----------------------------
exports.hospitals = async (req, res) => {
  const query = req.query.address || '';
  console.log(query);
  const hospitals = await Hospitals.find({address: { $regex: query } });
  try {
    if (hospitals) {
      res.status(201).send({
        success: true,
        data: hospitals,
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

//---------------------------- Hospitals Get request by Id  ---------------------------
exports.getReqByIdhospitals = async (req, res) => {
  
  try {
    const id = req.params.id;
    const hospitals = await Hospitals.findOne({_id:id});
    res.send(hospitals)
   
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};



// -------------------------------Hospitals Delete request-------------------------------
exports.deleteHospitals = async (req, res) => {
  try {
    const id = req.params.id;
    const hospitals = await Hospitals.deleteOne({ _id: id });

    if (hospitals) {
      res.status(201).send({
        success: true,
        data: hospitals,
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

exports.putHospitals = async (req, res) => {
  try {
    const id = req.params.id;
    const hospitals = await Hospitals.findByIdAndUpdate(
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

    if (hospitals) {
      res.status(201).send({
        success: true,
        data: hospitals,
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
