const path = require('path');

const express = require('express');

const userController = require('../controllers/expuser');

const router = express.Router();
router.post('/user/add-user', userController.postuser);
module.exports=router;