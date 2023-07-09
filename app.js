require('dotenv').config();
const express=require('./config/express');
const app=express.init();


const PORT =process.env.PORT || 5000;
app.listen(PORT,  () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  
});






