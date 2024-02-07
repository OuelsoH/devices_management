const {readAllUsers} = require("../models/users.model")

const getAllUsers=((req, res)=>{
    readAllUsers((err, results)=>{
        if(err)
        console.log( err)
        // console.error("cannot work in controller", err)
    res.send(results)
    })

    

    // res.send()
    console.log("working well")

})

module.exports= {
    getAllUsers
}