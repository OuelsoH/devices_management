const express = require("express")
const { getAllDevices, getDevice } = require("../controllers/devices.controller")
const deviceRouter = express.Router()

deviceRouter.get("/",getAllDevices)
deviceRouter.get("/:id", getDevice)

module.exports= deviceRouter