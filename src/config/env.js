require("dotenv").config()
const env = {
    APP_NAME:process.env.APP_NAME,
    PORT: process.env.PORT,
    HOSTNAME:process.env.HOSTNAME,
    DB_HOST:process.env.DB_HOST,
    DB_USER:process.env.DB_USER,
    DB_NAME:process.env.DB_NAME,
    DB_PASSWORD:process.env.DB_PASSWORD




}
console.log(process.env.HOSTNAME)
module.exports =env