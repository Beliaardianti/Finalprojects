const { Supplier } = require('../models/supplier');

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new supplier
exports.createSupplier = async (req, res) => {
  try {
    const newSupplier = await Supplier.create(req.body);
    res.status(201).json(newSupplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing supplier
exports.updateSupplier = async (req, res) => {
  const supplierId = req.params.id;
  try {
    const updatedSupplier = await Supplier.update(req.body, { where: { id_supplier: supplierId } });
    res.json(updatedSupplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
  const supplierId = req.params.id;
  try {
    await Supplier.destroy({ where: { id_supplier: supplierId } });
    res.json({ message: 'Supplier deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
