const con = require('../config/db');
const bcrypt = require('bcrypt');

const logincredential = (email_id, password, callback) => {
  const query = "SELECT * FROM userloginregister WHERE email_id = ?";

  con.query(query, [email_id], (err, result) => {
    if (err) {
       console.error('Database query error:', err);
      return callback(err);
    }

    if (result.length === 0) {
      console.warn('No user found with provided email.');
      return callback(null, null); 
    }

    const user = result[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return callback(err);
      }

      if (!isMatch) {
        
        return callback(null, null); 
      }
      return callback(null, user);
    });
  });
};

module.exports = { logincredential };
