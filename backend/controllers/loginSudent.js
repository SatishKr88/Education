const login = require('../models/login');
const verifyRecaptcha = require('../recapture'); 

const logincredential = async (req, res) => {
  try {
    const { email_id, password, recaptchaToken } = req.body;

    // if (!email_id || !password || !recaptchaToken) {
    //   return res.status(400).json({ error: 'Email, password, and reCAPTCHA are required' });
    // }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }


    login.logincredential(email_id, password, (err, user) => {
      if (err) {
        console.error('Login error:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

     
      return res.status(200).json({
        message: 'Login successful',
        user: {
          id: user.id,
          email_id: user.email_id
         
        }
      });
    });

  } catch (error) {
    console.error('Unexpected login error:', error);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
};

module.exports = logincredential;
