const registerstudent = require('../models/register');

const register = (req, res) => {
  const { email_id, password } = req.body;

  
  if (!email_id || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  registerstudent.register(email_id, password, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Email already registered' });
      }

      console.error('Register error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.affectedRows === 0) {
      return res.status(400).json({ error: 'Registration failed' });
    }

    return res.status(201).json({ message: 'Registration successful' });
  });
};

module.exports = register;
