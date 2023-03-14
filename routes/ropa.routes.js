const express=require("express");
const RopaController= require("../controller/ropa.controller");

const api=express.Router();

api.post("/ropa",ropaController.createRopa);
api.get("/ropa",ropaController.getRopa);
api.delete("/ropa/:id",ropaController.deleteRopa);
api.patch("/ropa/:id",ropaController.updateRopa);
api.get("/Ropa/:id",ropaController.getRopa);


module.exports=api;