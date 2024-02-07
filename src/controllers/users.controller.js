const {readAllUsers, readUser } = require("../models/users.model")

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

const getUser=((req, res)=>{
    const {id} = req.params;
    readUser(id, (err, results)=>{
        if(err) throw err
        res.send(results)
    })

    console.log("user getted")
    // res.send("user getted")

})

module.exports= {
    getAllUsers,
    getUser
}