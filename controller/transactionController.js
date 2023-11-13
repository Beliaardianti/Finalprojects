const { Transaction, Inventory, Admin, Supplier, Customer } = require('../models'); 

// Get all transactions
exports.getAllTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.findAll({
            include: [Inventory, Admin, Supplier, Customer]
        });
        res.json(transactions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
};

// Get transaction by ID
exports.getTransactionById = async (req, res, next) => {
    try {
        const transactionId = req.params.id;
        const transaction = await Transaction.findByPk(transactionId, {
            include: [Inventory, Admin, Supplier, Customer]
        });

        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            res.json(transaction);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
};

// Create a new transaction
exports.createTransaction = async (req, res, next) => {
    try {
        const newTransaction = await Transaction.create(req.body);
        res.status(201).json(newTransaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
};

// Update transaction by ID
exports.updateTransaction = async (req, res, next) => {
    try {
        const transactionId = req.params.id;
        const updatedTransaction = await Transaction.update(req.body, { where: { id_transaction: transactionId } });

        if (updatedTransaction[0] === 0) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            res.json({ message: 'Transaction updated successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
};

// Delete transaction by ID
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transactionId = req.params.id;
        const deletedTransaction = await Transaction.destroy({ where: { id_transaction: transactionId } });

        if (deletedTransaction === 0) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            res.json({ message: 'Transaction deleted successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
};
