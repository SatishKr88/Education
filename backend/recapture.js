const axios = require('axios');
const RECAPTCHA_SECRET_KEY ="6LeClmcrAAAAALIVVFhnjZ_7c8vyHGMZT2uiRG8t";

async function verifyRecaptcha(token) {
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    return response.data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

module.exports = verifyRecaptcha;
