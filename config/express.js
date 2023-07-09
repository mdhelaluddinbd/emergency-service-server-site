const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const apiRouter = require("../routes/api.routes");

// Database is connection here
const databaseURI = process.env.DB_URI || require("./config").db.uri;
mongoose.Promise = global.Promise;

mongoose
  .connect(databaseURI)
  .then(() => {
    console.log("============Database is connected===============");
  })
  .catch((error) => {
    console.log("============Database is not connected===============");
    console.log(error);
    process.exit(1);
  });

module.exports.init = () => {
  const app = express();

  // Using Middlewares
  app.use(cors());
  app.use(express.json());

  //Using api route
  app.use("/api", apiRouter);

  //----------------using admin route-----------------
  

  if (process.env.NODE_ENV === "production") {
    // server any static file
    app.use(express.static(path.join(__dirname, "../../front-end/bulid")));

    // Handel react routing
    app.get("/*", (req, res) => {
      res.send(path.join(__dirname, "../../front-end/build", "index.html"));
    });
  }

  return app;
};
