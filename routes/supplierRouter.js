const express = require('express');
const router = express.Router();
const supplierController = require('../controller/supplierController');

// Get all suppliers
router.get('/suppliers', supplierController.getAllSuppliers);

// Create a new supplier
router.post('/suppliers', supplierController.createSupplier);

// Update an existing supplier
router.put('/suppliers/:id', supplierController.updateSupplier);

// Delete a supplier
router.delete('/suppliers/:id', supplierController.deleteSupplier);

module.exports = router;
