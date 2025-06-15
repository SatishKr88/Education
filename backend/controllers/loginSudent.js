const login = require('../models/login');

const logincredential = (req, res) => {
  const { email_id, password } = req.body;
  login.logincredential(email_id, password, (err, result) => {

    if (err) {
      console.error('error', err);
      return res.status(500).json({ error: "failed" });
    }
    res.status(200).json({ message: 'Login successful'});

  });
};

module.exports = logincredential;
