

const { Inventory, Category, Transaction } = require('../models');

exports.getAllInventories = async (req, res, next) => {
    try {
        const inventories = await Inventory.findAll({
            include: [Category, Transaction]
        });
        res.json(inventories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.getInventoryById = async (req, res, next) => {
    try {
        const inventoryId = req.params.id;
        const inventory = await Inventory.findByPk(inventoryId, {
            include: [Category, Transaction]
        });

        if (!inventory) {
            res.status(404).json({ message: 'Inventory not found' });
        } else {
            res.json(inventory);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.createInventory = async (req, res, next) => {
    try {
        const newInventory = await Inventory.create(req.body);
        res.status(201).json(newInventory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.updateInventory = async (req, res, next) => {
    try {
        const inventoryId = req.params.id;
        const updatedInventory = await Inventory.update(req.body, {
            where: { id_inventory: inventoryId }
        });
        res.json(updatedInventory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.deleteInventory = async (req, res, next) => {
    try {
        const inventoryId = req.params.id;
        await Inventory.destroy({
            where: { id_inventory: inventoryId }
        });
        res.json({ message: 'Inventory deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
