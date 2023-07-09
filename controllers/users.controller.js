
const Users=require('../models/users');

// ---------------------User Post request--------------------------------------

exports.postReqUser = async (req, res) => {
    try {
      const userData = new Users({
        name:req.body.name,
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
       
      });
  
      const userInfo = await userData.save();
      res.status(201).send(userInfo);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };
  
  // ------------------------user Get request-----------------------------
  exports.GetReqUser = async (req, res) => {
      const user = await Users.find();
      try {
        if (user) {
          res.status(201).send({
            success: true,
            data: user,
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



            //---------------------------- user Get request by Id  ---------------------------
exports.getReqByIdUser = async (req, res) => {
  
  try {
    const id = req.params.id;
    const user = await Users.findOne({_id:id});
    res.send(user)
   
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


            //---------------------------- user Get request by Id  ---------------------------
            exports.getReqByEmail = async (req, res) => {
  
              try {
                const email = req.params.email;
                const user = await Users.findOne({email:email});
                const isAdmin = user.role === 'Admin';
                res.send({ Admin: isAdmin });
               
              } catch (error) {
                res.status(400).send({ message: error.message });
              }
            };


// -------------------------------PoliceStation Delete request-------------------------------
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.deleteOne({ _id: id });

    if (user) {
      res.status(201).send({
        success: true,
        data: user,
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

exports.putRequserUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name:req.body.name,
          userName:req.body.userName,
          email:req.body.email,
          password:req.body.password,
          role:req.body.role
        },
      },
      { new: true }
    );

    if (users) {
      res.status(201).send({
        success: true,
        data: users,
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