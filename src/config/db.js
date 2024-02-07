const mysql = require("mysql")
const env = require("./env")

const db_connection = mysql.createConnection({
    host:env.DB_HOST,
    user:env.DB_USER,
    database:env.DB_NAME,
    password:env.DB_PASSWORD



})

module.exports = db_connection;