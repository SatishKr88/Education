const express = require('express');
const router = express.Router();
const login = require('../controllers/loginSudent');
const register=require('../controllers/registerstudent');
router.post('/login', login);
router.post('/register', register);
module.exports = router;
