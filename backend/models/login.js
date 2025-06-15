const con = require('../config/db');

const logincredential = (email_id, password, callback) => {
  const query = "SELECT * FROM userloginregister WHERE email_id = ? AND password = ?";

  con.query(query, [email_id, password], (err, result) => {
    if (err) {
      return callback(err);
    }
    if (result.length > 0) {
      return callback(null, result);
    }
    return callback(null, null);
  });
};

module.exports = { logincredential };
