const categories = require('../models/category');

exports.getAllCategories = async (req, res, next) => {
    try {
        const category = await categories.findAll();
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Error'});
    }
}