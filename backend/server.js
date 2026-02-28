require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB().then(async () => {
  // seed company profile and admin user if not exists
  const Company = require('./models/Company');
  const User = require('./models/User');
  const bcrypt = require('bcryptjs');
  try {
    const existing = await Company.findOne();
    if (!existing) {
      await Company.create({
        name: 'CHINKI TRADING COMPANY',
        address: 'B-162 Green Field Colony Faridabad Haryana India 121010',
        gstin: '06KRGPS2238B1ZS',
        email: 'chinkitrandingcompany@gmail.com',
        phone: '91-8475885152'
      });
      console.log('Default company profile seeded');
    }
    const adminEmail = 'rahul@chinki.local';
    let admin = await User.findOne({ email: adminEmail });
    if (!admin) {
      const hashed = await bcrypt.hash('Rahul@9675', 10);
      admin = await User.create({ name: 'Rahul Singh', email: adminEmail, password: hashed, role: 'Admin' });
      console.log('Default admin user created');
    }
  } catch (err) {
    console.error('Seeding error', err);
  }
});

// middleware
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/vendors', require('./routes/vendors'));
app.use('/api/products', require('./routes/products'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/purchases', require('./routes/purchases'));
app.use('/api/quotations', require('./routes/quotations'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/activity', require('./routes/activity'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
