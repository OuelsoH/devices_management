const db_connection = require("../config/db");
const customError = require("../helpers/errorHandler")

const readAllDevices = (callback) => {
  const sql = `SELECT devices.nom, JSON_ARRAYAGG(JSON_OBJECT('nom', users.nom, 'email', users.email)) AS proprietaire  
  FROM devices 
  RIGHT JOIN users
  ON devices.users_id = users.id 

  GROUP BY devices.id
  ORDER BY users.id
  `;
  // const id = req.params.id
  db_connection.query(sql, (error, results) => {
    if (error) callback(error, null);
    callback(null, results);
  });
  // db_connection.end()
  // ceci empeche de lancer la requete deux fois de suite a moins de se reconnecter au debut de chaque requete
};

const readDevice = (id, callback) => {
  const sql = "SELECT * FROM `devices` WHERE `id` = ?";
  db_connection.query(sql, [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  readAllDevices,
  readDevice,
};
