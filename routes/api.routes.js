const express=require('express');
const router=express.Router();
const Controller=require('../controllers/hospitals.controller');
const doctorsController=require('../controllers/doctors.controller');
const bloodBankController=require('../controllers/bloodBank.controller');
const bloodDonarController=require('../controllers/blooddonar.controller');
const ambulanceController=require('../controllers/ambulance.controller');
const electricityController=require('../controllers/electricity.controller');
const fireserviceController=require('../controllers/fireservice.controller');
const policeStationConroller=require('../controllers/policestation.controller');
const userController=require('../../back-end/controllers/users.controller');



// ---------------------This is hospital routes ----------------------------
const getReqHospitals=Controller.hospitals;
const getByIdReqHospitals=Controller.getReqByIdhospitals;
const postReqHospitals=Controller.insertHospitals;
const deleteReqController=Controller.deleteHospitals;
const putReqController=Controller.putHospitals;

router.get('/hospitals',getReqHospitals);
router.get('/hospitals/:id',getByIdReqHospitals);
router.post('/hospitals',postReqHospitals);
router.delete('/hospitals/:id',deleteReqController);
router.put('/hospitals/:id',putReqController);
// ---------------------This is doctors routes ---------------------------- 
const getReqDoctors=doctorsController.doctors;
const getByIdReqDoctors=doctorsController.getReqByIdDoctors;
const postReqDoctors=doctorsController.insertDoctors;
const deleteReqDoctors=doctorsController.deleteDoctors;
const putReqDoctors=doctorsController.putDoctors;

router.get('/doctors',getReqDoctors);
router.get('/doctors/:id',getByIdReqDoctors);
router.post('/doctors',postReqDoctors);
router.delete('/doctors/:id',deleteReqDoctors);
router.put('/doctors/:id',putReqDoctors);


// ---------------------This is blood bank routes ----------------------------
const getReqbloodbank=bloodBankController.bloodBank;
const postReqbloodbank=bloodBankController.insertBloodBank;
 
router.get('/bloodbanks',getReqbloodbank);
router.get('/bloodbanks/:id',bloodBankController.getReqByIdBloodBank);
router.post('/bloodbanks',postReqbloodbank);
router.delete('/bloodbanks/:id',bloodBankController.deleteReqBloodBank);
router.put('/bloodbanks/:id',bloodBankController.putReqBloodBank);


// ---------------------This is blood bonar routes ----------------------------
const getReqblooddonar=bloodDonarController.bloodDonarGetReq;
const postReqblooddonar=bloodDonarController.insertBloodDonar;

router.get('/blooddonars',getReqblooddonar);
router.get('/blooddonars/:id',bloodDonarController.getReqByIdBloodDonar);
router.post('/blooddonars',postReqblooddonar);
router.delete('/blooddonars/:id',bloodDonarController.deleteReqBloodDonar);
router.put('/blooddonars/:id',bloodDonarController.putReqBloodDonar);

// ---------------------This is ambulance routes ----------------------------
const getreqambulance=ambulanceController.GetReqAmbulance;
const postreqambulance=ambulanceController.insertAmbulance;

router.get('/ambulances',getreqambulance);
router.get('/ambulances/:id',ambulanceController.getReqByIdAmbulance);
router.post('/ambulances',postreqambulance);
router.delete('/ambulances/:id',ambulanceController.deleteReqAmbulance);
router.put('/ambulances/:id',ambulanceController.putReqAmbulance);

// ---------------------This is Electricity routes ----------------------------
const getreqelectricity=electricityController.GetReqElectricity;
const postreqelectricity=electricityController.insertElectricity;

router.get('/electricity',getreqelectricity);
router.get('/electricity/:id',electricityController.getReqByIdElectricity);
router.post('/electricity',postreqelectricity);
router.delete('/electricity/:id',electricityController.deleteElectricity);
router.put('/electricity/:id',electricityController.putReqElectricity);


// ---------------------This is fire service routes ----------------------------
const getreqfireservice=fireserviceController.GetReqFireService;
const postreqfireservice=fireserviceController.insertFireService;

router.get('/fireservice',getreqfireservice);
router.get('/fireservice/:id',fireserviceController.getReqByIdFireService);
router.post('/fireservice',postreqfireservice);
router.delete('/fireservice/:id',fireserviceController.deleteFireService);
router.put('/fireservice/:id',fireserviceController.putReqFireService);


// ---------------------This is police station routes ----------------------------
const getreqpolicestation=policeStationConroller.GetReqPoliceStation;
const postreqpolicestation=policeStationConroller.insertPoliceStation;

router.get('/policestation',getreqpolicestation);
router.get('/policestation/:id',policeStationConroller.getReqByIdPoliceStation);
router.post('/policestation',postreqpolicestation);
router.delete('/policestation/:id',policeStationConroller.deletePoliceStation);
router.put('/policestation/:id',policeStationConroller.putReqPoliceStation);

// ---------------------This is Users routes ----------------------------
router.get('/users',userController.GetReqUser);
router.get('/users/:id',userController.getReqByIdUser);
router.post('/users',userController.postReqUser);
router.delete('/users/:id',userController.deleteUser);
router.put('/users/:id',userController.putRequserUser);


//....................
router.get('/admin/:email',userController.getReqByEmail);





module.exports=router;