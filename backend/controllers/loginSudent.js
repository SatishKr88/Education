const login = require('../models/login');
const verifyRecaptcha = require('../recapture'); 

const logincredential = async (req, res) => {
  const { email_id, password, recaptchaToken } = req.body;

  
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }

  
  login.logincredential(email_id, password, (err, result) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!result) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: result });
  });
};

module.exports = logincredential;
