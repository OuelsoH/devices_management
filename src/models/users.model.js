const db_connection = require("../config/db");

const readAllUsers = (callback) => {
  const sql = `SELECT * FROM users RIGHT JOIN devices ON users.prenom = devices.id `;
  // const id = req.params.id
  db_connection.query(sql, (error, results) => {
    if (error) callback(error, null);
    callback(null, results);
  });
  // db_connection.end()
  // ceci empeche de lancer la requete deux fois de suite a moins de se reconnecter au debut de chaque requete
};

const readUser = (id, callback) => {
  const sql = "SELECT * FROM `users` WHERE `id` = ?";
  db_connection.query(sql, [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  readAllUsers,
  readUser,
};
