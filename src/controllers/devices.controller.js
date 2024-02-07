const {readAllDevices, readDevice } = require("../models/devices.model")

const getAllDevices=((req, res)=>{
    readAllDevices((err, results)=>{
        if(err)
        console.log( err)
        // console.error("cannot work in controller", err)
    res.send(results)
    })

    

    // res.send()
    console.log("working well")

})

const getDevice=((req, res)=>{
    const {id} = req.params;
    readDevice(id, (err, results)=>{
        if(err) throw err
        res.send(results)
    })

    console.log("Device getted")
    // res.send("Device getted")

})

module.exports= {
    getAllDevices,
    getDevice
}