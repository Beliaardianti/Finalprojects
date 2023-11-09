const express = require('express');
const router = express.Router();
const adminController = require('../controller/categoryController');
router.get('/categories', adminController.getAllAdmins)

module.exports = router;
