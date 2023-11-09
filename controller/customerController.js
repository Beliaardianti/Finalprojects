const { Customer } = require('../models/customer');

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing customer
exports.updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const updatedCustomer = await Customer.update(req.body, { where: { id_customer: customerId } });
    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    await Customer.destroy({ where: { id_customer: customerId } });
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
