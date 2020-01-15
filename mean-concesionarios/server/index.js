const express = require("express");
const app = express();
const morgan= require("morgan");
const {mongoose}=require("./database");
//Resposive for every port
//Settings
app.set("port",process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/seller",require("./routers/sellers.routes"));
app.use("/api/buyer",require("./routers/buyers.routes"));
app.use("/api/vehicles",require("./routers/vehicles.routes"));
app.use("/api/car",require("./routers/cars.routes"));
app.use("/api/motocycles",require("./routers/motocycles.routes"));
//Switch on Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto "+app.get("port"));
});