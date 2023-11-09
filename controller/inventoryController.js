const { Inventory } = require('../models/inventory');

exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.json(inventories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Tambahkan fungsi CRUD lainnya sesuai kebutuhan
