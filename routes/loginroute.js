const express = require('express');
const router = express.Router();
const {signup,loginUser,jwtToken} = require('../controllers/userController.js');
router.route('/signup').post(signup);
router.route('/login').post(loginUser);
router.route('/jwt').post(jwtToken);

module.exports = router;