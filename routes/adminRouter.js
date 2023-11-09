const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Rute untuk mendapatkan semua admin
router.get('/admins', adminController.getAllAdmins);

// Rute untuk membuat admin baru
router.post('/admins', adminController.createAdmin);

// Rute untuk mendapatkan detail admin berdasarkan ID
router.get('/admins/:id', adminController.getAdminById);

// Rute untuk mengupdate admin berdasarkan ID
router.put('/admins/:id', adminController.updateAdmin);

// Rute untuk menghapus admin berdasarkan ID
router.delete('/admins/:id', adminController.deleteAdmin);

module.exports = router;
