const db_connection = require("../config/db")




const readAllUsers =(callback)=>{
    const sql = `SELECT * FROM users `
    db_connection.query(sql, (error, results)=>{
        if(error) callback(error, null);
        callback(null, results)
    });
    // db_connection.end()
    // ceci empeche de lancer la requete deux fois de suite a moins de se reconnecter au debut de chaque requete




}


module.exports={
    readAllUsers
}