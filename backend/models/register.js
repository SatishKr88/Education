const con = require('../config/db');
const bcrypt = require('bcrypt');

const register = (email_id, password, callback) => {
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      return callback(err);
    }
  const sql = "INSERT INTO userloginregister (email_id, password) VALUES (?, ?)";
  con.query(sql, [email_id, hashedPassword], (err, result) => {
    if (err) {
      return callback(err);
    }
    return callback(null, result); 
  });
});
};

module.exports = { register };
