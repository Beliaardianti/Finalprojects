const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');  
require('dotenv').config();

const adminRouter = require('./routes/adminRouter')
const categoryRouter = require('./routes/categoryRouter')
const customerRouter = require('./routes/customerRouter')
const supplierRouter = require('./routes/supplierRouter')
const transactionRouter = require('./routes/transactionRouter')
const inventoryRouter = require('./routes/inventory')

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_DEVELOPMENT,
  host: process.env.DB_HOST
});

// Menyinkronkan model dengan database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected and models synchronized.');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api', customerRouter);
app.use('/api', categoryRouter);
app.use('/api', adminRouter);
app.use('/api', supplierRouter);
app.use('/api', inventoryRouter);
app.use('/api', transactionRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
